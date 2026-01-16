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
            changeFrequency: 'monthly',
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
            changeFrequency: 'monthly',
            lastModified,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/corporate-page-development`,
            changeFrequency: 'monthly',
            lastModified,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ecommerce-development`,
            changeFrequency: 'monthly',
            lastModified,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/landing-page-development`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/seo-promotion`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/web-app-development`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio/voltamp`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
    ]
}
