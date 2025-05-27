"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesCta() {
    return (
        <section className="py-20 px-4 mb-10 md:m-10 border border-primary rounded-2xl">
            <div className="container mx-auto">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-satoshi-black">Ready to Grow Your Business?</h2>
                    <p className="md:text-lg mb-8 opacity-90">
                        Let's discuss how our digital marketing services can help you achieve your business goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild className="bg-primary hover:bg-primary/90 px-8 shadow-lg hover:shadow-md transition-all">
                            <Link href="/get-quote">
                                Get Free Consultation
                            </Link>
                        </Button>
                        {/* <Button
                            variant="outline"
                            asChild
                            className="border border-primary text-foreground px-8 hover:bg-primary/10 hover:border-primary/80 transition-colors"
                        >
                            <Link href="/use-cases">
                                View Case Studies
                            </Link>
                        </Button> */}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}