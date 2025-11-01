# Cloudflare Setup Guide for trart.uk

Since you're using Cloudflare for DNS and SSL, you don't need Let's Encrypt. This guide will help you configure Nginx to work with Cloudflare.

## 🎯 Quick Setup (2 Commands)

```bash
# 1. Run the Cloudflare setup script
sudo bash setup-cloudflare.sh

# 2. Configure Cloudflare SSL (see below)
```

## 🔧 Step-by-Step Setup

### Step 1: Update Nginx Configuration

Run the automated script:

```bash
chmod +x setup-cloudflare.sh
sudo bash setup-cloudflare.sh
```

Or manually:

```bash
# Copy the Cloudflare-optimized config
sudo cp nginx-cloudflare.conf /etc/nginx/sites-available/trart

# Enable the site
sudo ln -sf /etc/nginx/sites-available/trart /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test and restart
sudo nginx -t
sudo systemctl restart nginx
```

### Step 2: Configure Cloudflare Dashboard

Go to: https://dash.cloudflare.com

#### A. SSL/TLS Settings

1. Click on your domain: **trart.uk**
2. Go to **SSL/TLS** tab
3. Set **SSL/TLS encryption mode** to:
   - **Flexible** (Recommended for your setup)
     - Cloudflare ↔ Visitors: HTTPS ✅
     - Cloudflare ↔ Your Server: HTTP ✅
   - OR **Full** (if you want to add SSL to your server later)

4. Enable these settings:
   - ✅ **Always Use HTTPS**: ON
   - ✅ **Automatic HTTPS Rewrites**: ON
   - ✅ **Minimum TLS Version**: 1.2

#### B. DNS Settings

1. Go to **DNS** tab
2. Verify these A records exist:

| Type | Name | Content | Proxy Status |
|------|------|---------|--------------|
| A | @ | YOUR_VM_IP | Proxied (🟠 Orange cloud) |
| A | www | YOUR_VM_IP | Proxied (🟠 Orange cloud) |

**Important**: The orange cloud should be ON (Proxied) for Cloudflare to handle SSL.

#### C. Speed Settings (Optional but Recommended)

1. Go to **Speed** tab
2. Enable:
   - ✅ **Auto Minify**: CSS, JavaScript, HTML
   - ✅ **Brotli**: ON
   - ✅ **Early Hints**: ON

### Step 3: Verify Everything Works

```bash
# Test local connection
curl http://localhost:3000

# Test through Nginx
curl http://localhost

# Test your domain (HTTP)
curl -I http://trart.uk

# Test your domain (HTTPS)
curl -I https://trart.uk

# Test www subdomain
curl -I https://www.trart.uk
```

## 🔍 Troubleshooting

### Error 522: Connection Timed Out

**Cause**: Cloudflare can't reach your server

**Fix**:
```bash
# Check Nginx is running
sudo systemctl status nginx

# Check Docker container is running
docker compose ps

# Check if port 3000 responds
curl http://localhost:3000

# Check GCP firewall allows port 80
gcloud compute firewall-rules list | grep allow-http

# Restart everything
docker compose restart
sudo systemctl restart nginx
```

### Error 523: Origin Is Unreachable

**Cause**: DNS or network issue

**Fix**:
1. Verify DNS points to correct IP
2. Check GCP firewall rules
3. Ensure Nginx is listening on port 80

### Error 525: SSL Handshake Failed

**Cause**: Cloudflare SSL mode is set to "Full (strict)" but your server doesn't have SSL

**Fix**:
1. Go to Cloudflare Dashboard → SSL/TLS
2. Change encryption mode to **Flexible**

### Site Shows "Too Many Redirects"

**Cause**: Redirect loop between Cloudflare and your server

**Fix**:
1. Remove any HTTPS redirect rules from Nginx
2. Let Cloudflare handle the HTTP→HTTPS redirect
3. Use the `nginx-cloudflare.conf` provided

### Can't Access Site at All

