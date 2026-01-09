'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const TechStack = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const technologies = [
        { name: 'n8n', logo: '/tech/N8n-logo.svg' },
        { name: 'ChatGPT', logo: '/tech/openai-logo.svg' },
        { name: 'Google Cloud', logo: '/tech/Google_Cloud_logo.svg' },
        { name: 'Claude', logo: '/tech/Claude_AI_logo.svg' },
        { name: 'Gemini', logo: '/tech/Google_Gemini_logo.svg' },
        { name: 'Docker', logo: '/tech/Docker_Logo.svg' },
        { name: 'Next.js', logo: '/tech/nextjs-logo.svg' },
        { name: 'Git', logo: '/tech/git-logo.svg' },
    ]

    // Duplicate the list for seamless looping
    const duplicatedTech = [...technologies, ...technologies, ...technologies]

    return (
        <section className="py-24 bg-canvas relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate/20 to-transparent" />

            <div className="container-custom relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 bg-charcoal/5 rounded-full mb-6 border border-charcoal/10">
                        <span className="text-sm font-bold tracking-wider uppercase text-slate">Technology Stack</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal tracking-tight">
                        Technologies We Work With
                    </h2>
                    <p className="text-xl md:text-2xl text-slate/80 max-w-3xl mx-auto leading-relaxed">
                        Building scalable solutions using industry-trusted tools
                    </p>
                </motion.div>
            </div>

            <div className="relative">
                {/* Gradients to fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-canvas to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-canvas to-transparent z-20" />

                <div className="flex overflow-x-hidden">
                    <motion.div
                        className="flex whitespace-nowrap py-4"
                        animate={{
                            x: ['0%', '-50%'],
                        }}
                        transition={{
                            duration: 30,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedTech.map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="flex items-center justify-center mx-6 h-24 w-48 px-8 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate/5 hover:border-charcoal/20 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="relative w-full h-12">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        fill
                                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default TechStack
