export function LandingFAQSchema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is a landing page?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "A landing page is a focused web page designed to convert visitors into leads or customers. It is built around a single goal, such as collecting contact information or promoting a product or service."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How is a landing page different from a regular website?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "A landing page focuses on one specific action, while a regular website contains multiple pages and goals. Landing pages are optimized for conversions and marketing campaigns."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do landing pages increase conversion rates?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "Yes. Professionally designed landing pages significantly improve conversion rates by guiding users through a clear message, strong call to action, and optimized structure."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does it take to build a landing page?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "The development time depends on complexity and requirements, but most landing pages take from a few days to two weeks, including design, development, and optimization."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is a landing page optimized for SEO?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "Yes. Our landing pages are built with SEO-friendly structure, fast loading speed, clean code, and optimized content to help them rank in search engines."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does a landing page cost?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "The cost of a landing page depends on design complexity, functionality, and business goals. We provide custom landing page development tailored to each project."
                            }
                        }
                    ]
                }),
            }}
        />
    );
}
