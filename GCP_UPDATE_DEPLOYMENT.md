# 🚀 Update GCP Deployment with n8n Integration

This guide will walk you through updating your existing GCP deployment with the new Telegram integration.

## 📋 Current Setup (Based on Your Configuration)

- **Cloud Run Service:** `trart-website` in `us-central1`
- **VM Instance:** `pranav-cloud-console` (IP: `35.239.199.150`)
- **n8n Running:** Port 5678 on the VM
- **Remote Git:** `https://github.com/pranavkithkin/trart.git`

## 🛠️ Step 1: Commit and Push Changes to Git

### 1.1 Add All Changes
```bash
# Add all modified files
git add app/api/audit/route.ts
git add app/api/contact/route.ts

# Add all new files (n8n workflows and documentation)
git add N8N_TELEGRAM_SETUP.md
git add audit-form-to-telegram-workflow.json
git add contact-form-to-telegram-workflow.json

# Add any other modified files if needed
git add .
```

### 1.2 Commit Changes
```bash
git commit -m "feat: Add n8n Telegram integration for form submissions

- Enable webhook integration in audit and contact APIs
- Add n8n workflows for Telegram notifications
- Include comprehensive setup documentation
- Support for all form fields with beautiful formatting"
```

### 1.3 Push to Remote Repository
```bash
git push origin main
```

## 🖥️ Step 2: Update GCP Server

### 2.1 Connect to Your VM
```bash
# SSH into your GCP VM
gcloud compute ssh pranav-cloud-console
```

### 2.2 Navigate to Project Directory
```bash
cd ~/trart-website
```

### 2.3 Pull Latest Changes
```bash
# Pull the latest changes from git
git pull origin main

# Verify the new files are present
ls -la | grep -E "(N8N_TELEGRAM_SETUP|workflow.*json)"
```

### 2.4 Stop Current Services
```bash
# Stop the current Docker services
docker-compose down

# Or if running with PM2/systemd
sudo systemctl stop trart-website
```

## 🐳 Step 3: Deploy Updated Application

### Option A: Using Docker Compose (Recommended for your setup)

```bash
# Build and start the updated services
docker-compose up -d --build

# Check if services are running
docker-compose ps

# View logs to ensure everything started correctly
docker-compose logs -f trart-website
```

### Option B: Using Your Deploy Script

```bash
# Run the deployment script from your local machine
./deploy.sh

# This will:
# 1. Deploy to Cloud Run
# 2. Set environment variables for n8n webhooks
# 3. Update your existing infrastructure
```

## 🤖 Step 4: Set Up n8n Workflows

### 4.1 Access n8n Interface
```bash
# Check if n8n is running
curl http://localhost:5678

# Or access via VM IP
# http://35.239.199.150:5678
```

### 4.2 Import Workflows
1. Open n8n in your browser: `http://35.239.199.150:5678`
2. Click the menu (☰) → "Import from File"
3. Import `audit-form-to-telegram-workflow.json`
4. Import `contact-form-to-telegram-workflow.json`

### 4.3 Configure Telegram Integration

