import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/_next/',
                    '/private/',
                    '/*?preview=',
                    '/*&preview=',
                    '/*?utm_',
                    '/*&utm_',
                ],
            },
        ],
        sitemap: 'https://etruende.com/sitemap.xml',
    }
}
