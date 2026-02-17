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
        title: "Business Website",
        href: "/business-website",
        description: "Multi-page websites that clearly present your services, pricing, and contact details.",
    },

    {
        title: "Landing Page",
        href: "/landing-page",
        description: "Focused one-page websites designed to explain your offer and guide users to contact you.",

    },

    {
        title: "Online Store",
        href: "/online-store",
        description: "Simple and reliable online stores with product catalog and checkout setup.",
        width: "w-[380px]",
    },
];


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
                        <Link href="/about">About us</Link>
                    </NavigationMenuLink>
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
