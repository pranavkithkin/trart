'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Zap
} from 'lucide-react'

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const team = [
    {
      name: "Pranav Satheesan",
      role: "CEO & Strategic Consultant",
      image: "",
      bio: "AI educator and community leader who's trained 1,000+ professionals on AI implementation. Former enterprise consultant specializing in digital transformation and revenue operations.",
      expertise: ["AI Strategy", "Revenue Operations", "Community Leadership", "B2B Consulting"],
      highlight: "Built a large community of AI implementation professionals"
    },
    {
      name: "Suhail Malayil",
      role: "COO & Systems Architect",
      image: "",
      bio: "Enterprise systems architect with 12+ years building scalable automation platforms for Fortune 500 companies. Expert in complex integrations and data architecture.",
      expertise: ["System Architecture", "Enterprise Integration", "Data Engineering", "Process Design"],
      highlight: "Deployed AI systems processing millions of transactions"
    }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI technology"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique challenges"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security and compliance are at the core of everything we do"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We measure success by the positive impact we create for our clients"
    }
  ]

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
            <div className="inline-block px-6 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-lg font-bold" style={{ color: '#EAE6E0' }}>AI-Native Since 2020</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Built by AI Experts, <span style={{ color: '#EAE6E0' }}>For Growth-Obsessed Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
              We're not consultants who jumped on the AI bandwagon. We've been building 
              production AI systems since 2020, before ChatGPT made it trendy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section-padding bg-canvas">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass rounded-3xl overflow-hidden border-2 border-slate/30">
                <div className="relative h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                    alt="TRART Ai Team collaborating"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/30" />

                  {/* Floating Quote Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-6 border border-slate/30"
                  >
                    <p className="italic text-sm mb-3" style={{ color: 'rgba(28, 28, 28, 0.9)' }}>
                      "Every business deserves the power of AI automation, not just tech giants."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-charcoal rounded-full" />
                      <div>
                        <div className="font-semibold text-sm" style={{ color: '#1C1C1C' }}>Founder & CEO</div>
                        <div style={{ color: '#535366' }}>TRART Ai</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-bold mb-6">
                Why We're <span className="text-charcoal">Different</span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed font-semibold" style={{ color: '#1C1C1C' }}>
                  We're AI-natives, not AI-tourists.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#535366' }}>
                  While most consultancies are scrambling to retrofit AI into their existing playbooks,
                  we've been building production AI systems since 2020. We understand the technology
                  at a fundamental level because we've been living and breathing it for years.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#535366' }}>
                  Our CEO isn't just a strategist—he's an educator who's trained over 1,000 professionals
                  on AI implementation and built India's largest AI community. Our COO isn't just an
                  operator—he's a systems architect who's deployed AI platforms processing 100M+ transactions.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#535366' }}>
                  We don't do theoretical frameworks. We build systems that generate revenue, cut costs,
                  and deliver measurable ROI. Our clients don't pay us for advice—they pay us for results.
                </p>
                
                <div className="glass rounded-2xl p-6 border border-slate/30">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#1C1C1C' }}>Our Operating Principles</h4>
                  <ul className="space-y-3">
                    {[
                      "Revenue first—every solution must drive measurable business outcomes",
                      "No BS—we speak in ROI and results, not jargon and buzzwords",
                      "Speed matters—deploy in weeks, not quarters",
                      "Partnership over projects—we succeed when you succeed"
                    ].map((principle, index) => (
                      <motion.li
                        key={principle}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-charcoal rounded-full" />
                        <span style={{ color: '#535366' }}>{principle}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-bold mb-6">
                Our <span className="text-charcoal">Track Record</span>
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#535366' }}>
                We've helped 100+ B2B companies generate over $12M in new revenue and achieve
                an average ROI of 480%. But we're not just about the numbers—we're about transformation.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#535366' }}>
                Our clients don't just get AI systems. They get competitive advantages. They get
                time back. They get insights they never had. They get growth engines that compound over time.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center glass rounded-xl p-4">
                  <div className="text-4xl font-bold text-charcoal mb-2">100+</div>
                  <div className="text-sm" style={{ color: '#535366' }}>B2B Companies</div>
                </div>
                <div className="text-center glass rounded-xl p-4">
                  <div className="text-4xl font-bold text-charcoal mb-2">$12M+</div>
                  <div className="text-sm" style={{ color: '#535366' }}>Revenue Generated</div>
                </div>
                <div className="text-center glass rounded-xl p-4">
                  <div className="text-4xl font-bold text-charcoal mb-2">480%</div>
                  <div className="text-sm" style={{ color: '#535366' }}>Average ROI</div>
                </div>
                <div className="text-center glass rounded-xl p-4">
                  <div className="text-4xl font-bold text-charcoal mb-2">98%</div>
                  <div className="text-sm" style={{ color: '#535366' }}>Retention Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1C1C1C' }}>Our Vision</h3>
                <p className="mb-6" style={{ color: '#535366' }}>
                  To create a world where every business, regardless of size or industry,
                  can leverage AI agents to automate their operations and focus on what
                  truly matters - growth and innovation.
                </p>
                <div className="space-y-4">
                  {[
                    "Democratize AI technology",
                    "Empower business growth",
                    "Drive innovation forward",
                    "Create lasting impact"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5" style={{ color: '#535366' }} />
                      <span style={{ color: '#535366' }}>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A38560' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
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
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-burgundy/20 to-gold/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-gold/20 to-burgundy/20 rounded-full blur-xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="gradient-text gold-glow">Our Values</span>
            </motion.h2>
            <motion.p
              className="text-2xl max-w-4xl mx-auto leading-relaxed"
              style={{ color: 'rgba(234, 230, 224, 0.9)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              These core values guide everything we do and shape how we work with our clients
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative group"
              >
                {/* Card Background with Enhanced Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pearl/10 via-pearl/5 to-transparent rounded-3xl blur-xl transform group-hover:blur-2xl transition-all duration-500" />

                <div className="relative glass rounded-3xl p-8 text-center border-2 border-gold/20 hover:border-gold/60 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Enhanced Icon Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.8 + index * 0.15,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                    className="relative w-20 h-20 mx-auto mb-8"
                  >
                    {/* Icon background with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-burgundy rounded-2xl shadow-lg shadow-gold/30 transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute inset-1 bg-gradient-to-br from-burgundy via-gold to-gold-light rounded-2xl flex items-center justify-center">
                      <value.icon className="w-10 h-10 text-pearl drop-shadow-lg" />
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100 animate-pulse" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-burgundy rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-100" />
                  </motion.div>

                  {/* Enhanced Typography */}
                  <motion.h3
                    className="text-2xl font-bold mb-5 text-pearl relative"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.15 }}
                  >
                    {value.title}
                    {/* Underline effect */}
                    <div className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-gold to-burgundy group-hover:w-full left-0 transition-all duration-500" />
                  </motion.h3>

                  <motion.p
                    className="text-pearl/80 leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.15 }}
                  >
                    {value.description}
                  </motion.p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 via-gold/5 to-burgundy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the <span className="text-charcoal">Leadership</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#535366' }}>
              AI-natives with real-world experience building systems that generate millions in revenue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-3xl p-8 group hover:bg-slate/10 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-32 h-32 bg-canvas rounded-2xl flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#1C1C1C' }}>{member.name}</h3>
                    <p className="font-semibold mb-3" style={{ color: '#535366' }}>{member.role}</p>
                    <div className="inline-block px-3 py-1 bg-charcoal/10 rounded-full mb-4">
                      <span className="text-xs font-bold text-charcoal">{member.highlight}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm mb-6 mt-4 leading-relaxed" style={{ color: '#535366' }}>{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full font-medium"
                      style={{
                        backgroundColor: 'rgba(83, 83, 102, 0.1)',
                        color: '#535366',
                        border: '1px solid rgba(83, 83, 102, 0.2)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border-2 border-slate/30">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
                Ready to Work With Us?
              </h2>
              <p className="text-xl mb-8" style={{ color: '#535366' }}>
                Join the growing number of businesses that have transformed their
                operations with our AI agents. Get your free audit today.
              </p>
              <Link href="/audit">
                <motion.button
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-12 py-4 flex items-center space-x-3 mx-auto group shadow-lg"
                >
                  <span>Get Free AI Audit</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
