"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useServiceData } from "@/hooks/use-services-data"

export default function ServiceResults({ slug }) {
    const { service, isLoading } = useServiceData(slug)

    if (isLoading) {
        return (
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading results...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (!service) return null

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <motion.div
                    className="mx-auto mb-16 md:flex md:items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Proven Results</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0"> Our clients consistently see significant improvements in their digital marketing performance.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardContent className="text-center pt-6">
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-satoshi-black">{result.metric}</div>
                                    <p className="font-medium mb-2 font-satoshi-black">{result.label}</p>
                                    <p className="text-sm">{result.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
