# Google Cloud Platform Deployment Guide

This guide will walk you through deploying the AI Agent Consultancy website to Google Cloud Platform using App Engine.

## Prerequisites

- Google Cloud Platform account
- Google Cloud SDK installed
- Node.js 18+ installed locally
- Git installed

## Step 1: Install Dependencies

```bash
# Install project dependencies
npm install

# Build the project for production
npm run build
```

## Step 2: Set Up Google Cloud

### 2.1 Create a New Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your project ID

### 2.2 Enable Required APIs

```bash
# Enable App Engine API
gcloud services enable appengine.googleapis.com

# Enable Cloud Build API
gcloud services enable cloudbuild.googleapis.com
```

### 2.3 Initialize App Engine

```bash
# Initialize App Engine in your project
gcloud app create --region=us-central

# Set your project
gcloud config set project YOUR_PROJECT_ID
```

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID

# Form submission webhook (n8n or other service)
NEXT_PUBLIC_WEBHOOK_URL=https://your-n8n-instance.com/webhook/audit-form

# Contact form webhook
NEXT_PUBLIC_CONTACT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact-form

# Email service (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Step 4: Create App Engine Configuration

Create `app.yaml` in your project root:

```yaml
runtime: nodejs18

env_variables:
  NODE_ENV: production
  NEXT_PUBLIC_GA_ID: "GA_MEASUREMENT_ID"
  NEXT_PUBLIC_WEBHOOK_URL: "https://your-n8n-instance.com/webhook/audit-form"
  NEXT_PUBLIC_CONTACT_WEBHOOK_URL: "https://your-n8n-instance.com/webhook/contact-form"

automatic_scaling:
  min_instances: 1
  max_instances: 10
  target_cpu_utilization: 0.6

handlers:
  - url: /.*
    script: auto
    secure: always
```

## Step 5: Deploy to App Engine

```bash
# Deploy the application
gcloud app deploy

# Deploy with specific version
gcloud app deploy --version=v1

# View the deployed application
gcloud app browse
```

## Step 6: Set Up Custom Domain (Optional)

### 6.1 Add Custom Domain

1. Go to App Engine > Settings > Custom Domains
2. Click "Add Custom Domain"
3. Follow the verification process
4. Update your DNS records as instructed

### 6.2 Configure SSL

App Engine automatically provides SSL certificates for custom domains.

## Step 7: Set Up Monitoring and Analytics

### 7.1 Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID
3. Update the `NEXT_PUBLIC_GA_ID` environment variable
4. Redeploy the application

### 7.2 Cloud Monitoring

```bash
# Enable Cloud Monitoring
gcloud services enable monitoring.googleapis.com
```

## Step 8: Set Up Form Webhooks

### 8.1 Using n8n

1. Deploy n8n on Google Cloud Run or another service
2. Create webhook nodes for:
   - Audit form submissions
   - Contact form submissions
3. Configure integrations with:
   - Notion (for lead management)
   - Google Sheets (for data storage)
   - Email services (for notifications)

### 8.2 Webhook Endpoints

Create API routes in your Next.js app:

```typescript
// app/api/audit/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  
  // Send to n8n webhook
  const response = await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  
  return Response.json({ success: true })
}
```

## Step 9: Performance Optimization

### 9.1 Enable Compression

Add to `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  // ... other config
}
```

### 9.2 Set Up CDN

1. Go to Cloud CDN in Google Cloud Console
2. Create a new CDN configuration
3. Point to your App Engine service

## Step 10: Security Configuration

### 10.1 Set Up Security Headers

Create `middleware.ts`:

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  return response
}
```

### 10.2 Environment Security

```bash
# Set environment variables securely
gcloud app versions update v1 --set-env-vars="NODE_ENV=production"
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check build logs
   gcloud app logs tail -s default
   ```

2. **Environment Variables Not Loading**
   - Ensure variables are set in `app.yaml`
   - Redeploy after changes

3. **Form Submissions Not Working**
   - Check webhook URLs are correct
   - Verify n8n is running and accessible
   - Check CORS settings

### Useful Commands

```bash
# View logs
gcloud app logs tail -s default

# Check service status
gcloud app services list

# View versions
gcloud app versions list

# Rollback to previous version
gcloud app versions migrate v1

# Delete old versions
gcloud app versions delete v1
```

## Cost Optimization

### App Engine Pricing

- **F1 Instance**: Free tier (28 hours/day)
- **F2 Instance**: $0.05/hour
- **F4 Instance**: $0.10/hour

### Optimization Tips

1. Use F1 instances for development
2. Set up automatic scaling
3. Monitor usage with Cloud Monitoring
4. Use Cloud CDN for static assets

## Backup and Recovery

### Database Backup

If using Cloud SQL:

```bash
# Create backup
gcloud sql backups create --instance=INSTANCE_NAME

# Restore from backup
gcloud sql backups restore BACKUP_ID --instance=INSTANCE_NAME
```

### Application Backup

```bash
# Download source code
gcloud source repos clone PROJECT_ID

# Export environment variables
gcloud app versions describe v1 --format="export" > env-vars.txt
```

## Monitoring and Alerts

### Set Up Alerts

1. Go to Cloud Monitoring > Alerting
2. Create policies for:
   - High error rates
   - High latency
   - Low availability

### Performance Monitoring

```bash
# View performance metrics
gcloud app metrics list

# Check error rates
gcloud app logs read --severity=ERROR
```

## Scaling

### Automatic Scaling

The `app.yaml` configuration includes automatic scaling settings:

```yaml
automatic_scaling:
  min_instances: 1
  max_instances: 10
  target_cpu_utilization: 0.6
```

### Manual Scaling

```bash
# Scale to specific number of instances
gcloud app versions migrate v1 --quiet
```

## Security Best Practices

1. **Environment Variables**: Never commit sensitive data
2. **HTTPS**: Always use HTTPS in production
3. **CORS**: Configure CORS properly
4. **Rate Limiting**: Implement rate limiting for forms
5. **Input Validation**: Validate all form inputs
6. **Error Handling**: Don't expose sensitive information in errors

## Support

For additional help:

- [Google Cloud Documentation](https://cloud.google.com/docs)
- [App Engine Documentation](https://cloud.google.com/appengine/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

## Next Steps

1. Set up monitoring and alerts
2. Configure custom domain
3. Set up form webhooks
4. Implement analytics
5. Set up backup procedures
6. Configure security headers
7. Optimize performance
8. Set up CI/CD pipeline
