"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export default function AboutTestimonial() {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="overflow-hidden bg-transparent border-none shadow-lg pb-0" style={{ boxShadow: `0 0.5em 0 var(--primary)` }}>
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-primary rounded-2xl bg-transparent"
                            >
                                <div className="h-full flex items-center justify-center p-8 md:p-10">
                                    <div className="relative aspect-square w-full max-w-md rounded-full overflow-hidden">
                                        <img
                                            src="/team/01.jpg"
                                            alt="Client Testimonial"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                                    </div>
                                </div>
                                <div className="col-span-2 p-8 md:p-10 flex flex-col justify-center">
                                    <QuoteIcon className="h-12 w-12 text-primary/60 mb-6" />
                                    <blockquote className="text-xl md:text-2xl font-medium italic mb-6">
                                        "Working with iMarketing transformed our digital presence completely. Their strategic approach and
                                        dedication to results helped us achieve a 200% increase in qualified leads within just six months."
                                    </blockquote>
                                    <div>
                                        <p className="font-bold text-lg">Sarah Johnson</p>
                                        <p className="text-muted-foreground">CMO, TechInnovate Inc.</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}