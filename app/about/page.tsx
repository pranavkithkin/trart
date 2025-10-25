'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
      name: "Sarah Chen",
      role: "CEO & AI Strategist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google AI researcher with 10+ years in machine learning and business automation.",
      expertise: ["AI Strategy", "Machine Learning", "Business Automation"]
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in AI agent development and enterprise integration with 15+ years experience.",
      expertise: ["AI Development", "Enterprise Integration", "System Architecture"]
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Computer Science, specializing in natural language processing and AI ethics.",
      expertise: ["NLP", "AI Ethics", "Research & Development"]
    },
    {
      name: "James Park",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Former McKinsey consultant with expertise in process optimization and change management.",
      expertise: ["Process Optimization", "Change Management", "Operations"]
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to democratize AI automation for businesses of all sizes."
    },
    {
      year: "2021",
      title: "First AI Agent Deployed",
      description: "Successfully deployed our first customer service AI agent, achieving 95% satisfaction."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $10M to accelerate product development and expand our team."
    },
    {
      year: "2023",
      title: "100+ Clients Served",
      description: "Reached milestone of serving over 100 enterprise clients across various industries."
    },
    {
      year: "2024",
      title: "AI Innovation Award",
      description: "Recognized as 'Best AI Consultancy' by TechCrunch and AI Industry Awards."
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
    <div className="min-h-screen bg-gradient-to-b from-noir via-teal to-noir pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-noir via-teal to-noir relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
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
              About <span className="gradient-text">Our Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-pearl/80 mb-12 leading-relaxed">
              We're on a mission to democratize AI automation and help businesses 
              of all sizes harness the power of intelligent agents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-xl text-pearl/80 mb-8 leading-relaxed">
                Founded in 2020 by a team of AI researchers and business automation experts, 
                we recognized that most businesses were missing out on the transformative 
                power of AI agents due to complexity and cost barriers.
              </p>
              <p className="text-lg text-pearl/70 mb-8 leading-relaxed">
                We set out to change that by creating accessible, powerful AI solutions 
                that any business can implement and benefit from. Today, we've helped 
                over 100 companies automate their operations and achieve unprecedented efficiency.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-pearl/70">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">300%</div>
                  <div className="text-pearl/70">Average ROI</div>
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
                <h3 className="text-2xl font-bold text-pearl mb-6">Our Vision</h3>
                <p className="text-pearl/80 mb-6">
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
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="text-pearl/80">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-teal via-noir to-teal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-pearl/80 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center group hover:bg-teal/60 border-2 border-gold/20 hover:border-gold/60 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-r from-burgundy via-burgundy-light to-gold rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <value.icon className="w-8 h-8 text-pearl" />
                </motion.div>
                <h3 className="text-xl font-bold text-pearl mb-4">{value.title}</h3>
                <p className="text-pearl/80">{value.description}</p>
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-pearl/80 max-w-3xl mx-auto">
              Our diverse team of AI experts, developers, and business strategists 
              work together to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-3xl p-6 text-center group hover:bg-teal/60 border-2 border-gold/20 hover:border-gold/60 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 bg-gradient-to-r from-burgundy via-burgundy-light to-gold rounded-full mx-auto mb-6 overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-pearl mb-2">{member.name}</h3>
                <p className="text-gold font-semibold mb-4">{member.role}</p>
                <p className="text-pearl/80 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-teal/60 text-pearl/80 text-xs rounded-full"
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

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-teal via-noir to-teal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-pearl/80 max-w-3xl mx-auto">
              Key milestones in our mission to democratize AI automation
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-burgundy via-gold to-burgundy" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-burgundy via-burgundy-light to-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pearl font-bold text-sm">{milestone.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="glass rounded-2xl p-6 flex-1">
                    <h3 className="text-2xl font-bold text-pearl mb-2">{milestone.title}</h3>
                    <p className="text-pearl/80">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border-2 border-gold/30">
              <h2 className="text-4xl font-bold text-pearl mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-pearl/80 mb-8">
                Join the growing number of businesses that have transformed their 
                operations with our AI agents. Get your free audit today.
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
    </div>
  )
}

export default AboutPage
