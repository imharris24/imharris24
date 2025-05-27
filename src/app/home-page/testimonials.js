"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    content:
      "iMarketing transformed our online presence. Their SEO strategies increased our organic traffic by 200% in just 6 months.",
    author: "John Smith, CEO of TechStart",
  },
  {
    id: 2,
    content:
      "The team at iMarketing is exceptional. Their content marketing strategy helped us establish ourselves as thought leaders in our industry.",
    author: "Lisa Johnson, Marketing Director at HealthPlus",
  },
  {
    id: 3,
    content:
      "Working with iMarketing has been a game-changer for our business. Their PPC campaigns delivered a 300% ROI within the first quarter.",
    author: "Michael Brown, Founder of EcoGoods",
  },
  {
    id: 4,
    content:
      "iMarketing's social media strategies helped us connect with our audience in meaningful ways, resulting in a 150% increase in engagement.",
    author: "Sarah Williams, CMO at FashionForward",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 md:flex md:items-center">
          <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">What Our Clients Say</h2>
          <p className="md:px-4 max-w-md mt-2 md:mt-0">Don&#39;t just take our word for it. Here&#39;s what our clients have to say about working with us.</p>
      </div>
        <div className="relative max-w-4xl mx-auto overflow-hidden bg-foreground p-4 md:p-8 rounded-xl md:rounded-2xl">
  <div className="relative h-[400px] md:h-[300px]">
    {testimonials.map((testimonial, index) => (
      <motion.div
        key={testimonial.id}
        className="absolute w-full"
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: currentIndex === index ? 1 : 0,
          x: currentIndex === index ? 0 : 100,
        }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-foreground border-primary border md:border overflow-visible rounded-lg">
          <CardContent className="pt-4 md:pt-6 overflow-visible">
            <div className="relative p-4 md:p-6 bg-primary rounded-lg mb-4 md:mb-6">
              {/* Message bubble triangle - responsive positioning */}
              <div className="absolute -bottom-1 left-4 md:left-6 w-4 h-4 md:w-5 md:h-5 rotate-45 transform bg-primary" />
              <p className="text-base md:text-lg italic text-background leading-relaxed">
                {testimonial.content}
              </p>
            </div>
            <p className="font-semibold ml-4 md:ml-6 font-satoshi-black text-background text-sm md:text-base">
              {testimonial.author} 
            </p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
  <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
    {testimonials.map((_, index) => (
      <button
        key={index}
        className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
          currentIndex === index ? "bg-primary" : "bg-muted-foreground/30"
        }`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
</div>
      </div>
    </section>
  )
}
