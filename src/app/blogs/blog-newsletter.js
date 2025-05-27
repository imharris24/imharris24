"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogNewsletter() {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <Card className="bg-primary text-primary-foreground">
                        <CardContent className="text-center p-8">
                            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                            <p className="text-lg mb-6 opacity-90">
                                Get the latest digital marketing insights delivered straight to your inbox every week.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <Input placeholder="Enter your email" className="bg-white text-black border-white" />
                                <Button variant="secondary" className="whitespace-nowrap">
                                    Subscribe Now
                                </Button>
                            </div>
                            <p className="text-sm mt-4 opacity-75">
                                Join 5,000+ marketers who trust our insights. Unsubscribe anytime.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
