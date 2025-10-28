'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare,
  Sparkles,
  Zap
} from 'lucide-react'

const AuditPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [step, setStep] = useState(1)
  const totalSteps = 4
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    revenue: '',
    challenges: '',
    currentAutomation: '',
    timeline: ''
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
      const response = await fetch('/api/audit', {
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
            <span className="text-charcoal">Thank You!</span>
          </h1>
          
          <p className="text-xl mb-8" style={{ color: '#535366' }}>
            Your AI audit request has been submitted successfully. Our team will review your
            information and contact you within 24 hours to schedule your free consultation.
          </p>

          <div className="glass rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>What Happens Next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-canvas rounded-full flex items-center justify-center font-bold" style={{ color: '#1C1C1C' }}>1</div>
                <span style={{ color: '#535366' }}>We'll analyze your current processes and identify automation opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-canvas rounded-full flex items-center justify-center font-bold" style={{ color: '#1C1C1C' }}>2</div>
                <span style={{ color: '#535366' }}>Our AI experts will prepare a customized audit report</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-canvas rounded-full flex items-center justify-center font-bold" style={{ color: '#1C1C1C' }}>3</div>
                <span style={{ color: '#535366' }}>We'll schedule a free consultation to discuss your results</span>
              </div>
            </div>
          </div>
          
          <motion.button
            transition={{ duration: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </motion.button>
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
              Get Your <span style={{ color: '#EAE6E0' }}>Free AI Growth Audit</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
              In 60 seconds, discover exactly where AI can drive revenue, cut costs, 
              and give you an unfair competitive advantage. $12M+ generated for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-8"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold" style={{ color: '#535366' }}>
                    Step {step} of {totalSteps}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: '#535366' }}>
                    {Math.round((step / totalSteps) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-slate/20 rounded-full h-2">
                  <div 
                    className="bg-charcoal h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
                {step === 1 && "Let's start with the basics"}
                {step === 2 && "Tell us about your company"}
                {step === 3 && "What challenges are you facing?"}
                {step === 4 && "Almost there!"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Contact Info */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-canvas border-2 border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-charcoal text-lg"
                        style={{ color: '#1C1C1C' }}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-canvas border-2 border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-charcoal text-lg"
                        style={{ color: '#1C1C1C' }}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Phone Number (Optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-canvas border-2 border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-charcoal text-lg"
                        style={{ color: '#1C1C1C' }}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Company Info */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-canvas border-2 border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-charcoal text-lg"
                        style={{ color: '#1C1C1C' }}
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Company Size *</label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-canvas border-2 border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-charcoal text-lg"
                        style={{ color: '#1C1C1C' }}
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-100">51-100 employees</option>
                        <option value="101-250">101-250 employees</option>
                        <option value="251-500">251-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Annual Revenue *</label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-canvas border-2 border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-charcoal text-lg"
                        style={{ color: '#1C1C1C' }}
                      >
                        <option value="">Select annual revenue</option>
                        <option value="<1M">Less than $1M</option>
                        <option value="1-5M">$1M - $5M</option>
                        <option value="5-10M">$5M - $10M</option>
                        <option value="10-25M">$10M - $25M</option>
                        <option value="25-50M">$25M - $50M</option>
                        <option value="50M+">$50M+</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Challenges */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>
                        What's your biggest challenge right now? *
                      </label>
                      <textarea
                        name="challenges"
                        value={formData.challenges}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-4 bg-canvas border-2 border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-charcoal text-lg"
                        style={{ color: '#1C1C1C' }}
                        placeholder="E.g., Sales team spends 60% of time on admin work, customer response times are too slow, manual invoice processing takes 2 weeks..."
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>Current Automation Level *</label>
                      <select
                        name="currentAutomation"
                        value={formData.currentAutomation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-canvas border-2 border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-charcoal text-lg"
                        style={{ color: '#1C1C1C' }}
                      >
                        <option value="">Where are you today?</option>
                        <option value="none">Mostly manual processes</option>
                        <option value="basic">Basic tools (email, spreadsheets)</option>
                        <option value="intermediate">CRM and workflow tools</option>
                        <option value="advanced">Already using some AI/automation</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Timeline & Budget */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#1C1C1C' }}>When do you want to get started? *</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-canvas border-2 border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-charcoal text-lg"
                        style={{ color: '#1C1C1C' }}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP - This is urgent</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="planning">Just exploring options</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 space-x-4">
                  {step > 1 && (
                    <motion.button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-charcoal/20 hover:border-charcoal/40 transition-all"
                      style={{ color: '#1C1C1C' }}
                    >
                      Back
                    </motion.button>
                  )}
                  
                  {step < totalSteps ? (
                    <motion.button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary text-lg py-4 flex items-center justify-center space-x-3 group"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                      className="flex-1 btn-primary text-lg py-4 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-dots">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-6 h-6" />
                          <span>Get My Free Audit</span>
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#1C1C1C' }}>What You'll Get</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Zap,
                      title: "Comprehensive Analysis",
                      description: "Detailed assessment of your current processes and automation potential"
                    },
                    {
                      icon: Sparkles,
                      title: "Custom Recommendations",
                      description: "Personalized AI agent solutions tailored to your specific needs"
                    },
                    {
                      icon: CheckCircle,
                      title: "ROI Projections",
                      description: "Clear projections on potential savings and efficiency gains"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-canvas rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6" style={{ color: '#1C1C1C' }} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2" style={{ color: '#1C1C1C' }}>{benefit.title}</h4>
                        <p style={{ color: '#535366' }}>{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4" style={{ color: '#1C1C1C' }}>Why Choose Our Audit?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#535366' }} />
                    <span style={{ color: '#535366' }}>100% Free with no obligations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#535366' }} />
                    <span style={{ color: '#535366' }}>Conducted by AI experts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#535366' }} />
                    <span style={{ color: '#535366' }}>Delivered within 48 hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#535366' }} />
                    <span style={{ color: '#535366' }}>Confidential and secure</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AuditPage
