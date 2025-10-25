#!/bin/bash

# Update Deployment Script for GCP Server
# This script pulls latest changes and redeploys the application

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment update on GCP server${NC}"

# Get current user and setup paths
CURRENT_USER=$(whoami)
HOME_DIR="/home/$CURRENT_USER"
PROJECT_DIR="$HOME_DIR/trart-website"

echo -e "${GREEN}✅ Current user: $CURRENT_USER${NC}"
echo -e "${BLUE}📁 Project directory: $PROJECT_DIR${NC}"

# Navigate to project directory
cd "$PROJECT_DIR"

# Pull latest changes
echo -e "${BLUE}📥 Pulling latest changes from git...${NC}"
git pull origin main

# Check if new n8n workflow files are present
echo -e "${BLUE}🔍 Checking for new n8n workflow files...${NC}"
if [ -f "audit-form-to-telegram-workflow.json" ]; then
    echo -e "${GREEN}✅ Found audit-form-to-telegram-workflow.json${NC}"
else
    echo -e "${RED}❌ Missing audit-form-to-telegram-workflow.json${NC}"
fi

if [ -f "contact-form-to-telegram-workflow.json" ]; then
    echo -e "${GREEN}✅ Found contact-form-to-telegram-workflow.json${NC}"
else
    echo -e "${RED}❌ Missing contact-form-to-telegram-workflow.json${NC}"
fi

if [ -f "N8N_TELEGRAM_SETUP.md" ]; then
    echo -e "${GREEN}✅ Found N8N_TELEGRAM_SETUP.md${NC}"
else
    echo -e "${RED}❌ Missing N8N_TELEGRAM_SETUP.md${NC}"
fi

# Stop current services
echo -e "${BLUE}🛑 Stopping current services...${NC}"
docker-compose down

# Rebuild and start services
echo -e "${BLUE}🏗️  Rebuilding and starting services...${NC}"
docker-compose up -d --build

# Wait a moment for services to start
echo -e "${YELLOW}⏳ Waiting for services to start...${NC}"
sleep 10

# Check service status
echo -e "${BLUE}📊 Checking service status...${NC}"
docker-compose ps

# Check if website is responding
echo -e "${BLUE}🌐 Testing website availability...${NC}"
if curl -s -f http://localhost:3000 > /dev/null; then
    echo -e "${GREEN}✅ Website is running on port 3000${NC}"
else
    echo -e "${RED}❌ Website not responding on port 3000${NC}"
fi

# Check if n8n is responding
echo -e "${BLUE}🤖 Testing n8n availability...${NC}"
if curl -s -f http://localhost:5678 > /dev/null; then
    echo -e "${GREEN}✅ n8n is running on port 5678${NC}"
else
    echo -e "${RED}❌ n8n not responding on port 5678${NC}"
fi

# Test webhook endpoints
echo -e "${BLUE}🪝 Testing webhook endpoints...${NC}"
if curl -s -f http://localhost:5678/webhook/audit > /dev/null; then
    echo -e "${GREEN}✅ Audit webhook endpoint is accessible${NC}"
else
    echo -e "${YELLOW}⚠️  Audit webhook endpoint may need n8n workflow setup${NC}"
fi

if curl -s -f http://localhost:5678/webhook/contact > /dev/null; then
    echo -e "${GREEN}✅ Contact webhook endpoint is accessible${NC}"
else
    echo -e "${YELLOW}⚠️  Contact webhook endpoint may need n8n workflow setup${NC}"
fi

echo -e "${GREEN}🎉 Update deployment completed!${NC}"
echo ""
echo -e "${BLUE}📋 Next steps:${NC}"
echo "1. Set up n8n workflows in the web interface"
echo "2. Configure Telegram bot credentials"
echo "3. Update Cloud Run environment variables"
echo "4. Test form submissions"
echo ""
echo -e "${YELLOW}📚 Setup guide: N8N_TELEGRAM_SETUP.md${NC}"
echo -e "${YELLOW}🔗 n8n Web Interface: http://localhost:5678${NC}"

# Show recent logs
echo -e "${BLUE}📄 Recent application logs:${NC}"
docker-compose logs --tail=20 trart-website
