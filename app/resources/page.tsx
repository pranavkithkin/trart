'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FileText, 
  Download, 
  PlayCircle, 
  Calculator,
  BookOpen,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react'

  const ResourcesPage = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    })

    const resources = {
    whitepapers: [
      {
        title: "The B2B AI Revolution: A Complete Guide to Revenue Acceleration",
        description: "Learn how leading B2B companies are using AI to generate $10M+ in new revenue",
        icon: FileText,
        downloadLink: "#",
        category: "Strategy",
        readTime: "15 min read",
        popular: true
      },
      {
        title: "AI ROI Calculator: Predict Your Returns Before You Invest",
        description: "Interactive tool to calculate potential ROI from AI implementation",
        icon: Calculator,
        downloadLink: "/audit",
        category: "Tools",
        readTime: "5 min",
        popular: true
      },
      {
        title: "6 AI Implementation Mistakes That Cost Companies Millions",
        description: "Avoid the pitfalls that derail 80% of AI projects",
        icon: BookOpen,
        downloadLink: "#",
        category: "Best Practices",
        readTime: "10 min read"
      }
    ],
    caseStudies: [
      {
        title: "How TechVision Global Cut Support Costs by $240K Annually",
        description: "Enterprise SaaS company achieves 94% faster response times with AI",
        icon: Users,
        downloadLink: "#",
        category: "Case Study",
        industry: "SaaS",
        results: "480% ROI"
      },
      {
        title: "Precision Parts Inc: From 89 to 34 Day Sales Cycles",
        description: "B2B manufacturer increases conversions by 156% with AI Sales Orchestration",
        icon: TrendingUp,
        downloadLink: "#",
        category: "Case Study",
        industry: "Manufacturing",
        results: "$3.2M revenue increase"
      },
      {
        title: "Aspire Financial Group: 99.7% Accuracy in Invoice Processing",
        description: "Financial services firm reduces processing time from 12 days to 18 hours",
        icon: Clock,
        downloadLink: "#",
        category: "Case Study",
        industry: "Financial Services",
        results: "$180K savings"
      }
    ],
    videos: [
      {
        title: "AI for B2B Sales: The Complete Masterclass",
        description: "60-minute deep dive into AI sales automation strategies",
        icon: PlayCircle,
        videoLink: "#",
        category: "Video Training",
        duration: "60 min"
      },
      {
        title: "Building Your First AI Agent: Live Workshop",
        description: "Watch us build a customer service AI agent from scratch",
        icon: PlayCircle,
        videoLink: "#",
        category: "Video Training",
        duration: "45 min"
      }
    ]
  }

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
          <div className="inline-block px-6 py-2 bg-white/10 rounded-full mb-6">
            <span className="text-lg font-bold" style={{ color: '#EAE6E0' }}>Coming Soon</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            AI Resources for Growth Leaders
          </h1>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
            We're preparing comprehensive guides, calculators, and case studies to help you implement AI and drive measurable results. In the meantime, get your free AI audit to discover your specific opportunities.
          </p>
          <Link href="/audit">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-12 py-4 flex items-center space-x-3 mx-auto group shadow-lg"
            >
              <span>Get Free AI Audit</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section-padding bg-charcoal">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#EAE6E0' }}>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8" style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
            Get your free AI audit and discover your specific opportunities for growth
          </p>
          <Link href="/audit">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-charcoal px-12 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 mx-auto shadow-xl"
            >
              <span>Get Your Free Audit</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default ResourcesPage

