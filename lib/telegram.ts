const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface AuditFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  companySize?: string;
  revenue?: string;
  challenges: string;
  currentAutomation?: string;
  timeline?: string;
  [key: string]: any;
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  inquiryType?: string;
  [key: string]: any;
}

export async function sendToTelegram(data: AuditFormData | ContactFormData, type: 'audit' | 'contact' = 'audit'): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram credentials not configured. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in your .env file');
    return false;
  }

  let message: string;
  
  if (type === 'audit') {
    message = formatAuditMessage(data as AuditFormData);
  } else if (type === 'contact') {
    message = formatContactMessage(data as ContactFormData);
  } else {
    console.error('Invalid message type');
    return false;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    console.log('✅ Message sent to Telegram successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to send Telegram message:', error);
    return false;
  }
}

function formatAuditMessage(data: AuditFormData): string {
  const timestamp = new Date().toLocaleString('en-US', { 
    timeZone: 'UTC',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  return `🔔 *NEW AI AUDIT REQUEST* 🔔

📋 *Contact Information:*
👤 Name: ${escapeMarkdown(data.name)}
📧 Email: ${escapeMarkdown(data.email)}
🏢 Company: ${escapeMarkdown(data.company)}
${data.phone ? `📞 Phone: ${escapeMarkdown(data.phone)}` : ''}

💼 *Business Details:*
${data.companySize ? `👥 Company Size: ${escapeMarkdown(data.companySize)}` : ''}
${data.revenue ? `💰 Revenue: ${escapeMarkdown(data.revenue)}` : ''}
🔥 Current Challenges:
${escapeMarkdown(data.challenges)}

${data.currentAutomation ? `⚡ Current Automation: ${escapeMarkdown(data.currentAutomation)}` : ''}
${data.timeline ? `⏰ Timeline: ${escapeMarkdown(data.timeline)}` : ''}

🕒 Submitted: ${timestamp}
🌐 Source: synopslabs.com

---
💡 Ready for consultation scheduling!`;
}

function formatContactMessage(data: ContactFormData): string {
  const timestamp = new Date().toLocaleString('en-US', { 
    timeZone: 'UTC',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  return `📬 *NEW CONTACT FORM MESSAGE* 📬

👤 Name: ${escapeMarkdown(data.name)}
📧 Email: ${escapeMarkdown(data.email)}
${data.company ? `🏢 Company: ${escapeMarkdown(data.company)}` : ''}

📝 Subject: ${escapeMarkdown(data.subject)}

💬 Message:
${escapeMarkdown(data.message)}

${data.inquiryType ? `🏷️ Inquiry Type: ${escapeMarkdown(data.inquiryType)}` : ''}

🕒 Received: ${timestamp}
🌐 Source: synopslabs.com

---
✨ Ready for response!`;
}

// Escape special Markdown characters to prevent formatting issues
function escapeMarkdown(text: string): string {
  if (!text) return 'N/A';
  return text
    .replace(/\_/g, '\\_')
    .replace(/\*/g, '\\*')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\~/g, '\\~')
    .replace(/\`/g, '\\`')
    .replace(/\>/g, '\\>')
    .replace(/\#/g, '\\#')
    .replace(/\+/g, '\\+')
    .replace(/\-/g, '\\-')
    .replace(/\=/g, '\\=')
    .replace(/\|/g, '\\|')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\./g, '\\.')
    .replace(/\!/g, '\\!');
}
