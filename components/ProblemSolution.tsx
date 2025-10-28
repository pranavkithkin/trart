'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  AlertCircle,
  ArrowRight,
  Bot,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Target,
  Zap,
  Brain
} from 'lucide-react'

const ProblemSolution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const problemSolutions = [
    {
      problem: {
        icon: AlertCircle,
        title: "Drowning in Customer Inquiries",
        description: "Support team overwhelmed, response times climbing, customers frustrated",
        stat: "48hr average response time"
      },
      solution: {
        icon: Bot,
        title: "AI Customer Success Agents",
        description: "24/7 intelligent support that resolves 78% of inquiries instantly",
        stat: "6min average response time",
        color: "from-blue-500 to-cyan-500"
      }
    },
    {
      problem: {
        icon: Clock,
        title: "Sales Team Buried in Admin Work",
        description: "60% of time spent on data entry, not selling. Deals taking months to close",
        stat: "89 day average sales cycle"
      },
      solution: {
        icon: TrendingUp,
        title: "AI Sales Orchestration",
        description: "Automated qualification, follow-ups, and deal acceleration",
        stat: "34 day average sales cycle",
        color: "from-purple-500 to-pink-500"
      }
    },
    {
      problem: {
        icon: DollarSign,
        title: "Finance Team Processing Invoices Manually",
        description: "800+ invoices monthly, 12-day processing, frequent errors, compliance nightmares",
        stat: "12 days to process invoices"
      },
      solution: {
        icon: Zap,
        title: "AI Finance Ops Automation",
        description: "Instant processing with 99.7% accuracy and real-time insights",
        stat: "18 hours to process invoices",
        color: "from-green-500 to-emerald-500"
      }
    },
    {
      problem: {
        icon: Users,
        title: "Hiring Taking Forever",
        description: "6+ months to fill roles, manually screening thousands of resumes, high drop-off",
        stat: "6+ months time-to-hire"
      },
      solution: {
        icon: Target,
        title: "AI HR Agent",
        description: "Automated screening, scheduling, and candidate engagement",
        stat: "28 days time-to-hire",
        color: "from-orange-500 to-red-500"
      }
    },
    {
      problem: {
        icon: AlertCircle,
        title: "Content Production Bottleneck",
        description: "Product launches delayed, inconsistent messaging, SEO suffering",
        stat: "Weeks to launch products"
      },
      solution: {
        icon: Brain,
        title: "AI Content Generation Engine",
        description: "50x faster content creation with perfect brand voice and SEO optimization",
        stat: "Days to launch products",
        color: "from-indigo-500 to-purple-500"
      }
    }
  ]

  return (
    <section className="section-padding bg-canvas relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231C1C1C' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{ color: '#1C1C1C' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transform Your Biggest Challenges
            <br />
            <span style={{ color: '#535366' }}>Into Competitive Advantages</span>
          </motion.h2>
          <motion.p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: '#535366' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See how AI automation turns operational pain points into growth engines
          </motion.p>
        </motion.div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {problemSolutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Problem Side */}
              <motion.div
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="lg:col-span-5 glass rounded-2xl p-8 border-2 border-red-500/20 bg-red-50/50 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.problem.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-red-900">
                        {item.problem.title}
                      </h3>
                      <p className="text-red-800/80 leading-relaxed">
                        {item.problem.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-red-500/20">
                    <div className="inline-block px-4 py-2 bg-red-500/10 rounded-lg">
                      <span className="text-sm font-bold text-red-700">⚠️ {item.problem.stat}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="lg:col-span-2 flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden lg:flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center shadow-xl">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="lg:hidden flex items-center justify-center my-4"
                >
                  <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center shadow-xl rotate-90">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Solution Side */}
              <motion.div
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="lg:col-span-5 glass rounded-2xl p-8 border-2 border-green-500/20 bg-green-50/50 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.solution.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <item.solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-green-900">
                        {item.solution.title}
                      </h3>
                      <p className="text-green-800/80 leading-relaxed">
                        {item.solution.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-500/20">
                    <div className="inline-block px-4 py-2 bg-green-500/10 rounded-lg">
                      <span className="text-sm font-bold text-green-700">✓ {item.solution.stat}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-20"
        >
          <div className="glass rounded-3xl p-12 max-w-3xl mx-auto border-2 border-slate/30">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
              Which Challenge Should We Solve First?
            </h3>
            <p className="text-xl mb-8" style={{ color: '#535366' }}>
              Get a free audit and discover exactly where AI can deliver the biggest impact for your business
            </p>
            <a href="/audit">
              <motion.button
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-12 py-4 flex items-center space-x-3 mx-auto group shadow-xl"
              >
                <span>Get Your Free Audit</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSolution

