# Domain Setup Guide for trart.uk

Your Docker container is running successfully on port 3000, but to make it accessible at `www.trart.uk`, you need to set up Nginx as a reverse proxy and configure SSL.

## 🎯 Quick Setup (3 Steps)

```bash
# 1. Run the automated setup script
sudo bash setup-nginx.sh

# 2. Verify DNS is pointing to your server
# (Check the output from the script)

# 3. Enable SSL with Let's Encrypt
sudo certbot --nginx -d trart.uk -d www.trart.uk
```

## 📋 Prerequisites Checklist

- [x] Docker container running on port 3000 ✅ (You have this!)
- [ ] DNS A records configured
- [ ] Ports 80 and 443 open in GCP firewall
- [ ] Nginx installed (script will do this)
- [ ] SSL certificate (Certbot will do this)

## 🔧 Detailed Setup Steps

### Step 1: Configure DNS Records

Your domain `trart.uk` needs to point to your GCP VM's external IP.

#### Get Your VM's External IP
```bash
curl ifconfig.me
```

#### Configure DNS (in your domain registrar)

Add these DNS records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | YOUR_VM_IP | 3600 |
| A | www | YOUR_VM_IP | 3600 |

**Example:**
- If your VM IP is `34.105.123.45`
- `trart.uk` → `34.105.123.45`
- `www.trart.uk` → `34.105.123.45`

**Wait time:** DNS propagation can take 5 minutes to 48 hours

#### Verify DNS
```bash
# Check if DNS is propagated
nslookup trart.uk
nslookup www.trart.uk

# Or use dig
dig +short trart.uk
dig +short www.trart.uk
```

### Step 2: Configure GCP Firewall

Ensure ports 80 (HTTP) and 443 (HTTPS) are open:

#### Using gcloud CLI
```bash
# Allow HTTP
gcloud compute firewall-rules create allow-http \
  --allow tcp:80 \
  --source-ranges 0.0.0.0/0 \
  --description "Allow HTTP traffic"

# Allow HTTPS
gcloud compute firewall-rules create allow-https \
  --allow tcp:443 \
  --source-ranges 0.0.0.0/0 \
  --description "Allow HTTPS traffic"

# Verify
gcloud compute firewall-rules list | grep allow-http
```

#### Using GCP Console
1. Go to **VPC Network** > **Firewall**
2. Click **Create Firewall Rule**
3. For HTTP:
   - Name: `allow-http`
   - Targets: All instances
   - Source IP ranges: `0.0.0.0/0`
   - Protocols and ports: `tcp:80`
4. Repeat for HTTPS with port `443`

### Step 3: Install and Configure Nginx

#### Automated Method (Recommended)
```bash
# Make script executable
chmod +x setup-nginx.sh

# Run as root
sudo bash setup-nginx.sh
```

The script will:
- ✅ Install Nginx
- ✅ Install Certbot
- ✅ Create Nginx configuration
- ✅ Enable the site
- ✅ Configure firewall
- ✅ Check DNS settings

#### Manual Method

If you prefer to do it manually:

```bash
# Install Nginx
sudo apt update
sudo apt install nginx -y

# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Copy the config file
sudo cp nginx-trart.conf /etc/nginx/sites-available/trart

# Enable the site
sudo ln -s /etc/nginx/sites-available/trart /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### Step 4: Enable SSL with Let's Encrypt

Once DNS is pointing to your server:

```bash
# Obtain and install SSL certificate
sudo certbot --nginx -d trart.uk -d www.trart.uk
```

Certbot will:
1. Verify you own the domain
2. Obtain SSL certificates
3. Configure Nginx automatically
4. Set up auto-renewal

**Follow the prompts:**
- Enter your email address
- Agree to terms of service
- Choose whether to redirect HTTP to HTTPS (recommended: Yes)

### Step 5: Verify Everything Works

```bash
# Test HTTP (should redirect to HTTPS)
curl -I http://trart.uk

# Test HTTPS
curl -I https://trart.uk

# Test www subdomain
curl -I https://www.trart.uk

# Check SSL certificate
curl -vI https://trart.uk 2>&1 | grep -A 5 "SSL certificate"
```

## 🔍 Troubleshooting

### Issue: "Connection refused" or "Site can't be reached"

**Check DNS:**
```bash
# Should return your VM's IP
dig +short trart.uk
```

**Check Nginx:**
```bash
sudo systemctl status nginx
sudo nginx -t
```

**Check Docker:**
```bash
docker compose ps
curl http://localhost:3000
```

**Check Firewall:**
```bash
# GCP firewall
gcloud compute firewall-rules list

