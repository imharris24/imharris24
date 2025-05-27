"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 md:flex md:items-center">
          <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Contact Us</h2>
          <p className="md:px-4 max-w-md mt-2 md:mt-0">
            Have questions or ready to start your digital marketing journey? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-secondary/10 p-4 sm:p-8 rounded-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex justify-center"
          >
            <img
              src="/svg/contact.svg"
              alt="Contact illustration"
              className="w-full h-auto max-w-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 font-satoshi-black">Get in touch</h3>
              <p className="text-gray-600 mt-2">We'll get back to you within 24 hours</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    placeholder="+92 ___ _______"
                    className="focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="focus:ring-2 focus:ring-primary focus:border-transparent min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all shadow-md hover:shadow-lg"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}