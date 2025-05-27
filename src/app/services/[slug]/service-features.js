"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Target, BarChart } from "lucide-react"
import { useServiceData } from "@/hooks/use-services-data"

const defaultFeatures = [
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "Proven Strategies",
        description: "Time-tested methodologies that deliver consistent results across industries.",
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Growth Focused",
        description: "Every strategy is designed to drive sustainable business growth and ROI.",
    },
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Targeted Approach",
        description: "Precise targeting to reach your ideal customers at the right time.",
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: "Data-Driven",
        description: "All decisions backed by comprehensive data analysis and insights.",
    },
]

export default function ServiceFeatures({ slug }) {
    const { service, isLoading } = useServiceData(slug)

    if (isLoading) {
        return (
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading features...</p>
                    </div>
                </div>
            </section>
        )
    }

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
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">What's Included</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">Comprehensive features designed to deliver exceptional results for your business.</p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {defaultFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full text-center">
                                <CardHeader>
                                    <div className="flex justify-center mb-4">{feature.icon}</div>
                                    <CardTitle className="text-xl font-satoshi-black">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {service && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-satoshi-black">Service Features</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
