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
  Zap,
  Plus,
  Minus,
  Youtube,
  Linkedin,
  Twitter
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
      details: 'pranav@synopslabs.com',
      description: 'Send us an email anytime',
      action: 'mailto:pranav@synopslabs.com'
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
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0A66C2]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/company/synops-labs/?viewAsMember=true',
      color: 'bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20'
    },
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: 'https://twitter.com/synopslabs',
      color: 'bg-black/10 hover:bg-black/20'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      url: 'https://wa.me/971566272141',
      color: 'bg-[#25D366]/10 hover:bg-[#25D366]/20'
    },
    {
      name: 'YouTube',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#FF0000]">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: 'https://youtube.com/trart',
      color: 'bg-[#FF0000]/10 hover:bg-[#FF0000]/20'
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
              Get In <span style={{ color: '#EAE6E0' }}>Touch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
              Ready to transform your business with AI? Let's discuss your needs
              and explore how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pt-24 pb-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.action}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center group hover:bg-slate/5 border border-slate/10 hover:border-slate/30 transition-all duration-300 shadow-sm"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <info.icon className="w-8 h-8" style={{ color: '#1C1C1C' }} />
                </div>
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
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#1C1C1C' }}>Follow Us</h3>
            <div className="flex justify-center flex-wrap gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pt-8 pb-24 bg-canvas">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-xl border border-slate/10 flex flex-col"
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1C1C1C' }}>Send Us a Message</h2>
              <p className="text-lg mb-10 text-slate">
                Have a question or want to discuss your AI automation needs?
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal transition-all appearance-none cursor-pointer"
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

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal transition-all"
                    placeholder="Project Consultation"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-charcoal">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={10}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal transition-all resize-none"
                    placeholder="Tell us about your project goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full h-[72px] bg-charcoal text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-lg hover:bg-slate transition-all disabled:opacity-50 mt-auto"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              {/* Response Time Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-charcoal rounded-2xl flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Response Time</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Email', time: 'Within 24 hours' },
                    { label: 'Phone', time: 'Immediate (Work Hours)' },
                    { label: 'WhatsApp', time: 'Within 2 hours' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate/5">
                      <span className="font-bold text-slate">{item.label}</span>
                      <span className="text-charcoal font-semibold">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Redesigned FAQ */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate/10 flex-1">
                <h3 className="text-2xl font-bold mb-8">Common Questions</h3>
                <div className="space-y-6">
                  {[
                    {
                      q: "Implementation Timeline?",
                      a: "Most AI agents deploy within 2-4 weeks using our accelerated framework."
                    },
                    {
                      q: "Ongoing Support?",
                      a: "24/7 proactive monitoring and iterative improvements included."
                    },
                    {
                      q: "Customization depth?",
                      a: "Fully tailored to your specific CRM, ERP, and internal workflows."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="group cursor-pointer">
                      <h4 className="flex items-center justify-between text-lg font-bold text-charcoal group-hover:text-slate transition-colors">
                        {faq.q}
                      </h4>
                      <p className="mt-2 text-slate leading-relaxed">
                        {faq.a}
                      </p>
                      {i < 2 && <div className="mt-6 border-b border-slate/10" />}
                    </div>
                  ))}
                </div>
                <div className="mt-auto h-[72px] px-6 bg-charcoal/5 rounded-2xl border border-charcoal/10 flex items-center">
                  <p className="text-sm font-medium m-0 flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Serving clients globally from Dubai.</span>
                  </p>
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
