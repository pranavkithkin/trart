'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star, CheckCircle, TrendingUp, Building2 } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Customer Success",
      company: "TechVision Global",
      industry: "Enterprise SaaS",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      quote: "Synopslabs AI transformed our customer success operations. What used to take our team days now happens in minutes. Our CSAT scores have never been higher, and our team can focus on building relationships instead of answering the same questions repeatedly.",
      rating: 5,
      results: "94% reduction in response time",
      metrics: [
        { label: "Response Time", value: "6min", before: "48hrs" },
        { label: "CSAT Score", value: "96%", change: "+38pts" },
        { label: "Cost Savings", value: "$240K", period: "annually" }
      ],
      verified: true
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Revenue Officer",
      company: "Precision Parts Inc.",
      industry: "B2B Manufacturing",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      quote: "Our sales team was drowning in administrative work. Synopslabs' AI Sales Orchestration gave them back 60% of their time to actually sell. We've seen our close rates more than double, and our sales cycle is now under 5 weeks.",
      rating: 5,
      results: "62% faster sales cycles",
      metrics: [
        { label: "Sales Cycle", value: "34 days", before: "89 days" },
        { label: "Conversion Rate", value: "41%", change: "+156%" },
        { label: "Revenue Impact", value: "$3.2M", period: "annually" }
      ],
      verified: true
    },
    {
      name: "Jennifer Park",
      role: "Chief Financial Officer",
      company: "Aspire Financial Group",
      industry: "Financial Services",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      quote: "The ROI was immediate and undeniable. What took our team two weeks now happens overnight with 99.7% accuracy. We've redirected two FTEs to strategic finance work, and our compliance audit was the smoothest we've ever had.",
      rating: 5,
      results: "99.7% accuracy achieved",
      metrics: [
        { label: "Processing Time", value: "18hrs", before: "12 days" },
        { label: "Accuracy Rate", value: "99.7%", change: "from 87%" },
        { label: "Annual Savings", value: "$180K", period: "year 1" }
      ],
      verified: true
    },
    {
      name: "Amanda Sullivan",
      role: "Chief Marketing Officer",
      company: "StyleHub Retail",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      quote: "Content production went from our biggest bottleneck to our competitive advantage. We can now launch products in days instead of weeks, and our SEO traffic has nearly tripled. The AI nailed our brand voice perfectly.",
      rating: 5,
      results: "50x faster content production",
      metrics: [
        { label: "Production Speed", value: "50x", change: "faster" },
        { label: "SEO Traffic", value: "284%", change: "increase" },
        { label: "Revenue Impact", value: "$1.8M", period: "additional" }
      ],
      verified: true
    }
  ]

  return (
    <section className="section-padding bg-canvas relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-charcoal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
            Client Success Stories
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#535366' }}>
            Real results from B2B companies transforming with AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-3xl p-8 relative group hover:bg-slate/10 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16" style={{ color: '#535366' }} />
              </div>

              {/* Company Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-charcoal/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6" style={{ color: '#1C1C1C' }} />
                  </div>
                  <div>
                    <div className="font-bold" style={{ color: '#1C1C1C' }}>{testimonial.company}</div>
                    <div className="text-xs" style={{ color: '#535366' }}>{testimonial.industry}</div>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center space-x-1 px-3 py-1 bg-green-100 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-700">Verified</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg mb-6 leading-relaxed italic relative z-10 flex-1" style={{ color: '#1C1C1C' }}>
                "{testimonial.quote}"
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate/5 rounded-xl">
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center flex flex-col h-full">
                    <div className="text-2xl font-bold mb-1" style={{ color: '#1C1C1C' }}>
                      {metric.value}
                    </div>
                    <div className="text-xs mb-1" style={{ color: '#535366' }}>
                      {metric.label}
                    </div>
                    <div className="mt-auto">
                      {metric.change && (
                        <div className="text-xs font-semibold" style={{ color: '#4ADE80' }}>
                          {metric.change}
                        </div>
                      )}
                      {metric.before && (
                        <div className="text-xs" style={{ color: '#535366', opacity: 0.7 }}>
                          from {metric.before}
                        </div>
                      )}
                      {metric.period && (
                        <div className="text-xs" style={{ color: '#535366', opacity: 0.7 }}>
                          {metric.period}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 mt-auto border-t border-slate/20">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate/40 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: '#1C1C1C' }}>{testimonial.name}</h4>
                  <p className="text-sm" style={{ color: '#535366' }}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#4ADE80' }}>$50K</div>
                <div style={{ color: '#535366' }}>Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#60A5FA' }}>250%</div>
                <div style={{ color: '#535366' }}>Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#F59E0B' }}>10+</div>
                <div style={{ color: '#535366' }}>B2B Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#EC4899' }}>98%</div>
                <div style={{ color: '#535366' }}>Retention Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

