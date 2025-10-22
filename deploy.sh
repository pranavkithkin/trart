#!/bin/bash

# GCP Deployment Script for Trart Website
# This script deploys the Next.js website to Google Cloud Run

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment to Google Cloud Platform${NC}"

# Get current project
CURRENT_PROJECT=$(gcloud config get-value project)
echo -e "${GREEN}✅ Using current project: $CURRENT_PROJECT${NC}"
echo -e "${BLUE}ℹ️  Deploying to existing pkp-material-dashboard infrastructure${NC}"

# Enable required APIs
echo -e "${BLUE}🔧 Enabling required APIs...${NC}"
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable container.googleapis.com

# Check existing infrastructure
echo -e "${BLUE}🔍 Your existing infrastructure:${NC}"
gcloud compute instances list

# Build and deploy to Cloud Run in the same project
echo -e "${BLUE}🏗️  Building and deploying to Cloud Run...${NC}"
gcloud run deploy trart-website \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000 \
  --memory 1Gi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10

# Get the service URL
SERVICE_URL=$(gcloud run services describe trart-website --region us-central1 --format "value(status.url)")
echo -e "${GREEN}✅ Deployment successful!${NC}"
echo -e "${GREEN}🌐 Service URL: $SERVICE_URL${NC}"

# Set up n8n integration with your existing VM (same region for better performance)
echo -e "${BLUE}🔧 Setting up n8n integration with your existing VM...${NC}"
VM_IP="35.239.199.150"
echo -e "${YELLOW}🔗 Your existing VM IP: $VM_IP${NC}"

# Set environment variables for n8n webhooks (assuming n8n runs on port 5678)
gcloud run services update trart-website \
  --set-env-vars="NEXT_PUBLIC_WEBHOOK_URL=http://$VM_IP:5678/webhook/audit,NEXT_PUBLIC_CONTACT_WEBHOOK_URL=http://$VM_IP:5678/webhook/contact" \
  --region us-central1 \
  --quiet

echo -e "${GREEN}✅ Environment variables set for n8n integration${NC}"

# Optional: Map custom domain
read -p "Do you want to map custom domain www.trart.uk now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}🌐 Mapping custom domain...${NC}"
    gcloud beta run domain-mappings create \
      --service trart-website \
      --domain www.trart.uk \
      --region us-central1
    
    echo -e "${YELLOW}⚠️  DNS Configuration Required:${NC}"
    echo "Update your DNS records at your domain registrar (where you bought trart.uk):"
    echo "   CNAME: www → ghs.googlehosted.com"
    echo "   A: @ → [Google will provide the IP after domain mapping]"
    echo ""
    echo "🔗 Verification link will be provided by Google Cloud Console"
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${BLUE}📋 Your Trart Infrastructure:${NC}"
echo "🌐 Website: $SERVICE_URL"
echo "🤖 n8n Instance: http://$VM_IP:5678 (VM: pranav-cloud-console)"
echo "📊 Monitor: gcloud run logs tail trart-website --region us-central1"
echo "🔧 Both services running in: pkp-material-dashboard project"
echo ""
echo -e "${YELLOW}💡 Next steps:${NC}"
echo "1. Test your website at the Cloud Run URL"
echo "2. Verify n8n webhooks are working"
echo "3. Update DNS for www.trart.uk domain"
echo "4. Test contact forms end-to-end"