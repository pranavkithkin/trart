'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll() // Check initial state
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-2xl' : ''
      }`}
      style={{
        backgroundColor: scrolled ? '#1C1C1C' : 'rgba(28, 28, 28, 0.85)',
        backdropFilter: scrolled ? 'none' : 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(83, 83, 102, 0.15)' : '0px solid transparent',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        transition: 'all 500ms ease'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between" style={{ 
          height: scrolled ? '72px' : '88px',
          transition: 'height 500ms ease'
        }}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="relative"
              style={{
                width: scrolled ? '56px' : '64px',
                height: scrolled ? '56px' : '64px',
                transition: 'all 500ms ease',
                filter: "brightness(1.3) drop-shadow(0 0 12px rgba(255, 255, 255, 0.25))",
              }}
            >
              <Image
                src="/trart-logo.png"
                alt="TRART Ai Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-300 relative group font-accent font-medium tracking-wide uppercase text-sm"
                style={{ letterSpacing: '0.08em' }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </Link>
            ))}
            <Link
              href="/audit"
              className="relative overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white px-8 py-3 rounded font-accent font-bold uppercase text-xs tracking-wider transition-all duration-300 relative"
                style={{ 
                  letterSpacing: '0.1em',
                  boxShadow: '0 4px 16px rgba(255, 255, 255, 0.15)'
                }}
              >
                <span className="relative z-10 text-charcoal group-hover:text-white transition-colors duration-300">
                  Get Free AI Audit
                </span>
                <div className="absolute inset-0 bg-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-3 rounded-lg hover:bg-white/10 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-charcoal/95 rounded-lg mt-4 overflow-hidden border border-slate/30"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-white/90 hover:text-white transition-colors py-3 px-4 font-accent font-medium uppercase text-sm tracking-wide rounded-lg hover:bg-white/10 min-h-[48px] flex items-center"
                      onClick={() => setIsOpen(false)}
                      style={{ letterSpacing: '0.08em' }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    href="/audit"
                    className="relative overflow-hidden group inline-flex items-center justify-center w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className="bg-white w-full text-center px-6 py-3 rounded font-accent font-bold uppercase text-xs tracking-wider transition-all duration-300 relative"
                      style={{ 
                        letterSpacing: '0.1em',
                        boxShadow: '0 4px 16px rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      <span className="relative z-10 text-charcoal group-hover:text-white transition-colors duration-300">
                        Get Free AI Audit
                      </span>
                      <div className="absolute inset-0 bg-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
