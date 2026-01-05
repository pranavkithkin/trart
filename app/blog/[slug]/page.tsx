'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    Share2,
    Twitter,
    Linkedin,
    Link as LinkIcon,
    CheckCircle2,
    TrendingUp,
    BrainCircuit,
    Lightbulb
} from 'lucide-react'
import { blogPosts, BlogPost } from '@/lib/blog-data'
import { notFound } from 'next/navigation'

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
    const post = blogPosts.find(p => p.slug === params.slug)

    if (!post) {
        notFound()
    }

    // Placeholder for content sections - in a real app these would come from the post data or MDX
    const sections = [
        {
            title: "The Rise of Specialized Agents",
            content: "General-purpose AI is powerful, but specialized agents are where the real business value lies. These agents are trained on specific domain knowledge and integrated directly into existing workflows...",
            icon: BrainCircuit
        },
        {
            title: "Measuring Real ROI",
            content: "Automation for the sake of automation is a trap. The most successful implementations focus on clear KPIs: Lead conversion rates, customer response times, and reduced operational overhead...",
            icon: TrendingUp
        },
        {
            title: "The Human-AI Synergy",
            content: "AI agents aren't replacing humans; they're augmenting them. By handling the repetitive, data-heavy tasks, agents free up your team to focus on high-level strategy and human relationships...",
            icon: Lightbulb
        }
    ]

    return (
        <div className="min-h-screen bg-canvas">
            {/* Top Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[60] origin-left"
                initial={{ scaleX: 0 }}
                style={{ scaleX: 0 }} // You'd use scroll progress here normally
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-charcoal">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover blur-sm"
                    />
                    <div className="absolute inset-0 bg-charcoal/90" />
                </div>

                <div className="container-custom relative z-10">
                    <Link href="/blog" className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-sm">Back to Blog</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                                {post.category}
                            </span>
                            <div className="flex items-center space-x-2 text-slate-400 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-white">{post.author.name}</div>
                                    <div className="text-slate-400">{post.author.role}</div>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center space-x-3 pl-6 border-l border-white/10">
                                <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all">
                                    <LinkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div className="prose prose-xl prose-slate max-w-none">
                                <p className="text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
                                    {post.excerpt}
                                </p>

                                <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-16 shadow-2xl">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {sections.map((section, idx) => (
                                    <div key={idx} className="mb-16">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                                <section.icon className="w-6 h-6" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-charcoal m-0">{section.title}</h2>
                                        </div>
                                        <p className="text-xl text-slate-700 leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}

                                <blockquote className="my-16 p-12 bg-slate-50 rounded-[2.5rem] border-l-8 border-blue-600 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <p className="text-2xl font-bold text-charcoal italic mb-6">
                                            "The question isn't whether AI will transform your industry, but which companies will harness it fast enough to define the new standard."
                                        </p>
                                        <cite className="text-lg font-bold text-blue-600 not-italic">— Synops Labs Insight Section</cite>
                                    </div>
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <BrainCircuit className="w-32 h-32" />
                                    </div>
                                </blockquote>
                            </div>
                        </div>

                        {/* Sticky Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
                            {/* Post Meta */}
                            <div className="glass p-8 rounded-3xl border-2 border-slate-100">
                                <h4 className="text-lg font-bold mb-6 text-charcoal uppercase tracking-widest">Key Takeaways</h4>
                                <ul className="space-y-4">
                                    {[
                                        "AI agents drive 40% more efficiency",
                                        "ROI is measurable within 90 days",
                                        "Integration is easier than expected",
                                        "Humans plus AI is the winning combo"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3 text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Recent Posts */}
                            <div className="glass p-8 rounded-3xl border-2 border-slate-100">
                                <h4 className="text-lg font-bold mb-6 text-charcoal uppercase tracking-widest">Recent Posts</h4>
                                <div className="space-y-6">
                                    {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((recentPost) => (
                                        <Link key={recentPost.slug} href={`/blog/${recentPost.slug}`} className="group flex items-center space-x-4">
                                            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                                <Image src={recentPost.coverImage} alt={recentPost.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-bold text-charcoal group-hover:text-blue-600 transition-colors line-clamp-2">{recentPost.title}</h5>
                                                <p className="text-xs text-slate-500 mt-1">{recentPost.date}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Related CTA */}
                            <div className="bg-charcoal p-10 rounded-[2.5rem] text-white overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-6 opacity-20 transform group-hover:rotate-12 transition-transform">
                                    <TrendingUp className="w-20 h-20" />
                                </div>
                                <h4 className="text-2xl font-bold mb-4 relative z-10">Ready for your own AI transformation?</h4>
                                <p className="text-slate-400 mb-8 relative z-10">
                                    Get a custom audit to see exactly where AI can accelerate your growth.
                                </p>
                                <Link href="/audit">
                                    <button className="w-full py-4 bg-white text-charcoal font-bold rounded-xl hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105">
                                        Get Free AI Audit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Blogs Section */}
            <section className="section-padding bg-slate-50 border-t border-slate-200">
                <div className="container-custom">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-charcoal mb-4">Related <span className="text-blue-600">Insights</span></h2>
                            <p className="text-xl text-slate-500">More articles you might find interesting.</p>
                        </div>
                        <Link href="/blog" className="hidden md:flex items-center space-x-2 font-bold text-blue-600 hover:text-blue-700 transition-colors group">
                            <span>All Articles</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((relatedPost) => (
                            <motion.article
                                key={relatedPost.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
                            >
                                <Link href={`/blog/${relatedPost.slug}`} className="relative h-48 overflow-hidden">
                                    <Image src={relatedPost.coverImage} alt={relatedPost.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                </Link>
                                <div className="p-6">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{relatedPost.category}</span>
                                    </div>
                                    <Link href={`/blog/${relatedPost.slug}`}>
                                        <h3 className="text-xl font-bold text-charcoal group-hover:text-blue-600 transition-colors line-clamp-2">{relatedPost.title}</h3>
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogPostPage
