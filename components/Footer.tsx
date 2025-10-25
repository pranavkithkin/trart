'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Youtube
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Sales Agent', href: '/services#sales' },
      { name: 'Support Agent', href: '/services#support' },
      { name: 'Finance Ops', href: '/services#finance' },
      { name: 'HR Agent', href: '/services#hr' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Demos', href: '/demos' },
      { name: 'Templates', href: '/demos#templates' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog', href: '/blog' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'API Docs', href: '/api-docs' },
      { name: 'Status', href: '/status' },
      { name: 'Security', href: '/security' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/trart', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/trart', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/trart', color: 'hover:text-gray-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/trart', color: 'hover:text-red-400' }
  ]

  return (
    <footer className="bg-gradient-to-b from-teal to-noir border-t border-gold/20">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Link href="/" className="inline-block mb-6">
                <motion.div
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-24 sm:w-56 sm:h-28"
                  style={{
                    filter: "brightness(1.2) drop-shadow(0 0 25px rgba(163, 133, 96, 0.6)) drop-shadow(0 0 50px rgba(163, 133, 96, 0.4))",
                  }}
                >
                  <Image
                    src="/trart-logo.png"
                    alt="TRART Ai Logo"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </Link>
              <p className="text-pearl/70 mb-6 max-w-md">
                Transforming businesses with intelligent automation. We help companies 
                harness the power of AI agents to streamline operations and drive growth.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-pearl/70">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:pranvkithkin11@gmail.com" className="hover:text-gold transition-colors">
                  pranvkithkin11@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-pearl/70">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+971566272141" className="hover:text-gold transition-colors">
                  +971 (56) 627-2141
                </a>
              </div>
              <div className="flex items-center space-x-3 text-pearl/70">
                <MapPin className="w-5 h-5 text-gold" />
                <span>Dubai, UAE</span>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h3 className="text-gold font-bold text-lg mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-pearl/70 hover:text-gold transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-gold" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gold/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-pearl mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg md:text-xl text-pearl/80 mb-8">
              Discover how AI agents can revolutionize your operations. Get your free audit today and unlock unprecedented efficiency.
            </p>
            <Link href="/audit">
              <motion.button
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-4 flex items-center justify-center space-x-3 mx-auto group shadow-lg shadow-gold/20 hover:shadow-gold/40"
              >
                <span>Get Free AI Audit</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gold/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-pearl/60 text-sm"
            >
              © {currentYear} TRART Ai. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-pearl/60 hover:text-gold transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-6 text-sm"
            >
              <Link href="/privacy" className="text-pearl/60 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-pearl/60 hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-pearl/60 hover:text-gold transition-colors">
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
