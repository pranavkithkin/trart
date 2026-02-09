import {
    Clock,
    Users,
    DollarSign,
    Target,
    TrendingUp,
    CheckCircle,
    Building2,
    LucideIcon,
    FileText
} from 'lucide-react'

export interface CaseStudyResult {
    label: string
    value: string
    change: string
    icon: LucideIcon
}

export interface CaseStudy {
    slug: string
    industry: string
    clientSize: string
    companyName: string
    title: string
    description: string
    challenge: string
    solution: string
    results: CaseStudyResult[]
    summaryResults: string
    quote: string
    author: string
    authorRole: string
    timeline: string
    roi: string
    color: string
    icon: LucideIcon
    // Extended fields for detail pages
    objectives?: string[]
    architecture?: string
    workflows?: string[]
    tools?: string[]
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "zorx-media",
        industry: "Digital Marketing",
        clientSize: "10-20 employees",
        companyName: "Zorx Media",
        title: "Zorx Media: 95% Faster Meeting Scheduling with AI Automation",
        description: "Digital marketing agency eliminates manual scheduling with intelligent n8n automation",
        challenge: "Zorx Media's team was spending 20-30 hours every month just scheduling meetings. Every single meeting took 8-12 minutes of manual work adding it to the calendar, writing emails, and sending confirmations. With 150-200 client meetings each month, this became a huge problem. They had scheduling mistakes, slow responses (sometimes taking a full day), and their team couldn't focus on actual marketing work.",
        solution: "We built a smart meeting scheduler that does everything automatically. When someone requests a meeting through a simple form, the AI reads the details, checks the calendar, creates the meeting with a video link, and sends a professional confirmation email all in just 30 seconds. It works 24/7, never double-books, and handles different time zones perfectly.",
        results: [
            { label: "Scheduling Time", value: "30 sec", change: "95% faster", icon: Clock },
            { label: "Monthly Capacity", value: "500+", change: "200%+ increase", icon: Target },
            { label: "Cost Savings", value: "$10.2K", change: "annually", icon: DollarSign },
            { label: "Error Reduction", value: "98%", change: "accuracy", icon: CheckCircle }
        ],
        summaryResults: "$10,200 saved annually",
        quote: "This automation transformed our scheduling process completely. What used to take our team 8-12 minutes per meeting now happens in 30 seconds with zero errors. We've eliminated scheduling conflicts, our clients get instant confirmations, and our team can focus on delivering exceptional marketing results instead of coordinating calendars. The ROI was immediate—we're now handling 200%+ more meetings with the same team.",
        author: "Mohammed Fazil",
        authorRole: "CEO",
        timeline: "2 days",
        roi: "850%",
        color: "from-violet-500 to-purple-500",
        icon: Clock,
        objectives: [
            "Eliminate 20-30 hours of monthly manual scheduling work",
            "Reduce meeting setup time from 8-12 minutes to under 1 minute",
            "Achieve 98%+ accuracy and eliminate scheduling conflicts",
            "Enable instant client confirmations with professional branding",
            "Scale meeting capacity from 150-200 to 500+ monthly meetings"
        ],

