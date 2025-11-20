# Direct Telegram & Google Sheets Integration Setup

This guide will help you set up direct integration with Telegram and Google Sheets, replacing the n8n automation with a more reliable coded solution.

## 🎯 Overview

Your forms now send data to:
1. **Telegram** - Instant notifications with formatted messages
2. **Google Sheets** - Automatic data storage for analysis

No more n8n dependency! Everything runs directly in your Next.js application.

---

## 📋 Step 1: Set Up Telegram Bot

### 1.1 Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. **Save the bot token** (looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### 1.2 Get Your Chat ID

**Option A: Using your bot directly**
1. Message your new bot (send any message)
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Look for `"chat":{"id":123456789}`
4. **Save this chat ID**

**Option B: Using a group chat**
1. Create a Telegram group
2. Add your bot to the group
3. Make the bot an admin
4. Send a message in the group
5. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
6. Look for the chat ID (will be negative for groups, like `-1001234567890`)
7. **Save this chat ID**

---

## 📊 Step 2: Set Up Google Sheets

### 2.1 Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 2.2 Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Name it something like `sheets-automation`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### 2.3 Generate Service Account Key

1. Click on your newly created service account
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. **Download the JSON file** - you'll need this!

### 2.4 Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Rename it to something like "Trart Form Submissions"
4. Create two sheets (tabs) in the spreadsheet:
   - Sheet 1: Rename to **"Audit Requests"**
   - Sheet 2: Create new sheet named **"Contact Forms"**
5. **Copy the Spreadsheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/`**`1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`**`/edit`
   - The bold part is your Spreadsheet ID

### 2.5 Share the Sheet with Service Account

1. Open your Google Sheet
2. Click the "Share" button
3. Add the service account email (found in the JSON file: `client_email`)
4. Give it "Editor" permissions
5. Click "Share"

---

## ⚙️ Step 3: Configure Environment Variables

### 3.1 Open the JSON key file you downloaded

It will look like this:
```json
{
  "type": "service_account",
  "project_id": "your-project",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBA...\n-----END PRIVATE KEY-----\n",
  "client_email": "sheets-automation@your-project.iam.gserviceaccount.com",
  ...
}
```

### 3.2 Create or Update `.env.local` file

In your project root, create/update `.env.local`:

```bash
# Telegram Configuration
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=-1001234567890

# Google Sheets Configuration
GOOGLE_SHEETS_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
GOOGLE_SERVICE_ACCOUNT_EMAIL=sheets-automation@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBA...\n-----END PRIVATE KEY-----\n"
```

**Important Notes:**
- Replace the values with your actual credentials
- Keep the quotes around `GOOGLE_PRIVATE_KEY`
- The private key should include `\n` for line breaks
- **Never commit `.env.local` to Git!**

### 3.3 For Production (Vercel/App Engine)

Add the same environment variables to your hosting platform:

**For Vercel:**
```bash
vercel env add TELEGRAM_BOT_TOKEN
vercel env add TELEGRAM_CHAT_ID
vercel env add GOOGLE_SHEETS_ID
vercel env add GOOGLE_SERVICE_ACCOUNT_EMAIL
vercel env add GOOGLE_PRIVATE_KEY
```

**For Google App Engine:**
Add to `app.yaml`:
```yaml
env_variables:
  TELEGRAM_BOT_TOKEN: "your_token"
  TELEGRAM_CHAT_ID: "your_chat_id"
  GOOGLE_SHEETS_ID: "your_sheet_id"
  GOOGLE_SERVICE_ACCOUNT_EMAIL: "your_email"
  GOOGLE_PRIVATE_KEY: "your_key"
```

---

## 🚀 Step 4: Initialize Google Sheets (One-Time Setup)

Create a script to initialize your sheets with headers:

```bash
# Create the initialization script
cat > scripts/init-sheets.ts << 'EOF'
import { initializeGoogleSheets } from '../lib/googleSheets';

async function main() {
  console.log('Initializing Google Sheets...');
  const success = await initializeGoogleSheets();
  
  if (success) {
    console.log('✅ Google Sheets initialized successfully!');
  } else {
    console.error('❌ Failed to initialize Google Sheets');
    process.exit(1);
  }
}

main();
EOF

# Run it (if using ts-node)
npx ts-node scripts/init-sheets.ts
```

Or manually add these headers to your sheets:

**Audit Requests Sheet (Row 1):**
| Timestamp | Name | Email | Company | Phone | Company Size | Revenue | Challenges | Current Automation | Timeline |

**Contact Forms Sheet (Row 1):**
| Timestamp | Name | Email |  |  | Message | Inquiry Type |

---

## 🧪 Step 5: Test the Integration

### 5.1 Start your development server

```bash
npm run dev
```

### 5.2 Test with curl

**Test Audit Form:**
```bash
curl -X POST http://synopslabs.com/api/audit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "phone": "+1234567890",
    "challenges": "Testing the integration"
  }'
