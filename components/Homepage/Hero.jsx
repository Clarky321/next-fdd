"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="relative min-h-[80vh] w-full overflow-hidden">
            {/* Dotted pattern overlay */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("/images/dotted-pattern.svg")`,
                    backgroundSize: "20px 20px",
                }}
            />

            {/* Mountain background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                style={{
                    backgroundImage: `url('/images/background/Abstract.svg')`,
                    maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0))",
                }}
            />

            {/* Content */}
            <div className="container relative z-10 mx-auto flex min-h-[80vh] flex-col items-center justify-center text-white">
                {/* Navigation */}
                <div className="mb-20 rounded-full bg-black/80 px-8 py-4 backdrop-blur-sm">
                    <nav className="flex items-center gap-2 text-sm font-primary">
                        <span className="text-gray-400">For</span>
                        <Link href="#" className="hover:text-accent-hover">
                            Startups
                        </Link>
                        <span className="text-gray-400">,</span>
                        <Link href="#" className="hover:text-accent-hover">
                            Enterprise leaders
                        </Link>
                        <span className="text-gray-400">,</span>
                        <Link href="#" className="hover:text-accent-hover">
                            Media & Publishers
                        </Link>
                        <span className="text-gray-400">and</span>
                        <Link href="#" className="hover:text-accent-hover">
                            Social Good
                        </Link>
                    </nav>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                    <Button variant="outline">Our Works</Button>
                    <Button>Связаться с нами</Button>
                </div>
            </div>
        </div>
    );
}