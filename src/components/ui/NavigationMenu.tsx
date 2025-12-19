"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"

const services = [
    {
        title: "Corporate Website",
        href: "/corporate-page-development",
        description: "Corporate websites for companies and brands.",
    },
    {
        title: "E-commerce",
        href: "/ecommerce-development",
        description: "Online stores with payment and catalog systems.",
        width: "w-[188px]"
    },
    {
        title: "Landing Page",
        href: "/landing-page-development",
        description: "High-converting landing pages for products.",
        width: "w-[188px]"
    },
    {
        title: "Web Applications",
        href: "/web-app-development",
        description: "Custom web applications for business needs.",
        width: "w-[188px]"
    },
    {
        title: "SEO Promotion",
        href: "/seo-promotion",
        description: "SEO Promotion for business needs.",
        width: "w-[387px]"
    }
]

export function NavMenu() {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[420px] gap-3 p-4 md:grid-cols-2">
                            {services.map((service) => (
                                <ListItem
                                    key={service.title}
                                    title={service.title}
                                    href={service.href}
                                    className={service.width}
                                >
                                    {service.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/portfolio">Portfolio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/blog">Blog</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/reviews">Reviews</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/contacts">Contacts</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    className,
}: {
    title: string
    children: React.ReactNode
    href: string
    className?: string
}) {
    return (
        <li className={cn(className)}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="
            block space-y-1 rounded-md p-3
            transition-colors
            hover:bg-muted
            focus:bg-muted
          "
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-muted-foreground text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
