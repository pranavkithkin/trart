'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react'
import Link from 'next/link'

interface ProgressiveCTAProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  title: string
  description: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  showIcon?: boolean
  className?: string
}

const ProgressiveCTA = ({
  variant = 'primary',
  title,
  description,
  primaryButtonText = 'Get Free AI Audit',
  primaryButtonLink = '/audit',
  secondaryButtonText,
  secondaryButtonLink,
  showIcon = true,
  className = ''
}: ProgressiveCTAProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-canvas'
      case 'secondary':
        return 'bg-charcoal'
      case 'tertiary':
        return 'bg-slate'
      default:
        return 'bg-canvas'
    }
  }

  return (
    <section className={`section-padding relative overflow-hidden ${getVariantStyles()} ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-charcoal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12 md:p-16 max-w-5xl mx-auto border-2 border-slate/30 shadow-2xl">
            {showIcon && (
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
            )}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: variant === 'secondary' ? '#EAE6E0' : '#1C1C1C' }}
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
              style={{ color: variant === 'secondary' ? 'rgba(234, 230, 224, 0.8)' : '#535366' }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href={primaryButtonLink}>
                <motion.button
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${variant === 'secondary' ? 'btn-premium-light' : 'btn-primary'} text-lg px-12 py-5 flex items-center space-x-3 group shadow-lg`}
                >
                  <Sparkles className="w-6 h-6" />
                  <span>{primaryButtonText}</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              {secondaryButtonText && secondaryButtonLink && (
                <Link href={secondaryButtonLink}>
                  <motion.button
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-lg px-12 py-5 flex items-center space-x-3 group"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>{secondaryButtonText}</span>
                  </motion.button>
                </Link>
              )}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-slate/20"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: variant === 'secondary' ? '#EAE6E0' : '#1C1C1C' }}>5 min</div>
                  <div className="text-sm" style={{ color: variant === 'secondary' ? 'rgba(234, 230, 224, 0.7)' : '#535366' }}>Setup Time</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: variant === 'secondary' ? '#EAE6E0' : '#1C1C1C' }}>No CC</div>
                  <div className="text-sm" style={{ color: variant === 'secondary' ? 'rgba(234, 230, 224, 0.7)' : '#535366' }}>Required</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: variant === 'secondary' ? '#EAE6E0' : '#1C1C1C' }}>24/7</div>
                  <div className="text-sm" style={{ color: variant === 'secondary' ? 'rgba(234, 230, 224, 0.7)' : '#535366' }}>Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgressiveCTA

