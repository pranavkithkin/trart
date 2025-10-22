'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
      color: "from-burgundy via-burgundy-light to-gold",
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
      color: "from-gold via-gold-light to-burgundy",
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
      color: "from-burgundy via-gold to-burgundy",
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
      color: "from-gold via-burgundy-light to-gold",
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
    <div className="min-h-screen bg-gradient-to-b from-noir via-teal to-noir pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-noir via-teal to-noir relative overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI Agent <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-pearl/80 mb-12 leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">AI Solution</span>
            </h2>
            <p className="text-xl text-pearl/80 max-w-3xl mx-auto">
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
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`glass rounded-3xl p-8 relative group hover:bg-teal/60 border-2 border-gold/20 hover:border-gold/60 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-gold/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-burgundy via-burgundy-light to-gold text-pearl px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
                  >
                    <service.icon className="w-8 h-8 text-pearl" />
                  </motion.div>
                  <span className="text-2xl font-bold text-pearl/70">{service.price}</span>
                </div>

                <h3 className="text-2xl font-bold text-pearl mb-4">{service.title}</h3>
                <p className="text-pearl/80 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-pearl/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group ${
                    service.popular
                      ? 'bg-gradient-to-r from-burgundy via-burgundy-light to-gold text-pearl hover:shadow-lg hover:shadow-gold/30'
                      : 'glass text-pearl hover:bg-teal/60 border-2 border-gold/20 hover:border-gold/60'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-teal via-noir to-teal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Our AI Agents</span>
            </h2>
            <p className="text-xl text-pearl/80 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for enterprise-grade performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8 text-center group hover:bg-teal/60 border-2 border-gold/20 hover:border-gold/60 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-r from-burgundy via-burgundy-light to-gold rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <benefit.icon className="w-8 h-8 text-pearl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-pearl mb-4">{benefit.title}</h3>
                <p className="text-pearl/80">{benefit.description}</p>
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
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-pearl mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-pearl/80 mb-8">
                Schedule a free consultation and discover how our AI agents can 
                transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-12 py-4 flex items-center space-x-3 group"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-12 py-4"
                >
                  Download Brochure
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
