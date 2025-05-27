import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

// Footer links
const footerLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
]

// Social links
const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
]

export default function Footer() {
    return (
        <footer className="py-12 md:py-16 sm:mx-8 bg-foreground rounded-t-4xl text-sm sm:text-base">
            <div className="container px-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold text-background font-expressa-bold">iMarketing<span className="text-primary">.</span></span>
                        </Link>
                        <p className="text-background">
                            We help businesses grow through strategic digital marketing solutions.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-background hover:text-accent transition-colors"
                                >
                                    {link.icon}
                                    <span className="sr-only">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-background font-satoshi-black">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-background hover:text-accent transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-background font-satoshi-black">Contact</h3>
                        <ul className="space-y-2 text-background">
                            <li>Email: info@imarketing.com</li>
                            <li>Phone: +1 (555) 123-4567</li>
                            <li>Address: 123 Marketing St, Digital City, DC 10101</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-background font-satoshi-black">Subscribe to Our Newsletter</h3>
                        <p className="text-background">Stay updated with the latest digital marketing trends and tips.</p>
                        <div className="flex gap-2">
                            <Input placeholder="Your email" className="text-background placeholder:text-background max-w-[220px]" />
                            <Button type="submit">Subscribe</Button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-primary mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-background">
                        Powered By{' '}
                        <a
                            href="https://peachxtechnologies.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accent"
                        >
                            PeachX Technologies
                        </a>
                        .
                    </p>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-sm text-background hover:text-accent">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-background hover:text-accent">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
