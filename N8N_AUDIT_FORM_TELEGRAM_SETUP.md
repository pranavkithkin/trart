# Complete Guide: Audit Form → n8n → Telegram

## 🎯 Overview

When someone fills out the audit form on your website, it will:
1. Submit form data to your Next.js API
2. API sends data to n8n webhook
3. n8n formats the message
4. Sends beautifully formatted notification to your Telegram

## 📋 Prerequisites

- ✅ n8n running at n8n.trart.uk
- ✅ Telegram account
- ✅ Website with audit form

---

## Step 1: Create Telegram Bot (5 minutes)

### 1.1 Create the Bot

1. Open Telegram and search for **@BotFather**
2. Start a chat and send: `/newbot`
3. Follow prompts:
   - **Bot name**: `Trart Audit Notifications` (or any name you like)
   - **Username**: `trart_audit_bot` (must end with `_bot`)
4. BotFather will give you a **Bot Token** like:
   ```
   123456789:ABCdefGHIjklMNOpqrsTUVwxyz
   ```
5. **Save this token** - you'll need it!

### 1.2 Get Your Chat ID

1. Search for your new bot in Telegram
2. Click **Start** to activate it
3. Send any message to your bot (e.g., "Hello")
4. Open this URL in your browser (replace `YOUR_BOT_TOKEN`):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
5. Look for `"chat":{"id":` - that number is your **Chat ID**
   ```json
   "chat": {
     "id": 123456789,  ← This is your Chat ID
     "first_name": "Your Name",
     ...
   }
   ```
6. **Save this Chat ID**!

**Alternative method to get Chat ID:**
- Forward any message to **@userinfobot** - it will show your ID

---

## Step 2: Import Workflow to n8n (3 minutes)

### 2.1 Access n8n

1. Go to https://n8n.trart.uk
2. Log in to your n8n instance

### 2.2 Import the Workflow

1. Click **"Workflows"** in the sidebar
2. Click **"Add workflow"** → **"Import from File"**
3. Upload: `audit-form-to-telegram-workflow-fixed.json`
4. The workflow will open with these nodes:
   - **Webhook** (receives form data)
   - **Format Message** (creates nice Telegram message)
   - **Send to Telegram** (sends to your Telegram)
   - **Respond to Webhook** (confirms receipt)

### 2.3 Configure Telegram Node

1. Click on the **"Send to Telegram"** node
2. Click **"Create New Credential"** (first time only)
3. Enter your **Bot Token** from Step 1.1
4. Click **"Save"**
5. In the node, replace `YOUR_TELEGRAM_CHAT_ID` with your **Chat ID** from Step 1.2
6. Click **"Save"** on the node

### 2.4 Activate the Webhook

1. Click on the **"Webhook"** node
2. You'll see the webhook URL:
   ```
   https://n8n.trart.uk/webhook/audit-form
   ```
3. **Copy this URL** - you'll need it in Step 3!
4. Click **"Listen for test event"** to test (optional)

### 2.5 Activate the Workflow

1. Toggle the switch in the top right to **"Active"**
2. The workflow is now live! ✅

---

## Step 3: Connect Website to n8n (2 minutes)

### 3.1 Add Environment Variable

On your **website VM**, add the webhook URL:

```bash
# SSH into website VM
ssh pranvkithkin@trart-website

# Go to your project
cd ~/websites/trart

# Create/edit .env.production file
nano .env.production
```

Add this line (use your actual n8n webhook URL):
```env
NEXT_PUBLIC_WEBHOOK_URL=https://n8n.trart.uk/webhook/audit-form
```

Save and exit (`Ctrl+X`, `Y`, `Enter`)

### 3.2 Rebuild and Restart Docker

```bash
# Rebuild with new environment variable
docker-compose down
docker-compose up -d --build

# Verify it's running
docker ps
docker logs trart-website --tail 20
```

---

## Step 4: Test the Complete Flow (1 minute)

### 4.1 Test the Form

1. Go to https://trart.uk/audit
2. Fill out the audit form with test data
3. Submit the form

### 4.2 Check Telegram

You should receive a message like:

