'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Users,
  BarChart3,
  Cpu,
  Workflow,
  FileText,
  Bot,
  Database,
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  DollarSign,
  HardHat,
  ShoppingBag,
  Banknote,
  Stethoscope,
  Home,
  Truck,
  Briefcase
} from 'lucide-react'

const ServicesPage = () => {

  const pillars = [
    {
      name: "Revenue Acceleration",
      description: "Drive predictable growth with AI that identifies opportunities, closes deals, and maximizes customer lifetime value",
      color: "from-blue-500 to-cyan-500",
      bgAccent: "bg-blue-500/10",
      services: [
        {
          title: "AI Sales Orchestration",
          description: "End-to-end sales automation from lead qualification to deal close. Our AI handles prospecting, outreach, follow-ups, and pipeline management while your team focuses on high-value relationships.",
          icon: TrendingUp,
          features: [
            "Intelligent lead scoring and prioritization",
            "Automated multi-channel outreach sequences",
            "Meeting scheduling and preparation",
            "CRM data enrichment and hygiene",
            "Real-time deal insights and coaching"
          ],
          results: "41% higher conversion rates, 62% faster sales cycles",
          popular: true
        },
        {
          title: "Customer Success Agents",
          description: "Proactive AI agents that monitor customer health, prevent churn, identify expansion opportunities, and deliver white-glove support at scale.",
          icon: Users,
          features: [
            "24/7 intelligent customer support",
            "Churn prediction and prevention",
            "Upsell/cross-sell opportunity detection",
            "Automated onboarding and training",
            "Customer health scoring and alerts"
          ],
          results: "38% reduction in churn, 96% CSAT scores"
        },
        {
          title: "Revenue Intelligence Dashboard",
          description: "Unified analytics platform that reveals hidden revenue opportunities, forecasts with precision, and provides actionable insights across your entire revenue operation.",
          icon: BarChart3,
          features: [
            "Predictive revenue forecasting",
            "Pipeline health monitoring",
            "Win/loss analysis and insights",
            "Rep performance analytics",
            "Market opportunity identification"
          ],
          results: "22% increase in forecast accuracy, $2.4M+ revenue identified"
        }
      ]
    },
    {
      name: "Operational Excellence",
      description: "Eliminate manual work, reduce costs by 60%+, and free your team to focus on strategic initiatives",
      color: "from-purple-500 to-pink-500",
      bgAccent: "bg-purple-500/10",
      services: [
        {
          title: "Process Automation Suite",
          description: "Custom workflow automation that connects your entire tech stack. We automate repetitive tasks across departments so your team can focus on work that actually moves the needle.",
          icon: Workflow,
          features: [
            "Cross-platform workflow automation",
            "Data synchronization and migration",
            "Approval and routing workflows",
            "Notification and alert systems",
            "Custom integrations and APIs"
          ],
          results: "1,200+ hours saved monthly, 99.7% accuracy",
          popular: true
        },
        {
          title: "AI Workforce Solutions",
          description: "Virtual team members that handle finance, HR, operations, and admin tasks with superhuman efficiency. From invoice processing to recruitment screening.",
          icon: Cpu,
          features: [
            "Automated invoice and expense processing",
            "Resume screening and candidate engagement",
            "Report generation and analysis",
            "Email and calendar management",
            "Document processing and data entry"
          ],
          results: "400% efficiency improvement, $180K annual savings"
        },
        {
          title: "Content Generation Engine",
          description: "AI-powered content factory that creates product descriptions, marketing copy, technical documentation, and social media content at scale while maintaining perfect brand voice.",
          icon: FileText,
          features: [
            "Product description generation",
            "SEO-optimized blog content",
            "Social media post creation",
            "Email campaign copywriting",
            "Technical documentation"
          ],
          results: "50x faster content production, 284% SEO traffic increase"
        }
      ]
    },
    {
      name: "Intelligent Infrastructure",
      description: "Build a foundation for scalable, sustainable AI-driven growth with custom agents and seamless integrations",
      color: "from-green-500 to-emerald-500",
      bgAccent: "bg-green-500/10",
      services: [
        {
          title: "Custom AI Agent Development",
          description: "Purpose-built AI agents designed specifically for your unique business processes. We don't do cookie-cutter solutions—every agent is crafted to solve your specific challenges.",
          icon: Bot,
          features: [
            "Custom GPT model fine-tuning",
            "Proprietary data training",
            "Multi-agent orchestration",
            "Advanced reasoning and decision-making",
            "Continuous learning and improvement"
          ],
          results: "Tailored solutions with 500%+ ROI",
          popular: true
        },
        {
          title: "Integration & Data Architecture",
          description: "Unified data infrastructure that connects all your systems into one intelligent ecosystem. Break down silos and unlock the full power of your data.",
          icon: Database,
          features: [
            "Enterprise system integration",
            "Real-time data synchronization",
            "Data warehouse architecture",
            "API development and management",
            "Legacy system modernization"
          ],
          results: "99.9% data consistency, 2min search time (from 45min)"
        },
        {
          title: "Continuous Optimization Program",
          description: "Ongoing monitoring, improvement, and expansion of your AI systems. We don't just build and leave—we ensure your AI keeps getting better and delivering increasing value.",
          icon: RefreshCw,
          features: [
            "Performance monitoring and analytics",
            "Model retraining and updates",
            "A/B testing and optimization",
            "Quarterly strategy reviews",
            "Priority support and maintenance"
          ],
          results: "25% performance improvement quarterly"
        }
      ]
    }
  ]

  const industries = [
    {
      name: "Construction & Infrastructure",
      description: "Optimize project timelines, automate safety monitoring, and manage complex supply chains with AI-driven site management and predictive logistics.",
      icon: HardHat,
      color: "from-amber-600 to-orange-700",
      bgAccent: "bg-amber-600/10",
      features: [
        "AI-driven project scheduling & delay prediction",
        "Automated site safety & compliance monitoring",
        "Intelligent supply chain & materials management",
        "BIM-integrated AI for design optimization",
        "Contract & document analysis agents"
      ],
      results: "22% reduction in project delays, 40% faster document processing"
    },
    {
      name: "E-commerce & Retail",
      description: "Scale your sales and automate customer experience with intelligent AI agents that handle everything from product recommendations to post-purchase support.",
      icon: ShoppingBag,
      color: "from-blue-500 to-cyan-500",
      bgAccent: "bg-blue-500/10",
      features: [
        "AI-powered product recommendations",
        "Automated customer support & tracking",
        "Dynamic pricing optimization",
        "Inventory prediction & management",
        "Personalized marketing campaigns"
      ],
      results: "35% increase in AOV, 50% reduction in support tickets"
    },
    {
      name: "Financial Services",
      description: "Secure, compliant, and highly efficient AI solutions for banking, insurance, and investment firms looking to automate complex workflows.",
      icon: Banknote,
      color: "from-purple-500 to-pink-500",
      bgAccent: "bg-purple-500/10",
      features: [
        "Automated document verification",
        "Fraud detection & risk assessment",
        "AI-driven investment insights",
        "Claims processing automation",
        "Regulatory compliance monitoring"
      ],
      results: "90% faster processing, 100% audit accuracy"
    },
    {
      name: "Healthcare",
      description: "Enhance patient care and operational efficiency with AI systems designed for scheduling, diagnostic support, and administrative automation.",
      icon: Stethoscope,
      color: "from-green-500 to-emerald-500",
      bgAccent: "bg-green-500/10",
      features: [
        "Patient triage & scheduling bots",
        "Medical record summarization",
        "Diagnostic assistance tools",
        "Billing & claims automation",
        "Telehealth experience enhancement"
      ],
      results: "40% reduction in admin load, improved patient CSAT"
    },
    {
      name: "Real Estate",
      description: "Supercharge your property management and sales pipeline with AI that qualifies leads, manages bookings, and provides market insights.",
      icon: Home,
      color: "from-orange-500 to-red-500",
      bgAccent: "bg-orange-500/10",
      features: [
        "24/7 lead qualification & follow-up",
        "Automated property viewings scheduling",
        "Market trend analysis & forecasting",
        "Tenant onboarding & support",
        "Lease agreement generation"
      ],
      results: "3x lead conversion rate, 60% faster closing"
    },
    {
      name: "Logistics & Supply Chain",
      description: "Optimize routes, predict delays, and automate warehouse operations with intelligent infrastructure built for modern global trade.",
      icon: Truck,
      color: "from-yellow-500 to-orange-500",
      bgAccent: "bg-yellow-500/10",
      features: [
        "Dynamic route optimization",
        "Supply chain disruption prediction",
        "Warehouse automation & robotics",
        "Automated customs documentation",
        "Real-time shipment tracking agents"
      ],
      results: "20% reduction in fuel costs, 99% delivery accuracy"
    },
    {
      name: "Professional Services",
      description: "Empower legal, accounting, and consulting firms with AI that handles research, document drafting, and client relationship management.",
      icon: Briefcase,
      color: "from-indigo-500 to-blue-500",
      bgAccent: "bg-indigo-500/10",
      features: [
        "Automated legal/financial research",
        "Document drafting & summarization",
        "Client intake & onboarding",
        "Time tracking & billing automation",
        "Predictive project management"
      ],
      results: "15+ hours saved per week per professional"
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Most solutions live in 2-8 weeks, not months"
    },
    {
      icon: Target,
      title: "Guaranteed ROI",
      description: "We don't get paid unless you see measurable results"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, clear ROI projections upfront"
    }
  ]

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              AI Solutions That Actually Drive Revenue
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
              Three core pillars. Nine proven solutions. Unlimited growth potential.
              Built for B2B companies ready to dominate their market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      {pillars.map((pillar, pillarIndex) => (
        <section key={pillarIndex} className={`section-padding ${pillarIndex % 2 === 0 ? 'bg-canvas' : 'bg-white'}`}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className={`inline-block px-6 py-2 rounded-full mb-6 ${pillar.bgAccent}`}>
                <span className={`text-lg font-bold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                  Pillar {pillarIndex + 1}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                {pillar.name}
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#535366' }}>
                {pillar.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillar.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
                  className={`glass rounded-3xl p-8 relative group hover:bg-slate/5 border-2 flex flex-col ${service.popular ? 'border-charcoal/30 ring-2 ring-charcoal/20' : 'border-slate/20 hover:border-slate/40'
                    } transition-all duration-300`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-charcoal text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <motion.div
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-relaxed" style={{ color: '#535366' }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#535366' }} />
                        <span className="text-sm" style={{ color: '#535366' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Results Badge */}
                  <div className={`${pillar.bgAccent} rounded-xl p-4 mb-6`}>
                    <div className="text-xs font-semibold mb-1" style={{ color: '#535366' }}>TYPICAL RESULTS</div>
                    <div className="text-sm font-bold" style={{ color: '#1C1C1C' }}>{service.results}</div>
                  </div>

                  {/* CTA */}
                  <Link href="/audit" className="mt-auto">
                    <motion.button
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group ${service.popular
                        ? 'bg-charcoal text-white hover:bg-charcoal/90'
                        : 'glass border-2 border-charcoal/20 hover:border-charcoal/40 text-charcoal'
                        }`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Industries Section */}
      <section className="section-padding bg-canvas">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Industries We Transform
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#535366' }}>
              We don't believe in one-size-fits-all. Our AI agents are built with deep domain expertise
              to solve the unique challenges of your specific sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-3xl p-8 relative group hover:bg-slate/5 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon */}
                <motion.div
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                  {industry.name}
                </h3>

                <p className="mb-6 leading-relaxed flex-grow" style={{ color: '#535366' }}>
                  {industry.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#535366' }} />
                      <span className="text-sm" style={{ color: '#535366' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Results Badge */}
                <div className={`${industry.bgAccent} rounded-xl p-4 mb-8`}>
                  <div className="text-xs font-semibold mb-1" style={{ color: '#535366' }}>BENCHMARK IMPACT</div>
                  <div className="text-sm font-bold" style={{ color: '#1C1C1C' }}>{industry.results}</div>
                </div>

                {/* CTA */}
                <Link href="/audit">
                  <motion.button
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group glass border-2 border-charcoal/20 hover:border-charcoal/40 text-charcoal"
                  >
                    <span>Transform Your {industry.name.split(' ')[0]} Business</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#EAE6E0' }}>
              Why Partner With Synopslabs AI
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-dark rounded-3xl p-8 text-center border border-white/10"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8" style={{ color: '#EAE6E0' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#EAE6E0' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border-2 border-slate/30">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-xl mb-8" style={{ color: '#535366' }}>
                Get your free AI audit and discover which solutions will deliver
                the biggest impact for your business. No obligation, no sales pressure.
              </p>
              <Link href="/audit">
                <motion.button
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-12 py-4 flex items-center space-x-3 mx-auto group shadow-lg"
                >
                  <span>Get Free AI Audit</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
