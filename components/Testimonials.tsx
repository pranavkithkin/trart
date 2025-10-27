'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      quote: "TRART Ai transformed our customer service operations. We've seen a 70% reduction in response times and our customer satisfaction scores have never been higher. The AI agents handle routine inquiries flawlessly, allowing our team to focus on complex issues.",
      rating: 5,
      results: "70% faster response time"
    },
    {
      name: "David Chen",
      role: "COO, GlobalCorp",
      company: "GlobalCorp",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      quote: "Implementing TRART's AI agents for our sales process was a game-changer. We've increased our conversion rates by 45% and our sales team can now focus on high-value opportunities. The ROI was evident within the first quarter.",
      rating: 5,
      results: "45% increase in conversions"
    },
    {
      name: "Sarah Williams",
      role: "CFO, FinanceFirst",
      company: "FinanceFirst", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      quote: "The Finance Ops AI agent has revolutionized our accounting processes. Automated invoicing and expense tracking have saved us countless hours. We've reduced processing time by 60% and virtually eliminated manual errors.",
      rating: 5,
      results: "60% time savings"
    },
    {
      name: "Michael Brown",
      role: "VP of Operations, RetailMax",
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      quote: "Working with TRART Ai has been exceptional. Their team understood our unique challenges and delivered a custom AI solution that exceeded our expectations. The support and ongoing optimization they provide is outstanding.",
      rating: 5,
      results: "3x ROI in 6 months"
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
            What Our Clients Say
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#535366' }}>
            Real stories from businesses that have transformed their operations with AI automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-3xl p-8 relative group hover:bg-slate/10 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16" style={{ color: '#535366' }} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" style={{ color: '#EAE6E0', fill: '#EAE6E0' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg mb-6 leading-relaxed italic relative z-10" style={{ color: '#1C1C1C' }}>
                "{testimonial.quote}"
              </p>

              {/* Results Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{
                  backgroundColor: '#1C1C1C',
                  color: '#EAE6E0'
                }}>
                  🎯 {testimonial.results}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate/20">
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
                  <p className="text-sm" style={{ color: '#535366', opacity: 0.7 }}>{testimonial.company}</p>
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
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#1C1C1C' }}>100+</div>
                <div style={{ color: '#535366' }}>Satisfied Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#1C1C1C' }}>98%</div>
                <div style={{ color: '#535366' }}>Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#1C1C1C' }}>4.9/5</div>
                <div style={{ color: '#535366' }}>Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

