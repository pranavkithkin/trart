'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

const TrustBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [100, 200], [0, 1])

  useEffect(() => {
    // Check if it's mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      if (isMobile) {
        // On mobile: show between 200px and 600px scroll
        setIsVisible(scrollPosition > 200 && scrollPosition < 600)
      } else {
        // On desktop: show after 200px scroll (stays visible)
        setIsVisible(scrollPosition > 200)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  const metrics = [
    {
      icon: Users,
      value: "100+",
      label: "B2B Companies",
      color: "#4ADE80"
    },
    {
      icon: DollarSign,
      value: "$12M+",
      label: "Revenue Generated",
      color: "#60A5FA"
    },
    {
      icon: TrendingUp,
      value: "480%",
      label: "Average ROI",
      color: "#F59E0B"
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Retention",
      color: "#EC4899"
    }
  ]

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      style={{ opacity }}
      className="fixed top-20 left-0 right-0 z-40 pointer-events-none"
    >
      <div className="container-custom">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="glass-dark rounded-2xl shadow-2xl border border-white/20 overflow-hidden pointer-events-auto"
          style={{
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(28, 28, 28, 0.95)'
          }}
        >
          <div className="px-8 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-3 group"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${metric.color}20` }}
                  >
                    <metric.icon className="w-5 h-5" style={{ color: metric.color }} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#EAE6E0' }}>
                      {metric.value}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(234, 230, 224, 0.7)' }}>
                      {metric.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Animated gradient line */}
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              backgroundSize: '200% 100%'
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TrustBanner

