"use client"

import Image from "next/image"
import Link from "next/link"

export default function BrandMarquee() {
    const brands = [
        { id: 1, name: "Brand 1", logo: "/brands/01.webp", href: "#" },
        { id: 2, name: "Brand 2", logo: "/brands/02.webp", href: "#" },
        { id: 3, name: "Brand 3", logo: "/brands/03.webp", href: "#" },
        { id: 4, name: "Brand 4", logo: "/brands/04.webp", href: "#" },
        { id: 5, name: "Brand 5", logo: "/brands/05.webp", href: "#" },
        { id: 6, name: "Brand 6", logo: "/brands/06.webp", href: "#" },
        { id: 7, name: "Brand 7", logo: "/brands/07.webp", href: "#" },
        { id: 8, name: "Brand 8", logo: "/brands/08.webp", href: "#" },
    ]

    const duplicatedBrands = [...brands, ...brands]

    return (
        <section className="py-2 -mt-16 sm:-mt-22 bg-background overflow-hidden ">
            <div className="marquee-wrapper mt-4">
                {/* First marquee track */}
                <div className="marquee-content">
                    {duplicatedBrands.map((brand, index) => (
                        <Link
                            key={`${brand.id}-${index}`}
                            href={brand.href}
                            className="mx-4 md:mx-8 flex-shrink-0 hover:opacity-80 transition-opacity"
                        >
                            <div className="relative h-16 w-32 md:h-20 md:w-40">
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 128px, 160px"
                                    loading="eager"
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Second marquee track for seamless loop */}
                <div className="marquee-content" aria-hidden="true">
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={`${brand.id}-${index}-copy`}
                            className="mx-4 md:mx-8 flex-shrink-0"
                        >
                            <div className="relative h-16 w-32 md:h-20 md:w-40">
                                <Image
                                    src={brand.logo}
                                    alt=""
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 128px, 160px"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}