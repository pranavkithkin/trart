# Cloudflare Origin Certificate Setup Guide

## Problem
- When Cloudflare SSL/TLS is set to "Full (strict)", n8n works but website doesn't
- When set to "Flexible", website works but n8n doesn't
- Solution: Install Cloudflare Origin Certificate on website VM to enable Full (strict) for both

## Prerequisites
✅ You already have the Cloudflare Origin Certificate and Private Key

## Step-by-Step Installation

### Step 1: SSH into your Website VM

```bash
ssh your-username@your-website-vm-ip
```

### Step 2: Create SSL Certificate Directory

```bash
sudo mkdir -p /etc/ssl/cloudflare
sudo chmod 700 /etc/ssl/cloudflare
```

### Step 3: Save the Certificate

Create the certificate file:

```bash
sudo nano /etc/ssl/cloudflare/trart.uk.pem
```

**Paste your Cloudflare Origin Certificate** (it should look like):
```
-----BEGIN CERTIFICATE-----
MIIEpDCCA4ygAwIBAgIUXXXXXXXXXXXXXXXXXXXXXXXXXXX...
... (your certificate content) ...
-----END CERTIFICATE-----
```

Save and exit (Ctrl+X, then Y, then Enter)

### Step 4: Save the Private Key

Create the private key file:

```bash
sudo nano /etc/ssl/cloudflare/trart.uk.key
```

**Paste your Cloudflare Private Key** (it should look like):
```
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCXXXXXXXXXXXXXXX...
... (your private key content) ...
-----END PRIVATE KEY-----
```

Save and exit (Ctrl+X, then Y, then Enter)

### Step 5: Set Proper Permissions

```bash
sudo chmod 644 /etc/ssl/cloudflare/trart.uk.pem
sudo chmod 600 /etc/ssl/cloudflare/trart.uk.key
sudo chown root:root /etc/ssl/cloudflare/trart.uk.*
```

### Step 6: Verify Files

```bash
# Check if files exist
ls -la /etc/ssl/cloudflare/

# Verify certificate
sudo openssl x509 -in /etc/ssl/cloudflare/trart.uk.pem -text -noout | grep -E "Subject:|Issuer:|Not After"

# Verify private key
sudo openssl rsa -in /etc/ssl/cloudflare/trart.uk.key -check
```

### Step 7: Backup Current Nginx Configuration

```bash
sudo cp /etc/nginx/sites-available/trart /etc/nginx/sites-available/trart.backup
```

### Step 8: Update Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/trart
```

Replace the contents with the new configuration (see `nginx-cloudflare-ssl.conf` file).

Or use this command to upload the new config:

```bash
# From your local machine, upload the new config
scp nginx-cloudflare-ssl.conf your-username@your-website-vm-ip:~/
```

Then on the VM:

```bash
sudo mv ~/nginx-cloudflare-ssl.conf /etc/nginx/sites-available/trart
```

### Step 9: Test Nginx Configuration

```bash
sudo nginx -t
```

You should see:
```
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### Step 10: Reload Nginx

```bash
sudo systemctl reload nginx
```

### Step 11: Verify HTTPS is Working

```bash
# Check if nginx is listening on port 443
sudo netstat -tlnp | grep :443

# Check SSL certificate
curl -vI https://trart.uk 2>&1 | grep -E "subject:|issuer:"
```

### Step 12: Update Cloudflare SSL/TLS Settings

1. Go to Cloudflare Dashboard → Your Domain → SSL/TLS
2. Set SSL/TLS encryption mode to **"Full (strict)"**
3. Wait 1-2 minutes for changes to propagate

### Step 13: Test Your Website

Visit both:
- https://trart.uk
- https://www.trart.uk
- https://n8n.trart.uk (should still work)

## Troubleshooting

### If website doesn't load:

```bash
# Check nginx error logs
sudo tail -f /var/log/nginx/trart.error.log

# Check if Next.js is running
sudo netstat -tlnp | grep :3000

# Restart services if needed
sudo systemctl restart nginx
```

### If you see certificate errors:

```bash
# Verify certificate files are readable
sudo openssl x509 -in /etc/ssl/cloudflare/trart.uk.pem -text -noout
sudo openssl rsa -in /etc/ssl/cloudflare/trart.uk.key -check -noout
```

### To rollback if needed:

```bash
sudo cp /etc/nginx/sites-available/trart.backup /etc/nginx/sites-available/trart
sudo systemctl reload nginx
```

## Expected Behavior After Setup

✅ Website works with Cloudflare SSL/TLS = Full (strict)
✅ n8n continues to work with Full (strict)
✅ HTTPS enabled on website VM with Cloudflare Origin Certificate
✅ Secure connection between Cloudflare and your origin server

## Certificate Renewal

Cloudflare Origin Certificates are valid for 15 years, so you won't need to renew for a long time. When it's time to renew:

1. Generate a new certificate in Cloudflare Dashboard
2. Replace the files in `/etc/ssl/cloudflare/`
3. Reload nginx: `sudo systemctl reload nginx`

## Security Notes

- Origin Certificates are only trusted by Cloudflare (not public browsers)
- This is perfect for your use case since all traffic goes through Cloudflare
- The certificate only secures the connection from Cloudflare to your VM
- Cloudflare handles the public-facing SSL with their own certificates

