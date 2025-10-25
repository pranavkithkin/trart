#!/bin/bash

# VM Update Script - Updates your GCP VM with latest git changes
# Run this on your local machine or directly on the VM

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 VM Update Script${NC}"
echo -e "${BLUE}📍 This will update your GCP VM with latest git changes${NC}"
echo ""

# Check if running locally or remotely
if [ -n "$1" ] && [ "$1" = "remote" ]; then
    echo -e "${BLUE}🔄 Running remote update on GCP VM...${NC}"
    gcloud compute ssh pranav-cloud-console -- "cd ~/trart-website && git pull origin main && docker-compose down && docker-compose up -d --build && echo '✅ Update completed successfully!'"
else
    echo -e "${BLUE}🔄 Running local update...${NC}"
    echo -e "${YELLOW}📋 Make sure you're in the project directory${NC}"
    echo -e "${BLUE}📥 Pulling latest changes...${NC}"
    git pull origin main

    echo -e "${BLUE}🐳 Stopping Docker services...${NC}"
    docker-compose down

    echo -e "${BLUE}🏗️  Rebuilding and starting services...${NC}"
    docker-compose up -d --build

    echo -e "${GREEN}✅ Update completed!${NC}"
    echo ""
    echo -e "${BLUE}📊 Checking service status:${NC}"
    docker-compose ps

    echo ""
    echo -e "${YELLOW}🔗 Test your website:${NC}"
    echo "   🌐 Website: https://www.trart.uk"
    echo "   🤖 n8n: https://n8n.trart.uk"
fi

echo ""
echo -e "${GREEN}🎉 Update completed successfully!${NC}"
echo -e "${BLUE}📋 Next steps:${NC}"
echo "1. Test your website: https://www.trart.uk/audit"
echo "2. Set up n8n workflows: https://n8n.trart.uk"
echo "3. Configure Telegram bot in n8n"
echo "4. Submit test form and check Telegram"
