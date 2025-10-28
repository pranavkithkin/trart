'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Headphones,
  Calculator,
  Users,
  Zap,
  CheckCircle
} from 'lucide-react'

const DemosPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeDemo, setActiveDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const demos = [
    {
      id: 'sales-agent',
      title: 'Sales Agent Demo',
      description: 'Watch our AI sales agent qualify leads, schedule meetings, and close deals automatically',
      icon: MessageSquare,
      color: 'from-charcoal to-slate',
      video: 'https://via.placeholder.com/800x450/0ea5e9/ffffff?text=Sales+Agent+Demo',
      duration: '2:30',
      features: [
        'Lead qualification in real-time',
        'Automated follow-up sequences',
        'Meeting scheduling integration',
        'CRM data synchronization'
      ]
    },
    {
      id: 'support-agent',
      title: 'Support Agent Demo',
      description: 'See how our AI support agent handles customer inquiries and resolves issues instantly',
      icon: Headphones,
      color: 'from-slate to-charcoal',
      video: 'https://via.placeholder.com/800x450/8b5cf6/ffffff?text=Support+Agent+Demo',
      duration: '3:15',
      features: [
        'Multi-language support',
        'Context-aware responses',
        'Ticket escalation logic',
        'Knowledge base integration'
      ]
    },
    {
      id: 'finance-ops',
      title: 'Finance Ops Demo',
      description: 'Discover how our AI handles invoicing, expense tracking, and financial reporting',
      icon: Calculator,
      color: 'from-charcoal via-slate to-charcoal',
      video: 'https://via.placeholder.com/800x450/f472b6/ffffff?text=Finance+Ops+Demo',
      duration: '2:45',
      features: [
        'Automated invoice generation',
        'Expense categorization',
        'Financial report creation',
        'Compliance monitoring'
      ]
    },
    {
      id: 'hr-agent',
      title: 'HR Agent Demo',
      description: 'Watch our AI streamline recruitment, onboarding, and employee management processes',
      icon: Users,
      color: 'from-slate via-charcoal to-slate',
      video: 'https://via.placeholder.com/800x450/10b981/ffffff?text=HR+Agent+Demo',
      duration: '3:00',
      features: [
        'Resume screening automation',
        'Interview scheduling',
        'Onboarding workflows',
        'Performance tracking'
      ]
    }
  ]

  const templates = [
    {
      title: 'E-commerce Customer Service',
      description: 'Complete template for online retail customer support automation',
      category: 'E-commerce',
      complexity: 'Intermediate',
      setupTime: '2-3 days'
    },
    {
      title: 'SaaS Lead Qualification',
      description: 'Ready-to-deploy lead scoring and qualification system',
      category: 'SaaS',
      complexity: 'Advanced',
      setupTime: '1-2 weeks'
    },
    {
      title: 'Healthcare Appointment Booking',
      description: 'HIPAA-compliant appointment scheduling and patient management',
      category: 'Healthcare',
      complexity: 'Advanced',
      setupTime: '2-3 weeks'
    },
    {
      title: 'Real Estate Lead Management',
      description: 'Property inquiry handling and client nurturing automation',
      category: 'Real Estate',
      complexity: 'Intermediate',
      setupTime: '1-2 weeks'
    }
  ]

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              See AI Agents <span style={{ color: '#EAE6E0' }}>In Action</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
              Watch our AI agents in action and explore ready-to-use templates
              for your business automation needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Demos Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interactive <span className="text-charcoal">Demos</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#535366' }}>
              Experience our AI agents firsthand with these interactive demonstrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Demo Selector */}
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <motion.button
                  key={demo.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveDemo(index)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                    activeDemo === index
                      ? 'glass bg-white/20'
                      : 'glass hover:bg-slate/10'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center">
                      <demo.icon className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: '#1C1C1C' }}>{demo.title}</h3>
                      <p className="text-sm" style={{ color: '#535366' }}>{demo.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: '#535366' }}>{demo.description}</p>
                </motion.button>
              ))}
            </div>

            {/* Video Player */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl overflow-hidden"
              >
                <div className="relative aspect-video bg-slate/20">
                  <img
                    src={demos[activeDemo].video}
                    alt={demos[activeDemo].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8" style={{ color: '#FFFFFF' }} />
                      ) : (
                        <Play className="w-8 h-8 ml-1" style={{ color: '#FFFFFF' }} />
                      )}
                    </motion.button>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                        ) : (
                          <Volume2 className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                        )}
                      </button>
                      <span className="text-sm font-medium" style={{ color: '#FFFFFF' }}>
                        {demos[activeDemo].duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm" style={{ color: '#FFFFFF' }}>0:00</span>
                      <div className="w-32 h-1 bg-white/30 rounded-full">
                        <div className="w-1/3 h-full bg-white rounded-full" />
                      </div>
                      <span className="text-sm" style={{ color: '#FFFFFF' }}>{demos[activeDemo].duration}</span>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1C1C1C' }}>
                    {demos[activeDemo].title}
                  </h3>
                  <p className="mb-6" style={{ color: '#535366' }}>
                    {demos[activeDemo].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {demos[activeDemo].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#535366' }} />
                        <span className="text-sm" style={{ color: '#535366' }}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#EAE6E0' }}>
              Ready-to-Use <span style={{ color: '#FFFFFF' }}>Templates</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
              Jumpstart your AI automation with our pre-built templates designed
              for specific industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6 group hover:bg-slate/10 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1C1C1C' }}>{template.title}</h3>
                    <p className="text-sm" style={{ color: '#535366' }}>{template.description}</p>
                  </div>
                  <motion.button
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 glass rounded-lg hover:bg-slate/10 border-2 border-slate/20 hover:border-slate/40 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" style={{ color: '#535366' }} />
                  </motion.button>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-4">
                    <span className="px-3 py-1 text-xs rounded-full" style={{
                      backgroundColor: 'rgba(83, 83, 102, 0.1)',
                      color: '#535366',
                      border: '1px solid rgba(83, 83, 102, 0.2)'
                    }}>
                      {template.category}
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full" style={{
                      backgroundColor: 'rgba(83, 83, 102, 0.1)',
                      color: '#535366',
                      border: '1px solid rgba(83, 83, 102, 0.2)'
                    }}>
                      {template.complexity}
                    </span>
                  </div>
                  <span className="text-sm" style={{ color: '#535366' }}>{template.setupTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm" style={{ color: '#535366' }}>
                    <Zap className="w-4 h-4" />
                    <span>Pre-configured</span>
                  </div>
                  <motion.button
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-sm px-6 py-2 flex items-center space-x-2 group"
                  >
                    <span>Try Template</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
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
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border-2 border-slate/30">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
                Ready to Build Your Own?
              </h2>
              <p className="text-xl mb-8" style={{ color: '#535366' }}>
                These demos and templates are just the beginning. Let's create a
                custom AI agent solution tailored to your business. Get your free audit today.
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

export default DemosPage
