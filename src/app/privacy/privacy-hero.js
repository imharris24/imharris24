"use client"

import { motion } from "framer-motion"

export default function PrivacyHero() {
    return (
        <section className="py-20 md:py-28 bg-muted/30">
            <div className="container mx-auto">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-satoshi-black">Privacy Policy</h1>
                    <p className="mb-4">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                    </p>
                    <p className="text-sm">Last updated: March 15, 2024</p>
                </motion.div>
            </div>
        </section>
    )
}
