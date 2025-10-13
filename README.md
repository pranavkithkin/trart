# AI Agent Consultancy Website

A modern, high-end, interactive website for an AI Agent Consultancy built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Premium, luxury brand aesthetic with futuristic gradients and animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth micro-interactions and scroll-based animations using Framer Motion
- **AI Agent Services**: Comprehensive showcase of AI automation solutions
- **Free Audit Form**: Lead generation with backend integration hooks
- **Contact System**: Multiple contact methods with form validation
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Analytics Ready**: Google Analytics 4 integration

## 🎨 Design Highlights

- **Color Scheme**: Deep indigo/electric blue with neon accents
- **Typography**: Inter font family for modern, clean look
- **Animations**: Gradient motions, hover effects, and scroll animations
- **Glassmorphism**: Modern glass effects and backdrop blur
- **Micro-interactions**: Button hover states, card animations, and transitions

## 📁 Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── demos/             # Demos and templates page
│   ├── contact/           # Contact page
│   └── audit/             # Free audit form page
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── HowItWorks.tsx     # Process section
│   ├── Footer.tsx         # Footer component
│   └── Loading.tsx        # Loading component
├── lib/                   # Utility functions
│   └── animations.ts      # Animation variants
├── public/                # Static assets
└── styles/                # Additional styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: Google Cloud Platform (App Engine)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-agent-consultancy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   NEXT_PUBLIC_WEBHOOK_URL=your_n8n_webhook_url
   NEXT_PUBLIC_CONTACT_WEBHOOK_URL=your_contact_webhook_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Home Page (`/`)
- Animated hero section with gradient background
- "How It Works" process section
- Call-to-action buttons

### Services Page (`/services`)
- AI Agent service offerings
- Pricing information
- Feature comparisons
- Interactive service cards

### About Page (`/about`)
- Company story and mission
- Team member profiles
- Company timeline
- Values and culture

### Demos Page (`/demos`)
- Interactive video demos
- Ready-to-use templates
- Industry-specific solutions

### Contact Page (`/contact`)
- Multiple contact methods
- Contact form with validation
- Office hours and response times
- Social media links

### Audit Page (`/audit`)
- Free AI audit form
- Lead qualification questions
- Success confirmation page
- Integration hooks for CRM

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Primary color palette */ },
  electric: { /* Electric blue palette */ },
  neon: {
    blue: '#00d4ff',
    purple: '#8b5cf6',
    pink: '#f472b6',
    green: '#10b981',
  }
}
```

### Animations
Modify animation variants in `lib/animations.ts`:

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}
```

### Content
Update content in individual page components:
- Hero section: `components/Hero.tsx`
- Services: `app/services/page.tsx`
- About: `app/about/page.tsx`

## 🔧 Form Integration

### Audit Form
The audit form is designed to integrate with n8n workflows:

1. **Set up n8n webhook**
2. **Update webhook URL** in environment variables
3. **Configure CRM integration** in n8n
4. **Test form submission**

### Contact Form
Similar setup for contact form submissions:

1. **Create contact webhook** in n8n
2. **Set up email notifications**
3. **Configure lead management**

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Get Measurement ID
3. Update `NEXT_PUBLIC_GA_ID` in `.env.local`
4. Verify tracking in GA4 dashboard

### Custom Events
Track form submissions and interactions:

```typescript
// Example: Track audit form submission
gtag('event', 'form_submit', {
  event_category: 'engagement',
  event_label: 'audit_form'
});
```

## 🚀 Deployment

### Google Cloud Platform
Follow the detailed deployment guide in `DEPLOYMENT.md`:

1. **Set up GCP project**
2. **Configure App Engine**
3. **Deploy application**
4. **Set up custom domain**
5. **Configure monitoring**

### Alternative Deployment
- **Vercel**: One-click deployment
- **Netlify**: Drag and drop deployment
- **AWS**: Using Amplify or EC2

## 🔒 Security

### Environment Variables
- Never commit sensitive data
- Use secure environment variable management
- Rotate API keys regularly

### Form Security
- Input validation on client and server
- CSRF protection
- Rate limiting for form submissions

### Headers
Security headers configured in `middleware.ts`:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## 📈 Performance

### Optimization Features
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Compression**: Gzip compression enabled
- **Caching**: Static asset caching
- **Lazy Loading**: Images and components loaded on demand

### Performance Monitoring
- Google Analytics performance tracking
- Core Web Vitals monitoring
- Real User Monitoring (RUM)

## 🧪 Testing

### Manual Testing
- Cross-browser compatibility
- Mobile responsiveness
- Form validation
- Animation performance

### Automated Testing
```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build verification
npm run build
```

## 📝 Content Management

### Text Content
Update text content in component files:
- Headlines and descriptions
- Service descriptions
- Team member information
- Contact information

### Images
Replace placeholder images:
- Team photos in `app/about/page.tsx`
- Demo videos in `app/demos/page.tsx`
- Hero background images

### Videos
Update demo videos:
- Replace placeholder video URLs
- Add actual demo recordings
- Optimize for web delivery

## 🔄 Updates and Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor performance metrics
- Update content regularly
- Review and update forms

### Monitoring
- Set up uptime monitoring
- Monitor form submission rates
- Track conversion metrics
- Review error logs

## 📞 Support

### Documentation
- Component documentation in code
- Deployment guide in `DEPLOYMENT.md`
- Animation library in `lib/animations.ts`

### Troubleshooting
- Check browser console for errors
- Verify environment variables
- Test form submissions
- Check network connectivity

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

### Code Standards
- Use TypeScript
- Follow React best practices
- Maintain consistent styling
- Add proper comments

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Lamborghini and luxury tech brands
- **Animation Library**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)
- **Images**: Unsplash (placeholder images)

---

**Built with ❤️ for AI Agent Consultancy**

For questions or support, please contact the development team or create an issue in the repository.