#### Create Telegram Bot:
1. Message `@BotFather` on Telegram
2. Send `/newbot` and follow instructions
3. Save your bot token (format: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

#### Get Your Chat ID:
1. Message your new bot on Telegram
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Find your chat ID in the JSON response (look for `"chat":{"id":123456789}`)

#### Configure n8n:
1. In each workflow, double-click "Send to Telegram" node
2. Click "Credentials" tab
3. Create new credential:
   - **Name:** Telegram Bot
   - **Bot Token:** Your bot token
4. In "Parameters" tab, update **Chat ID** with your chat ID

### 4.4 Test n8n Webhooks
```bash
# Test audit webhook
curl -X POST http://35.239.199.150:5678/webhook/audit \
  -H "Content-Type: application/json" \
  -d '{
    "type": "audit_request",
    "data": {
      "name": "Test User",
      "email": "test@example.com",
      "company": "Test Company",
      "challenges": "Test challenge",
      "timestamp": "2024-01-15T10:30:00.000Z",
      "source": "test"
    }
  }'

# Test contact webhook
curl -X POST http://35.239.199.150:5678/webhook/contact \
  -H "Content-Type: application/json" \
  -d '{
    "type": "contact_form",
    "data": {
      "name": "Test User",
      "email": "test@example.com",
      "subject": "Test Subject",
      "message": "Test message",
      "timestamp": "2024-01-15T10:30:00.000Z",
      "source": "website"
    }
  }'
```

## ⚙️ Step 5: Update Environment Variables

### 5.1 Update Cloud Run Environment Variables
```bash
# Set webhook URLs for Cloud Run service
gcloud run services update trart-website \
  --set-env-vars="NEXT_PUBLIC_WEBHOOK_URL=http://35.239.199.150:5678/webhook/audit,NEXT_PUBLIC_CONTACT_WEBHOOK_URL=http://35.239.199.150:5678/webhook/contact" \
  --region us-central1
```

### 5.2 Verify Environment Variables
```bash
# Check if environment variables are set correctly
gcloud run services describe trart-website --region us-central1 --format="export"
```

## 🧪 Step 6: Testing the Integration

### 6.1 Test Form Submissions
1. Visit your website: `https://trart-website-[hash].us-central1.run.app`
2. Go to the Audit page: `/audit`
3. Fill out and submit the AI audit form
4. Check if you receive the message in Telegram

### 6.2 Test Contact Form
1. Go to the Contact page: `/contact`
2. Fill out and submit the contact form
3. Verify Telegram notification

### 6.3 Monitor Logs
```bash
# Monitor Cloud Run logs
gcloud run logs tail trart-website --region us-central1

# Monitor VM logs
docker-compose logs -f trart-website

# Monitor n8n logs
docker-compose logs -f n8n
```

## 🔧 Troubleshooting

### Common Issues:

**"Webhook connection failed":**
- Verify n8n is running on port 5678
- Check VM firewall allows port 5678
- Ensure webhook URLs are correct in environment variables

**"Telegram not sending messages":**
- Verify bot token and chat ID are correct
- Check if you've messaged the bot at least once
- Ensure n8n has internet access

**"Form submissions not working":**
- Check Next.js logs for errors
- Verify environment variables are loaded
- Test webhook endpoints directly with curl

### Useful Commands:

```bash
# Check service status
gcloud run services describe trart-website --region us-central1

# View VM processes
gcloud compute ssh pranav-cloud-console -- "ps aux | grep -E '(node|n8n|next)'"

# Check Docker containers
gcloud compute ssh pranav-cloud-console -- "docker ps"

# View n8n workflows
curl http://35.239.199.150:5678/rest/workflows
```

## 🎉 Step 7: Verification

### 7.1 Check Integration Status
```bash
# Test complete flow
echo "✅ Git repository updated"
echo "✅ Code deployed to GCP"
echo "✅ n8n workflows imported"
echo "✅ Telegram bot configured"
echo "✅ Webhooks connected"
echo "✅ Environment variables set"
echo "✅ Forms tested successfully"
```

### 7.2 Monitor Performance
```bash
# Set up monitoring
gcloud run services logs tail trart-website --region us-central1 --format="table(timestamp,severity,text)"

# Check resource usage
gcloud run services describe trart-website --region us-central1 --format="export"
```

## 📚 Additional Resources

- **n8n Documentation:** https://docs.n8n.io/
- **Telegram Bot API:** https://core.telegram.org/bots/api
- **GCP Cloud Run:** https://cloud.google.com/run/docs
- **Your setup guide:** `N8N_TELEGRAM_SETUP.md`

---

**🎯 You're All Set!**

Once completed, every form submission on your website will automatically appear in your Telegram chat with beautiful formatting and all the details you need to follow up with potential clients!
