'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Wrench, Play, ArrowRight } from 'lucide-react'

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const steps = [
    {
      number: "01",
      title: "Audit",
      description: "We analyze your current processes and identify automation opportunities",
      icon: Search,
      color: "from-burgundy via-burgundy-light to-gold",
      details: [
        "Process analysis",
        "Gap identification", 
        "ROI assessment",
        "Custom recommendations"
      ]
    },
    {
      number: "02", 
      title: "Build",
      description: "Our team develops custom AI agents tailored to your specific needs",
      icon: Wrench,
      color: "from-gold via-gold-light to-burgundy",
      details: [
        "Custom development",
        "Integration setup",
        "Testing & validation",
        "Performance optimization"
      ]
    },
    {
      number: "03",
      title: "Run", 
      description: "Deploy and monitor your AI agents with ongoing support and optimization",
      icon: Play,
      color: "from-burgundy via-gold to-burgundy",
      details: [
        "Seamless deployment",
        "24/7 monitoring",
        "Continuous optimization",
        "Ongoing support"
      ]
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-teal via-noir to-teal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-burgundy/20 to-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-gold/20 to-burgundy/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It <span className="gradient-text gold-glow">Works</span>
          </h2>
          <p className="text-xl text-pearl/80 max-w-3xl mx-auto">
            Our proven 3-step process ensures your AI transformation is seamless, 
            effective, and delivers measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-gold/50 via-gold/20 to-transparent z-0" />
              )}

              <div className="glass rounded-3xl p-8 h-full relative z-10 group-hover:bg-teal/60 transition-all duration-300 border-2 border-gold/20 group-hover:border-gold/60 shadow-xl shadow-gold/10">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-gold/40`}
                  >
                    <step.icon className="w-8 h-8 text-pearl" />
                  </motion.div>
                  <span className="text-6xl font-bold text-teal-light group-hover:text-gold/30 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-pearl mb-4">{step.title}</h3>
                <p className="text-pearl/80 mb-6 leading-relaxed">{step.description}</p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (detailIndex * 0.1) }}
                      className="flex items-center space-x-3 text-pearl/70"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full shadow-sm shadow-gold/50`} />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-burgundy/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border-2 border-gold/30 shadow-2xl shadow-gold/20">
            <h3 className="text-3xl font-bold text-pearl mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-pearl/80 mb-8">
              Start your AI journey today with our free audit and discover the potential 
              for intelligent automation in your organization.
            </p>
            <Link href="/audit">
              <motion.button
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-12 py-4 flex items-center space-x-3 mx-auto group shadow-lg shadow-gold/30 hover:shadow-gold/50"
              >
                <span>Get Free AI Audit</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
