#!/bin/bash

# Setup script for Nginx with Cloudflare
# Use this when Cloudflare is managing your DNS and SSL

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

print_header "Nginx Setup for Cloudflare + trart.uk"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    print_error "Please run as root or with sudo"
    exit 1
fi

# Step 1: Check if Nginx is installed
print_header "Step 1: Checking Nginx"
if command -v nginx &> /dev/null; then
    print_status "Nginx is installed"
    nginx -v
else
    print_status "Installing Nginx..."
    apt update
    apt install nginx -y
    print_status "Nginx installed"
fi

# Step 2: Backup existing config if it exists
print_header "Step 2: Backing up existing config"
if [ -f /etc/nginx/sites-available/trart ]; then
    cp /etc/nginx/sites-available/trart /etc/nginx/sites-available/trart.backup.$(date +%Y%m%d-%H%M%S)
    print_status "Existing config backed up"
fi

# Step 3: Create Cloudflare-optimized Nginx config
print_header "Step 3: Creating Cloudflare-optimized config"

cat > /etc/nginx/sites-available/trart << 'EOF'
# Nginx configuration for trart.uk with Cloudflare
# Cloudflare handles SSL/TLS, Nginx proxies to Next.js on port 3000

server {
    listen 80;
    listen [::]:80;
    server_name trart.uk www.trart.uk;

    # Logs
    access_log /var/log/nginx/trart.access.log;
    error_log /var/log/nginx/trart.error.log;

    # Max upload size
    client_max_body_size 10M;

    # Get real visitor IP from Cloudflare
    set_real_ip_from 173.245.48.0/20;
    set_real_ip_from 103.21.244.0/22;
    set_real_ip_from 103.22.200.0/22;
    set_real_ip_from 103.31.4.0/22;
    set_real_ip_from 141.101.64.0/18;
    set_real_ip_from 108.162.192.0/18;
    set_real_ip_from 190.93.240.0/20;
    set_real_ip_from 188.114.96.0/20;
    set_real_ip_from 197.234.240.0/22;
    set_real_ip_from 198.41.128.0/17;
    set_real_ip_from 162.158.0.0/15;
    set_real_ip_from 104.16.0.0/13;
    set_real_ip_from 104.24.0.0/14;
    set_real_ip_from 172.64.0.0/13;
    set_real_ip_from 131.0.72.0/22;
    set_real_ip_from 2400:cb00::/32;
    set_real_ip_from 2606:4700::/32;
    set_real_ip_from 2803:f800::/32;
    set_real_ip_from 2405:b500::/32;
    set_real_ip_from 2405:8100::/32;
    set_real_ip_from 2a06:98c0::/29;
    set_real_ip_from 2c0f:f248::/32;
    real_ip_header CF-Connecting-IP;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy to Next.js app on port 3000
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
        proxy_set_header CF-Connecting-IP $http_cf_connecting_ip;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Next.js static files caching
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Public assets caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
EOF

print_status "Cloudflare-optimized config created"

# Step 4: Enable the site
print_header "Step 4: Enabling site"

# Remove default site if exists
if [ -L /etc/nginx/sites-enabled/default ]; then
    rm /etc/nginx/sites-enabled/default
    print_status "Removed default site"
fi

# Enable trart site
ln -sf /etc/nginx/sites-available/trart /etc/nginx/sites-enabled/
print_status "Site enabled"

# Step 5: Test Nginx config
print_header "Step 5: Testing Nginx configuration"
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

# Step 7: Check Docker container
print_header "Step 7: Checking Docker container"
if docker ps | grep -q trart-website; then
    print_status "Docker container is running on port 3000"
else
    print_warning "Docker container is not running"
    echo "Start it with: docker compose up -d"
fi

# Step 8: Test local connection
print_header "Step 8: Testing local connection"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    print_status "Application is responding on port 3000"
else
    print_warning "Application might not be responding correctly"
fi

# Step 9: Get server IP
print_header "Step 9: Server Information"
EXTERNAL_IP=$(curl -s ifconfig.me)
echo "Your server IP: $EXTERNAL_IP"
echo ""

# Step 10: Cloudflare instructions
print_header "Step 10: Cloudflare Configuration"
echo ""
echo "Your Nginx is now configured to work with Cloudflare!"
echo ""
echo -e "${BLUE}Cloudflare Dashboard Settings:${NC}"
echo ""
echo "1. Go to: https://dash.cloudflare.com"
echo "2. Select your domain: trart.uk"
echo ""
echo -e "${YELLOW}SSL/TLS Settings:${NC}"
echo "   → Go to SSL/TLS tab"
echo "   → Set encryption mode to: ${GREEN}Flexible${NC} or ${GREEN}Full${NC}"
echo "   → Flexible = Cloudflare↔Visitor (HTTPS), Cloudflare↔Server (HTTP)"
echo ""
echo -e "${YELLOW}DNS Settings:${NC}"
echo "   → Ensure A records exist:"
echo "     • trart.uk → $EXTERNAL_IP (Orange cloud = Proxied)"
echo "     • www.trart.uk → $EXTERNAL_IP (Orange cloud = Proxied)"
echo ""
echo -e "${YELLOW}Recommended Cloudflare Settings:${NC}"
echo "   → SSL/TLS: Flexible or Full"
echo "   → Always Use HTTPS: ON"
echo "   → Automatic HTTPS Rewrites: ON"
echo "   → Minimum TLS Version: 1.2"
echo ""

# Step 11: Test the site
print_header "Step 11: Testing your site"
echo ""
echo "Testing HTTP access..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://trart.uk 2>/dev/null || echo "000")
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    print_status "Site is accessible via HTTP (code: $HTTP_CODE)"
else
    print_warning "Site returned code: $HTTP_CODE"
fi

echo ""
echo "Testing HTTPS access..."
HTTPS_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://trart.uk 2>/dev/null || echo "000")
if [ "$HTTPS_CODE" = "200" ]; then
    print_status "Site is accessible via HTTPS!"
    echo ""
    echo -e "${GREEN}🎉 SUCCESS! Your site is live at https://trart.uk${NC}"
elif [ "$HTTPS_CODE" = "522" ] || [ "$HTTPS_CODE" = "523" ] || [ "$HTTPS_CODE" = "524" ]; then
    print_warning "Cloudflare can't reach your server (Error $HTTPS_CODE)"
    echo ""
    echo "Possible causes:"
    echo "  1. Nginx not running: sudo systemctl status nginx"
    echo "  2. Docker container not running: docker compose ps"
    echo "  3. Firewall blocking port 80: Check GCP firewall rules"
else
    print_warning "HTTPS returned code: $HTTPS_CODE"
    echo ""
    echo "If you just set this up, wait 1-2 minutes for Cloudflare to update"
fi

echo ""
print_header "Setup Complete!"
echo ""
echo "Useful commands:"
echo "  Check Nginx status:  sudo systemctl status nginx"
echo "  View Nginx logs:     sudo tail -f /var/log/nginx/trart.error.log"
echo "  Restart Nginx:       sudo systemctl restart nginx"
echo "  Check Docker:        docker compose ps"
echo "  View app logs:       docker compose logs -f"
echo ""
echo "Your site should be accessible at:"
echo "  → https://trart.uk"
echo "  → https://www.trart.uk"
echo ""

