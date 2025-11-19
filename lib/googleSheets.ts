import { google } from 'googleapis';

const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

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

// Initialize Google Sheets API
function getGoogleSheetsClient() {
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    throw new Error('Google Sheets credentials not configured. Please set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in your .env file');
  }

  const auth = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  return google.sheets({ version: 'v4', auth });
}

export async function addToGoogleSheets(data: AuditFormData | ContactFormData, type: 'audit' | 'contact'): Promise<boolean> {
  if (!GOOGLE_SHEETS_ID) {
    console.error('Google Sheets ID not configured. Please set GOOGLE_SHEETS_ID in your .env file');
    return false;
  }

  try {
    const sheets = getGoogleSheetsClient();
    const timestamp = new Date().toISOString();

    let values: any[];
    let range: string;

    if (type === 'audit') {
      const auditData = data as AuditFormData;
      range = 'Audit Requests!A:J'; // Sheet name: "Audit Requests"
      values = [
        [
          timestamp,
          auditData.name,
          auditData.email,
          auditData.company,
          auditData.phone || '',
          auditData.companySize || '',
          auditData.revenue || '',
          auditData.challenges,
          auditData.currentAutomation || '',
          auditData.timeline || ''
        ]
      ];
    } else {
      const contactData = data as ContactFormData;
      range = 'Contact Forms!A:G'; // Sheet name: "Contact Forms"
      values = [
        [
          timestamp,
          contactData.name,
          contactData.email,
          contactData.company || '',
          contactData.subject,
          contactData.message,
          contactData.inquiryType || ''
        ]
      ];
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values
      }
    });

    console.log('✅ Data added to Google Sheets successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to add data to Google Sheets:', error);
    return false;
  }
}

// Initialize sheets with headers (call this once to set up your sheets)
export async function initializeGoogleSheets(): Promise<boolean> {
  if (!GOOGLE_SHEETS_ID) {
    console.error('Google Sheets ID not configured');
    return false;
  }

  try {
    const sheets = getGoogleSheetsClient();

    // Create headers for Audit Requests sheet
    const auditHeaders = [
      ['Timestamp', 'Name', 'Email', 'Company', 'Phone', 'Company Size', 'Revenue', 'Challenges', 'Current Automation', 'Timeline']
    ];

    // Create headers for Contact Forms sheet
    const contactHeaders = [
      ['Timestamp', 'Name', 'Email', 'Company', 'Subject', 'Message', 'Inquiry Type']
    ];

    // Add headers to Audit Requests sheet
    await sheets.spreadsheets.values.update({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: 'Audit Requests!A1:J1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: auditHeaders
      }
    });

    // Add headers to Contact Forms sheet
    await sheets.spreadsheets.values.update({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: 'Contact Forms!A1:G1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: contactHeaders
      }
    });

    console.log('✅ Google Sheets initialized with headers successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to initialize Google Sheets:', error);
    return false;
  }
}
