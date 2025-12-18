"use client";

import Link from "next/link";
import { Container } from "./container";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { NavMenu } from "../ui/NavigationMenu";

import { ChevronDown } from "lucide-react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`select-none h-[85px] fixed top-0 z-50 w-full transition-colors duration-300 text-white ${isScrolled ? "bg-[#131632d7] shadow-md backdrop-blur" : "bg-transparent"
                }`}
        >
            <Container className="flex items-center justify-between h-[85px]">
                <Link href="/" className="max-w-[200px] flex-shrink-0 font-bold text-3xl">
                    <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span>
                </Link>

                <NavMenu />

                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </Container>

            {menuOpen && (
                <div className="md:hidden absolute top-[85px] left-0 w-full bg-[#131632d7] backdrop-blur-md shadow-md">
                    <nav className="flex flex-col items-center gap-6 py-8 text-white font-medium">

                        <MobileServicesDropdown onClose={() => setMenuOpen(false)} />

                        <Link
                            href="/portfolio"
                            className="transition-colors hover:text-[#ff3f81]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Portfolio
                        </Link>

                        <Link
                            href="/blog"
                            className="transition-colors hover:text-[#ff3f81]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Blog
                        </Link>

                        <Link
                            href="/testimonials"
                            className="transition-colors hover:text-[#ff3f81]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Testimonials
                        </Link>
                    </nav>
                </div>
            )}

        </header>
    );
}

function MobileServicesDropdown({
    onClose,
}: {
    onClose: () => void
}) {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={() => setOpen(!open)}
                className="pl-3 flex items-center gap-2 transition-colors hover:text-[#ff3f81]"
            >
                Services
                <ChevronDown
                    className={`h-4 w-4 transition-transform ${open ? "rotate-180 text-[#ff3f81]" : ""
                        }`}
                />
            </button>

            {open && (
                <div className="mt-4 flex flex-col items-center gap-3 text-sm text-white/90">
                    <Link
                        href="/services/corporate"
                        onClick={onClose}
                        className="hover:text-[#ff3f81]"
                    >
                        Corporate website
                    </Link>

                    <Link
                        href="/services/ecommerce"
                        onClick={onClose}
                        className="hover:text-[#ff3f81]"
                    >
                        E-commerce
                    </Link>

                    <Link
                        href="/services/landing"
                        onClick={onClose}
                        className="hover:text-[#ff3f81]"
                    >
                        Landing page
                    </Link>

                    <Link
                        href="/services/web-app"
                        onClick={onClose}
                        className="hover:text-[#ff3f81]"
                    >
                        SEO Promotion
                    </Link>
                </div>
            )}
        </div>
    )
}

