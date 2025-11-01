#!/bin/bash

# Setup script for Nginx reverse proxy with SSL
# This script will configure Nginx to proxy requests to your Next.js app

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_header() {
    echo -e "\n${BLUE}=== $1 ===${NC}\n"
}

print_header "Nginx Setup for trart.uk"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    print_error "Please run as root or with sudo"
    exit 1
fi

# Step 1: Install Nginx
print_header "Step 1: Installing Nginx"
if command -v nginx &> /dev/null; then
    print_status "Nginx is already installed"
    nginx -v
else
    print_status "Installing Nginx..."
    apt update
    apt install nginx -y
    print_status "Nginx installed successfully"
fi

# Step 2: Install Certbot for SSL
print_header "Step 2: Installing Certbot"
if command -v certbot &> /dev/null; then
    print_status "Certbot is already installed"
else
    print_status "Installing Certbot..."
    apt install certbot python3-certbot-nginx -y
    print_status "Certbot installed successfully"
fi

# Step 3: Create temporary Nginx config (without SSL)
print_header "Step 3: Creating Nginx Configuration"

cat > /etc/nginx/sites-available/trart << 'EOF'
# Temporary HTTP-only configuration for trart.uk
# This will be updated by Certbot with SSL

server {
    listen 80;
    listen [::]:80;
    server_name trart.uk www.trart.uk;

    # Logs
    access_log /var/log/nginx/trart.access.log;
    error_log /var/log/nginx/trart.error.log;

    # Max upload size
    client_max_body_size 10M;

    # Proxy to Next.js app
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $server_name;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Next.js static files caching
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=3600, immutable";
    }

    # Public assets caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
EOF

print_status "Nginx configuration created"

# Step 4: Enable the site
print_header "Step 4: Enabling Site"

# Remove default site if it exists
if [ -L /etc/nginx/sites-enabled/default ]; then
    rm /etc/nginx/sites-enabled/default
    print_status "Removed default site"
fi

# Create symlink
ln -sf /etc/nginx/sites-available/trart /etc/nginx/sites-enabled/
print_status "Site enabled"

# Step 5: Test Nginx configuration
print_header "Step 5: Testing Nginx Configuration"
if nginx -t; then
    print_status "Nginx configuration is valid"
else
    print_error "Nginx configuration has errors"
    exit 1
fi

# Step 6: Restart Nginx
print_header "Step 6: Restarting Nginx"
systemctl restart nginx
systemctl enable nginx
print_status "Nginx restarted and enabled"

# Step 7: Check if Docker container is running
print_header "Step 7: Checking Docker Container"
if docker ps | grep -q trart-website; then
    print_status "Docker container is running"
else
    print_warning "Docker container is not running. Start it with: docker compose up -d"
fi

# Step 8: Configure firewall
print_header "Step 8: Configuring Firewall"
if command -v ufw &> /dev/null; then
    ufw allow 'Nginx Full'
    print_status "Firewall configured for Nginx"
else
    print_warning "UFW not installed. Make sure ports 80 and 443 are open in GCP firewall"
fi

# Step 9: Instructions for SSL
print_header "Step 9: SSL Certificate Setup"
echo ""
echo "Your site is now accessible via HTTP at: http://trart.uk"
echo ""
echo "To enable HTTPS with Let's Encrypt SSL, run:"
echo ""
echo -e "${GREEN}sudo certbot --nginx -d trart.uk -d www.trart.uk${NC}"
echo ""
echo "Certbot will:"
echo "  1. Verify domain ownership"
echo "  2. Obtain SSL certificates"
echo "  3. Configure Nginx automatically"
echo "  4. Set up auto-renewal"
echo ""

# Step 10: DNS Check
print_header "Step 10: DNS Verification"
echo "Checking DNS records..."
echo ""

EXTERNAL_IP=$(curl -s ifconfig.me)
echo "Your VM External IP: $EXTERNAL_IP"
echo ""

echo "Checking trart.uk..."
DOMAIN_IP=$(dig +short trart.uk | tail -n1)
if [ "$DOMAIN_IP" == "$EXTERNAL_IP" ]; then
    print_status "trart.uk points to this server"
else
    print_warning "trart.uk points to: $DOMAIN_IP (Expected: $EXTERNAL_IP)"
    echo "  Update your DNS A record to point to: $EXTERNAL_IP"
fi

echo ""
echo "Checking www.trart.uk..."
WWW_IP=$(dig +short www.trart.uk | tail -n1)
if [ "$WWW_IP" == "$EXTERNAL_IP" ]; then
    print_status "www.trart.uk points to this server"
else
    print_warning "www.trart.uk points to: $WWW_IP (Expected: $EXTERNAL_IP)"
    echo "  Update your DNS A record to point to: $EXTERNAL_IP"
fi

echo ""
print_header "Setup Complete!"
echo ""
echo "Next steps:"
echo "  1. Ensure DNS records point to: $EXTERNAL_IP"
echo "  2. Wait for DNS propagation (can take up to 48 hours)"
echo "  3. Run: sudo certbot --nginx -d trart.uk -d www.trart.uk"
echo "  4. Test your site: http://trart.uk"
echo ""
echo "Useful commands:"
echo "  Check Nginx status:  sudo systemctl status nginx"
echo "  View Nginx logs:     sudo tail -f /var/log/nginx/trart.error.log"
echo "  Test Nginx config:   sudo nginx -t"
echo "  Restart Nginx:       sudo systemctl restart nginx"
echo ""

