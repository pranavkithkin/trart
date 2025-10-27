'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  ChevronDown, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  Building2,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const caseStudies = [
    {
      industry: "Enterprise SaaS",
      clientSize: "500+ employees",
      companyName: "TechVision Global",
      challenge: "Managing 5,000+ customer inquiries monthly was overwhelming their 12-person support team, leading to 48-hour response times and declining satisfaction scores.",
      solution: "Deployed AI Customer Success Agents integrated with their existing Zendesk and Salesforce systems. The agents handle tier-1 support, qualification, and routing while escalating complex issues to human experts.",
      results: [
        { label: "Response Time", value: "6 min", change: "94% faster", icon: Clock },
        { label: "Customer Satisfaction", value: "96%", change: "+38 points", icon: Users },
        { label: "Cost Savings", value: "$240K", change: "annually", icon: DollarSign },
        { label: "Ticket Resolution", value: "78%", change: "automated", icon: Target }
      ],
      quote: "TRART AI transformed our customer success operations. What used to take our team days now happens in minutes. Our CSAT scores have never been higher, and our team can focus on building relationships instead of answering the same questions repeatedly.",
      author: "Sarah Chen",
      authorRole: "VP of Customer Success",
      timeline: "3 months",
      roi: "480%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      industry: "B2B Manufacturing",
      clientSize: "250-500 employees",
      companyName: "Precision Parts Inc.",
      challenge: "Sales team spent 60% of their time on manual data entry, quote generation, and follow-ups instead of selling. Deal cycles averaged 89 days with inconsistent follow-through.",
      solution: "Implemented AI Sales Orchestration system that automates lead qualification, generates custom quotes, schedules meetings, and handles multi-touch follow-up sequences. Integrated with their ERP and CRM systems.",
      results: [
        { label: "Sales Cycle", value: "34 days", change: "62% faster", icon: Clock },
        { label: "Conversion Rate", value: "41%", change: "+156%", icon: TrendingUp },
        { label: "Revenue Increase", value: "$3.2M", change: "annually", icon: DollarSign },
        { label: "Time Saved", value: "1,200hrs", change: "per month", icon: Target }
      ],
      quote: "Our sales team was drowning in administrative work. TRART's AI Sales Orchestration gave them back 60% of their time to actually sell. We've seen our close rates more than double, and our sales cycle is now under 5 weeks.",
      author: "Michael Rodriguez",
      authorRole: "Chief Revenue Officer",
      timeline: "4 months",
      roi: "620%",
      color: "from-purple-500 to-pink-500"
    },
    {
      industry: "Financial Services",
      clientSize: "100-250 employees",
      companyName: "Aspire Financial Group",
      challenge: "Processing 800+ invoices monthly manually led to 12-day processing times, frequent errors, and compliance concerns. Their finance team of 6 was stretched thin.",
      solution: "Built custom AI Finance Ops suite including automated invoice processing, expense categorization, approval workflows, and real-time financial reporting dashboard with anomaly detection.",
      results: [
        { label: "Processing Time", value: "18 hours", change: "from 12 days", icon: Clock },
        { label: "Error Reduction", value: "99.7%", change: "accuracy", icon: CheckCircle },
        { label: "Cost Savings", value: "$180K", change: "annually", icon: DollarSign },
        { label: "Team Efficiency", value: "400%", change: "improvement", icon: TrendingUp }
      ],
      quote: "The ROI was immediate and undeniable. What took our team two weeks now happens overnight with 99.7% accuracy. We've redirected two FTEs to strategic finance work, and our compliance audit was the smoothest we've ever had.",
      author: "Jennifer Park",
      authorRole: "CFO",
      timeline: "2 months",
      roi: "550%",
      color: "from-green-500 to-emerald-500"
    },
    {
      industry: "Healthcare Technology",
      clientSize: "500+ employees",
      companyName: "MedConnect Solutions",
      challenge: "Recruiting for specialized healthcare IT roles was taking 6+ months per position. HR team manually screened 2,000+ applications monthly with high candidate drop-off rates.",
      solution: "Deployed AI HR Agent for automated resume screening, interview scheduling, candidate communication, and skills assessment. System integrated with their ATS and included bias detection algorithms.",
      results: [
        { label: "Time-to-Hire", value: "28 days", change: "76% reduction", icon: Clock },
        { label: "Candidate Quality", value: "92%", change: "match score", icon: Target },
        { label: "Recruitment Cost", value: "$320K", change: "saved annually", icon: DollarSign },
        { label: "HR Capacity", value: "300%", change: "increase", icon: Users }
      ],
      quote: "Hiring was our biggest bottleneck. TRART's AI HR Agent not only accelerated our process by 76% but actually improved candidate quality. Our recruiters now spend their time on relationship building, not resume screening.",
      author: "David Thompson",
      authorRole: "Chief People Officer",
      timeline: "3 months",
      roi: "425%",
      color: "from-orange-500 to-red-500"
    },
    {
      industry: "E-commerce",
      clientSize: "100-250 employees",
      companyName: "StyleHub Retail",
      challenge: "Content creation for 5,000+ SKUs was a constant struggle. Product descriptions were inconsistent, SEO was poor, and creating marketing content took weeks, slowing down new product launches.",
      solution: "Implemented AI Content Generation Engine that creates product descriptions, SEO metadata, social media posts, and email campaigns. System learned brand voice and optimizes for conversion.",
      results: [
        { label: "Content Production", value: "50x", change: "faster", icon: TrendingUp },
        { label: "SEO Traffic", value: "284%", change: "increase", icon: Target },
        { label: "Revenue Impact", value: "$1.8M", change: "additional", icon: DollarSign },
        { label: "Time Savings", value: "600hrs", change: "per month", icon: Clock }
      ],
      quote: "Content production went from our biggest bottleneck to our competitive advantage. We can now launch products in days instead of weeks, and our SEO traffic has nearly tripled. The AI nailed our brand voice perfectly.",
      author: "Amanda Sullivan",
      authorRole: "Chief Marketing Officer",
      timeline: "2 months",
      roi: "780%",
      color: "from-indigo-500 to-purple-500"
    },
    {
      industry: "Professional Services",
      clientSize: "250-500 employees",
      companyName: "Apex Consulting Group",
      challenge: "Managing client data across 6 different systems led to inconsistencies, wasted time searching for information, and missed opportunities. No unified view of client relationships.",
      solution: "Built custom Integration & Data Architecture solution that unified their CRM, project management, billing, and communication platforms. Real-time data sync with AI-powered insights dashboard.",
      results: [
        { label: "Data Consistency", value: "99.9%", change: "accuracy", icon: CheckCircle },
        { label: "Search Time", value: "2 min", change: "from 45 min", icon: Clock },
        { label: "Revenue Uplift", value: "$2.4M", change: "from insights", icon: DollarSign },
        { label: "Client Satisfaction", value: "94%", change: "+22 points", icon: Users }
      ],
      quote: "Data fragmentation was killing our productivity and client experience. TRART's integration solution gave us a single source of truth and AI insights we never had before. It's like turning on the lights in a dark room.",
      author: "Robert Chen",
      authorRole: "Managing Partner",
      timeline: "5 months",
      roi: "390%",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-charcoal via-charcoal to-slate relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8"
            style={{ color: '#EAE6E0' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Real Results, Real Revenue
          </motion.h2>
          <motion.p
            className="text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'rgba(234, 230, 224, 0.9)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See how ambitious B2B companies are using TRART AI to accelerate growth,
            slash costs, and dominate their markets
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <div className="glass-dark rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Header - Always Visible */}
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-semibold" style={{ color: '#EAE6E0' }}>
                          {study.industry}
                        </span>
                        <span className="flex items-center space-x-2 text-white/70 text-sm">
                          <Building2 className="w-4 h-4" />
                          <span>{study.clientSize}</span>
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3" style={{ color: '#EAE6E0' }}>
                        {study.companyName}
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                        {study.challenge}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <ChevronDown className="w-8 h-8" style={{ color: '#EAE6E0' }} />
                    </motion.div>
                  </div>

                  {/* Key Metrics - Always Visible */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <motion.div
                        key={resultIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + resultIndex * 0.05 }}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                      >
                        <result.icon className="w-5 h-5 mb-2" style={{ color: '#EAE6E0' }} />
                        <div className="text-2xl font-bold mb-1" style={{ color: '#EAE6E0' }}>
                          {result.value}
                        </div>
                        <div className="text-xs" style={{ color: 'rgba(234, 230, 224, 0.7)' }}>
                          {result.label}
                        </div>
                        <div className="text-xs font-semibold mt-1" style={{ color: '#4ADE80' }}>
                          {result.change}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-4 border-t border-white/10">
                    {/* Solution */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 flex items-center space-x-2" style={{ color: '#EAE6E0' }}>
                        <Target className="w-5 h-5" />
                        <span>Solution</span>
                      </h4>
                      <p className="text-lg leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                        {study.solution}
                      </p>
                    </div>

                    {/* Client Quote */}
                    <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
                      <p className="text-lg italic mb-6 leading-relaxed" style={{ color: '#EAE6E0' }}>
                        "{study.quote}"
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <Users className="w-6 h-6" style={{ color: '#EAE6E0' }} />
                        </div>
                        <div>
                          <div className="font-bold" style={{ color: '#EAE6E0' }}>{study.author}</div>
                          <div className="text-sm" style={{ color: 'rgba(234, 230, 224, 0.7)' }}>{study.authorRole}</div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline & ROI */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5" style={{ color: '#EAE6E0' }} />
                          <span style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                            Implementation: <span className="font-bold" style={{ color: '#EAE6E0' }}>{study.timeline}</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-5 h-5" style={{ color: '#4ADE80' }} />
                          <span style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                            ROI: <span className="font-bold text-2xl" style={{ color: '#4ADE80' }}>{study.roi}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="glass-dark rounded-3xl p-12 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#EAE6E0' }}>
              Ready for Results Like These?
            </h3>
            <p className="text-xl mb-8" style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
              Get your free AI audit and discover your growth potential
            </p>
            <a href="/audit">
              <motion.button
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-charcoal px-12 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 mx-auto group shadow-xl"
              >
                <span>Get Your Free Audit</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies

