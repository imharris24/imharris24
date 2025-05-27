"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Lightbulb, Target } from "lucide-react"

// Static core values data
const coreValues = [
    {
        id: 1,
        title: "Excellence",
        description:
            "We strive for excellence in everything we do, from strategy development to campaign execution and client service.",
        icon: <Award className="h-10 w-10" />,
    },
    {
        id: 2,
        title: "Collaboration",
        description:
            "We believe in the power of teamwork, both within our organization and in partnership with our clients.",
        icon: <Users className="h-10 w-10" />,
    },
    {
        id: 3,
        title: "Innovation",
        description:
            "We embrace new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.",
        icon: <Lightbulb className="h-10 w-10" />,
    },
    {
        id: 4,
        title: "Results-Driven",
        description:
            "We focus on delivering measurable results that contribute to our clients' business objectives and growth.",
        icon: <Target className="h-10 w-10" />,
    },
]

export default function CoreValues() {
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
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Our Core Values</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">These principles guide our work, shape our culture, and define how we engage with our clients and each
                        other.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={value.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-2 border-foreground bg-primary" style={{ boxShadow: `0 0.5em 0 var(--foreground)` }}>
                                <CardHeader className="text-foreground">
                                    <div className="mb-4 text-foreground">{value.icon}</div>
                                    <CardTitle className="font-satoshi-black text-3xl">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="">{value.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
