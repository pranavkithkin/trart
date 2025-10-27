'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  MessageSquare, 
  Headphones, 
  Calculator, 
  Users, 
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react'

const ServicesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      title: "Sales Agent",
      description: "AI-powered sales assistant that qualifies leads, schedules meetings, and closes deals 24/7",
      icon: MessageSquare,
      color: "from-charcoal to-slate",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      features: [
        "Lead qualification & scoring",
        "Automated follow-ups",
        "Meeting scheduling",
        "CRM integration",
        "Performance analytics"
      ],
      price: "From $2,999/month",
      popular: true
    },
    {
      title: "Support Agent",
      description: "Intelligent customer support that resolves issues instantly and escalates when needed",
      icon: Headphones,
      color: "from-slate to-charcoal",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
      features: [
        "24/7 customer support",
        "Multi-language support",
        "Ticket resolution",
        "Knowledge base integration",
        "Sentiment analysis"
      ],
      price: "From $1,999/month"
    },
    {
      title: "Finance Ops",
      description: "Automated financial operations including invoicing, expense tracking, and reporting",
      icon: Calculator,
      color: "from-charcoal via-slate to-charcoal",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
      features: [
        "Automated invoicing",
        "Expense categorization",
        "Financial reporting",
        "Compliance monitoring",
        "Budget optimization"
      ],
      price: "From $3,499/month"
    },
    {
      title: "HR Agent",
      description: "Streamlined HR operations with automated recruitment, onboarding, and employee management",
      icon: Users,
      color: "from-slate via-charcoal to-slate",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      features: [
        "Resume screening",
        "Interview scheduling",
        "Onboarding automation",
        "Performance tracking",
        "Employee engagement"
      ],
      price: "From $2,499/month"
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy AI agents in days, not months"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Average 300% ROI within 6 months"
    }
  ]

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
              AI Agent Services
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: '#535366' }}>
              Transform your business operations with our comprehensive suite of
              intelligent AI agents designed for modern enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Choose Your AI Solution
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#535366' }}>
              Each AI agent is specifically designed to handle complex business processes
              with intelligence, efficiency, and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className={`glass rounded-3xl overflow-hidden relative group hover:bg-slate/10 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-slate/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-charcoal text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal/30" />
                  
                  {/* Icon Overlay */}
                  <motion.div
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{ rotate: 360 }}
                    className="absolute bottom-4 left-4 w-16 h-16 bg-charcoal rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="glass px-4 py-2 rounded-full font-bold text-sm border border-slate/30" style={{ color: '#1C1C1C' }}>
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>{service.title}</h3>
                  <p className="mb-6 leading-relaxed" style={{ color: '#535366' }}>{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#535366' }} />
                        <span style={{ color: '#535366' }}>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/audit">
                    <motion.button
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group min-h-[56px] ${
                        service.popular
                          ? 'bg-charcoal text-white hover:shadow-lg'
                          : 'glass border-2 border-slate/20 hover:border-slate/40'
                      }`}
                      style={service.popular ? {} : { color: '#1C1C1C' }}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-charcoal via-teal to-charcoal relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A38560' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Elegant Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-gold/10 to-burgundy/10 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-burgundy/10 to-gold/10 rounded-full blur-sm"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
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
              <span className="bg-gradient-to-r from-gold via-gold-light to-burgundy bg-clip-text text-transparent">
                Why Choose Our AI Agents
              </span>
            </motion.h2>
            <motion.p
              className="text-2xl max-w-4xl mx-auto leading-relaxed"
              style={{ color: 'rgba(234, 230, 224, 0.9)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Built with cutting-edge technology and designed for enterprise-grade performance
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative group"
              >
                {/* Enhanced Glass Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-pearl/5 via-transparent to-transparent rounded-3xl blur-lg transform group-hover:blur-xl transition-all duration-500" />

                <div className="relative glass-dark rounded-3xl p-10 text-center border border-gold/20 hover:border-gold/40 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  {/* Professional Icon Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                    className="relative w-20 h-20 mx-auto mb-8"
                  >
                    {/* Sophisticated icon background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-burgundy rounded-2xl shadow-lg shadow-gold/20 transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                    <div className="absolute inset-1 bg-gradient-to-br from-burgundy via-gold to-gold-light rounded-2xl flex items-center justify-center shadow-inner">
                      <benefit.icon className="w-10 h-10 text-pearl drop-shadow-sm" />
                    </div>

                    {/* Elegant accent dots */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-burgundy rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-150 transition-opacity duration-300" />
                  </motion.div>

                  {/* Enhanced Typography with Better Hierarchy */}
                  <motion.h3
                    className="text-3xl font-bold mb-6 text-pearl relative"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  >
                    {benefit.title}
                    {/* Subtle underline effect */}
                    <div className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-gold to-burgundy group-hover:w-1/2 left-1/4 transition-all duration-500" />
                  </motion.h3>

                  <motion.p
                    className="text-xl text-pearl/90 leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  >
                    {benefit.description}
                  </motion.p>

                  {/* Professional glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 via-gold/3 to-burgundy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8" style={{ color: '#535366' }}>
                Discover how our AI agents can transform your business operations.
                Get your free audit today and unlock unprecedented efficiency.
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
