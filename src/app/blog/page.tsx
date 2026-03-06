import type { Metadata } from "next";
import { Container } from "@/components/shared/container";

import blog1 from "@/images/blog/instagram-vs-website.png";

import { FaArrowRight } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
    title: "Blog - Coming Soon | EtruendE",
    description: "EtruendE blog is currently under development. Launching soon.",
    robots: {
        index: false,
        follow: false,
    },
};

const blogs = [
    {
        id: 1,
        title: "Instagram ≠ Business: Why You Actually Need a Website",
        category: "Instagram Business",
        description:
            "Why relying only on Instagram limits your growth and how a website turns attention into a real, scalable business.",
        image: blog1,
        link: "/blog/instagram-not-business",
        alt: "Instagram ≠ Business: Why You Actually Need a Website Image",
        datePublished: "2026-02-19"
    }
]

export default function BlogPage() {
    return (
        <>
            <div className="w-full bg-[#e5e7eb] h-full py-[90px] sm:py-[100px]" >
                <Container>
                    <div className="text-[#131632]">
                        <Breadcrumb className="select-none mb-6">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        className="hover:text-[#ff3f81] text-sm sm:text-base"
                                        href="/"
                                    >
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-[#ff3f81] text-sm sm:text-base">
                                        Blog
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
                                Blog & News
                            </h1>
                        </div>
                    </div>
                </Container>
                <div />
                <section className="bg-[#e5e7eb]">
                    <Container className="flex gap-10">
                        {blogs.map((blog, b) => (
                            <Link key={b} href={blog.link} className="block bg-white w-full select-none">

                                <Image
                                    src={blog.image}
                                    alt={blog.alt}
                                    className="h-[200px] object-cover w-full"
                                    priority={b === 0}
                                />
                                <div className="px-8 py-5">
                                    <h3 className="font-semibold text-2xl text-[#131632]">
                                        {blog.title}
                                    </h3>
                                    <p className="text-[#131632d7] mt-4 mb-5">{blog.description}</p>

                                    <span className="text-[#ff3f81] font-semibold flex items-center gap-3">Read more <FaArrowRight /></span>

                                    <hr className="my-5" />

                                    <div className="text-[#131632d7]">{blog.datePublished}</div>
                                </div>

                            </Link>
                        ))}
                    </Container>
                </section>
            </div >
        </>
    );
}
