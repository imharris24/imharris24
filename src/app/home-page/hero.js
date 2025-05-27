"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import BrandMarquee from "./brand-marquee"

export default function Hero() {
    return (
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                    {/* Text Content Column - Now first in DOM order */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="order-2 md:order-none text-center md:text-left"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 font-satoshi-black">
                            Grow Your Business With Digital Marketing
                        </h1>
                        <p className="text-base md:text-lg mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
                            We help businesses reach their target audience, increase brand awareness, and drive conversions through
                            strategic digital marketing solutions.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Link href="/get-quote" className="cursor-pointer">
                                <Button size="lg" variant="outline" className="border border-primary hover:bg-primary hover:text-background transition-colors">
                                    Get a Free Quotation
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* SVG Column - Now second in DOM order */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center order-1 md:order-none"
                    >
                        <Image
                            src="/svg/all-the-data.svg"
                            alt="Digital Marketing Analytics Dashboard"
                            width={500}
                            height={500}
                            className="w-full h-auto max-w-[280px] sm:max-w-md"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}