"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useServiceData } from "@/hooks/use-services-data"
import Link from "next/link"

export default function ServiceHero({ slug }) {
    const { service, isLoading, error } = useServiceData(slug)

    if (isLoading) {
        return (
            <section className="py-20 md:py-28">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading service details...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (error || !service) {
        return (
            <section className="py-20 md:py-28">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                        <p className="text-lg text-muted-foreground">The requested service could not be found.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image section - appears first on mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center order-1 lg:order-2"
                    >
                        <img
                            src="/svg/services.svg"
                            alt={service.title}
                            className="w-full h-auto max-w-lg"
                        />
                    </motion.div>

                    {/* Text content - appears second on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <Badge variant="primary" className="mb-4">
                            {service.subtitle}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-satoshi-black">{service.title}</h1>
                        <p className="md:text-lg mb-8">{service.longDescription}</p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {service.benefits.slice(0, 4).map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    <span className="text-sm font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <Link href="/get-quote">Get Started</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}