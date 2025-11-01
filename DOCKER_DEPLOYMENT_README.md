# 🚀 Standalone Docker Deployment for GCP VM

Complete guide for deploying this Next.js application as a standalone Docker container on Google Cloud Platform VM.

## 📦 What's Included

This repository now contains a production-ready Docker setup:

### Core Files
- ✅ **`Dockerfile`** - Optimized multi-stage build with Next.js standalone output
- ✅ **`docker-compose.yml`** - Simplified single-service configuration
- ✅ **`next.config.js`** - Configured with standalone output mode

### Deployment Tools
- ✅ **`deploy.sh`** - Automated deployment script
- ✅ **`verify-setup.sh`** - Pre-deployment validation script

### Documentation
- ✅ **`QUICK_START.md`** - Fast deployment guide (3 commands)
- ✅ **`DEPLOYMENT.md`** - Comprehensive deployment manual
- ✅ **`DOCKER_README.md`** - Technical Docker documentation
- ✅ **`CHANGES_SUMMARY.md`** - Detailed changelog

## 🎯 Quick Deploy (3 Commands)

```bash
# 1. Verify setup
chmod +x verify-setup.sh && ./verify-setup.sh

# 2. Deploy
chmod +x deploy.sh && ./deploy.sh --clean

# 3. Verify
curl http://localhost:3000
```

## 📋 Prerequisites

### On Your GCP VM

1. **Docker** (20.10+)
   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   sudo usermod -aG docker $USER
   ```

2. **Docker Compose** (2.0+)
   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. **Log out and back in** for group changes to take effect

## 🚀 Deployment Methods

### Method 1: Automated Script (Recommended)

```bash
# Verify everything is configured correctly
./verify-setup.sh

# Deploy with cleanup of old images
./deploy.sh --clean

# Deploy without cleanup
./deploy.sh
```

### Method 2: Manual Commands

```bash
# Stop old containers
docker compose down

# Clean up (optional)
docker system prune -a -f

# Build and start
docker compose up --build -d

# Check logs
docker compose logs -f
```

### Method 3: Step-by-Step

```bash
# 1. Stop existing containers
docker compose down

# 2. Build the image
docker compose build --no-cache

# 3. Start the container
docker compose up -d

# 4. Verify it's running
docker compose ps

# 5. Check logs
docker compose logs -f trart-website
```

## 🔍 Verification

### Check Container Status
```bash
docker compose ps
# Should show: trart-website | Up
```

### Test Application
```bash
# Local test
curl http://localhost:3000

# From outside (replace with your VM IP)
curl http://YOUR_VM_IP:3000
```

### View Logs
```bash
# Live tail
docker compose logs -f

# Last 100 lines
docker compose logs --tail=100
```

### Check Resources
```bash
docker stats trart-website
```

## 🌐 GCP Firewall Configuration

Allow external access to port 3000:

### Using gcloud CLI
```bash
gcloud compute firewall-rules create allow-nextjs \
  --allow tcp:3000 \
  --source-ranges 0.0.0.0/0 \
  --description "Allow Next.js application traffic"
```

### Using GCP Console
1. Go to **VPC Network** > **Firewall**
2. Click **Create Firewall Rule**
3. Configure:
   - Name: `allow-nextjs`
   - Targets: All instances in the network
   - Source IP ranges: `0.0.0.0/0`
   - Protocols and ports: `tcp:3000`
4. Click **Create**

## 🔧 Configuration

### Environment Variables

The container runs with these default environment variables:
```yaml
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

### Adding Custom Environment Variables

1. Create `.env.production`:
   ```bash
   NODE_ENV=production
   NEXT_PUBLIC_API_URL=https://api.example.com
   DATABASE_URL=postgresql://user:pass@host:5432/db
   # Add more as needed
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

## 📊 Key Features

### ✅ Optimizations
- **80% smaller image size** (~150-250MB vs ~1.2GB)
- **Faster startup** (direct node execution)
- **Better security** (non-root user)
- **No external dependencies** (truly standalone)

### ✅ Production Ready
- Multi-stage Docker build
- Alpine Linux base (minimal size)
- Standalone Next.js output
- Auto-restart on failure
- Proper user permissions

### ✅ Easy Management
- Single command deployment
- Automated verification
- Comprehensive documentation
- Simple troubleshooting

## 🔄 Common Operations

### Restart Application
```bash
docker compose restart
```

### Update Application
```bash
git pull origin main
docker compose down
docker compose up --build -d
```

### View Logs
```bash
# Live tail
docker compose logs -f

