"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

// Dummy process data
const processes = [
    {
        id: "step-1",
        title: "Discovery & Research",
        description:
            "We start by understanding your business, goals, target audience, and competitors to develop a strategic marketing plan.",
    },
    {
        id: "step-2",
        title: "Strategy Development",
        description:
            "Based on our research, we create a customized digital marketing strategy aligned with your business objectives.",
    },
    {
        id: "step-3",
        title: "Implementation",
        description:
            "Our team executes the strategy across various digital channels, creating engaging content and campaigns.",
    },
    {
        id: "step-4",
        title: "Monitoring & Optimization",
        description: "We continuously monitor campaign performance and make data-driven optimizations to improve results.",
    },
    {
        id: "step-5",
        title: "Reporting & Analysis",
        description:
            "Regular reports provide insights into campaign performance, ROI, and recommendations for future improvements.",
    },
]

export default function WorkingProcess() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 md:flex md:items-center">
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Our Business Process</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">A systematic approach to delivering exceptional digital marketing results.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {processes.map((process) => (
                            <AccordionItem key={process.id} value={process.id}>
                                <AccordionTrigger className="text-lg font-semibold font-satoshi-black">{process.title}</AccordionTrigger>
                                <AccordionContent className="text-sm md:text-base">{process.description}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
