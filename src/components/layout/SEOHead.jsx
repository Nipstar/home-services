import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, schema, path = '', ogType = 'website' }) {
    const canonicalUrl = `https://www.aivoiceagentsforhomeservices.co.uk${path}`;

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

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
