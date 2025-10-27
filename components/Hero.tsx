'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal">
      {/* Clean solid background */}
      <div className="absolute inset-0 bg-charcoal">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.h1
                className="font-bold mb-6"
                style={{ color: '#FFFFFF' }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                AI-Powered Growth Engine
                <br />
                <span style={{ color: '#EAE6E0' }}>for Ambitious B2B Companies</span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-body-large mb-12 leading-relaxed"
              style={{ color: '#EAE6E0' }}
            >
              We don't just implement AI—we transform B2B operations into revenue-generating 
              machines. Our clients achieve 480% average ROI while their competitors struggle with manual processes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12"
            >
              <Link href="/audit">
                <motion.button
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-12 py-5 flex items-center space-x-3 group"
                >
                  <Sparkles className="w-6 h-6" />
                  <span>Get Free AI Audit</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/demos">
                <motion.button
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-12 py-5 flex items-center space-x-3 group"
                >
                  <Zap className="w-6 h-6" />
                  <span>See Demos</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 text-center lg:text-left"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-dark px-6 py-4 rounded-xl border border-white/10"
              >
                <div className="text-4xl font-bold font-accent" style={{ color: '#4ADE80' }}>$12M+</div>
                <div style={{ color: 'rgba(234, 230, 224, 0.9)' }} className="text-sm">Revenue Generated</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-dark px-6 py-4 rounded-xl border border-white/10"
              >
                <div className="text-4xl font-bold font-accent" style={{ color: '#60A5FA' }}>480%</div>
                <div style={{ color: 'rgba(234, 230, 224, 0.9)' }} className="text-sm">Average ROI</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-dark px-6 py-4 rounded-xl border border-white/10"
              >
                <div className="text-4xl font-bold font-accent" style={{ color: '#F59E0B' }}>100+</div>
                <div style={{ color: 'rgba(234, 230, 224, 0.9)' }} className="text-sm">B2B Companies</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Image */}
            <div className="relative glass rounded-2xl overflow-hidden border border-primary/20 shadow-xl group">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="AI Dashboard showing automation analytics"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute top-6 left-6 bg-canvas/95 backdrop-blur-sm rounded-xl p-4 border border-slate/20 shadow-xl"
                  style={{ backgroundColor: 'rgba(234, 230, 224, 0.95)' }}
                >
                  <div style={{ color: '#535366' }} className="text-sm font-semibold mb-1">Automation Rate</div>
                  <div style={{ color: '#1C1C1C' }} className="text-2xl font-bold font-accent">94%</div>
                  <div style={{ color: '#EAE6E0' }} className="text-xs flex items-center mt-1">
                    ↑ 23% from last month
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute bottom-6 right-6 bg-canvas/95 backdrop-blur-sm rounded-xl p-4 border border-slate/20 shadow-xl"
                  style={{ backgroundColor: 'rgba(234, 230, 224, 0.95)' }}
                >
                  <div style={{ color: '#535366' }} className="text-sm font-semibold mb-1">Cost Savings</div>
                  <div style={{ color: '#1C1C1C' }} className="text-2xl font-bold font-accent">$127K</div>
                  <div style={{ color: '#EAE6E0' }} className="text-xs flex items-center mt-1">
                    Monthly savings achieved
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute -bottom-6 -left-6 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-[200px]"
              style={{ backgroundColor: 'rgba(234, 230, 224, 0.95)', border: '1px solid rgba(83, 83, 102, 0.2)' }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1C1C1C' }}>
                  <Brain className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <div style={{ color: '#1C1C1C' }} className="font-semibold text-sm">AI Learning</div>
                  <div style={{ color: '#535366', opacity: 0.7 }} className="text-xs">Active</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Icons - Now Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
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
              transition={{ duration: 0.2, ease: "easeOut", delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-canvas/90 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-canvas transition-all duration-300 border border-slate/20 hover:border-slate/40 shadow-xl"
              style={{ backgroundColor: 'rgba(234, 230, 224, 0.9)' }}
            >
              <motion.div
                transition={{ duration: 0.3, ease: "easeInOut" }}
                whileHover={{ rotate: 360 }}
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ backgroundColor: '#1C1C1C' }}
              >
                <feature.icon className="w-8 h-8" style={{ color: '#FFFFFF' }} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1C1C1C' }}>{feature.title}</h3>
              <p style={{ color: '#535366' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: 'rgba(234, 230, 224, 0.6)' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: '#EAE6E0' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
