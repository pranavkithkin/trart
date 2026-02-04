'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const TrustedBy = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    // Using the available client logo
    const clients = [
        { name: 'Bridgewater', logo: '/clients/BRIDGEWATER-logo.png' },
        { name: 'Brightland', logo: '/clients/Brightland-logo.jpg' },
        { name: 'Zorx', logo: '/clients/zorx-logo.png' },
        { name: 'Bridgewater 4', logo: '/clients/BRIDGEWATER-logo.png' },
        { name: 'Brightland', logo: '/clients/Brightland-logo.jpg' },
        { name: 'Zorx', logo: '/clients/zorx-logo.png' },
        { name: 'NAM', logo: '/clients/nam-logo.png' },
    ]

    const duplicatedCompanies = [...clients, ...clients, ...clients]

    return (
        <section className="py-24 bg-white overflow-hidden border-t border-slate/10">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-charcoal">
                        Trusted by Businesses
                    </h2>
                    <p className="text-xl text-slate max-w-2xl mx-auto">
                        Helping companies automate, scale, and grow
                    </p>
                </motion.div>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: ['-33.33%', '0%'], // Adjusted for 3x duplication
                    }}
                    transition={{
                        duration: 40,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {duplicatedCompanies.map((client, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center justify-center mx-16 h-28 w-64 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group cursor-pointer"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default TrustedBy
