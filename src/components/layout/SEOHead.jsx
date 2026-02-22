import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.aivoiceagentsforhomeservices.co.uk';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEOHead({ title, description, schema, path = '', ogType = 'website', ogImage }) {
    const canonicalUrl = `${SITE_URL}${path}`;
    const imageUrl = ogImage || DEFAULT_OG_IMAGE;

    return (
        <Helmet>
            <html lang="en-GB" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="alternate" hrefLang="en-gb" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
