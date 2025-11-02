#!/bin/bash

# Cloudflare Origin Certificate Setup Script for Website VM
# This script helps you set up the Cloudflare Origin Certificate

set -e

echo "=================================================="
echo "Cloudflare Origin Certificate Setup for trart.uk"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then 
    print_error "Please run this script with sudo"
    exit 1
fi

# Step 1: Create SSL directory
echo ""
echo "Step 1: Creating SSL certificate directory..."
mkdir -p /etc/ssl/cloudflare
chmod 700 /etc/ssl/cloudflare
print_success "SSL directory created at /etc/ssl/cloudflare"

# Step 2: Save certificate
echo ""
echo "Step 2: Setting up the Origin Certificate..."
print_warning "You will now paste your Cloudflare Origin Certificate"
print_info "The certificate should look like:"
echo "-----BEGIN CERTIFICATE-----"
echo "MIIEpDCCA4ygAwIBAgIUXXXXXXXXXX..."
echo "..."
echo "-----END CERTIFICATE-----"
echo ""

# Check if certificate already exists
if [ -f /etc/ssl/cloudflare/trart.uk.pem ]; then
    print_warning "Certificate file already exists at /etc/ssl/cloudflare/trart.uk.pem"
    read -p "Do you want to overwrite it? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Skipping certificate creation"
    else
        print_info "Opening editor to paste certificate..."
        nano /etc/ssl/cloudflare/trart.uk.pem
        chmod 644 /etc/ssl/cloudflare/trart.uk.pem
        print_success "Certificate saved and permissions set"
    fi
else
    print_info "Opening editor to paste certificate..."
    nano /etc/ssl/cloudflare/trart.uk.pem
    chmod 644 /etc/ssl/cloudflare/trart.uk.pem
    print_success "Certificate saved and permissions set"
fi

# Step 3: Save private key
echo ""
echo "Step 3: Setting up the Private Key..."
print_warning "You will now paste your Cloudflare Private Key"
print_info "The private key should look like:"
echo "-----BEGIN PRIVATE KEY-----"
echo "MIIEvQIBADANBgkqhkiG9w0BAQEF..."
echo "..."
echo "-----END PRIVATE KEY-----"
echo ""

# Check if key already exists
if [ -f /etc/ssl/cloudflare/trart.uk.key ]; then
    print_warning "Private key file already exists at /etc/ssl/cloudflare/trart.uk.key"
    read -p "Do you want to overwrite it? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Skipping private key creation"
    else
        print_info "Opening editor to paste private key..."
        nano /etc/ssl/cloudflare/trart.uk.key
        chmod 600 /etc/ssl/cloudflare/trart.uk.key
        print_success "Private key saved and permissions set"
    fi
else
    print_info "Opening editor to paste private key..."
    nano /etc/ssl/cloudflare/trart.uk.key
    chmod 600 /etc/ssl/cloudflare/trart.uk.key
    print_success "Private key saved and permissions set"
fi

# Set ownership
chown root:root /etc/ssl/cloudflare/trart.uk.*

# Step 4: Verify files
echo ""
echo "Step 4: Verifying certificate and key..."

if [ -f /etc/ssl/cloudflare/trart.uk.pem ] && [ -f /etc/ssl/cloudflare/trart.uk.key ]; then
    print_success "Both certificate and key files exist"
    
    # Verify certificate
    if openssl x509 -in /etc/ssl/cloudflare/trart.uk.pem -text -noout > /dev/null 2>&1; then
        print_success "Certificate is valid"
        echo ""
        echo "Certificate details:"
        openssl x509 -in /etc/ssl/cloudflare/trart.uk.pem -text -noout | grep -E "Subject:|Issuer:|Not After"
    else
        print_error "Certificate is invalid or malformed"
        exit 1
    fi
    
    # Verify private key
    if openssl rsa -in /etc/ssl/cloudflare/trart.uk.key -check -noout > /dev/null 2>&1; then
        print_success "Private key is valid"
    else
        print_error "Private key is invalid or malformed"
        exit 1
    fi
