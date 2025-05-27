"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    FiGlobe,
    FiCalendar,
    FiUsers,
    FiActivity,
    FiAward,
    FiDollarSign
} from "react-icons/fi"

// Static stats data
const stats = [
    { id: 1, value: 500, label: "Clients Worldwide", icon: FiGlobe },
    { id: 2, value: 12, label: "Years of Experience", icon: FiCalendar },
    { id: 4, value: 98, label: "Client Retention Rate", icon: FiUsers },
    { id: 5, value: 1500, label: "Campaigns Launched", icon: FiActivity },
    { id: 6, value: 25, label: "Industry Awards", icon: FiAward },
    { id: 8, value: 300, label: "Client Revenue Generated", icon: FiDollarSign },
]

// Counter animation component
function Counter({ value, duration = 2 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        let start = 0
        const end = Number.parseInt(value.toString(), 10)

        if (isInView) {
            // If value is less than 100, increment by 1, otherwise use a proportional increment
            const incrementSize = end < 100 ? 1 : Math.floor(end / 100)

            // Don't run if value is zero
            if (start === end) return

            const timer = setInterval(() => {
                start += incrementSize

                if (start > end) {
                    setCount(end)
                    clearInterval(timer)
                    return
                }

                setCount(start)
            }, duration * 10)

            return () => clearInterval(timer)
        }
    }, [isInView, value, duration])

    return <span ref={ref}>{count}</span>
}

export default function StatsSection() {
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
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Our Impact</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">Over the years, we've achieved remarkable results for our clients. Here's a glimpse of our journey in numbers.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-2 border-foreground" style={{
                                    boxShadow: `0 0.5em 0 var(--foreground)`
                                }}>
                                    <CardContent className="flex flex-col items-center justify-center text-center p-6">
                                        <div className="mb-4 p-3 rounded-full bg-primary text-foreground border-2 border-foreground">
                                            <Icon className="w-8 h-8 md:w-10 md:h-10" />
                                        </div>
                                        <div className="text-3xl md:text-4xl font-bold text-foreground font-satoshi-black mb-2">
                                            <Counter value={stat.value} />
                                            {stat.id === 4 && "%"}
                                            {stat.id === 8 && "M+"}
                                        </div>
                                        <p className=" text-sm md:text-base">
                                            {stat.label}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
