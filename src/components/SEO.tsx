import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
}

export function SEO({
    title,
    description,
    image = '/og-image.png',
    url,
    type = 'website'
}: SEOProps) {
    const siteTitle = 'SlashData';
    const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />

            {/* Facebook tags */}
            <meta property='og:type' content={type} />
            <meta property='og:title' content={fullTitle} />
            <meta property='og:description' content={description} />
            {url && <meta property='og:url' content={url} />}
            {image && <meta property='og:image' content={image} />}

            {/* Twitter tags */}
            <meta name='twitter:creator' content={siteTitle} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={fullTitle} />
            <meta name='twitter:description' content={description} />
            {image && <meta name='twitter:image' content={image} />}
        </Helmet>
    );
}
