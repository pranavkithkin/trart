import { NextRequest, NextResponse } from 'next/server'
import { sendToTelegram } from '@/lib/telegram'
import { addToGoogleSheets } from '@/lib/googleSheets'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const { name, email, company, challenges } = data
    
    if (!name || !email || !company || !challenges) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare form data
    const formData = {
      name,
      email,
      company,
      phone: data.phone || '',
      companySize: data.companySize || '',
      revenue: data.revenue || '',
      challenges,
      currentAutomation: data.currentAutomation || '',
      timeline: data.timeline || '',
    }

    // Send to Telegram (non-blocking)
    const telegramPromise = sendToTelegram(formData, 'audit').catch(error => {
      console.error('Telegram error:', error)
      return false
    })

    // Add to Google Sheets (non-blocking)
    const sheetsPromise = addToGoogleSheets(formData, 'audit').catch(error => {
      console.error('Google Sheets error:', error)
      return false
    })

    // Wait for both operations to complete
    const [telegramSent, sheetsSaved] = await Promise.all([telegramPromise, sheetsPromise])

    // Log the results
    console.log('Audit form submission:', {
      telegramSent,
      sheetsSaved,
      data: formData
    })

    return NextResponse.json({ 
      success: true,
      message: 'Audit request submitted successfully',
      telegramSent,
      sheetsSaved
    })

  } catch (error) {
    console.error('Error processing audit form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
