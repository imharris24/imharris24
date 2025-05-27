"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesHero() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* SVG section - appears first on mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center order-1 lg:order-2"
                    >
                        <img
                            src="/svg/service.svg"
                            alt="Digital Marketing Services"
                            className="w-full h-auto max-w-lg"
                        />
                    </motion.div>

                    {/* Text content - appears second on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Digital Marketing Services That Drive Results
                        </h1>
                        <p className=" md:text-lg  mb-8 max-w-lg">
                            From SEO and content marketing to social media and PPC, we offer comprehensive digital marketing solutions
                            tailored to your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <Link href="/get-quote">Get Started Today</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}