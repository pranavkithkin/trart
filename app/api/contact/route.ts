import { NextRequest, NextResponse } from 'next/server'
import { sendToTelegram } from '@/lib/telegram'
import { addToGoogleSheets } from '@/lib/googleSheets'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const { name, email, subject, message } = data
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare form data
    const formData = {
      name,
      email,
      company: data.company || '',
      subject,
      message,
      inquiryType: data.inquiryType || '',
    }

    // Send to Telegram (non-blocking)
    const telegramPromise = sendToTelegram(formData, 'contact').catch(error => {
      console.error('Telegram error:', error)
      return false
    })

    // Add to Google Sheets (non-blocking)
    const sheetsPromise = addToGoogleSheets(formData, 'contact').catch(error => {
      console.error('Google Sheets error:', error)
      return false
    })

    // Wait for both operations to complete
    const [telegramSent, sheetsSaved] = await Promise.all([telegramPromise, sheetsPromise])

    // Log the results
    console.log('Contact form submission:', {
      telegramSent,
      sheetsSaved,
      data: formData
    })

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully',
      telegramSent,
      sheetsSaved
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