        workflows: [
            "Web form submission triggers n8n workflow execution",
            "Claude AI extracts and validates meeting details from request",
            "Google Calendar API checks availability and prevents conflicts",
            "Automated Google Calendar event creation with Meet link",
            "Google Sheets logging for centralized booking tracking",
            "Branded email confirmation sent via Gmail to client and team"
        ],
        tools: ["n8n (Workflow Automation)", "Claude AI (NLP)", "Google Calendar API", "Gmail API", "Google Sheets Integration", "Web Forms", "Timezone Handler"]
    },
    {
        slug: "bridgewater-management",
        industry: "Business Consulting",
        clientSize: "10-20 employees",
        companyName: "Bridgewater Management Consultancies",
        title: "Bridgewater Management: 99.8% Faster Client Response with AI WhatsApp Agent",
        description: "Business consultancy transforms client engagement with intelligent WhatsApp automation handling 2,000+ monthly conversations",
        challenge: "Bridgewater Management was drowning in WhatsApp messages 80 to 120 every single day. Their consultants spent 4-6 hours daily answering the same questions about business setup costs, visa requirements, and paperwork. Responses took 2-4 hours during the day, and sometimes a full day if someone messaged after work hours. Because of these delays, 30-40% of potential clients lost interest and went elsewhere. They also had no way to know which leads were serious buyers versus people just browsing, and 40% of clients sent voice messages that had to be listened to and typed out manually.",
        solution: "We created an AI WhatsApp assistant that talks to clients instantly, 24/7. It answers common questions about UAE business setup, asks the right questions to understand what each client needs, and figures out who's ready to buy now versus who's just researching. The AI can even listen to voice messages in Arabic and English and respond appropriately. It saves all client information automatically and only sends the serious, qualified leads to the sales team. Everything happens in seconds instead of hours.",
        results: [
            { label: "Response Time", value: "3 sec", change: "99.8% faster", icon: Clock },
            { label: "Lead Capture", value: "92%", change: "+104% increase", icon: Target },
            { label: "Time Saved", value: "100hrs", change: "per month", icon: TrendingUp },
            { label: "Monthly Savings", value: "AED 21K", change: "labor + revenue", icon: DollarSign }
        ],
        summaryResults: "1,580% ROI",
        quote: "The AI WhatsApp assistant has transformed how we engage with potential clients. We're now responding instantly at 2 AM to inquiries from Europe and Asia—something impossible before. Our consultants focus on high-value conversations while the AI handles qualification and information delivery flawlessly. The ROI was visible within the first week.",
        author: "Mahesh Thadani",
        authorRole: "CEO",
        timeline: "3 weeks",
        roi: "1,580%",
        color: "from-emerald-500 to-teal-500",
        icon: Users,
        objectives: [
            "Reduce response time from 2-4 hours to under 1 minute for all inquiries",
            "Automate lead qualification and capture 90%+ complete lead profiles",
            "Provide 24/7 coverage for international clients across all time zones",
            "Save 88-104 hours monthly per consultant on repetitive queries",
            "Increase inquiry-to-client conversion rate by 40% through instant engagement",
            "Handle voice messages automatically with Arabic and English transcription"
        ],

        workflows: [
            "WhatsApp message received triggers n8n workflow with instant acknowledgment",
            "GPT-4 analyzes inquiry and determines intent (FAQ, pricing, qualification, escalation)",
            "Voice messages automatically transcribed using OpenAI Whisper (Arabic/English)",
            "Lead qualification algorithm scores prospect and collects systematic information",
            "Real-time pricing lookup from Google Sheets database based on requirements",
            "Conversation context maintained across sessions for personalized follow-up",
            "Complex queries flagged and escalated to senior consultants with full context",
            "All lead data auto-logged to Google Sheets CRM with qualification score"
        ],
        tools: ["n8n (Workflow Automation)", "WhatsApp Business API", "OpenAI GPT-4", "OpenAI Whisper (Voice Transcription)", "OpenAI TTS", "Google Sheets CRM", "Lead Scoring Engine"]
    },
    {
        slug: "techvision-global",
        industry: "Enterprise SaaS",
        clientSize: "500+ employees",
        companyName: "TechVision Global",
        title: "How TechVision Global Cut Support Costs by $240K Annually",
        description: "Enterprise SaaS company achieves 94% faster response times with AI",
        challenge: "Managing 5,000+ customer inquiries monthly was overwhelming their 12-person support team, leading to 48-hour response times and declining satisfaction scores.",
        solution: "Deployed AI Customer Success Agents integrated with their existing Zendesk and Salesforce systems. The agents handle tier-1 support, qualification, and routing while escalating complex issues to human experts.",
        results: [
            { label: "Response Time", value: "6 min", change: "94% faster", icon: Clock },
            { label: "Customer Satisfaction", value: "96%", change: "+38 points", icon: Users },
            { label: "Cost Savings", value: "$240K", change: "annually", icon: DollarSign },
            { label: "Ticket Resolution", value: "78%", change: "automated", icon: Target }
        ],
        summaryResults: "250% ROI",
        quote: "Synopslabs AI transformed our customer success operations. What used to take our team days now happens in minutes. Our CSAT scores have never been higher, and our team can focus on building relationships instead of answering the same questions repeatedly.",
        author: "Sarah Chen",
        authorRole: "VP of Customer Success",
        timeline: "3 months",
        roi: "250%",
        color: "from-blue-500 to-cyan-500",
        icon: Users,
        objectives: [
            "Reduce average response time from 48 hours to under 10 minutes",
            "Automate tier-1 support to free up team for complex issues",
            "Improve customer satisfaction scores by 30+ points",
            "Integrate seamlessly with existing Zendesk and Salesforce systems",
            "Maintain 24/7 support coverage without additional headcount"
        ],
        architecture: "The solution leverages a multi-agent AI architecture built on GPT-4 with custom fine-tuning on TechVision's historical support tickets. The system integrates via Zendesk API and Salesforce API, with a middleware layer handling authentication, routing, and escalation logic. Real-time sentiment analysis determines when to escalate to human agents.",
        workflows: [
            "Automated ticket intake and categorization using NLP",
            "Intelligent routing based on complexity and sentiment analysis",
            "AI-powered response generation with knowledge base integration",
            "Seamless escalation to human agents for complex issues",
            "Continuous learning from human agent interactions and feedback"
        ],
        tools: ["GPT-4 (Custom Fine-tuned)", "Zendesk API", "Salesforce Integration", "Python Backend", "Redis Cache", "PostgreSQL"]
    },
    {
        slug: "precision-parts-inc",
        industry: "B2B Manufacturing",
        clientSize: "250-500 employees",
        companyName: "Precision Parts Inc.",
        title: "Precision Parts Inc: From 89 to 34 Day Sales Cycles",
        description: "B2B manufacturer increases conversions by 156% with AI Sales Orchestration",
        challenge: "Sales team spent 60% of their time on manual data entry, quote generation, and follow-ups instead of selling. Deal cycles averaged 89 days with inconsistent follow-through.",
        solution: "Implemented AI Sales Orchestration system that automates lead qualification, generates custom quotes, schedules meetings, and handles multi-touch follow-up sequences. Integrated with their ERP and CRM systems.",
        results: [
            { label: "Sales Cycle", value: "34 days", change: "62% faster", icon: Clock },
            { label: "Conversion Rate", value: "41%", change: "+156%", icon: TrendingUp },
            { label: "Revenue Increase", value: "$3.2M", change: "annually", icon: DollarSign },
            { label: "Time Saved", value: "1,200hrs", change: "per month", icon: Target }
        ],
        summaryResults: "$3.2M revenue increase",
        quote: "Our sales team was drowning in administrative work. Synopslabs' AI Sales Orchestration gave them back 60% of their time to actually sell. We've seen our close rates more than double, and our sales cycle is now under 5 weeks.",
        author: "Michael Rodriguez",
        authorRole: "Chief Revenue Officer",
        timeline: "4 months",
        roi: "620%",
        color: "from-purple-500 to-pink-500",
        icon: TrendingUp,
        objectives: [
            "Reduce sales cycle from 89 days to under 40 days",
            "Automate quote generation and follow-up sequences",
            "Increase conversion rates by 100%+",
            "Free up sales team from administrative tasks",
            "Integrate with existing ERP and CRM systems"
        ],
        architecture: "Built on a microservices architecture with AI agents handling different stages of the sales pipeline. The system uses GPT-4 for natural language processing, custom ML models for lead scoring, and integrates with SAP ERP and Salesforce CRM via REST APIs. Automated workflows orchestrated through Make.com.",
        workflows: [
            "AI-powered lead qualification and scoring",
            "Automated custom quote generation from ERP data",
            "Multi-touch email and SMS follow-up sequences",
            "Intelligent meeting scheduling with calendar integration",
            "Real-time CRM updates and sales pipeline tracking"
        ],
        tools: ["GPT-4", "Custom ML Models", "SAP ERP Integration", "Salesforce CRM", "Make.com", "Twilio API", "Google Calendar API"]
    },
    {
        slug: "aspire-financial-group",
        industry: "Financial Services",
        clientSize: "100-250 employees",
        companyName: "Aspire Financial Group",
        title: "Aspire Financial Group: 99.7% Accuracy in Invoice Processing",
        description: "Financial services firm reduces processing time from 12 days to 18 hours",
        challenge: "Processing 800+ invoices monthly manually led to 12-day processing times, frequent errors, and compliance concerns. Their finance team of 6 was stretched thin.",
        solution: "Built custom AI Finance Ops suite including automated invoice processing, expense categorization, approval workflows, and real-time financial reporting dashboard with anomaly detection.",
        results: [
            { label: "Processing Time", value: "18 hours", change: "from 12 days", icon: Clock },
            { label: "Error Reduction", value: "99.7%", change: "accuracy", icon: CheckCircle },
            { label: "Cost Savings", value: "$180K", change: "annually", icon: DollarSign },
            { label: "Team Efficiency", value: "400%", change: "improvement", icon: TrendingUp }
        ],
        summaryResults: "$180K savings",
        quote: "The ROI was immediate and undeniable. What took our team two weeks now happens overnight with 99.7% accuracy. We've redirected two FTEs to strategic finance work, and our compliance audit was the smoothest we've ever had.",
        author: "Jennifer Park",
        authorRole: "CFO",
        timeline: "2 months",
        roi: "550%",
        color: "from-green-500 to-emerald-500",
        icon: Clock,
        objectives: [
            "Reduce invoice processing time from 12 days to under 24 hours",
            "Achieve 99%+ accuracy in data extraction and categorization",
            "Automate approval workflows and compliance checks",
            "Provide real-time financial reporting and anomaly detection",
            "Reduce manual finance team workload by 70%"
        ],
        architecture: "The AI Finance Ops suite combines computer vision for document processing, NLP for data extraction, and rule-based engines for compliance validation. Built on Azure cloud infrastructure with OCR capabilities, the system processes invoices, categorizes expenses, and generates real-time dashboards with anomaly detection algorithms.",
        workflows: [
            "Automated invoice intake via email and document upload",
            "AI-powered OCR and data extraction from invoices",
            "Intelligent expense categorization and GL coding",
            "Automated approval routing based on business rules",
            "Real-time financial reporting with anomaly alerts"
        ],
        tools: ["Azure AI Services", "Custom OCR Engine", "Power BI", "QuickBooks Integration", "Python Backend", "SQL Database"]
    },
    {
        slug: "medconnect-solutions",
        industry: "Healthcare Technology",
        clientSize: "500+ employees",
        companyName: "MedConnect Solutions",
        title: "MedConnect Solutions: 76% Reduction in Time-to-Hire",
        description: "Healthcare tech firm automates specialized recruitment with intelligent screening",
        challenge: "Recruiting for specialized healthcare IT roles was taking 6+ months per position. HR team manually screened 2,000+ applications monthly with high candidate drop-off rates.",
        solution: "Deployed AI HR Agent for automated resume screening, interview scheduling, candidate communication, and skills assessment. System integrated with their ATS and included bias detection algorithms.",
        results: [
            { label: "Time-to-Hire", value: "28 days", change: "76% reduction", icon: Clock },
            { label: "Candidate Quality", value: "92%", change: "match score", icon: Target },
            { label: "Recruitment Cost", value: "$320K", change: "saved annually", icon: DollarSign },
            { label: "HR Capacity", value: "300%", change: "increase", icon: Users }
        ],
        summaryResults: "$320K saved annually",
        quote: "Hiring was our biggest bottleneck. Synopslabs' AI HR Agent not only accelerated our process by 76% but actually improved candidate quality. Our recruiters now spend their time on relationship building, not resume screening.",
        author: "David Thompson",
        authorRole: "Chief People Officer",
        timeline: "3 months",
        roi: "425%",
        color: "from-orange-500 to-red-500",
        icon: Users,
        objectives: [
            "Reduce time-to-hire from 6+ months to under 30 days",
            "Automate resume screening for specialized healthcare IT roles",
            "Improve candidate quality and match scores",
            "Eliminate bias in initial screening process",
            "Increase HR team capacity by 300%"
        ],
        architecture: "The AI HR Agent uses advanced NLP models trained on healthcare IT job requirements and candidate profiles. The system integrates with major ATS platforms, uses semantic matching algorithms for skill assessment, and includes bias detection mechanisms. Automated communication handled through email and SMS APIs.",
        workflows: [
            "Automated resume parsing and skills extraction",
            "AI-powered candidate matching and scoring",
            "Intelligent interview scheduling with calendar sync",
            "Automated candidate communication and status updates",
            "Bias detection and diversity analytics reporting"
        ],
        tools: ["Custom NLP Models", "ATS Integration (Greenhouse)", "Calendly API", "SendGrid", "Twilio", "Python Backend", "MongoDB"]
    },
    {
        slug: "stylehub-retail",
        industry: "E-commerce",
        clientSize: "100-250 employees",
        companyName: "StyleHub Retail",
        title: "50x Faster Content Production",
        description: "E-commerce leader scales product launches with AI-driven content engine",
        challenge: "Content creation for 5,000+ SKUs was a constant struggle. Product descriptions were inconsistent, SEO was poor, and creating marketing content took weeks, slowing down new product launches.",
        solution: "Implemented AI Content Generation Engine that creates product descriptions, SEO metadata, social media posts, and email campaigns. System learned brand voice and optimizes for conversion.",
        results: [
            { label: "Content Production", value: "50x", change: "faster", icon: TrendingUp },
            { label: "SEO Traffic", value: "284%", change: "increase", icon: Target },
            { label: "Revenue Impact", value: "$1.8M", change: "additional", icon: DollarSign },
            { label: "Time Savings", value: "600hrs", change: "per month", icon: Clock }
        ],
        summaryResults: "780% ROI",
        quote: "Content production went from our biggest bottleneck to our competitive advantage. We can now launch products in days instead of weeks, and our SEO traffic has nearly tripled. The AI nailed our brand voice perfectly.",
        author: "Amanda Sullivan",
        authorRole: "Chief Marketing Officer",
        timeline: "2 months",
        roi: "780%",
        color: "from-indigo-500 to-purple-500",
        icon: FileText,
        objectives: [
            "Scale content production from 50 to 2,500+ SKUs per month",
            "Maintain consistent brand voice across all product descriptions",
            "Improve SEO rankings and organic traffic",
            "Reduce content creation costs by 80%",
            "Accelerate new product launch timelines"
        ],
        architecture: "The AI Content Generation Engine uses fine-tuned GPT-4 models trained on StyleHub's brand guidelines and top-performing content. The system includes SEO optimization algorithms, A/B testing capabilities, and multi-channel content adaptation. Integration with Shopify and social media platforms enables automated publishing.",
        workflows: [
            "AI-powered product description generation from specs",
            "SEO metadata optimization and keyword integration",
            "Multi-channel content adaptation (web, email, social)",
            "Automated A/B testing for conversion optimization",
            "Brand voice consistency validation and quality checks"
        ],
        tools: ["GPT-4 (Fine-tuned)", "Shopify API", "SEMrush Integration", "Buffer/Hootsuite", "Python Backend", "Content Analytics Dashboard"]
    },
    {
        slug: "apex-consulting-group",
        industry: "Professional Services",
        clientSize: "250-500 employees",
        companyName: "Apex Consulting Group",
        title: "Apex Consulting Group: Unified Data & Real-time Insights",
        description: "Professional services firm eliminates data fragmentation with AI architecture",
        challenge: "Managing client data across 6 different systems led to inconsistencies, wasted time searching for information, and missed opportunities. No unified view of client relationships.",
        solution: "Built custom Integration & Data Architecture solution that unified their CRM, project management, billing, and communication platforms. Real-time data sync with AI-powered insights dashboard.",
        results: [
            { label: "Data Consistency", value: "99.9%", change: "accuracy", icon: CheckCircle },
            { label: "Search Time", value: "2 min", change: "from 45 min", icon: Clock },
            { label: "Revenue Uplift", value: "$2.4M", change: "from insights", icon: DollarSign },
            { label: "Client Satisfaction", value: "94%", change: "+22 points", icon: Users }
        ],
        summaryResults: "$2.4M revenue uplift",
        quote: "Data fragmentation was killing our productivity and client experience. Synopslabs' integration solution gave us a single source of truth and AI insights we never had before. It's like turning on the lights in a dark room.",
        author: "Robert Chen",
        authorRole: "Managing Partner",
        timeline: "5 months",
        roi: "390%",
        color: "from-teal-500 to-cyan-500",
        icon: CheckCircle,
        objectives: [
            "Unify data across 6 disparate systems into single source of truth",
            "Reduce time spent searching for client information by 90%",
            "Enable real-time insights and predictive analytics",
            "Improve client satisfaction through better data visibility",
            "Identify upsell and cross-sell opportunities automatically"
        ],
        architecture: "Custom integration and data architecture solution built on a modern data warehouse with ETL pipelines connecting CRM, project management, billing, and communication platforms. AI-powered insights engine analyzes patterns and generates recommendations. Real-time sync ensures data consistency across all systems.",
        workflows: [
            "Real-time data synchronization across all platforms",
            "AI-powered data quality validation and cleansing",
            "Automated client insights and opportunity identification",
            "Predictive analytics for project success and revenue forecasting",
            "Unified search and intelligent data retrieval"
        ],
        tools: ["Snowflake Data Warehouse", "Fivetran ETL", "Salesforce", "Asana API", "Slack Integration", "Custom Analytics Dashboard", "Python/dbt"]
    },
    {
        slug: "bright-land-real-estate",
        industry: "Real Estate",
        clientSize: "50-100 employees",
        companyName: "Bright Land Real Estate",
        title: "Bright Land Real Estate: AI-Powered Lead Automation",
        description: "Real estate firm achieves 340% increase in qualified leads with WhatsApp AI automation",
        challenge: "Lead acquisition and qualification was consuming 80% of the sales team's time. Manual WhatsApp outreach, cold calling, and email campaigns were inconsistent, resulting in low response rates and missed opportunities. With 200+ daily inquiries, agents struggled to identify high-intent buyers quickly.",
        solution: "Deployed comprehensive AI Lead Automation System combining WhatsApp AI agents, cold email automation, continuous lead scraping, and intelligent CRM integration. The system autonomously handles outreach, qualification (budget, location, property type, timeline), meeting scheduling, and real-time notifications to agents for hot leads.",
        results: [
            { label: "Lead Response Time", value: "4 min", change: "from 6 hours", icon: Clock },
            { label: "Qualified Leads", value: "340%", change: "increase", icon: Target },
            { label: "Meeting Bookings", value: "156", change: "per month", icon: Users },
            { label: "Agent Productivity", value: "520%", change: "improvement", icon: TrendingUp }
        ],
        summaryResults: "640% ROI",
        quote: "SynOps Labs completely transformed our lead generation process. Our agents now receive only pre-qualified, high-intent leads with all the information they need. What used to take hours of back-and-forth now happens automatically in minutes. We've tripled our meeting bookings and our conversion rates have never been better.",
        author: "Ahmed Al-Mansoori",
        authorRole: "Sales Director",
        timeline: "2 months",
        roi: "640%",
        color: "from-amber-500 to-orange-500",
        icon: TrendingUp,
        objectives: [
            "Automate initial lead outreach and qualification",
            "Reduce manual effort in data entry and CRM updates",
            "Identify high-intent leads in real-time for immediate follow-up",
            "Increase meeting booking rates for specialized properties",
            "Maintain 24/7 engagement with prospective buyers"
        ],
        architecture: "The solution leverages a sophisticated multi-agent AI architecture. A WhatsApp Cloud API integration serves as the primary engagement layer, powered by custom-trained LLMs. Cold email outreach is synchronized via a distributed sender network. All data flows through a centralized automation hub that manages real-time scraping, lead enrichment, and dynamic CRM updates in Google Sheets.",
        workflows: [
            "AI-driven WhatsApp conversations for profile building",
            "Automated lead scraping and enrichment from real estate portals",
            "Contextual cold email sequences with AI-personalized copy",
            "Real-time 'Hot Lead' notifications via Telegram/WhatsApp to agents",
            "Intelligent calendar synchronization for automated meeting booking"
        ],
        tools: ["WhatsApp Cloud API", "Custom LLM (GPT-4o)", "Make.com (Workflow Orchestration)", "Google Sheets CRM", "Lead Enrichment APIs", "Cold Email Automators"]
    }
]