```

**Test Contact Form:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "Just testing the integration!"
  }'
```

### 5.3 Check the Results

✅ **Telegram:** You should receive a formatted message in your Telegram chat  
✅ **Google Sheets:** A new row should appear in the appropriate sheet  
✅ **Console:** Check your terminal for success messages

---

## 📱 Message Format Examples

### Audit Request in Telegram:
```
🔔 NEW AI AUDIT REQUEST 🔔

📋 Contact Information:
👤 Name: John Doe
📧 Email: john@company.com
🏢 Company: Acme Corp
📞 Phone: +1 (555) 123-4567

💼 Business Details:
👥 Company Size: 50-200 employees
💰 Revenue: $1M-$5M
🔥 Current Challenges:
We're struggling with manual data entry...

⚡ Current Automation: Basic automation
⏰ Timeline: Within 1 month

🕒 Submitted: Tuesday, November 19, 2024 at 2:30 PM
🌐 Source: synopslabs.com

---
💡 Ready for consultation scheduling!
```

### Contact Form in Telegram:
```
📬 NEW CONTACT FORM MESSAGE 📬

👤 Name: Jane Smith
📧 Email: jane@company.com
🏢 Company: Tech Solutions Inc

📝 Subject: Partnership Inquiry

💬 Message:
Hi! I'm interested in exploring partnership opportunities...

🏷️ Inquiry Type: Partnership

🕒 Received: Tuesday, November 19, 2024 at 3:15 PM
🌐 Source: synopslabs.com

---
✨ Ready for response!
```

---

## 🔧 Troubleshooting

### Telegram Issues

**"Bot token invalid"**
- Verify your bot token is correct
- Make sure there are no extra spaces
- Try creating a new bot with BotFather

**"Chat not found"**
- Make sure you've sent at least one message to the bot
- For groups, ensure the bot is added and is an admin
- Verify the chat ID is correct (negative for groups)

**"Message not being sent"**
- Check your server logs for error messages
- Verify environment variables are loaded
- Test the bot token with: `curl https://api.telegram.org/bot<TOKEN>/getMe`

### Google Sheets Issues

**"Permission denied"**
- Verify you shared the sheet with the service account email
- Check the service account has "Editor" permissions
- Make sure the spreadsheet ID is correct

**"Invalid credentials"**
- Verify the private key is properly formatted with `\n`
- Check the service account email is correct
- Ensure Google Sheets API is enabled in your project

**"Sheet not found"**
- Verify your sheet tabs are named exactly "Audit Requests" and "Contact Forms"
- Check the spreadsheet ID in your .env file
- Make sure the sheet isn't deleted

### General Issues

**"Environment variables not loading"**
- Restart your development server after updating `.env.local`
- Verify file is named exactly `.env.local` (not `.env`)
- Check there are no syntax errors in the file

---

## 🎉 Benefits of This Solution

✅ **No External Dependencies** - No need for n8n instance  
✅ **More Reliable** - Direct API calls, no middleman  
✅ **Faster** - Instant notifications  
✅ **Easier to Deploy** - Just environment variables  
✅ **Better Error Handling** - Full control over error responses  
✅ **Cost Effective** - No separate server needed  
✅ **Data Backup** - Automatic storage in Google Sheets  

---

## 📊 Monitoring & Analytics

Your Google Sheets now contains all form submissions with:
- Timestamps
- Full contact details
- Business information
- Easy to filter and analyze
- Can be connected to Google Data Studio for dashboards

---

## 🔒 Security Best Practices

1. **Never commit credentials to Git**
   - Add `.env.local` to `.gitignore`
   - Use environment variables on hosting platforms

2. **Rotate credentials periodically**
   - Create new bot tokens every 6-12 months
   - Generate new service account keys annually

3. **Limit service account permissions**
   - Only grant access to the specific spreadsheet
   - Don't share service account keys

4. **Monitor usage**
   - Check Telegram bot updates regularly
   - Review Google Sheets API usage in Cloud Console

---

## 🆘 Need Help?

If you encounter any issues:

1. Check the console logs for error messages
2. Verify all environment variables are set correctly
3. Test each integration separately (Telegram first, then Google Sheets)
4. Review the troubleshooting section above

---

**You're all set! 🎊** 

Your forms will now send data directly to Telegram and Google Sheets without needing n8n!
