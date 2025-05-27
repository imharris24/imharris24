"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const processSteps = [
    {
        id: 1,
        title: "Discovery & Analysis",
        description: "We analyze your business, competitors, and target audience to develop a strategic approach.",
    },
    {
        id: 2,
        title: "Strategy Development",
        description: "Create a customized digital marketing strategy aligned with your business objectives.",
    },
    {
        id: 3,
        title: "Implementation",
        description: "Execute campaigns across chosen channels with continuous monitoring and optimization.",
    },
    {
        id: 4,
        title: "Reporting & Optimization",
        description: "Provide detailed reports and continuously optimize for better performance and ROI.",
    },
]

export default function ServicesProcess() {
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
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">A proven methodology that ensures successful outcomes for every project.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative"
                        >
                            <Card className="h-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-primary text-background rounded-full flex items-center justify-center font-bold mr-4">
                                            {step.id}
                                        </div>
                                        <h3 className="font-semibold font-satoshi-black">{step.title}</h3>
                                    </div>
                                    <p>{step.description}</p>
                                </CardContent>
                            </Card>
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                    <ArrowRight className="h-6 w-6 text-primary" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
