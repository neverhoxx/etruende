"use client";

import Link from "next/link";
import { Container } from "./container";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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

                <nav className="hidden md:flex gap-10">
                    <ul className="flex items-center gap-6">
                        <li >
                            <Link
                                href={`/`}
                                className="hover:opacity-75"
                            >
                                Services
                            </Link>
                        </li>
                        <li >
                            <Link
                                href={`/`}
                                className="hover:opacity-75"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li >
                            <Link
                                href={`/`}
                                className="hover:opacity-75"
                            >
                                About us
                            </Link>
                        </li>
                        <li >
                            <Link
                                href={`/`}
                                className="hover:opacity-75"
                            >
                                Blog
                            </Link>
                        </li>
                        <li >
                            <Link
                                href={`/`}
                                className="hover:opacity-75"
                            >
                                Testimonials
                            </Link>
                        </li>
                    </ul>

                </nav>
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </Container>

            {menuOpen && (
                <div className="md:hidden absolute top-[85px] left-0 w-full bg-white shadow-lg">
                    <nav className="flex flex-col items-center gap-6 py-6 text-gray-900 font-medium">
                        <Link
                            href={`/`}
                            className="hover:text-blue-600 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href={`/`}
                            className="hover:text-blue-600 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href={`/`}
                            className="hover:text-blue-600 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            About us
                        </Link>
                        <Link
                            href={`/`}
                            className="hover:text-blue-600 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href={`/`}
                            className="hover:text-blue-600 transition-colors"
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
