#!/bin/bash

# Universal Deployment Script for Trart Website
# Works with any user on the VM

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 VM Deployment Script for Trart Website${NC}"

# Get current user and setup paths
CURRENT_USER=$(whoami)
HOME_DIR="/home/$CURRENT_USER"
PROJECT_DIR="$HOME_DIR/trart-website"

echo -e "${GREEN}✅ Current user: $CURRENT_USER${NC}"
echo -e "${GREEN}✅ Project directory: $PROJECT_DIR${NC}"

# Check system requirements
echo -e "${BLUE}🔍 Checking system requirements...${NC}"

# Check Docker
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}⚠️  Docker not found. Installing...${NC}"
    sudo apt update
    sudo apt install docker.io -y
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -aG docker $CURRENT_USER
    echo -e "${YELLOW}⚠️  Please logout and login again for Docker group changes${NC}"
    exit 1
fi

# Check if user is in docker group
if ! groups $CURRENT_USER | grep -q docker; then
    echo -e "${YELLOW}⚠️  Adding $CURRENT_USER to docker group...${NC}"
    sudo usermod -aG docker $CURRENT_USER
    echo -e "${YELLOW}⚠️  Please logout and login again for group changes${NC}"
    exit 1
fi

# Check current n8n setup
echo -e "${BLUE}🔍 Checking existing n8n setup...${NC}"
N8N_PROCESS=$(ps aux | grep n8n | grep -v grep || echo "")
if [ -n "$N8N_PROCESS" ]; then
    echo -e "${GREEN}✅ n8n is running:${NC}"
    echo "$N8N_PROCESS"
else
    echo -e "${RED}❌ n8n not found in processes${NC}"
fi

# Check ports
echo -e "${BLUE}🔍 Checking port availability...${NC}"
PORT_5678=$(sudo netstat -tlnp | grep :5678 || echo "")
PORT_3000=$(sudo netstat -tlnp | grep :3000 || echo "")

if [ -n "$PORT_5678" ]; then
    echo -e "${GREEN}✅ Port 5678 (n8n) is in use:${NC}"
    echo "$PORT_5678"
else
    echo -e "${YELLOW}⚠️  Port 5678 (n8n) is not in use${NC}"
fi

if [ -n "$PORT_3000" ]; then
    echo -e "${RED}❌ Port 3000 is already in use:${NC}"
    echo "$PORT_3000"
    echo -e "${YELLOW}Please stop the service using port 3000 before continuing${NC}"
    exit 1
else
    echo -e "${GREEN}✅ Port 3000 is available${NC}"
fi

# Create project directory
echo -e "${BLUE}📁 Setting up project directory...${NC}"
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

echo -e "${GREEN}✅ Ready for deployment in: $PROJECT_DIR${NC}"
echo -e "${BLUE}📋 Next steps:${NC}"
echo "1. Transfer your project files to: $PROJECT_DIR"
echo "2. Run: docker-compose up -d --build"
echo "3. Configure nginx for www.trart.uk"
echo "4. Set up SSL with certbot"