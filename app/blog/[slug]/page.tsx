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

    // Content sections specific to each blog post
    const getSections = (slug: string) => {
        switch (slug) {
            case 'ai-agents-b2b-sales':
                return [
                    {
                        title: "Automating Lead Qualification at Scale",
                        content: "Traditional lead qualification is a bottleneck. Sales teams spend 40% of their time on leads that never convert. AI agents change this by analyzing hundreds of data points—company size, tech stack, engagement patterns, budget signals—in seconds. They score leads with 85% accuracy, routing hot prospects to your closers while nurturing cold leads automatically. The result? Sales teams focus on conversations that matter, not data entry. Companies using AI-powered qualification see 3x more qualified meetings and 40% shorter sales cycles. The key is training agents on your ideal customer profile and letting them learn from every interaction.",
                        icon: BrainCircuit
                    },
                    {
                        title: "Personalized Outreach Without the Manual Work",
                        content: "Generic outreach gets ignored. Personalized outreach at scale was impossible—until now. AI agents craft customized emails by analyzing prospect data: recent company news, pain points from LinkedIn posts, technology gaps from job listings. Each message feels hand-written because it's contextually relevant. We've seen response rates jump from 2% to 18% when companies deploy AI-driven personalization. The agents handle research, drafting, and follow-ups, while sales reps focus on relationship-building. It's not about sending more emails; it's about sending smarter ones.",
                        icon: TrendingUp
                    },
                    {
                        title: "Real-Time Sales Intelligence",
                        content: "Your best salespeople have a sixth sense for timing. AI agents give everyone that superpower. They monitor buying signals across channels—website visits, content downloads, competitor mentions, funding announcements—and alert reps the moment a prospect shows intent. This real-time intelligence means your team reaches out when prospects are actively looking, not three weeks later. Sales teams using AI intelligence report 60% higher win rates and 2x faster deal velocity. The future of B2B sales isn't about working harder; it's about knowing exactly when and how to engage.",
                        icon: Lightbulb
                    }
                ];

            case 'roi-automation-manufacturing':
                return [
                    {
                        title: "Predictive Maintenance Saves Millions",
                        content: "Unplanned downtime costs manufacturers $50 billion annually. AI agents predict equipment failures before they happen by analyzing sensor data, vibration patterns, temperature fluctuations, and historical maintenance records. Instead of reactive repairs or wasteful preventive schedules, you get precise predictions: 'Motor 3 will fail in 14 days.' Manufacturers using predictive maintenance reduce downtime by 50% and maintenance costs by 30%. One automotive plant saved $2.3M in the first year by preventing just three major breakdowns. The ROI is immediate and measurable.",
                        icon: BrainCircuit
                    },
                    {
                        title: "Supply Chain Optimization Through AI",
                        content: "Supply chains are complex webs of variables—demand fluctuations, supplier delays, inventory costs, logistics constraints. AI agents optimize this chaos in real-time, balancing just-in-time delivery with buffer stock, rerouting shipments around delays, and predicting demand spikes before they hit. Manufacturers see 25% reduction in inventory costs and 40% improvement in on-time delivery. One electronics manufacturer cut lead times from 6 weeks to 3 weeks while reducing stockouts by 80%. The key is integrating AI across your entire supply chain, not just one piece.",
                        icon: TrendingUp
                    },
                    {
                        title: "Quality Control at Machine Speed",
                        content: "Human inspectors catch 80% of defects. AI vision systems catch 99.7%. Computer vision agents analyze thousands of products per hour, detecting microscopic flaws invisible to the human eye. They learn from every inspection, continuously improving accuracy. Manufacturers using AI quality control reduce defect rates by 90% and inspection costs by 60%. More importantly, they catch problems before products ship, protecting brand reputation and reducing costly recalls. One food manufacturer prevented a $5M recall by detecting contamination AI spotted but humans missed.",
                        icon: Lightbulb
                    }
                ];

            case 'ai-audit-importance':
                return [
                    {
                        title: "Identifying High-Impact Opportunities",
                        content: "Not all processes are equal. Some deliver 10x ROI, others barely break even. An AI audit maps your operations, identifies bottlenecks, and scores opportunities by impact and feasibility. You discover that automating invoice processing saves $200K annually, while chatbots save $20K. The audit prevents costly mistakes—like automating a process you should eliminate entirely. Companies that start with audits achieve ROI 3x faster than those who jump straight to implementation. It's about working smart: finding the 20% of processes that deliver 80% of the value.",
                        icon: BrainCircuit
                    },
                    {
                        title: "Avoiding the AI Implementation Trap",
                        content: "60% of AI projects fail. Not because the technology doesn't work, but because companies automate the wrong things, underestimate data requirements, or ignore change management. An audit reveals these pitfalls before you invest. It assesses data quality (garbage in, garbage out), team readiness (will people actually use this?), and integration complexity (does it play nice with existing systems?). One company almost spent $500K automating a process that was changing in 6 months. The audit saved them from that mistake and redirected resources to a project that delivered $1.2M in value.",
                        icon: TrendingUp
                    },
                    {
                        title: "Building a Strategic AI Roadmap",
                        content: "AI isn't a one-time project; it's a transformation journey. An audit creates a phased roadmap: quick wins in 90 days, medium-term projects in 6 months, strategic initiatives in 12-18 months. This approach builds momentum and organizational confidence. Early wins fund later projects and prove the concept to skeptics. Companies with roadmaps achieve 5x more AI adoption than those with ad-hoc implementations. The audit also identifies skill gaps, vendor requirements, and budget needs—turning AI from a vague aspiration into a concrete execution plan with measurable milestones.",
                        icon: Lightbulb
                    }
                ];

            default:
                return [
                    {
                        title: "The Rise of Specialized Agents",
                        content: "General-purpose AI is powerful, but specialized agents are where the real business value lies. These agents are trained on specific domain knowledge and integrated directly into existing workflows. Unlike broad AI models that try to do everything, specialized agents excel at particular tasks whether that's qualifying leads, managing customer support tickets, or optimizing supply chain logistics. The key is matching the right agent to the right process. We've seen companies achieve 3x faster implementation times and 40% better accuracy by deploying focused agents rather than trying to build one-size-fits-all solutions. The specialization allows for deeper integration with existing tools, better understanding of domain-specific nuances, and more reliable outputs that your team can trust and act upon immediately.",
                        icon: BrainCircuit
                    },
                    {
                        title: "Measuring Real ROI",
                        content: "Automation for the sake of automation is a trap. The most successful implementations focus on clear KPIs: Lead conversion rates, customer response times, and reduced operational overhead. Before deploying any AI agent, establish baseline metrics and define what success looks like. Is it reducing response time from 24 hours to 2 hours? Increasing lead qualification accuracy by 30%? Cutting manual data entry by 80%? The best implementations we've seen start with a pilot program targeting one high-impact process, measure results rigorously over 60-90 days, and then scale based on proven ROI. This approach not only validates the technology but also builds organizational confidence and identifies optimization opportunities. Remember: if you can't measure it, you can't improve it. AI should drive measurable business outcomes, not just impressive demos.",
                        icon: TrendingUp
                    },
                    {
                        title: "The Human-AI Synergy",
                        content: "AI agents aren't replacing humans; they're augmenting them. By handling the repetitive, data-heavy tasks, agents free up your team to focus on high-level strategy and human relationships. The most successful companies we work with view AI as a force multiplier for their talent, not a replacement. Sales teams use AI to qualify leads and schedule meetings, then focus their energy on building relationships and closing deals. Customer success teams leverage AI for initial triage and data gathering, then apply their expertise to solve complex problems. This synergy creates a virtuous cycle: AI handles scale, humans handle nuance. The result? Teams report higher job satisfaction (less grunt work), better customer outcomes (faster response, more personalized attention), and improved business metrics (higher conversion, better retention). The future isn't human vs AI. It's human + AI, working together to achieve what neither could alone.",
                        icon: Lightbulb
                    }
                ];
        }
    };

    const sections = getSections(params.slug);

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
                    <Link href="/blog" className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-8 group">
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
                            <div className="flex items-center space-x-2 text-white/80 text-sm">
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
                            <div className="bg-white p-10 rounded-[2.5rem] overflow-hidden relative group shadow-xl border-2 border-slate-200">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-0 right-0 p-6 opacity-10 transform group-hover:rotate-12 transition-transform">
                                    <TrendingUp className="w-20 h-20 text-charcoal" />
                                </div>
                                <h4 className="text-2xl font-bold mb-4 relative z-10 text-charcoal">Ready for your own AI transformation?</h4>
                                <p className="text-slate-600 mb-8 relative z-10 leading-relaxed">
                                    Get a custom audit to see exactly where AI can accelerate your growth.
                                </p>
                                <Link href="/audit">
                                    <button className="w-full py-4 bg-charcoal text-white font-bold rounded-xl hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg">
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
