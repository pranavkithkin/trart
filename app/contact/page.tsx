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
  Clock,
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
      details: 'hello@trart.uk',
      description: 'Send us an email anytime',
      action: 'mailto:hello@trart.uk'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule an in-person meeting',
      action: '#'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+1 (555) 123-4567',
      description: 'Quick chat support',
      action: 'https://wa.me/15551234567'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/trart',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/trart',
      color: 'hover:bg-blue-400'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/trart',
      color: 'hover:bg-gray-600'
    },
    {
      name: 'YouTube',
      icon: '📺',
      url: 'https://youtube.com/trart',
      color: 'hover:bg-red-600'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-noir via-teal to-noir pt-20 flex items-center justify-center">
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
            className="w-24 h-24 bg-gradient-to-r from-burgundy via-burgundy-light to-gold rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-pearl" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Message Sent!</span>
          </h1>
          
          <p className="text-xl text-pearl/80 mb-8">
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-pearl/80 mb-12 leading-relaxed">
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
              Multiple Ways to <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-pearl/80 max-w-3xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.action}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center group hover:bg-teal/60 border-2 border-gold/20 hover:border-gold/60 transition-all duration-300"
              >
                <motion.div
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  whileHover={{ rotate: 360 }}
                  className="w-16 h-16 bg-gradient-to-r from-burgundy via-burgundy-light to-gold rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <info.icon className="w-8 h-8 text-pearl" />
                </motion.div>
                <h3 className="text-xl font-bold text-pearl mb-2">{info.title}</h3>
                <p className="text-gold font-semibold mb-2">{info.details}</p>
                <p className="text-pearl/70 text-sm">{info.description}</p>
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
            <h3 className="text-2xl font-bold text-pearl mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 glass rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-b from-teal via-noir to-teal">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-pearl mb-6">Send Us a Message</h2>
              <p className="text-pearl/80 mb-8">
                Have a question or want to discuss your AI automation needs? 
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-pearl font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-teal/60 border border-gold/30 rounded-lg text-pearl placeholder-pearl/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-pearl font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-teal/60 border border-gold/30 rounded-lg text-pearl placeholder-pearl/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-pearl font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-teal/60 border border-gold/30 rounded-lg text-pearl placeholder-pearl/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Acme Corporation"
                    />
                  </div>
                  <div>
                    <label className="block text-pearl font-semibold mb-2">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-teal/60 border border-gold/30 rounded-lg text-pearl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
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
                  <label className="block text-pearl font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-teal/60 border border-gold/30 rounded-lg text-pearl placeholder-pearl/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-pearl font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-teal/60 border border-gold/30 rounded-lg text-pearl placeholder-pearl/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
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
              {/* Office Hours */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-gold" />
                  <h3 className="text-xl font-bold text-pearl">Office Hours</h3>
                </div>
                <div className="space-y-2 text-pearl/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-gold" />
                  <h3 className="text-xl font-bold text-pearl">Response Time</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-pearl/80">Email: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-pearl/80">Phone: Immediate during business hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-pearl/80">WhatsApp: Within 2 hours</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold text-pearl mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-pearl font-semibold mb-2">How long does implementation take?</h4>
                    <p className="text-pearl/80 text-sm">
                      Most AI agents can be deployed within 2-4 weeks, depending on complexity.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-pearl font-semibold mb-2">Do you offer ongoing support?</h4>
                    <p className="text-pearl/80 text-sm">
                      Yes, we provide 24/7 monitoring and support for all our AI agents.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-pearl font-semibold mb-2">Can I customize the AI agents?</h4>
                    <p className="text-pearl/80 text-sm">
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
