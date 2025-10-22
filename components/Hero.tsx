'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-noir via-teal to-noir">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A38560' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        {/* Elegant overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-burgundy/30 to-gold/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-gold/30 to-burgundy/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-teal-light/40 to-gold/40 rounded-full blur-xl"
        />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="gradient-text gold-glow">Transform</span>
              <br />
              <span className="text-pearl">your business with</span>
              <br />
              <span className="gradient-text gold-glow">intelligent automation</span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-pearl/80 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Unlock the power of AI agents to automate your workflows, 
            enhance customer experience, and drive unprecedented growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
          >
            <Link href="/audit" className="w-full sm:w-auto">
              <motion.button
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 flex items-center justify-center space-x-2 sm:space-x-3 group w-full sm:w-auto"
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Get Free AI Audit</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/demos" className="w-full sm:w-auto">
              <motion.button
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 flex items-center justify-center space-x-2 sm:space-x-3 group w-full sm:w-auto"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>See Demos</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Brain, title: "AI-Powered", desc: "Advanced machine learning algorithms" },
              { icon: Zap, title: "Lightning Fast", desc: "Real-time processing and responses" },
              { icon: Sparkles, title: "Intelligent", desc: "Self-learning and adaptive systems" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group hover:bg-teal/60 transition-all duration-300 border-2 border-gold/20 hover:border-gold/60"
              >
                <motion.div
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  whileHover={{ rotate: 360 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-burgundy via-burgundy-light to-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-gold/30"
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-pearl" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-pearl mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-pearl/70">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-gold to-burgundy rounded-full mt-2 shadow-lg shadow-gold/50"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
