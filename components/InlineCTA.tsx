'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface InlineCTAProps {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'text' | 'accent'
  icon?: React.ReactNode
  className?: string
}

const InlineCTA = ({
  text,
  href,
  variant = 'primary',
  icon,
  className = ''
}: InlineCTAProps) => {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary'
      case 'secondary':
        return 'btn-secondary'
      case 'text':
      case 'accent':
        return 'font-semibold inline-flex items-center space-x-2 group transition-all duration-300'
      default:
        return 'btn-primary'
    }
  }

  if (variant === 'text' || variant === 'accent') {
    return (
      <Link href={href} className={`${getVariantStyles()} ${className}`}>
        <span style={{ color: variant === 'accent' ? '#EAE6E0' : '#1C1C1C' }} className="hover:text-slate transition-colors">{text}</span>
        <motion.span
          className="inline-block"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {icon || <ArrowRight className="w-5 h-5" style={{ color: variant === 'accent' ? '#EAE6E0' : '#1C1C1C' }} />}
        </motion.span>
      </Link>
    )
  }

  return (
    <Link href={href}>
      <motion.button
        transition={{ duration: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${getVariantStyles()} flex items-center space-x-2 ${className}`}
      >
        {icon}
        <span>{text}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </Link>
  )
}

export default InlineCTA

