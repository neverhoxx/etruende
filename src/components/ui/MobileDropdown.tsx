import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

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
                className="flex items-center gap-2 transition-colors hover:text-[#ff3f81]"
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
                        href="/corporate"
                        onClick={onClose}
                        className="hover:text-[#ff3f81]"
                    >
                        Corporate website
                    </Link>

                    <Link
                        href="/ecommerce"
                        onClick={onClose}
                        className="hover:text-[#ff3f81]"
                    >
                        E-commerce
                    </Link>

                    <Link
                        href="/landing"
                        onClick={onClose}
                        className="hover:text-[#ff3f81]"
                    >
                        Landing page
                    </Link>

                    <Link
                        href="/web-app"
                        onClick={onClose}
                        className="hover:text-[#ff3f81]"
                    >
                        Web application
                    </Link>
                    <Link
                        href="/seo-promotion"
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
