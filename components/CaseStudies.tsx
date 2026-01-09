'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/lib/case-studies-data'
import Link from 'next/link'

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="case-studies" className="section-padding bg-canvas relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: '#1C1C1C' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Real Results, Real Revenue
          </motion.h2>
          <motion.p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: '#535366' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See how ambitious B2B companies are using Synopslabs AI to accelerate growth,
            slash costs, and dominate their markets
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-charcoal rounded-2xl flex items-center justify-center mb-6">
                  <study.icon className="w-8 h-8 text-white" />
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Active Implementation
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-charcoal">
                  {study.companyName}: {study.title.split(':')[1] || study.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="border-2 border-slate-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Impact Score
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      {study.roi}
                    </div>
                  </div>
                  <div className="border-2 border-slate-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Efficiency Gain
                    </div>
                    <div className="text-3xl font-bold text-green-600">
                      {study.results[0]?.change || study.results[1]?.change}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/case-studies/${study.slug}`} className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-charcoal text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 group-hover:bg-slate-800 transition-colors"
                  >
                    <span>Read Full Detailed Case Study</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-50 rounded-3xl p-12 max-w-3xl mx-auto border border-slate-200">
            <h3 className="text-3xl font-bold mb-4 text-charcoal">
              Ready for Results Like These?
            </h3>
            <p className="text-xl mb-8 text-slate-600">
              Get your free AI audit and discover your growth potential
            </p>
            <Link href="/audit">
              <motion.button
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-charcoal text-white px-12 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 mx-auto group shadow-xl hover:bg-slate-800 transition-colors"
              >
                <span>Get Your Free Audit</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies
