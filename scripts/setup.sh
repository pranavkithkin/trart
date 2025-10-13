#!/bin/bash

# AI Agent Consultancy Website Setup Script

echo "🚀 Setting up AI Agent Consultancy Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# Google Analytics
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID

# Form submission webhooks
NEXT_PUBLIC_WEBHOOK_URL=https://your-n8n-instance.com/webhook/audit-form
NEXT_PUBLIC_CONTACT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact-form

# Email service (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EOF
    echo "✅ Created .env.local file"
else
    echo "✅ .env.local file already exists"
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Project built successfully"

echo ""
echo "🎉 Setup complete! You can now:"
echo "   • Run 'npm run dev' to start the development server"
echo "   • Run 'npm run build' to build for production"
echo "   • Run 'npm start' to start the production server"
echo ""
echo "📚 Next steps:"
echo "   1. Update .env.local with your actual values"
echo "   2. Replace placeholder images with your brand assets"
echo "   3. Set up your n8n webhooks for form submissions"
echo "   4. Configure Google Analytics"
echo "   5. Deploy to Google Cloud Platform (see DEPLOYMENT.md)"
echo ""
echo "🌐 Development server: http://localhost:3000"
echo "📖 Documentation: README.md"
echo "🚀 Deployment guide: DEPLOYMENT.md"
