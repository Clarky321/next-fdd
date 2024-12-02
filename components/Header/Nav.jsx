"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Главная", path: "/", },
    { name: "Услуги", path: "/services", },
    { name: "Проекты", path: "/works", },
    { name: "команда", path: "/team", },
    { name: "контакты", path: "/contact", },
]

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`capitalize font-semibold hover:text-accent transition-all ${link.path === pathname
                        ? "text-accent border-accent border-b-2"
                        : ""}`
                    }>
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}