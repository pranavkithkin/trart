# Docker Setup for Standalone Next.js Deployment

This directory contains optimized Docker configuration for deploying the Next.js application as a standalone container on GCP VM.

## 📁 Files Overview

- **`Dockerfile`** - Multi-stage build optimized for production with Next.js standalone output
- **`docker-compose.yml`** - Simplified single-service configuration with no external dependencies
- **`.dockerignore`** - Excludes unnecessary files from Docker build context
- **`deploy.sh`** - Automated deployment script
- **`DEPLOYMENT.md`** - Comprehensive deployment guide

## 🚀 Quick Start

### Option 1: Using the Deploy Script (Recommended)

```bash
# Make the script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh

# Run deployment with cleanup of old images
./deploy.sh --clean
```

### Option 2: Manual Commands

```bash
# Stop old containers and clean up
docker compose down
docker system prune -a -f

# Build and start
docker compose up --build -d

# Check logs
docker compose logs -f
```

## 🏗️ Architecture

### Dockerfile Stages

1. **base** - Node 18 Alpine base image
2. **deps** - Install dependencies only
3. **builder** - Build the Next.js application
4. **runner** - Minimal production image with standalone output

### Key Optimizations

- ✅ **Standalone Output**: Next.js standalone mode reduces image size by ~80%
- ✅ **Multi-stage Build**: Only production dependencies in final image
- ✅ **Alpine Linux**: Minimal base image (~5MB vs ~900MB for full Node)
- ✅ **Non-root User**: Runs as `nextjs` user (UID 1001) for security
- ✅ **Layer Caching**: Optimized layer order for faster rebuilds

### Image Size Comparison

- **Without standalone**: ~1.2GB
- **With standalone**: ~150-250MB (depending on dependencies)

## 🔧 Configuration

### Environment Variables

The following environment variables are set in `docker-compose.yml`:

```yaml
NODE_ENV=production          # Production mode
PORT=3000                    # Application port
HOSTNAME=0.0.0.0            # Listen on all interfaces
```

### Adding Custom Environment Variables

1. Create a `.env.production` file:

```bash
# .env.production
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://user:pass@host:5432/db
REDIS_URL=redis://host:6379
```

2. Uncomment the `env_file` section in `docker-compose.yml`:

```yaml
env_file:
  - .env.production
```

3. Rebuild and restart:

```bash
docker compose up --build -d
```

## 📊 Port Mapping

- **Host Port**: 3000
- **Container Port**: 3000
- **Access**: `http://localhost:3000` or `http://VM_EXTERNAL_IP:3000`

## 🔒 Security Features

1. **Non-root User**: Application runs as `nextjs` (UID 1001)
2. **Minimal Image**: Alpine-based with only required packages
3. **No Shell Access**: Minimal attack surface
4. **Read-only Filesystem**: Application files owned by nextjs user

## 🐛 Troubleshooting

### Container Won't Start

```bash
# Check logs
docker compose logs -f

# Check container status
docker compose ps

# Inspect container
docker inspect trart-website
```

### Build Fails

```bash
# Clear build cache
docker builder prune -a -f

# Rebuild without cache
docker compose build --no-cache
```

### Port Already in Use

```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill the process
sudo kill -9 <PID>

# Or change the port in docker-compose.yml
ports:
  - "8080:3000"  # Map to port 8080 instead
```

### Application Not Responding

```bash
# Check if container is running
docker compose ps

# Check logs for errors
docker compose logs --tail=100

# Restart container
docker compose restart

# Access container shell for debugging
docker exec -it trart-website sh
```

## 📈 Monitoring

### View Logs

```bash
# Live tail logs
docker compose logs -f

# Last 100 lines
docker compose logs --tail=100

# Logs with timestamps
docker compose logs -f --timestamps
```

### Resource Usage

```bash
# Real-time stats
docker stats trart-website

# Disk usage
docker system df
```

### Health Checks

```bash
# Check if application is responding
curl http://localhost:3000

# Check container health
docker inspect trart-website --format='{{.State.Status}}'
```

## 🔄 Updates and Maintenance

### Update Application Code

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker compose down
docker compose up --build -d
```

### Clean Up Old Images

```bash
# Remove unused images
docker image prune -a -f

# Complete cleanup
docker system prune -a -f --volumes
```

### Backup and Restore

```bash
# Save image to tar file
docker save trart-website:latest | gzip > trart-website-backup.tar.gz

# Load image from tar file
docker load < trart-website-backup.tar.gz
```

## 🌐 Production Deployment Checklist

- [ ] Configure firewall to allow port 3000
- [ ] Set up SSL/TLS with reverse proxy (Nginx/Caddy)
- [ ] Configure environment variables in `.env.production`
- [ ] Set up log rotation
- [ ] Configure monitoring and alerts
- [ ] Set up automated backups
- [ ] Test application endpoints
- [ ] Configure domain and DNS
- [ ] Set up CI/CD pipeline (optional)

## 📚 Additional Resources

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [GCP VM Documentation](https://cloud.google.com/compute/docs)

## 🆘 Support

For deployment issues, check:
1. Container logs: `docker compose logs -f`
2. Docker status: `docker compose ps`
3. System resources: `docker stats`
4. Network connectivity: `curl http://localhost:3000`

For application issues, check:
1. Next.js build output
2. Environment variables
3. Application logs in container

