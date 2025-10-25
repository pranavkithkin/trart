# 🐳 Your Current VM Setup (Explained)

Based on your project files and description, here's exactly how your deployment works:

## 📊 **Current Architecture:**

```
🌐 Domains:
├── www.trart.uk → Your Next.js Website
└── n8n.trart.uk → n8n Interface

🚀 GCP VM (pranav-cloud-console):
├── 🐳 Docker Containers:
│   ├── trart-website (Next.js app on port 3000)
│   └── n8n (n8n on port 5678)
│
└── 🌐 nginx (Reverse Proxy):
    ├── Routes www.trart.uk → trart-website:3000
    └── Routes n8n.trart.uk → n8n:5678
```

## 🔄 **Migration to Git-Based Deployment**

### **Step 1: Understand Current Status**
Run these commands on your **local machine** to see what's currently deployed:

```bash
# Check if you have git repository
git status

# Check current remote
git remote -v

# See current services (if you have gcloud CLI)
gcloud compute instances list
gcloud run services list  # If you have Cloud Run too
```

### **Step 2: Backup Current Working Setup**
First, let's backup your current working deployment:

```bash
# SSH into your VM
gcloud compute ssh pranav-cloud-console

# Backup current project directory
cd ~/trart-website
cp -r ~/trart-website ~/trart-website-backup-$(date +%Y%m%d-%H%M%S)

# Backup Docker volumes (if any)
docker volume ls
```

### **Step 3: Set Up Git Repository**
On your **local machine**:

```bash
# If you don't have git repo yet, initialize it
git init

# Add remote repository
git remote add origin https://github.com/pranavkithkin/trart.git

# Add all files
git add .

# Commit current state
git commit -m "Initial commit: Backup of working VM deployment

- Docker Compose setup for VM deployment
- nginx configuration for domain routing
- n8n containerized deployment
- Next.js website container"

# Push to GitHub
git push -u origin main
```

### **Step 4: Update VM with Latest Code**
On your **VM**:

```bash
# Navigate to project directory
cd ~/trart-website

# Pull latest changes from git
git pull origin main

# Stop current services
docker-compose down

# Rebuild and start with new code
docker-compose up -d --build

# Check status
docker-compose ps

# Check logs
docker-compose logs -f trart-website
```

### **Step 5: Update Environment Variables**
On your **VM**:

```bash
# Create or update environment file
nano ~/trart-website/.env.production

# Add these lines:
NEXT_PUBLIC_WEBHOOK_URL=http://localhost:5678/webhook/audit
NEXT_PUBLIC_CONTACT_WEBHOOK_URL=http://localhost:5678/webhook/contact

# Save and exit (Ctrl+X, Y, Enter)
```

### **Step 6: Set Up n8n Workflows**
1. **Access n8n:** `http://n8n.trart.uk`
2. **Import workflows:**
   - Menu (☰) → "Import from File"
   - Import `audit-form-to-telegram-workflow.json`
   - Import `contact-form-to-telegram-workflow.json`

3. **Configure Telegram:**
   - Create bot with @BotFather on Telegram
   - Get bot token: `/newbot` → follow instructions
   - Get your chat ID: Message your bot, then visit `https://api.telegram.org/bot<TOKEN>/getUpdates`
   - In n8n, set bot token and chat ID in both workflows

### **Step 7: Test the Integration**
```bash
# Test webhooks are accessible
curl http://localhost:5678/webhook/audit
curl http://localhost:5678/webhook/contact

# Test your website
curl http://localhost:3000

# Check nginx is routing correctly
curl http://www.trart.uk
curl http://n8n.trart.uk
```

## 🚀 **Alternative: Quick Update Commands**

If you want to quickly update your VM with the new code:

### **Option A: One-Line Update (Local Machine)**
```bash
# Update VM from your local machine
gcloud compute ssh pranav-cloud-console -- "cd ~/trart-website && git pull origin main && docker-compose down && docker-compose up -d --build"
```

### **Option B: Manual Update (On VM)**
```bash
# Run this on your VM
cd ~/trart-website
git pull origin main
docker-compose down
docker-compose up -d --build
```

## 🧪 **Testing After Update**

1. **Visit your website:** `https://www.trart.uk`
2. **Go to audit page:** `https://www.trart.uk/audit`
3. **Submit the audit form**
4. **Check Telegram** for instant notification
5. **Verify n8n interface:** `https://n8n.trart.uk`

## 📊 **Monitor Your Services**

```bash
# Check Docker containers
docker-compose ps

# View logs
docker-compose logs -f trart-website
docker-compose logs -f n8n

# Check nginx status
sudo systemctl status nginx

# Check ports
sudo netstat -tlnp | grep -E '(3000|5678|80)'
```

## 🔧 **Troubleshooting**

**If website not loading:**
```bash
# Check container logs
docker-compose logs trart-website

# Restart nginx
sudo systemctl restart nginx

# Check domain routing
curl -H "Host: www.trart.uk" http://localhost
```

**If n8n not accessible:**
```bash
# Check n8n container
docker-compose logs n8n

# Test n8n directly
curl http://localhost:5678
```

**If webhooks not working:**
```bash
# Test webhook endpoints
curl -X POST http://localhost:5678/webhook/audit \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

## 🎯 **What You've Gained:**

✅ **Git-based deployment** - Easy updates and version control
✅ **Telegram notifications** - Instant form submission alerts
✅ **Automated workflows** - n8n handles all form processing
✅ **Production-ready** - Error handling and logging
✅ **Scalable setup** - Easy to add more features

## 📚 **Next Steps:**

1. **Test the migration** - Submit forms and verify Telegram notifications
2. **Monitor logs** - Check everything is working correctly
3. **Set up monitoring** - Consider adding uptime monitoring
4. **Backup regularly** - Your git repository is now your backup!

---

**Questions?** Let me know if you need help with any of these steps! 🚀
