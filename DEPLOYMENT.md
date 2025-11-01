# GCP VM Deployment Guide

This guide provides step-by-step instructions for deploying the Next.js application on a GCP VM instance.

## Prerequisites

- GCP VM instance with Docker and Docker Compose installed
- SSH access to the VM
- Git installed on the VM (to clone the repository)

## Deployment Commands

### 1. Initial Setup (First Time Only)

```bash
# Install Docker (if not already installed)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose (if not already installed)
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Log out and back in for group changes to take effect
```

### 2. Stop and Clean Up Old Containers

```bash
# Stop all running containers
docker compose down

# Alternative: Stop specific container
docker stop trart-website

# Remove stopped containers
docker rm trart-website

# Remove old images (optional - frees up space)
docker image prune -a -f

# Complete cleanup (removes all unused containers, networks, images)
docker system prune -a -f
```

### 3. Build and Start the Application

```bash
# Build and start in detached mode
docker compose up --build -d

# Alternative: Build first, then start
docker compose build
docker compose up -d
```

### 4. Check Status and Logs

```bash
# Check container status
docker compose ps

# View logs (live tail)
docker compose logs -f

# View last 100 lines of logs
docker compose logs --tail=100

# View logs for specific service
docker compose logs -f trart-website

# Check if container is healthy
docker inspect trart-website --format='{{.State.Status}}'
```

### 5. Verify Deployment

```bash
# Check if the application is responding
curl http://localhost:3000

# Check from outside the VM (replace with your VM's external IP)
curl http://YOUR_VM_EXTERNAL_IP:3000
```

## Common Operations

### Restart the Application

```bash
# Restart without rebuilding
docker compose restart

# Restart with rebuild
docker compose down
docker compose up --build -d
```

### Update Application (Pull Latest Changes)

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker compose down
docker compose up --build -d
```

### View Resource Usage

```bash
# View real-time resource usage
docker stats trart-website

# View disk usage
docker system df
```

### Access Container Shell (for debugging)

```bash
# Access the running container
docker exec -it trart-website sh

# View files in the container
docker exec trart-website ls -la
```

## Firewall Configuration

Make sure port 3000 is open on your GCP VM:

```bash
# Using gcloud CLI
gcloud compute firewall-rules create allow-nextjs \
  --allow tcp:3000 \
  --source-ranges 0.0.0.0/0 \
  --description "Allow Next.js application traffic"

# Or configure in GCP Console:
# VPC Network > Firewall > Create Firewall Rule
# - Name: allow-nextjs
# - Targets: All instances in the network
# - Source IP ranges: 0.0.0.0/0
# - Protocols and ports: tcp:3000
```

## Environment Variables

If you need to add environment variables, create a `.env.production` file in the project root:

```bash
# Example .env.production
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

Then uncomment the `env_file` section in `docker-compose.yml`:

```yaml
env_file:
  - .env.production
```

## Troubleshooting

### Container Won't Start

```bash
# Check logs for errors
docker compose logs

# Check Docker daemon status
sudo systemctl status docker

# Restart Docker daemon
sudo systemctl restart docker
```

### Port Already in Use

```bash
# Find what's using port 3000
sudo lsof -i :3000
# or
sudo netstat -tulpn | grep 3000

# Kill the process using the port
sudo kill -9 <PID>
```

### Out of Disk Space

```bash
# Clean up Docker resources
docker system prune -a -f --volumes

# Check disk usage
df -h
```

### Build Fails

```bash
# Clear build cache
docker builder prune -a -f

# Rebuild without cache
docker compose build --no-cache
docker compose up -d
```

## Production Best Practices

1. **Use a reverse proxy (Nginx)** for SSL/TLS termination
2. **Set up monitoring** (e.g., Google Cloud Monitoring)
3. **Configure log rotation** to prevent disk space issues
4. **Regular backups** of any persistent data
5. **Use secrets management** for sensitive environment variables
6. **Set up automated deployments** with CI/CD

## Quick Reference

```bash
# Complete deployment workflow
docker compose down                    # Stop old containers
docker system prune -a -f             # Clean up
git pull origin main                  # Update code (if using git)
docker compose up --build -d          # Build and start
docker compose logs -f                # Watch logs
```

## Support

For issues specific to this deployment, check:
- Container logs: `docker compose logs -f`
- Docker status: `docker compose ps`
- System resources: `docker stats`
