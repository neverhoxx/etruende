import { Container } from "./container";
import Link from "next/link";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/#process" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contacts", href: "/contacts" },
];

const socials = [
    { icon: FaInstagram, href: "https://instagram.com/etruende_webstudio", label: "Instagram" },
    { icon: FaTelegram, href: "https://t.me/Biznesmen1628", label: "Telegram" },
    { icon: FaWhatsapp, href: "https://wa.me/37281274579", label: "WhatsApp" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#131632] pt-16 pb-8">
            <Container>
                <div className="flex flex-wrap justify-between gap-10 pb-10 border-b border-white/10">

                    <div className="flex flex-col gap-4 max-w-[280px]">
                        <Link href="/" className="font-bold text-3xl text-white">
                            <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Modern web development focused on clarity and performance.
                            Based in Estonia, working worldwide.
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#ff3f81] hover:border-[#ff3f81] transition-all duration-200"
                                >
                                    <Icon className="text-[16px]" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-xs uppercase tracking-widest text-[#ff3f81] font-semibold mb-1">
                            Navigation
                        </p>
                        {navLinks.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-xs uppercase tracking-widest text-[#ff3f81] font-semibold mb-1">
                            Contact
                        </p>
                        <a
                            href="tel:+37253645159"
                            className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                        >
                            +372 5364 5159
                        </a>
                        <a
                            href="mailto:etruendewebstudio@gmail.com"
                            className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                        >
                            etruendewebstudio@gmail.com
                        </a>
                        <p className="text-white/40 text-sm">Mon–Fri · 10:00–20:00 EET</p>

                        <Link
                            href="/contacts"
                            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#ff3f81] hover:underline underline-offset-4 transition"
                        >
                            Start a project →
                        </Link>
                    </div>
                </div>

                <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        © {year} EtruendE. All rights reserved.
                    </p>
                    <p className="text-white/30 text-xs">
                        Independent Web Development Studio · Tallinn, Estonia
                    </p>
                </div>
            </Container>
        </footer>
    );
}