# Local firewall (if using UFW)
sudo ufw status
```

### Issue: "DNS_PROBE_FINISHED_NXDOMAIN"

**Problem:** DNS not configured or not propagated

**Solution:**
1. Verify DNS records in your domain registrar
2. Wait for DNS propagation (up to 48 hours)
3. Check with: `nslookup trart.uk`

### Issue: "502 Bad Gateway"

**Problem:** Nginx can't connect to Docker container

**Solution:**
```bash
# Check if container is running
docker compose ps

# Check container logs
docker compose logs -f

# Restart container
docker compose restart

# Test direct connection
curl http://localhost:3000
```

### Issue: "SSL certificate problem"

**Problem:** SSL not configured or expired

**Solution:**
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate
sudo certbot renew

# Test auto-renewal
sudo certbot renew --dry-run
```

### Issue: "This site can't provide a secure connection"

**Problem:** SSL certificate not properly installed

**Solution:**
```bash
# Re-run Certbot
sudo certbot --nginx -d trart.uk -d www.trart.uk

# Check Nginx config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## 📊 Verification Checklist

After setup, verify these:

- [ ] DNS resolves to correct IP: `dig +short trart.uk`
- [ ] Port 80 accessible: `curl -I http://trart.uk`
- [ ] Port 443 accessible: `curl -I https://trart.uk`
- [ ] HTTP redirects to HTTPS
- [ ] www subdomain works: `https://www.trart.uk`
- [ ] SSL certificate valid: Check in browser
- [ ] Docker container running: `docker compose ps`
- [ ] Nginx running: `sudo systemctl status nginx`
- [ ] No errors in logs: `sudo tail -f /var/log/nginx/trart.error.log`

## 🔄 Common Commands

```bash
# Check Nginx status
sudo systemctl status nginx

# Restart Nginx
sudo systemctl restart nginx

# Test Nginx config
sudo nginx -t

# View Nginx error logs
sudo tail -f /var/log/nginx/trart.error.log

# View Nginx access logs
sudo tail -f /var/log/nginx/trart.access.log

# Check SSL certificate
sudo certbot certificates

# Renew SSL certificate
sudo certbot renew

# Test SSL renewal
sudo certbot renew --dry-run

# Check DNS
dig +short trart.uk
nslookup trart.uk

# Test from command line
curl -I https://trart.uk
```

## 🎯 Expected Timeline

1. **DNS Configuration:** 5 minutes to set up
2. **DNS Propagation:** 5 minutes to 48 hours
3. **Nginx Setup:** 5 minutes
4. **SSL Certificate:** 2 minutes
5. **Total:** 15 minutes + DNS propagation time

## 🌐 Architecture Overview

```
Internet
    ↓
DNS (trart.uk → VM IP)
    ↓
GCP Firewall (ports 80, 443)
    ↓
Nginx (ports 80, 443)
    ↓
Docker Container (port 3000)
    ↓
Next.js App
```

## 📞 Quick Diagnostics

Run this one-liner to check everything:

```bash
echo "=== DNS ===" && dig +short trart.uk && \
echo "=== Nginx ===" && sudo systemctl is-active nginx && \
echo "=== Docker ===" && docker compose ps && \
echo "=== Port 3000 ===" && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 && \
echo "=== SSL ===" && sudo certbot certificates
```

## 🎉 Success Indicators

You'll know it's working when:
- ✅ Browser shows your site at `https://trart.uk`
- ✅ Browser shows padlock icon (SSL valid)
- ✅ `http://trart.uk` redirects to `https://trart.uk`
- ✅ Both `trart.uk` and `www.trart.uk` work
- ✅ No browser security warnings

## 🔐 Security Best Practices

After setup:

1. **Enable automatic SSL renewal:**
   ```bash
   sudo systemctl status certbot.timer
   ```

2. **Set up firewall:**
   ```bash
   sudo ufw enable
   sudo ufw allow 'Nginx Full'
   sudo ufw allow OpenSSH
   ```

3. **Regular updates:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

4. **Monitor logs:**
   ```bash
   sudo tail -f /var/log/nginx/trart.error.log
   ```

## 📚 Additional Resources

- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [GCP Firewall Rules](https://cloud.google.com/vpc/docs/firewalls)

---

**Need Help?** Check the troubleshooting section or run the diagnostic command above.

