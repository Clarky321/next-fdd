"use client";

import { Pen, Puzzle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OurServices() {
    const services = [
        {
            icon: Pen,
            title: "Design",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nostrum ut distinctio quasi, mollitia eius cupiditate repellat sint sunt soluta nobis tempora natus molestias rem, autem nihil sit non totam.",
        },
        {
            icon: Puzzle,
            title: "Development",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nostrum ut distinctio quasi, mollitia eius cupiditate repellat sint sunt soluta nobis tempora natus molestias rem, autem nihil sit non totam.",
        },
        {
            icon: Users,
            title: "Project Management",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nostrum ut distinctio quasi, mollitia eius cupiditate repellat sint sunt soluta nobis tempora natus molestias rem, autem nihil sit non totam.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-primary py-24">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.1)' /%3E%3C/svg%3E")`,
                    backgroundSize: "20px 20px",
                }}
            />

            <div className="container relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-white">Our Services</h2>
                    <p className="mx-auto max-w-2xl text-gray-400">
                        Transform your brand with innovative digital solutions.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start rounded-lg bg-white/5 p-6 backdrop-blur-sm"
                        >
                            <div className="mb-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4">
                                <service.icon className="h-6 w-6 text-[#9eff00]" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-400">{service.description}</p>
                            <Button variant="outline" className="w-full">
                                Learn More
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
