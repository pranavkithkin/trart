'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap
} from 'lucide-react'

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // You could add a toast notification here
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'pranvkithkin11@gmail.com',
      description: 'Send us an email anytime',
      action: 'mailto:pranvkithkin11@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+971 (56) 627-2141',
      description: 'Mon-Fri 9AM-6PM PST',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+971 (56) 627-2141',
      description: 'Quick chat support',
      action: 'https://wa.me/971566272141'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/trart'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/trart'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/trart'
    },
    {
      name: 'YouTube',
      icon: '📺',
      url: 'https://youtube.com/trart'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-canvas pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-24 bg-canvas rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12" style={{ color: '#1C1C1C' }} />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-charcoal">Message Sent!</span>
          </h1>
          
          <p className="text-xl mb-8" style={{ color: '#535366' }}>
            Thank you for reaching out! We've received your message and will get back to you
            within 24 hours. In the meantime, feel free to explore our demos and services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
              onClick={() => window.location.href = '/'}
            >
              Return to Home
            </motion.button>
            <motion.button
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => window.location.href = '/demos'}
            >
              View Demos
            </motion.button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-canvas pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23535366' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get In <span className="text-charcoal">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: '#535366' }}>
              Ready to transform your business with AI? Let's discuss your needs
              and explore how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Multiple Ways to <span className="text-charcoal">Connect</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#535366' }}>
              Choose the communication method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.action}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center group hover:bg-slate/10 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300"
              >
                <motion.div
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  whileHover={{ rotate: 360 }}
                  className="w-16 h-16 bg-canvas rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <info.icon className="w-8 h-8" style={{ color: '#1C1C1C' }} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1C1C1C' }}>{info.title}</h3>
                <p className="font-semibold mb-2" style={{ color: '#535366' }}>{info.details}</p>
                <p className="text-sm" style={{ color: '#535366' }}>{info.description}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#1C1C1C' }}>Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 hover:bg-slate/10"
                  style={{ color: '#535366' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-canvas">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1C1C1C' }}>Send Us a Message</h2>
              <p className="mb-8" style={{ color: '#535366' }}>
                Have a question or want to discuss your AI automation needs?
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-canvas border border-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate focus:border-slate"
                      style={{ color: '#1C1C1C' }}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-canvas border border-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate focus:border-slate"
                      style={{ color: '#1C1C1C' }}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-canvas border border-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate focus:border-slate"
                      style={{ color: '#1C1C1C' }}
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-canvas border border-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate focus:border-slate"
                      style={{ color: '#1C1C1C' }}
                    >
                      <option value="">Select inquiry type</option>
                      <option value="general">General Question</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-canvas border border-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate focus:border-slate"
                    style={{ color: '#1C1C1C' }}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-canvas border border-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate focus:border-slate"
                    style={{ color: '#1C1C1C' }}
                    placeholder="Tell us about your project, questions, or how we can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Send Message</span>
                      <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >

              {/* Response Time */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6" style={{ color: '#535366' }} />
                  <h3 className="text-xl font-bold" style={{ color: '#1C1C1C' }}>Response Time</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#535366' }} />
                    <span style={{ color: '#535366' }}>Email: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#535366' }} />
                    <span style={{ color: '#535366' }}>Phone: Immediate during business hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#535366' }} />
                    <span style={{ color: '#535366' }}>WhatsApp: Within 2 hours</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1C1C1C' }}>Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#1C1C1C' }}>How long does implementation take?</h4>
                    <p className="text-sm" style={{ color: '#535366' }}>
                      Most AI agents can be deployed within 2-4 weeks, depending on complexity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#1C1C1C' }}>Do you offer ongoing support?</h4>
                    <p className="text-sm" style={{ color: '#535366' }}>
                      Yes, we provide 24/7 monitoring and support for all our AI agents.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#1C1C1C' }}>Can I customize the AI agents?</h4>
                    <p className="text-sm" style={{ color: '#535366' }}>
                      Absolutely! All our solutions are fully customizable to your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
