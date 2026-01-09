import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const phone = formData.get('phone') as string
        const message = formData.get('message') as string
        const cv = formData.get('cv') as File

        if (!name || !email || !phone || !cv) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Convert File to Buffer for nodemailer
        const bytes = await cv.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // Create transporter
        // NOTE: User must provide SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'pranvkithkin11@gmail.com',
            subject: `New Career Application: ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message || 'No message provided'}
      `,
            attachments: [
                {
                    filename: cv.name,
                    content: buffer,
                },
            ],
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error in careers API:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
