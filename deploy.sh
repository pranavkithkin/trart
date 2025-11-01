#!/bin/bash

# Deployment script for GCP VM
# This script stops old containers, cleans up, and deploys the new version

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Step 1: Stop old containers
print_status "Stopping old containers..."
docker compose down || print_warning "No containers to stop"

# Step 2: Clean up old images (optional)
if [ "$1" == "--clean" ]; then
    print_status "Cleaning up old Docker images..."
    docker system prune -a -f
else
    print_warning "Skipping cleanup. Use --clean flag to remove old images."
fi

# Step 3: Build the new image
print_status "Building Docker image..."
docker compose build --no-cache

# Step 4: Start the container
print_status "Starting container..."
docker compose up -d

# Step 5: Wait a few seconds for the container to start
print_status "Waiting for container to start..."
sleep 5

# Step 6: Check container status
print_status "Checking container status..."
if docker compose ps | grep -q "Up"; then
    print_status "Container is running!"
    
    # Show container info
    echo ""
    echo "Container Status:"
    docker compose ps
    
    # Test the endpoint
    echo ""
    print_status "Testing application endpoint..."
    if curl -f -s http://localhost:3000 > /dev/null; then
        print_status "Application is responding on port 3000!"
    else
        print_warning "Application may still be starting up. Check logs with: docker compose logs -f"
    fi
    
    echo ""
    print_status "Deployment completed successfully!"
    echo ""
    echo "Useful commands:"
    echo "  View logs:        docker compose logs -f"
    echo "  Check status:     docker compose ps"
    echo "  Restart:          docker compose restart"
    echo "  Stop:             docker compose down"
    echo ""
else
    print_error "Container failed to start. Check logs with: docker compose logs"
    docker compose logs --tail=50
    exit 1
fi
