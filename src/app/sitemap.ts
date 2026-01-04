import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://etruende.com'
    const lastModified = new Date()

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/contacts`,
            lastModified,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/reviews`,
            lastModified,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/corporate-page-development`,
            lastModified,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ecommerce-development`,
            lastModified,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/landing-page-development`,
            lastModified,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/seo-promotion`,
            lastModified,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/web-app-development`,
            lastModified,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio/voltamp`,
            lastModified,
            priority: 0.75,
        },
    ]
}