**Checklist**:
```bash
# 1. Docker container running?
docker compose ps
# Should show: trart-website | Up

# 2. Container responds?
curl http://localhost:3000
# Should return HTML

# 3. Nginx running?
sudo systemctl status nginx
# Should show: active (running)

# 4. Nginx config valid?
sudo nginx -t
# Should show: test is successful

# 5. Nginx can reach Docker?
curl http://localhost
# Should return HTML

# 6. DNS correct?
dig +short trart.uk
# Should return Cloudflare IPs (not your server IP when proxied)

# 7. Cloudflare SSL mode?
# Check dashboard - should be "Flexible" or "Full"
```

## 📊 Architecture with Cloudflare

```
Internet Users
    ↓
Cloudflare (HTTPS)
    ↓ (HTTP)
GCP Firewall (port 80)
    ↓
Nginx (port 80)
    ↓
Docker Container (port 3000)
    ↓
Next.js App
```

## 🔐 Security Benefits with Cloudflare

- ✅ Free SSL/TLS certificates (auto-renewed)
- ✅ DDoS protection
- ✅ Web Application Firewall (WAF)
- ✅ Bot protection
- ✅ Rate limiting
- ✅ Always Online (cached version if server down)

## 🚀 Performance Benefits

- ✅ Global CDN (faster load times worldwide)
- ✅ Image optimization
- ✅ Minification (CSS, JS, HTML)
- ✅ Brotli compression
- ✅ HTTP/2 and HTTP/3 support

## 📝 Cloudflare Configuration Checklist

- [ ] SSL/TLS mode set to "Flexible"
- [ ] Always Use HTTPS enabled
- [ ] DNS A records pointing to VM IP
- [ ] Orange cloud enabled (Proxied)
- [ ] Nginx configured with cloudflare config
- [ ] Docker container running on port 3000
- [ ] GCP firewall allows port 80
- [ ] Site accessible at https://trart.uk

## 🎯 Expected Results

After setup:
- ✅ `http://trart.uk` → redirects to `https://trart.uk`
- ✅ `https://trart.uk` → shows your site with green padlock
- ✅ `https://www.trart.uk` → shows your site
- ✅ Fast load times (Cloudflare CDN)
- ✅ DDoS protection active

## 🔄 Common Commands

```bash
# Restart Nginx
sudo systemctl restart nginx

# View Nginx logs
sudo tail -f /var/log/nginx/trart.error.log

# Test Nginx config
sudo nginx -t

# Restart Docker
docker compose restart

# View Docker logs
docker compose logs -f

# Check everything is running
sudo systemctl status nginx && docker compose ps
```

## 💡 Pro Tips

1. **Cache Everything**: In Cloudflare, create a Page Rule to cache everything:
   - URL: `trart.uk/*`
   - Setting: Cache Level = Cache Everything

2. **Purge Cache**: After deploying updates:
   - Cloudflare Dashboard → Caching → Purge Everything

3. **Monitor**: Use Cloudflare Analytics to see:
   - Traffic patterns
   - Threats blocked
   - Performance metrics

4. **Optimize Images**: Enable Cloudflare Polish:
   - Speed → Optimization → Polish = Lossless

## 📞 Quick Diagnostics

Run this to check everything:

```bash
echo "=== Docker ===" && docker compose ps && \
echo "=== Nginx ===" && sudo systemctl is-active nginx && \
echo "=== Port 3000 ===" && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 && \
echo "=== Port 80 ===" && curl -s -o /dev/null -w "%{http_code}" http://localhost && \
echo "=== Site HTTP ===" && curl -s -o /dev/null -w "%{http_code}" http://trart.uk && \
echo "=== Site HTTPS ===" && curl -s -o /dev/null -w "%{http_code}" https://trart.uk
```

Expected output:
```
=== Docker ===
trart-website | Up
=== Nginx ===
active
=== Port 3000 ===
200
=== Port 80 ===
200
=== Site HTTP ===
301 (or 200)
=== Site HTTPS ===
200
```

## ✅ Success!

Your site is working when:
- ✅ Browser shows `https://trart.uk` with green padlock
- ✅ No security warnings
- ✅ Site loads quickly
- ✅ Both `trart.uk` and `www.trart.uk` work

---

**Need help?** Run the diagnostic command above and check the troubleshooting section.

