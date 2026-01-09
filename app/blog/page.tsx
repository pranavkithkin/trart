'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

const BlogListingPage = () => {
    return (
        <div className="min-h-screen bg-canvas">
            {/* Hero Section */}
            <section className="section-padding bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />

                <div className="container-custom relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                            Insightful <span className="text-white">AI Intelligence</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Stay ahead of the curve with our latest thoughts on AI agents, automation,
                            and the future of business transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
                            >
                                <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-2 bg-charcoal/80 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-widest">
                                            {post.category}
                                        </span>
                                    </div>
                                </Link>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center space-x-4 mb-4 text-sm text-slate-500">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <Link href={`/blog/${post.slug}`}>
                                        <h3 className="text-2xl font-bold mb-4 text-charcoal group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                    </Link>

                                    <p className="text-slate-600 mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                                                <Image
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-charcoal">{post.author.name}</div>
                                                <div className="text-xs text-slate-500">{post.author.role}</div>
                                            </div>
                                        </div>

                                        <Link href={`/blog/${post.slug}`} className="p-2 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition-all group/btn">
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <div className="glass-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden bg-charcoal">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10 max-w-2xl mx-auto"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Intelligence, <span className="text-white">Delivered.</span>
                            </h2>
                            <p className="text-xl text-white/80 mb-10">
                                Join 5,000+ growth leaders receiving our bi-weekly deep dives
                                into the world of AI agents and automation.
                            </p>

                            <form className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="flex-1 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 backdrop-blur-md transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-10 py-4 rounded-full bg-white text-charcoal font-bold hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                            <p className="mt-6 text-sm text-white/40">
                                Zero spam. Only high-impact AI insights. Unsubscribe anytime.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogListingPage
