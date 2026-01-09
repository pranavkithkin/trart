'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Rocket, ArrowLeft, Construction, Clock, Sparkles } from 'lucide-react'

const ComingSoonPage = () => {
    return (
        <div className="min-h-screen bg-canvas flex items-center justify-center relative overflow-hidden pt-32 pb-16">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            <div className="container-custom relative z-10 w-full px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 md:w-24 md:h-24 bg-charcoal text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                    >
                        <Construction className="w-10 h-10 md:w-12 md:h-12" />
                    </motion.div>

                    <div className="inline-flex items-center space-x-2 bg-charcoal/5 px-4 py-2 rounded-full mb-6 border border-charcoal/10">
                        <Clock className="w-4 h-4 text-charcoal" />
                        <span className="text-sm font-bold text-charcoal tracking-wide uppercase">Under Development</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal leading-tight">
                        Something <span className="text-black">Amazing</span> is in the Works
                    </h1>

                    <p className="text-xl text-slate mb-12 leading-relaxed">
                        We're busy building this part of Synopslabs. We're committed to excellence and can't wait to share it with you soon.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span>Go Back Home</span>
                            </motion.button>
                        </Link>

                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary-outline text-lg px-8 py-4 flex items-center space-x-2"
                            >
                                <Sparkles className="w-5 h-5" />
                                <span>Notify Me</span>
                            </motion.button>
                        </Link>
                    </div>

                    {/* Progress Indicator Mock */}
                    <div className="mt-16 max-w-md mx-auto">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">Progress</span>
                            <span className="text-sm font-bold text-charcoal">85%</span>
                        </div>
                        <div className="h-2 w-full bg-charcoal/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                className="h-full bg-charcoal"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ComingSoonPage
