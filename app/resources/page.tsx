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
    <div className="min-h-screen bg-canvas pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A38560' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-charcoal">
              AI Resources for Growth Leaders
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: '#535366' }}>
              Guides, calculators, and case studies to help you implement AI and drive measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Whitepapers & Guides */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Whitepapers & Guides
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#535366' }}>
              Deep-dive resources to help you understand AI's potential for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.whitepapers.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`glass rounded-3xl p-8 relative group hover:bg-slate/10 border-2 ${
                  resource.popular ? 'border-charcoal/30 ring-2 ring-charcoal/20' : 'border-slate/20 hover:border-slate/40'
                } transition-all duration-300`}
              >
                {resource.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-charcoal text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Popular
                    </span>
                  </div>
                )}

                <div className="w-16 h-16 bg-charcoal rounded-2xl flex items-center justify-center mb-6">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-2">
                  <span className="text-sm font-semibold px-3 py-1 bg-charcoal/10 rounded-full" style={{ color: '#535366' }}>
                    {resource.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-4" style={{ color: '#1C1C1C' }}>
                  {resource.title}
                </h3>

                <p className="mb-6 leading-relaxed" style={{ color: '#535366' }}>
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm mb-6" style={{ color: '#535366' }}>
                  <span>{resource.readTime}</span>
                </div>

                <Link href={resource.downloadLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group bg-charcoal text-white"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Free</span>
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Case Studies
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#535366' }}>
              Real results from B2B companies who transformed their operations with AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.caseStudies.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-3xl p-8 group hover:bg-slate/10 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {resource.industry}
                  </span>
                  <span className="text-sm font-semibold px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    {resource.results}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                  {resource.title}
                </h3>

                <p className="mb-6 leading-relaxed" style={{ color: '#535366' }}>
                  {resource.description}
                </p>

                <Link href={resource.downloadLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group border-2 border-charcoal/20 hover:border-charcoal/40 text-charcoal"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Training */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Video Training
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#535366' }}>
              Watch expert-led masterclasses and workshops
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.videos.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-3xl p-8 group hover:bg-slate/10 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-2">
                  <span className="text-sm font-semibold px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    {resource.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-4" style={{ color: '#1C1C1C' }}>
                  {resource.title}
                </h3>

                <p className="mb-6 leading-relaxed" style={{ color: '#535366' }}>
                  {resource.description}
                </p>

                <Link href={resource.videoLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  >
                    <PlayCircle className="w-5 h-5" />
                    <span>Watch Now</span>
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-charcoal via-charcoal to-slate">
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