```
🔔 **NEW AI AUDIT REQUEST** 🔔

📋 **Contact Information:**
👤 **Name:** John Smith
📧 **Email:** john@company.com
🏢 **Company:** Acme Corp
📞 **Phone:** +1 555 123 4567

💼 **Business Details:**
🔥 **Current Challenges:** Manual processes taking too long

⚡ **Automation Level:** Basic tools (email, spreadsheets)

⏰ **Timeline:** Within 1 month

🕒 **Submitted:** 2025-11-02T07:30:00.000Z
🌐 **Source:** website

---
💡 **Ready for consultation scheduling!**
```

### 4.3 Troubleshooting

**If you don't receive the Telegram message:**

1. **Check n8n workflow execution:**
   - Go to n8n → **"Executions"** tab
   - Look for errors in red
   - Click on execution to see details

2. **Check webhook URL is correct:**
   ```bash
   # On website VM
   docker exec trart-website env | grep WEBHOOK
   ```

3. **Test webhook directly:**
   ```bash
   curl -X POST https://n8n.trart.uk/webhook/audit-form \
     -H "Content-Type: application/json" \
     -d '{
       "type": "audit_request",
       "data": {
         "name": "Test User",
         "email": "test@example.com",
         "company": "Test Co",
         "challenges": "Testing webhook",
         "timestamp": "2025-11-02T12:00:00Z",
         "source": "manual_test"
       }
     }'
   ```

4. **Check Telegram bot token:**
   - Make sure you clicked "Start" in your bot
   - Verify the token is correct in n8n credentials

5. **Check Chat ID:**
   - Make sure it's just the number (no quotes)
   - Try sending yourself a message with @userinfobot to confirm

---

## Step 5: Customize (Optional)

### 5.1 Customize Message Format

In n8n, edit the **"Format Message"** node to change the Telegram message format:

```
🔔 **NEW LEAD!** 🔔

👤 **Name:** {{$node["Webhook"].json["data"]["name"]}}
📧 **Email:** {{$node["Webhook"].json["data"]["email"]}}
🏢 **Company:** {{$node["Webhook"].json["data"]["company"]}}

Add your own emojis and text here!
```

### 5.2 Add More Actions

You can extend the workflow by adding nodes after the Telegram node:

- **Save to Google Sheets** (track all leads)
- **Send to Slack** (notify your team)
- **Create Notion page** (add to your CRM)
- **Send email** (auto-reply to the customer)
- **Create calendar event** (schedule follow-up)

To add a node:
1. Click the **"+"** after "Send to Telegram" node
2. Search for the service you want
3. Configure and connect it

### 5.3 Add Notification Sounds

Edit Telegram node → Options → Enable notifications:
```
Disable Notification: No (to get sound alerts)
```

---

## 📊 What You'll Get

Every time someone fills out the audit form, you'll instantly receive:

✅ **Instant Telegram notification** (with sound)  
✅ **All form data** beautifully formatted  
✅ **Contact information** ready to copy  
✅ **Business context** to prepare for the call  
✅ **Timeline & urgency** to prioritize leads  

---

## 🔒 Security Notes

1. **Never commit the Bot Token** to git
2. **Keep your .env.production** out of version control
3. **The webhook URL** should be HTTPS only (you already have this ✅)
4. **Chat ID** is safe to share (but don't share your Bot Token!)

---

## 🚀 Production Checklist

- [ ] Telegram bot created and tested
- [ ] n8n workflow imported and active
- [ ] Environment variable set on website VM
- [ ] Docker container rebuilt with new env
- [ ] Test form submission successful
- [ ] Telegram notification received
- [ ] Message format looks good
- [ ] Bot Token kept secure

---

## 🎁 Bonus: Mobile Notifications

Install **Telegram Desktop** or the **Telegram mobile app** to get:
- Push notifications on your phone
- Desktop alerts while working
- Quick access to respond to leads

---

## Need Help?

If something isn't working:

1. Check n8n execution logs
2. Check Docker logs: `docker logs trart-website`
3. Check nginx logs: `sudo tail -f /var/log/nginx/trart.error.log`
4. Test the webhook directly with curl (see troubleshooting section)

---

## Why n8n is Perfect for This

✅ **Visual workflow** - Easy to understand and modify  
✅ **Self-hosted** - Your data stays on your server  
✅ **No code required** - Just click and connect  
✅ **Extensible** - Add more integrations anytime  
✅ **Free** - No per-message costs like Zapier  
✅ **Reliable** - Runs 24/7 on your VM  

You already have the infrastructure - just connect the pieces! 🎯

