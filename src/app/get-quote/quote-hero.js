"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Shield } from "lucide-react"

const benefits = [
    {
        icon: <CheckCircle className="h-5 w-5 text-primary" />,
        text: "Free consultation included",
    },
    {
        icon: <Clock className="h-5 w-5 text-secondary" />,
        text: "Response within 24 hours",
    },
    {
        icon: <Shield className="h-5 w-5 text-accent" />,
        text: "No obligations or commitments",
    },
]

export default function QuoteHero() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-satoshi-black">
                        Get Your Custom Marketing Quote
                    </h1>
                    <p className="mb-8 max-w-2xl mx-auto">
                        Tell us about your business and marketing goals. We'll create a personalized strategy and pricing proposal
                        tailored specifically to your needs.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                className="flex items-center gap-2"
                            >
                                {benefit.icon}
                                <span className="text-sm font-medium">{benefit.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <img
                            src="/svg/quote.svg"
                            alt="Quote illustration"
                            className="w-full h-auto max-w-md px-4"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}