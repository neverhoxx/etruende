"use client";

import Link from "next/link";
import { Container } from "./container";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavMenu } from "../ui/NavigationMenu";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: FaInstagram, href: "https://www.instagram.com/etruende_webstudio/", className: "text-pink-500" },
    { icon: FaWhatsapp, href: "https://wa.me/37281274579", className: "text-green-500" },
    { icon: FaTelegramPlane, href: "https://t.me/Biznesmen1628", className: "text-blue-400" },
];

const mobileLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contacts", href: "/contacts" },
];

const darkHeaderPaths = ["/portfolio", "/blog", "/about", "/reviews"];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const forceDarkHeader = darkHeaderPaths.includes(pathname);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`select-none h-[85px] fixed top-0 z-50 w-full transition-all duration-300 text-white ${isScrolled || forceDarkHeader
                    ? "bg-[#131632cc] shadow-md backdrop-blur-md"
                    : "bg-transparent"
                }`}
        >
            <Container className="flex items-center justify-between h-[85px]">
                <Link href="/" className="flex-shrink-0 font-bold text-3xl">
                    <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span>
                </Link>

                <NavMenu />

                <div className="hidden md:flex items-center gap-4">
                    {socials.map(({ icon: Icon, href, className }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${className} hover:text-[#ff3f81] transition-colors duration-300`}
                        >
                            <Icon className="text-2xl" />
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </Container>

            <div className={`md:hidden absolute top-[85px] left-0 w-full bg-[#131632e6] backdrop-blur-md shadow-md transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}>
                <nav className="flex flex-col items-center gap-6 py-8 text-white font-medium">
                    <MobileServicesDropdown />

                    {mobileLinks.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="transition-colors hover:text-[#ff3f81]"
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}

                    <div className="flex gap-4 pt-2">
                        {socials.map(({ icon: Icon, href, className }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${className} hover:text-[#ff3f81] transition-colors duration-300`}
                            >
                                <Icon className="text-2xl" />
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}

function MobileServicesDropdown() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const links = [
        { label: "Business Website", href: "/business-website" },
        { label: "Online Store", href: "/online-store" },
        { label: "Landing Page", href: "/landing-page" },
    ];

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 transition-colors hover:text-[#ff3f81]"
            >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180 text-[#ff3f81]" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col items-center gap-3 text-sm text-white/80">
                    {links.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="hover:text-[#ff3f81] transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}