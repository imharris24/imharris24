"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useServiceData } from "@/hooks/use-services-data"

export default function ServiceProcess({ slug }) {
    const { service, isLoading } = useServiceData(slug)

    if (isLoading) {
        return (
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading process...</p>
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
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Our Process</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">A systematic approach that ensures successful implementation and measurable results.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.process.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-2 border-primary" style={{
                                boxShadow: `0 0.5em 0 var(--primary)`
                            }}>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary text-background font-satoshi-black rounded-full flex items-center justify-center font-bold text-lg">
                                            {step.step}
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl font-satoshi-black">{step.title}</CardTitle>
                                            <p className="text-sm text-primary font-medium">{step.duration}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p>{step.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
