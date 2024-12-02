import Link from "next/link";

// components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

export default function Header() {
    return (
        <header className="py-8 xl:py-6 text-white bg-black border-b">
            <div className="flex justify-center items-center">
                {/* logo */}

                {/* nav for desktop */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* nav for mobile */}
                <div className="xl:hidden">
                    <NavMobile />
                </div>
            </div>
        </header>
    );
}