# Quick Start Guide - GCP VM Deployment

## 🎯 TL;DR - Deploy in 3 Commands

```bash
chmod +x deploy.sh
./deploy.sh --clean
docker compose logs -f
```

## 📋 What Changed

### ✅ Optimizations Made

1. **`next.config.js`** - Added `output: 'standalone'` for optimized Docker builds
2. **`Dockerfile`** - Updated to use standalone output (reduces image size by ~80%)
3. **`docker-compose.yml`** - Removed external network dependencies (n8n-network)
4. **New Files** - Added deployment scripts and documentation

### 🗑️ What Was Removed

- ❌ External network reference (`n8n-network`)
- ❌ `depends_on` directives (no other services)
- ❌ Database/Redis container references
- ❌ Unnecessary production dependencies in final image

## 🚀 Deployment Steps

### On Your GCP VM

1. **Clone or upload your project**
   ```bash
   git clone <your-repo-url>
   cd trart
   ```

2. **Make deploy script executable**
   ```bash
   chmod +x deploy.sh
   ```

3. **Run deployment**
   ```bash
   ./deploy.sh --clean
   ```

4. **Verify it's running**
   ```bash
   curl http://localhost:3000
   ```

5. **Configure GCP firewall** (if not already done)
   ```bash
   gcloud compute firewall-rules create allow-nextjs \
     --allow tcp:3000 \
     --source-ranges 0.0.0.0/0
   ```

6. **Access your site**
   ```
   http://YOUR_VM_EXTERNAL_IP:3000
   ```

## 🔧 Manual Commands (Alternative)

If you prefer manual control:

```bash
# Stop and clean
docker compose down
docker system prune -a -f

# Build and start
docker compose up --build -d

# Check logs
docker compose logs -f

# Check status
docker compose ps
```

## 📊 What's Running

- **Container Name**: `trart-website`
- **Port**: 3000 (host) → 3000 (container)
- **Restart Policy**: `unless-stopped` (auto-restart on failure)
- **User**: `nextjs` (non-root, UID 1001)
- **Environment**: Production mode

## 🔍 Verify Deployment

```bash
# Check container is running
docker compose ps

# Check logs
docker compose logs --tail=50

# Test endpoint
curl http://localhost:3000

# Check resource usage
docker stats trart-website
```

## 🌐 Production Setup (Optional)

### Add Environment Variables

If you need environment variables:

1. Create `.env.production`:
   ```bash
   NODE_ENV=production
   NEXT_PUBLIC_API_URL=https://api.example.com
   # Add other variables as needed
   ```

2. Uncomment in `docker-compose.yml`:
   ```yaml
   env_file:
     - .env.production
   ```

3. Rebuild:
   ```bash
   docker compose up --build -d
   ```

### Set Up Reverse Proxy (Recommended)

For SSL/HTTPS, use Nginx or Caddy:

```nginx
# /etc/nginx/sites-available/trart
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🐛 Troubleshooting

### Container won't start
```bash
docker compose logs -f
```

### Port already in use
```bash
sudo lsof -i :3000
sudo kill -9 <PID>
```

### Out of disk space
```bash
docker system prune -a -f --volumes
```

### Application not responding
```bash
docker compose restart
docker compose logs --tail=100
```

## 📚 Documentation

- **`DEPLOYMENT.md`** - Comprehensive deployment guide with all commands
- **`DOCKER_README.md`** - Docker configuration details and architecture
- **`deploy.sh`** - Automated deployment script

## 🎉 Success Indicators

You'll know it's working when:
- ✅ `docker compose ps` shows container as "Up"
- ✅ `curl http://localhost:3000` returns HTML
- ✅ Browser shows your site at `http://VM_IP:3000`
- ✅ Logs show "ready started server on 0.0.0.0:3000"

## 🔄 Update Workflow

```bash
# Pull latest code
git pull origin main

# Redeploy
./deploy.sh --clean

# Or manually
docker compose down
docker compose up --build -d
```

## 📞 Need Help?

Check logs first:
```bash
docker compose logs -f
```

Common issues and solutions in `DEPLOYMENT.md`.