else
    print_error "Certificate or key file is missing"
    exit 1
fi

# Step 5: Backup current nginx config
echo ""
echo "Step 5: Backing up current nginx configuration..."
if [ -f /etc/nginx/sites-available/trart ]; then
    cp /etc/nginx/sites-available/trart /etc/nginx/sites-available/trart.backup.$(date +%Y%m%d_%H%M%S)
    print_success "Nginx configuration backed up"
else
    print_warning "No existing nginx configuration found at /etc/nginx/sites-available/trart"
fi

# Step 6: Update nginx configuration
echo ""
echo "Step 6: Updating nginx configuration..."
print_info "The new nginx configuration file should be uploaded to this server"
print_info "Expected location: ~/nginx-cloudflare-ssl.conf"
echo ""

if [ -f ~/nginx-cloudflare-ssl.conf ]; then
    cp ~/nginx-cloudflare-ssl.conf /etc/nginx/sites-available/trart
    print_success "Nginx configuration updated"
elif [ -f /tmp/nginx-cloudflare-ssl.conf ]; then
    cp /tmp/nginx-cloudflare-ssl.conf /etc/nginx/sites-available/trart
    print_success "Nginx configuration updated"
else
    print_warning "Configuration file not found. You'll need to manually update it."
    print_info "Run: sudo nano /etc/nginx/sites-available/trart"
    print_info "And paste the contents from nginx-cloudflare-ssl.conf"
    read -p "Press Enter when you're ready to continue..."
fi

# Ensure symlink exists
if [ ! -L /etc/nginx/sites-enabled/trart ]; then
    ln -s /etc/nginx/sites-available/trart /etc/nginx/sites-enabled/trart
    print_success "Enabled nginx site configuration"
fi

# Step 7: Test nginx configuration
echo ""
echo "Step 7: Testing nginx configuration..."
if nginx -t; then
    print_success "Nginx configuration test passed"
else
    print_error "Nginx configuration test failed"
    print_info "Please check the configuration and fix any errors"
    exit 1
fi

# Step 8: Reload nginx
echo ""
echo "Step 8: Reloading nginx..."
systemctl reload nginx
print_success "Nginx reloaded successfully"

# Step 9: Verify services
echo ""
echo "Step 9: Verifying services..."

# Check if nginx is listening on port 443
if netstat -tlnp | grep -q ":443"; then
    print_success "Nginx is listening on port 443 (HTTPS)"
else
    print_error "Nginx is not listening on port 443"
fi

# Check if nginx is listening on port 80
if netstat -tlnp | grep -q ":80"; then
    print_success "Nginx is listening on port 80 (HTTP)"
else
    print_warning "Nginx is not listening on port 80"
fi

# Check if Next.js is running on port 3000
if netstat -tlnp | grep -q ":3000"; then
    print_success "Next.js application is running on port 3000"
else
    print_warning "Next.js application is not running on port 3000"
    print_info "You may need to start your application"
fi

# Final instructions
echo ""
echo "=================================================="
echo "Setup Complete!"
echo "=================================================="
echo ""
print_success "Cloudflare Origin Certificate installed successfully"
echo ""
echo "Next steps:"
echo ""
echo "1. Go to Cloudflare Dashboard → SSL/TLS"
echo "2. Set SSL/TLS encryption mode to 'Full (strict)'"
echo "3. Wait 1-2 minutes for changes to propagate"
echo "4. Test your website:"
echo "   - https://trart.uk"
echo "   - https://www.trart.uk"
echo "   - https://n8n.trart.uk (should still work)"
echo ""
echo "If you encounter any issues, check the logs:"
echo "  sudo tail -f /var/log/nginx/trart.error.log"
echo ""
echo "To rollback if needed:"
echo "  sudo cp /etc/nginx/sites-available/trart.backup.* /etc/nginx/sites-available/trart"
echo "  sudo systemctl reload nginx"
echo ""
print_success "All done! Your website should now work with Full (strict) SSL/TLS mode."

