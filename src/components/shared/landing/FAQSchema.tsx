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
                                    "A landing page is a focused one-page website designed around a single offer or action, such as requesting a quote, booking a call, or leaving contact details."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How is a landing page different from a regular website?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "A landing page focuses on one message and one call-to-action, while a regular website usually contains multiple pages and goals."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "When should I choose a landing page?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "Landing pages work best for a single service, product, or campaign where visitors need to quickly understand the offer and take action."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does it take to build a landing page?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "Most landing pages take from a few days to one or two weeks, depending on content readiness, design complexity, and integrations."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is SEO included?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "Yes. We include SEO best practices such as clean structure, headings, metadata, and fast performance. Long-term SEO results depend on content and strategy."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does a landing page cost?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text":
                                    "Pricing depends on design complexity, number of sections, and integrations. After a short brief, we provide a fixed quote and timeline."
                            }
                        }
                    ]
                }),
            }}
        />
    );
}
