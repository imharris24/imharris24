"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
    {
        id: 1,
        title: "SEO Optimization",
        svgPath: "/svg/services/05.svg",
        bgColor: "bg-background",
        borderColor: "border-foreground",
        shadowColor: "foreground",
        textColor: "text-foreground",
        route: "/services/seo"
    },
    {
        id: 2,
        title: "Content Marketing",
        svgPath: "/svg/services/01.svg",
        bgColor: "bg-primary",
        shadowColor: "foreground",
        borderColor: "border-foreground",
        textColor: "text-background",
        route: "/services/content"
    },
    {
        id: 3,
        title: "Social Media Marketing",
        svgPath: "/svg/services/02.svg",
        bgColor: "bg-foreground",
        shadowColor: "primary",
        borderColor: "border-primary",
        textColor: "text-background",
        route: "/services/social-media"
    },
    {
        id: 4,
        title: "Email Marketing",
        svgPath: "/svg/services/03.svg",
        bgColor: "bg-foreground",
        shadowColor: "primary",
        borderColor: "border-primary",
        textColor: "text-background",
        route: "/services/email"
    },
    {
        id: 5,
        title: "PPC Advertising",
        svgPath: "/svg/services/06.svg",
        bgColor: "bg-background",
        shadowColor: "foreground",
        borderColor: "border-foreground",
        textColor: "text-foreground",
        route: "/services/ppc"
    },
    {
        id: 6,
        title: "Analytics & Reporting",
        svgPath: "/svg/services/04.svg",
        bgColor: "bg-primary",
        shadowColor: "foreground",
        borderColor: "border-foreground",
        textColor: "text-background",
        route: "/services/analytics"
    },
]

export default function Services() {
    return (
        <section className="mt-8 py-20 px-4 sm:px-6 lg:px-8 2xl:px-20 4k:px-40">
            <div className="container mx-auto">
                <div className="mx-auto mb-16 md:flex md:items-center">
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Services</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">We offer a comprehensive range of digital marketing services to help your business grow online.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card
                                className={`h-full flex flex-col-reverse md:flex-row ${service.bgColor} border ${service.borderColor}`}
                                style={{
                                    boxShadow: `0 0.5em 0 var(--${service.shadowColor})`
                                }}
                            >

                                <div className="flex-1 p-4 md:p-4">
                                    <CardHeader className="p-0">
                                        <CardTitle className={`text-center md:text-left text-3xl font-satoshi-black ${service.textColor}`}>
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 mt-2 flex justify-center md:block">
                                        <Button
                                            variant="ghost"
                                            className={`p-0 h-auto font-semibold ${service.textColor} hover:${service.bgColor} hover:${service.textColor} hover:text-background`}
                                            asChild
                                        >
                                            <Link href={service.route}>
                                                <ArrowRight className={`h-4 w-4 ${service.textColor} ml-0 md:-ml-2`} />
                                                Learn More
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </div>
                                <div className="flex items-center pr-0 md:pr-4 justify-center md:w-1/3">
                                    <img
                                        src={service.svgPath}
                                        alt={service.title}
                                        className="h-24 w-24 md:h-36 md:w-36" // Increased size
                                    />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}