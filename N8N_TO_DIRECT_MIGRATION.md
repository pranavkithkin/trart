# Migration from n8n to Direct Integration

## 🎯 What Changed

Your form automation has been migrated from n8n (hosted at n8n.trart.uk) to a **direct coded integration** that sends data to:
1. **Telegram** - Instant notifications
2. **Google Sheets** - Automatic data storage

## 📁 Files Created/Modified

### New Files Created:
1. **`lib/telegram.ts`** - Telegram bot integration
2. **`lib/googleSheets.ts`** - Google Sheets integration
3. **`.env.example`** - Environment variables template
4. **`TELEGRAM_SHEETS_SETUP.md`** - Complete setup guide

### Modified Files:
1. **`app/api/audit/route.ts`** - Updated to use Telegram & Sheets
2. **`app/api/contact/route.ts`** - Updated to use Telegram & Sheets

## 📦 Package Installed

```bash
npm install googleapis
```

## ⚙️ Quick Setup Steps

### 1. Create Telegram Bot
- Message `@BotFather` on Telegram
- Send `/newbot` and follow instructions
- Save the bot token

### 2. Get Telegram Chat ID
- Message your bot
- Visit: `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
- Copy the chat ID

### 3. Set Up Google Sheets
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a service account
- Download the JSON credentials
- Create a Google Sheet with two tabs:
  - "Audit Requests"
  - "Contact Forms"
- Share the sheet with the service account email

### 4. Configure Environment Variables

Create `.env.local` in your project root:

```bash
# Telegram
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Google Sheets
GOOGLE_SHEETS_ID=your_spreadsheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

### 5. Test It

```bash
npm run dev

# Test audit form
curl -X POST http://localhost:3000/api/audit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","company":"Test Co","challenges":"Testing"}'

# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Testing"}'
```

## 🚀 Benefits

✅ No dependency on n8n instance  
✅ Faster and more reliable  
✅ Easier to deploy  
✅ Better error handling  
✅ Free to run (no server costs)  
✅ Data automatically saved in Google Sheets  

## 📖 Full Documentation

See **`TELEGRAM_SHEETS_SETUP.md`** for complete step-by-step setup instructions with troubleshooting guide.

## 🔄 Next Steps

1. Follow the setup guide in `TELEGRAM_SHEETS_SETUP.md`
2. Add environment variables to your `.env.local`
3. Test locally with the curl commands above
4. Add the same environment variables to your production hosting (Vercel/App Engine)
5. Deploy and test in production

## 💡 Notes

- The old n8n webhooks are no longer needed
- All form submissions now go directly to Telegram and Google Sheets
- If either service fails, the form will still return success (graceful degradation)
- Check your server logs to monitor integration status
