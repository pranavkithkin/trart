import { NextRequest, NextResponse } from 'next/server'

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

    // Here you would typically:
    // 1. Send data to your n8n webhook
    // 2. Save to database
    // 3. Send confirmation email
    // 4. Add to CRM

    // Send data to n8n webhook
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'audit_request',
            data: {
              name,
              email,
              company,
              phone: data.phone || '',
              companySize: data.companySize || '',
              revenue: data.revenue || '',
              challenges,
              currentAutomation: data.currentAutomation || '',
              timeline: data.timeline || '',
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
    console.log('Audit form submission:', data)

    return NextResponse.json({ 
      success: true,
      message: 'Audit request submitted successfully' 
    })

  } catch (error) {
    console.error('Error processing audit form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
