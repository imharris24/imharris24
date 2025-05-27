"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-6">
            <div className="w-full max-w-3xl py-8 sm:py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="relative mx-auto w-28 h-20 sm:w-36 sm:h-28">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="text-6xl sm:text-7xl font-bold text-primary">404</span>
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-md mx-auto">
                        We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-none mx-auto"
                >
                    <Button asChild size="lg" className="w-full sm:w-auto hover:bg-secondary transition-colors">
                        <Link href="/" className="flex items-center justify-center">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="w-full sm:w-auto hover:bg-secondary transition-colors hover:text-background">
                        <a
                            href="mailto:support@iMarketing.pk"
                            className="flex items-center justify-center"
                        >
                            <span className="sm:hidden">Contact Support</span>
                            <span className="hidden sm:inline">Contact Support</span>
                        </a>
                    </Button>

                </motion.div>
            </div>

            {/* Decorative elements - Mobile optimized */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 right-4 sm:top-1/3 sm:right-1/5 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-primary/5"
                    animate={{
                        x: [0, 10, 0],
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-4 sm:bottom-1/3 sm:left-1/5 w-24 h-24 sm:w-48 sm:h-48 rounded-full bg-primary/5"
                    animate={{
                        x: [0, -10, 0],
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>
        </div>
    )
}