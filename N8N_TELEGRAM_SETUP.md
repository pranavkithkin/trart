# n8n + Telegram Integration Setup

This guide will help you set up an automated workflow that sends AI audit form submissions directly to your Telegram chat.

## 🚀 Quick Setup

### Step 1: Set up Telegram Bot

1. **Message BotFather on Telegram:**
   - Search for `@BotFather` in Telegram
   - Send `/newbot` and follow the instructions
   - Save your bot token (looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

2. **Get your Chat ID:**
   - Message your new bot
   - Go to `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Look for the `"chat":{"id":123456789}` in the response
   - Save this chat ID

### Step 2: Set up n8n (if not already running)

1. **Install n8n:**
   ```bash
   npm install -g n8n
   ```

2. **Run n8n:**
   ```bash
   n8n start
   ```

3. **Access n8n:**
   - Open `http://localhost:5678` in your browser
   - Create a new workflow

### Step 3: Import the Workflows

1. **Download both workflow files:**
   - `audit-form-to-telegram-workflow.json` (for AI audit submissions)
   - `contact-form-to-telegram-workflow.json` (for contact form submissions)

2. **Import workflows into n8n:**
   - In n8n, click the menu (☰) → "Import from File"
   - Import `audit-form-to-telegram-workflow.json` first
   - Import `contact-form-to-telegram-workflow.json` second
   - Each workflow will appear with 4 nodes

3. **Configure Telegram Nodes:**
   - For each workflow, double-click the "Send to Telegram" node
   - Click on "Credentials" tab
   - Create new Telegram API credentials:
     - **Name:** Telegram Bot
     - **Bot Token:** Your bot token from BotFather
   - In Parameters tab, update:
     - **Chat ID:** Your chat ID from step 1.2

### Step 4: Configure Webhook URLs

1. **Get your n8n webhook URLs:**
   - In the audit workflow, click on the Webhook node
   - Copy the "Test URL" (ends with `/webhook/audit`)
   - In the contact workflow, click on the Webhook node
   - Copy the "Test URL" (ends with `/webhook/contact`)

2. **Update your environment variables:**
   ```bash
   # In your project root, create or update .env.local
   NEXT_PUBLIC_WEBHOOK_URL=https://your-n8n-instance.com/webhook/audit
   NEXT_PUBLIC_CONTACT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact
   ```

3. **Deploy your changes:**
   ```bash
   # If using Vercel:
   vercel --prod

   # If using Google Cloud App Engine:
   gcloud app deploy
   ```

## 📋 How It Works

**For AI Audit Form:**
1. **Form submission** → Your Next.js API (`/api/audit`)
2. **API forwards** → Data to n8n webhook (`/webhook/audit`)
3. **n8n formats** → Data into a nice message
4. **Telegram sends** → Formatted message to your chat

**For Contact Form:**
1. **Form submission** → Your Next.js API (`/api/contact`)
2. **API forwards** → Data to n8n webhook (`/webhook/contact`)
3. **n8n formats** → Data into a nice message
4. **Telegram sends** → Formatted message to your chat

## 🎯 Telegram Message Format

**AI Audit Form messages:**

```
🔔 NEW AI AUDIT REQUEST 🔔

📋 Contact Information:
👤 Name: John Doe
📧 Email: john@company.com
🏢 Company: Acme Corp
📞 Phone: +1 (555) 123-4567

💼 Business Details:
🔥 Current Challenges: We're struggling with manual processes...

⚡ Automation Level: Basic automation (email, scheduling)
💰 Budget Range: $5,000 - $10,000/month
⏰ Timeline: Within 1 month

🕒 Submitted: 2024-01-15T10:30:00.000Z
🌐 Source: website

---
💡 Ready for consultation scheduling!
```

**Contact Form messages:**

```
📬 NEW CONTACT FORM MESSAGE 📬

👤 Name: Jane Smith
📧 Email: jane@company.com
🏢 Company: Tech Solutions Inc

📝 Subject: Partnership Inquiry

💬 Message:
Hi! I'm interested in exploring partnership opportunities with your AI automation services. We have several clients who could benefit from your audit services.

🏷️ Inquiry Type: Partnership

🕒 Received: 2024-01-15T14:20:00.000Z
🌐 Source: website

---
✨ Ready for response!
```

## 🔧 Customization Options

### Change Message Format

1. In n8n, double-click "Format Message" node
2. Edit the message template in the "Values" section
3. Use n8n expressions like `{{$json["data"]["name"]}}` for dynamic data

### Add More Fields

The workflow already includes all form fields:
- ✅ Name, Email, Company, Phone
- ✅ Business Challenges
- ✅ Current Automation Level
- ✅ Budget Range
- ✅ Timeline
- ✅ Submission timestamp

### Set Up Multiple Recipients

1. Duplicate the "Send to Telegram" node
2. Connect both to the "Format Message" node
3. Add different Chat IDs for each recipient

## 🛠️ Troubleshooting

### Common Issues

**"Webhook not working":**
- Check if your n8n instance is accessible from the internet
- Verify the webhook URL in your environment variables
- Test the webhook in n8n's webhook node

**"Telegram not sending":**
- Verify your bot token is correct
- Check if your chat ID is correct (should be a number, not username)
- Make sure you've messaged the bot at least once

**"Message formatting broken":**
- Check for special characters in form data that might break Markdown
- Test with simple data first

### Test the Integration

1. **Test webhook:**
   ```bash
   curl -X POST https://your-n8n-instance.com/webhook/audit \
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
   ```

2. **Test form submission:**
   - Go to your audit form page
   - Fill out and submit the form
   - Check if you receive the message in Telegram

## 🔒 Security Notes

- **Bot Token:** Keep your bot token secure and never commit it to version control
- **Chat ID:** Be careful who has access to your Telegram chat
- **Webhook URL:** Consider using HTTPS for production webhooks

## 📚 Advanced Features

### Add File Attachments

If you want to receive form data as files:

1. Add a "Write Binary File" node after "Format Message"
2. Connect to Telegram node with file option

### Add Database Storage

1. Add a database node (PostgreSQL, MongoDB, etc.)
2. Connect after the Webhook node
3. Store submissions for later analysis

### Add Email Notifications

1. Add an Email node parallel to Telegram
2. Send email alerts to team members

## 🎉 You're All Set!

Once configured, every AI audit form submission will automatically appear in your Telegram chat with all the details formatted nicely. No more checking email or logging into dashboards!

---

**Need Help?** Check the n8n documentation at https://docs.n8n.io/ or join the n8n community for support.
