import type { Metadata } from "next";
import { Container } from "@/components/shared/container";

import blog1 from "@/images/blog/instagram-vs-website.png";

import { FaArrowLeft } from "react-icons/fa6";

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
    title: "Instagram ≠ Business: Why You Actually Need a Website | EtruendE",
    description:
        "Many businesses rely only on Instagram. But social media is rented space. Learn why every serious business needs its own website.",
    openGraph: {
        title: "Instagram ≠ Business: Why You Actually Need a Website",
        description:
            "Many businesses rely only on Instagram. But social media is rented space.",
        images: ["/images/blog/instagram-vs-website.png"],
    },
};

export default function BlogPage() {
    return (
        <div className="pt-[90px] sm:pt-[100px]">
            <Container className="flex w-full min-h-screen flex-wrap sideber-container ">
                <section className="text-[#ff3f81] border-r border-[#ff3f8120] pr-6">
                    <div className="sticky top-32">
                        <Link className="inline-flex items-center gap-2 select-none" href="/blog">
                            <FaArrowLeft /> Go back
                        </Link>

                        <ul className="flex flex-col gap-3 mt-10 select-none pr-5">
                            <h3 className="font-semibold text-2xl">
                                Content
                            </h3>
                            <li>
                                <Link className="text-base hover:text-[#131632] duration-300" href="#own-instagram">
                                    1. You Don’t Own Instagram
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-[#131632] duration-300" href="#trust-sales">
                                    2. Trust Drives Sales
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-[#131632] duration-300" href="#google-visibility">
                                    3. You’re Invisible on Google Without a Website
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-[#131632] duration-300" href="#scale-instagram">
                                    4. You Can’t Scale Properly on Instagram Alone
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-[#131632] duration-300" href="#audience-data">
                                    5. You Don’t Own Your Audience Data
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-[#131632] duration-300" href="#brand-value">
                                    6. A Website Increases Your Brand Value
                                </Link>
                            </li>

                        </ul>
                    </div>

                </section>
                <div className="p-6">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#131632]">
                        Instagram ≠ Business: Why You Actually Need a Website
                    </h1>
                    <Breadcrumb className="mb-6 select-none">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbPage>Instagram vs Website</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>



                    <div className="flex flex-wrap mt-10 text-[#131632d3]">
                        <div className="w-1/3 border-l-2 pl-4">
                            <div className="uppercase leading-4 text-midnight-blue-60 mb-3 font-semibold tracking-[2px]">
                                Published
                            </div>
                            <div className="leading-4 text-[#ff3f81]">
                                08.08.2024
                            </div>
                        </div>
                        <div className="w-1/3 border-l-2 pl-4">
                            <div className="uppercase leading-4 text-midnight-blue-60 mb-3 font-semibold tracking-[2px]">
                                Reading time
                            </div>
                            <div className="leading-4 text-[#ff3f81]">
                                ~3 min read
                            </div>
                        </div>
                        <div className="w-1/3 border-l-2 pl-4">
                            <div className="uppercase leading-4 text-midnight-blue-60 mb-3 font-semibold tracking-[2px]">
                                Category
                            </div>
                            <div className="leading-4 text-[#ff3f81]">
                                Instagram business
                            </div>
                        </div>
                    </div>

                    <Image
                        src={blog1}
                        alt="Instagram vs Website for Business"
                        className="rounded-xl mt-8 w-full"
                        sizes="(max-width: 768px) 100vw, 800px"
                    />

                    <article className="max-w-3xl mx-auto mt-10">
                        <p className="leading-relaxed text-2xl text-[#131632bb]">
                            Instagram Is a Showcase. Not Your Business.

                            Starting with Instagram makes sense. It’s fast. It’s free. It’s easy.

                            You create a profile, post content, run ads and clients start coming in.
                            <br /><br />
                            But here’s the truth:
                            <br />
                            <b>Instagram is not an asset you own. It’s rented space.</b>
                            <br /><br />
                            And if you’re serious about building a real business, you need your own foundation a website.
                        </p>

                        <div id="own-instagram" className="mt-10 scroll-mt-25">
                            <h2 className="font-bold text-2xl text-[#131632e0] mb-3">
                                1. You <span className="text-[#ff3f81]">Don’t Own</span> Instagram
                            </h2>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                Instagram is owned by Meta.
                                <br />
                                Algorithms change. Reach drops. Accounts get blocked. Ad costs rise.
                                <br /> <br />
                                You don’t control:

                            </p>
                            <ul className="text-xl space-y-1 text-[#131632e0] list-disc list-inside">
                                <li>The algorithm</li>
                                <li>The rules</li>
                                <li>Platform outages</li>
                                <li>Access to your audience</li>
                            </ul>
                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                A website, on the other hand, is your property.
                                <br /> <br />
                                Your domain. <br />
                                Your content. <br />
                                Your data. <br />
                                Your rules.
                                <br /> <br />
                                Your business should not depend on someone else’s decisions.
                            </p>
                        </div>


                        <div id="trust-sales" className="mt-10 scroll-mt-25">
                            <h2 className="font-bold text-2xl text-[#131632e0] mb-3">
                                2. Trust Drives Sales
                            </h2>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                Let’s be honest.
                                <br />
                                When people are about to spend real money, they Google you.
                                <br /><br />
                                And what builds more trust?
                                <br /><br />
                                An Instagram page with highlights…
                                <br />
                                or a professional website with:
                                <br />
                            </p>
                            <ul className="text-xl space-y-1 text-[#131632e0] list-disc list-inside">
                                <li>Clear positioning</li>
                                <li>Service breakdown</li>
                                <li>Portfolio</li>
                                <li>Case studies</li>
                                <li>Testimonials</li>
                                <li>Legal information</li>
                                <li>Contact forms</li>
                            </ul>
                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                A website signals seriousness.
                                <br /> <br />
                                It says:
                                <br />
                                “This is not a hobby. This is a business.”
                            </p>
                        </div>

                        <div id="google-visibility" className="mt-10 scroll-mt-25">
                            <h2 className="font-bold text-2xl text-[#131632e0] mb-3">
                                3. You’re <span className="text-[#ff3f81]">Invisible on Google</span> Without a Website
                            </h2>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                Instagram posts don’t rank properly in search results.
                                <br /><br />
                                If someone searches:
                                <br />
                            </p>
                            <ul className="text-xl space-y-1 text-[#131632e0] list-disc list-inside">
                                <li>“web studio in Dubai”</li>
                                <li>“branding agency for startups”</li>
                                <li>“UI/UX design company”</li>
                            </ul>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                Your Instagram profile won’t compete with optimized websites.
                                <br /> <br />
                                With a website, you unlock:
                                <br />
                            </p>

                            <ul className="text-xl space-y-1 text-[#131632e0] list-disc list-inside">
                                <li>SEO traffic</li>
                                <li>Long-term visibility</li>
                                <li>Organic leads</li>
                                <li>Authority in your niche</li>
                            </ul>
                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                That’s sustainable growth.
                            </p>

                        </div>

                        <div id="scale-instagram" className="mt-10 scroll-mt-25">
                            <h2 className="font-bold text-2xl text-[#131632e0] mb-3">
                                4. You <span className="text-[#ff3f81]">Can’t Scale</span> Properly on Instagram Alone
                            </h2>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                Instagram is built for content consumption — not structured business growth.
                                <br /><br />
                                Try doing this only through Instagram:
                            </p>
                            <ul className="text-xl space-y-1 text-[#131632e0] list-disc list-inside">
                                <li>Complex service funnels</li>
                                <li>Multi-page sales structure</li>
                                <li>Lead magnets</li>
                                <li>Blog content</li>
                                <li>Detailed case studies</li>
                                <li>Automated conversions</li>
                            </ul>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                It becomes messy fast.
                                <br />
                                A website gives you structure. And structure creates scale.
                            </p>
                        </div>

                        <div id="audience-data" className="mt-10 scroll-mt-25">
                            <h2 className="font-bold text-2xl text-[#131632e0] mb-3">
                                5. You <span className="text-[#ff3f81]">Don’t Own</span> Your Audience Data
                            </h2>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                On Instagram, you don’t truly own:
                                <br />
                            </p>
                            <ul className="text-xl space-y-1 text-[#131632e0] list-disc list-inside">
                                <li>Customer emails</li>
                                <li>Behavioral data</li>
                                <li>Analytics depth</li>
                                <li>Conversion tracking</li>
                            </ul>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                With a website, you can:
                                <br />
                            </p>

                            <ul className="text-xl space-y-1 text-[#131632e0] list-disc list-inside">
                                <li>Build an email list</li>
                                <li>Track user behavior</li>
                                <li>Improve conversion rates</li>
                                <li>Run retargeting properly</li>
                            </ul>
                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                Data = growth.
                                <br />
                                Instagram limits your data.
                            </p>
                        </div>

                        <div id="brand-value" className="mt-10 scroll-mt-25">
                            <h2 className="font-bold text-2xl text-[#131632e0] mb-3">
                                6. A Website <span className="text-[#ff3f81]">Increases</span> Your Brand Value
                            </h2>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                If you ever want to:
                                <br />
                            </p>
                            <ul className="text-xl space-y-1 text-[#131632e0] list-disc list-inside">
                                <li>Raise prices</li>
                                <li>Attract bigger clients</li>
                                <li>Work internationally</li>
                                <li>Sell your company</li>
                            </ul>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                You need digital assets.
                                <br />
                                A website increases perceived value and actual valuation.
                                <br />
                                Instagram alone does not.
                            </p>
                        </div>

                        <div className="pt-25">
                            <h2 className="font-bold text-2xl text-[#131632e0] mb-3">
                                The Smart Strategy: <span className="text-[#ff3f81]">Instagram + Website</span>
                            </h2>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                This is not “Instagram vs Website.”
                                <br />
                                Instagram is a powerful marketing channel.
                                <br />
                                But it should drive traffic to something you own.
                                <br /><br />
                                The smart formula looks like this:
                                <br />
                                <b>Instagram → Website → Conversion → Database → Long-term growth</b>
                                <br /><br />
                                Social media brings attention.
                                <br />
                                A website turns attention into assets.
                            </p>
                        </div>

                        <div className="pt-25">
                            <h2 className="font-bold text-2xl text-[#131632e0] mb-3">
                                Why <span className="text-[#ff3f81]">EtruendE</span> Builds More Than Just Websites
                            </h2>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                At <span className="text-[#ff3f81]">EtruendE</span> (etruende.com), we don’t just design pages.
                                <br /><br />
                                We build:
                                <br />
                            </p>

                            <ul className="text-xl space-y-1 text-[#131632e0] list-disc list-inside">
                                <li>Conversion-focused structures</li>
                                <li>Strategic brand positioning</li>
                                <li>SEO-ready systems</li>
                                <li>Scalable digital foundations</li>
                            </ul>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br /><br />
                                Because a website isn’t decoration. It’s infrastructure.
                                <br />
                                And infrastructure is what serious businesses are built on.
                            </p>
                        </div>

                        <div className="pt-25">
                            <h2 className="font-bold text-2xl text-[#131632e0] mb-3">
                                Final Thought
                            </h2>

                            <p className="text-xl leading-relaxed text-[#131632e0]">
                                <br />
                                If Instagram disappeared tomorrow, would your business survive?
                                <br /><br />
                                If the answer makes you uncomfortable,
                                <br />
                                <b>it’s time to build something you actually own.</b>
                                <br /><br />
                                Your business deserves more than rented space.
                                <br />
                                <b>It deserves a foundation.</b>
                            </p>
                        </div>

                        <div className="mt-16 p-8 rounded-xl bg-[#f6f7fb]">
                            <h3 className="text-2xl font-bold mb-3">
                                Need a Website for Your Business?
                            </h3>

                            <p className="text-lg mb-4">
                                At EtruendE we build conversion-focused websites designed for growth,
                                visibility, and long-term digital ownership.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-block bg-[#ff3f81] text-white px-6 py-3 rounded-lg"
                            >
                                Start Your Project
                            </Link>
                        </div>

                    </article>
                </div>
            </Container>

        </div>
    );
}
