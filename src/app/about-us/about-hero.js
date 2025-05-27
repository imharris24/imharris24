"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
    return (
        <section className="py-16 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-1 md:order-2 w-full md:w-[90%] mx-auto"
                    >
                        <img
                            src="/svg/about.svg"
                            alt="iMarketing Team"
                            className="rounded-lg w-full h-auto max-h-[500px] object-contain"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-2 md:order-1 text-center md:text-left"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 font-satoshi-black">
                            Together for success
                        </h1>
                        <p className="sm:text-lg mb-6">
                            At iMarketing, we believe in the power of collaboration. We work closely with our clients to understand
                            their unique challenges and goals, creating tailored digital marketing strategies that drive real results.
                        </p>
                        <p className="sm:text-lg">
                            Founded in 2025, we've grown from a small team of passionate marketers to a full-service digital agency
                            with expertise across all digital channels. Our mission remains the same: to help businesses thrive in the
                            digital landscape.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}