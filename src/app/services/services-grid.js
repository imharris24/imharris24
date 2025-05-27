"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Target, Users, Edit, Mail, BarChart } from "lucide-react"
import Link from "next/link"
import { useServicesData } from "@/hooks/use-services-data"

const iconMap = {
    search: Search,
    target: Target,
    users: Users,
    edit: Edit,
    mail: Mail,
    "bar-chart": BarChart,
}

export default function ServicesGrid() {
    const { services, isLoading } = useServicesData()

    if (isLoading) {
        return (
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-lg text-muted-foreground">Loading services...</p>
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
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Our Services</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">Comprehensive digital marketing solutions designed to help your business grow and succeed online.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Search

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="h-full group hover:shadow-lg transition-shadow duration-300 border-2 border-primary" style={{
                                    boxShadow: `0 0.5em 0 var(--primary)`
                                }}>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-xl font-satoshi-black">{service.title}</CardTitle>
                                            <IconComponent className="h-10 w-10 text-primary" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p >{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.slice(0, 4).map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-sm">
                                                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary" asChild>
                                            <Link href={`/services/${service.id}`}>
                                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
