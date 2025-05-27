"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CtaSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="border border-primary/20 bg-gradient-to-b from-background to-muted/5 rounded-3xl p-8 md:px-12 lg:px-16 shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-satoshi-black">
                                Get Your Free<br className="hidden lg:block" /> <span className="text-primary">Marketing Proposal</span>
                            </h2>
                            <p className="text-sm md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 lg:max-w-md">
                                Let us analyze your business needs and create a customized marketing strategy to help you achieve your goals.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <Button
                                    size="lg"
                                    className="rounded-lg px-8 py-6 text-lg bg-primary hover:bg-secondary transition-all"
                                >
                                    Request Free Proposal
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative flex justify-center items-center"
                        >
                            <div className="relative w-full max-w-xl aspect-square">
                                <motion.img
                                    src="/svg/smiley-face.svg"
                                    alt="Smiley Face"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="w-full h-auto p-8"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}