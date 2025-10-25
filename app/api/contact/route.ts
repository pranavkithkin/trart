import { NextRequest, NextResponse } from 'next/server'

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

    // Here you would typically:
    // 1. Send data to your n8n webhook
    // 2. Save to database
    // 3. Send confirmation email
    // 4. Notify team members

    // Send data to n8n webhook
    const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'contact_form',
            data: {
              name,
              email,
              company: data.company || '',
              subject,
              message,
              inquiryType: data.inquiryType || '',
              timestamp: new Date().toISOString(),
              source: 'website'
            }
          })
        })
      } catch (error) {
        console.error('Error sending webhook:', error)
        // Continue with success response even if webhook fails
      }
    }

    // Log the data for debugging (remove in production)
    console.log('Contact form submission:', data)

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully' 
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