# Specific time range
docker compose logs --since 30m

# Last N lines
docker compose logs --tail=50
```

### Stop Application
```bash
docker compose down
```

### Clean Up Everything
```bash
docker compose down
docker system prune -a -f --volumes
```

## 🐛 Troubleshooting

### Container Won't Start
```bash
# Check logs for errors
docker compose logs -f

# Check Docker daemon
sudo systemctl status docker

# Restart Docker
sudo systemctl restart docker
```

### Port Already in Use
```bash
# Find what's using port 3000
sudo lsof -i :3000

# Kill the process
sudo kill -9 <PID>
```

### Application Not Responding
```bash
# Restart container
docker compose restart

# Check container health
docker inspect trart-website --format='{{.State.Status}}'

# Access container shell
docker exec -it trart-website sh
```

### Build Fails
```bash
# Clear build cache
docker builder prune -a -f

# Rebuild without cache
docker compose build --no-cache
```

### Out of Disk Space
```bash
# Check disk usage
df -h

# Clean up Docker
docker system prune -a -f --volumes

# Check Docker disk usage
docker system df
```

## 📈 Production Enhancements

### 1. Add SSL/TLS with Nginx

Create `nginx.conf`:
```nginx
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
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 2. Add Health Checks

Update `docker-compose.yml`:
```yaml
services:
  trart-website:
    # ... existing config
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

### 3. Configure Log Rotation

Update `docker-compose.yml`:
```yaml
services:
  trart-website:
    # ... existing config
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

### 4. Set Resource Limits

Update `docker-compose.yml`:
```yaml
services:
  trart-website:
    # ... existing config
    deploy:
      resources:
        limits:
          cpus: '1.0'
          memory: 1G
        reservations:
          cpus: '0.5'
          memory: 512M
```

## 📚 Documentation Reference

| Document | Purpose |
|----------|---------|
| **QUICK_START.md** | Fast 3-command deployment |
| **DEPLOYMENT.md** | Complete deployment guide |
| **DOCKER_README.md** | Technical Docker details |
| **CHANGES_SUMMARY.md** | What changed and why |
| **This File** | Overview and quick reference |

## 🎯 Success Checklist

- [ ] Docker and Docker Compose installed
- [ ] Repository cloned/uploaded to GCP VM
- [ ] Scripts made executable (`chmod +x *.sh`)
- [ ] Verification script passed (`./verify-setup.sh`)
- [ ] Deployment successful (`./deploy.sh --clean`)
- [ ] Application accessible (`curl http://localhost:3000`)
- [ ] Firewall configured (port 3000 open)
- [ ] External access working (`http://VM_IP:3000`)
- [ ] Logs showing no errors (`docker compose logs`)
- [ ] Container auto-restarts on failure

## 💡 Tips

1. **First deployment**: Use `./verify-setup.sh` to catch issues early
2. **Updates**: Use `./deploy.sh --clean` to remove old images
3. **Monitoring**: Keep logs running in a separate terminal: `docker compose logs -f`
4. **Backups**: Save images before major changes: `docker save trart-website:latest | gzip > backup.tar.gz`
5. **Security**: Use a reverse proxy (Nginx/Caddy) for SSL in production

## 🆘 Getting Help

1. **Check logs first**: `docker compose logs -f`
2. **Verify status**: `docker compose ps`
3. **Check resources**: `docker stats trart-website`
4. **Review docs**: See DEPLOYMENT.md for detailed troubleshooting
5. **Test locally**: Try `curl http://localhost:3000`

## 📞 Quick Command Reference

```bash
# Deploy
./deploy.sh --clean

# Status
docker compose ps

# Logs
docker compose logs -f

# Restart
docker compose restart

# Stop
docker compose down

# Update
git pull && ./deploy.sh --clean

# Clean
docker system prune -a -f

# Stats
docker stats trart-website
```

## 🎉 You're Ready!

Your Next.js application is now configured for standalone deployment on GCP VM. The setup is:

✅ Optimized for production  
✅ Secure and isolated  
✅ Easy to deploy and manage  
✅ Fully documented  
✅ Ready to scale  

**Deploy now**: `./deploy.sh --clean`

---

*For detailed information, see the individual documentation files listed above.*

