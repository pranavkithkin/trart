'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Rocket,
    Heart,
    Zap,
    Lightbulb,
    ArrowRight,
    Code,
    BrainCircuit,
    Workflow,
    ShieldCheck,
    Star,
    Upload,
    X,
    CheckCircle as CheckCircleIcon,
    Send
} from 'lucide-react'

const CareersPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Mock submission process
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setTimeout(() => {
                setIsFormOpen(false)
                setIsSubmitted(false)
                setFormData({ name: '', email: '', phone: '', message: '' })
                setSelectedFile(null)
            }, 3000)
        }, 1500)
    }

    const values = [
        {
            icon: Zap,
            title: "Superhuman Efficiency",
            description: "We don't just work harder; we work smarter. We use the very tools we build to amplify our own productivity."
        },
        {
            icon: Heart,
            title: "Radical Transparency",
            description: "No politics, no secrets. We share information openly and provide honest feedback to help each other grow."
        },
        {
            icon: Lightbulb,
            title: "Relentless Innovation",
            description: "The AI field moves fast. We're committed to staying at the bleeding edge and constantly experimenting."
        }
    ]

    const roles = [
        {
            title: "AI Solutions Architect",
            type: "Full-time",
            location: "Remote",
            description: "Design and architect complex AI agent systems for enterprise clients using LLMs and modern tech stacks.",
            icon: BrainCircuit
        },
        {
            title: "Full Stack Developer",
            type: "Full-time",
            location: "Remote / Hybrid",
            description: "Build beautiful, high-performance web applications and dashboards using Next.js, React, and Tailwind CSS.",
            icon: Code
        },
        {
            title: "AI Automation Engineer",
            type: "Full-time",
            location: "Remote",
            description: "Create seamless workflows and integrations using tools like N8N, Make.com, and custom API development.",
            icon: Workflow
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
                        <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-8 border border-white/10">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-medium text-white tracking-wide uppercase">Join the AI Revolution</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                            Build the Future of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Intelligent Work</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
                            We're looking for high-agency individuals who are obsessed with AI and
                            passionate about transforming how the world does business.
                        </p>
                        <Link href="#open-roles">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-lg px-12 py-4 shadow-xl"
                            >
                                View Open Positions
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-charcoal">
                            Why Synopslabs AI?
                        </h2>
                        <p className="text-xl mb-12 leading-relaxed text-slate">
                            We're a fast-growing team of builders, thinkers, and explorers. We value
                            autonomy, creativity, and the courage to challenge the status quo.
                            When you join us, you're not just getting a job you're getting a front-row
                            seat to the AI revolution.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                            {[
                                "Fully remote and flexible work environment",
                                "Competitive compensation and equity packages",
                                "Access to the latest AI tools and hardware",
                                "Collaborative culture with world-class engineers",
                                "Unlimited growth and learning opportunities"
                            ].map((perk, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                                        <ShieldCheck className="w-5 h-5 text-green-600" />
                                    </div>
                                    <span className="text-lg text-charcoal font-medium">{perk}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-canvas border-y border-slate/10">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-charcoal mb-4">Our Core Values</h2>
                        <p className="text-xl text-slate max-w-2xl mx-auto">The principles that guide everything we build and how we operate as a team.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass p-8 rounded-3xl border-2 border-slate/20 hover:border-slate/40 transition-all text-center"
                            >
                                <div className="w-16 h-16 bg-charcoal text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-charcoal">{value.title}</h3>
                                <p className="text-slate leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section id="open-roles" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-charcoal mb-4">Open Positions</h2>
                        <p className="text-xl text-slate max-w-2xl mx-auto">Ready to build the future? We're hiring for these roles.</p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {roles.map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-8 rounded-3xl border border-slate/20 hover:border-charcoal/30 hover:shadow-xl transition-all group cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex items-center space-x-6">
                                        <div className="w-14 h-14 bg-canvas rounded-2xl flex items-center justify-center border border-slate/10">
                                            <role.icon className="w-7 h-7 text-charcoal" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-charcoal group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                                                {role.title}
                                            </h3>
                                            <div className="flex items-center space-x-4 mt-2">
                                                <span className="text-sm font-semibold text-slate/60 uppercase tracking-widest">{role.type}</span>
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate/30" />
                                                <span className="text-sm font-semibold text-slate/60 uppercase tracking-widest">{role.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary-outline px-8 py-3 flex items-center space-x-2 group cursor-pointer"
                                        onClick={() => setIsFormOpen(true)}
                                    >
                                        <span>Apply Now</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.div>
                                </div>
                                <p className="mt-6 text-slate leading-relaxed text-lg">{role.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xl text-slate mb-8">Don't see a role that fits? We're always looking for exceptional talent.</p>
                        <span
                            className="text-charcoal font-bold text-2xl hover:underline cursor-pointer"
                            onClick={() => setIsFormOpen(true)}
                        >
                            Send us an open application →
                        </span>
                    </div>
                </div>
            </section>

            {/* Application Form Modal */}
            <AnimatePresence>
                {isFormOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
                            onClick={() => !isSubmitting && setIsFormOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-canvas rounded-3xl p-8 md:p-12 shadow-2xl border border-slate/20 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setIsFormOpen(false)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate/10 transition-colors"
                                disabled={isSubmitting}
                            >
                                <X className="w-6 h-6 text-charcoal" />
                            </button>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircleIcon className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-charcoal mb-4">Application Sent!</h3>
                                    <p className="text-lg text-slate mb-8">
                                        Thank you for applying. We'll review your application and get in touch soon.
                                    </p>
                                    <button
                                        onClick={() => setIsFormOpen(false)}
                                        className="btn-primary px-8 py-3"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-3xl font-bold text-charcoal mb-2">Apply Now</h3>
                                    <p className="text-slate mb-8">Fill out the details below and upload your CV to join our team.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-charcoal mb-2 uppercase tracking-wider">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-charcoal outline-none transition-all bg-white"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-charcoal mb-2 uppercase tracking-wider">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-charcoal outline-none transition-all bg-white"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-charcoal mb-2 uppercase tracking-wider">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-charcoal outline-none transition-all bg-white"
                                                    placeholder="+1 (234) 567-890"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-charcoal mb-2 uppercase tracking-wider">Upload CV (PDF/Doc) *</label>
                                                <div
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className={`w-full px-4 py-3 rounded-xl border-2 border-dashed transition-all cursor-pointer flex items-center justify-center space-x-2 ${selectedFile ? 'border-green-500 bg-green-50/30' : 'border-slate/20 hover:border-charcoal/30 bg-white'
                                                        }`}
                                                >
                                                    <Upload className={`w-5 h-5 ${selectedFile ? 'text-green-600' : 'text-slate'}`} />
                                                    <span className={`text-sm font-medium ${selectedFile ? 'text-green-600' : 'text-slate'}`}>
                                                        {selectedFile ? selectedFile.name : 'Choose File'}
                                                    </span>
                                                </div>
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.doc,.docx"
                                                    className="hidden"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-charcoal mb-2 uppercase tracking-wider">Cover Note / Message</label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-charcoal outline-none transition-all bg-white"
                                                placeholder="Tell us why you're a great fit..."
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full btn-primary py-4 flex items-center justify-center space-x-3 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <span>Sending Application...</span>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Submit Application</span>
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default CareersPage
