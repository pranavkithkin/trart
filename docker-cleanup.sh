#!/bin/bash

# VM Disk Space Cleanup Script for Docker
# Run this on your VM to free up space before building

echo "🧹 Starting Docker cleanup on VM..."

# Stop all running containers
echo "1. Stopping all containers..."
sudo docker-compose down 2>/dev/null || true

# Remove unused containers
echo "2. Removing stopped containers..."
sudo docker container prune -f

# Remove unused images
echo "3. Removing unused images..."
sudo docker image prune -a -f

# Remove unused volumes
echo "4. Removing unused volumes..."
sudo docker volume prune -f

# Remove build cache
echo "5. Removing build cache..."
sudo docker builder prune -a -f

# Clean up system (Docker networks, etc.)
echo "6. Cleaning up Docker system..."
sudo docker system prune -a -f --volumes

# Check remaining disk space
echo ""
echo "📊 Disk space after cleanup:"
df -h /

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "Now you can run:"
echo "  sudo docker-compose -f docker-compose.production.yml build"
echo "  sudo docker-compose -f docker-compose.production.yml up -d"
