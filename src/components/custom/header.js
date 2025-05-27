"use client"

import { useState } from "react"
import Link from "next/link"
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto px-4 container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center">
                    <span className="text-3xl font-bold text-primary font-expressa-bold"><span className="text-foreground">iMarketing</span><span className="text-secondary">.</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:text-secondary">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/get-quote">
                        <Button className="hover:bg-secondary transition-colors">
                            Request a Quote
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="hover:bg-transparent">
                            <PiDotsThreeOutlineVerticalFill className="h-8 w-8 text-secondary" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="w-[300px] p-6 bg-background/95 backdrop-blur-lg border-none shadow-xl"
                    >
                        <SheetTitle className="sr-only">Main Navigation Menu</SheetTitle>
                        <div className="h-full flex flex-col space-y-8">
                            {/* Navigation Links */}
                            <nav className="flex-1">
                                <ul className="space-y-4">
                                    {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center text-lg font-light
                                       text-foreground/80 hover:text-foreground
                                       transition-colors duration-300"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="relative after:absolute after:-bottom-1 after:left-0 
                                        after:w-0 after:h-px after:bg-primary after:transition-all 
                                        after:duration-300 group-hover:after:w-full">
                                                    {link.name}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* CTA Button */}
                            <Link href="/get-quote" className="w-full">
                                <Button
                                    variant="outline"
                                    className="w-full border-foreground/20 hover:border-foreground/40 
                         text-foreground/80 hover:text-foreground rounded-lg py-6
                         transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Request Quote
                                </Button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}