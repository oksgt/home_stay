import React from 'react';
import { Head, usePage } from '@inertiajs/react';

export default function SEOHead({ title, description, image, canonicalUrl }) {
    const { settings, locale } = usePage().props;
    const isEn = locale === 'en';

    const defaultTitle = isEn
        ? 'Sekar Arum Homestay Sleman Yogyakarta | Boutique Tropical Sanctuary'
        : 'Sekar Arum Homestay Sleman Yogyakarta | Penginapan Alami dekat Merapi';

    const defaultDesc = isEn
        ? settings?.meta_description_en || 'Tranquil boutique homestay in Sleman, Yogyakarta near Mount Merapi & Kaliurang.'
        : settings?.meta_description_id || 'Penginapan alami yang tenang dan nyaman di Pakem Sleman, Yogyakarta.';

    const pageTitle = title ? `${title} | Sekar Arum Homestay` : defaultTitle;
    const pageDesc = description || defaultDesc;
    const pageImg = image || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80';

    const jsonLdSchema = {
        '@context': 'https://schema.org',
        '@type': 'Hotel',
        'name': 'Sekar Arum Boutique Homestay Sleman',
        'description': pageDesc,
        'image': pageImg,
        'url': canonicalUrl || 'https://sekararumhomestay.com',
        'telephone': settings?.contact_phone || '+6281234567890',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Jl. Kaliurang Km 14',
            'addressLocality': 'Sleman',
            'addressRegion': 'Yogyakarta',
            'postalCode': '55581',
            'addressCountry': 'ID',
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': -7.6833,
            'longitude': 110.4167,
        },
        'priceRange': 'Rp350.000 - Rp1.200.000',
    };

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDesc} />

            {/* OpenGraph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDesc} />
            <meta property="og:image" content={pageImg} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDesc} />
            <meta name="twitter:image" content={pageImg} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLdSchema)}
            </script>
        </Head>
    );
}
