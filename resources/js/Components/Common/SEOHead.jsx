import React from 'react';
import { Head, usePage } from '@inertiajs/react';

export default function SEOHead({ title, description, image, canonicalUrl, keywords, type = 'website' }) {
    const { settings, locale } = usePage().props;
    const isEn = locale === 'en';

    const defaultTitle = isEn
        ? 'Sekar Arum Homestay Sleman Yogyakarta | Boutique Tropical Sanctuary'
        : 'Sekar Arum Homestay Sleman Yogyakarta | Penginapan Alami Dekat Merapi & Kaliurang';

    const defaultDesc = isEn
        ? settings?.meta_description_en || 'Tranquil boutique homestay in Sleman, Yogyakarta near Mount Merapi & Kaliurang. Experience Javanese hospitality, outdoor pool, and serene tropical gardens.'
        : settings?.meta_description_id || 'Penginapan alami yang tenang dan nyaman di Pakem Sleman, Yogyakarta dekat Gunung Merapi & Kaliurang. Nikmati udara sejuk, kolam renang, dan arsitektur Joglo.';

    const pageTitle = title ? `${title} | Sekar Arum Homestay Sleman` : defaultTitle;
    const pageDesc = description || defaultDesc;
    const pageImg = image || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80';
    const siteUrl = 'https://sekararumhomestay.com';
    const currentUrl = canonicalUrl || siteUrl;

    const defaultKeywords = isEn
        ? 'homestay sleman yogyakarta, pakem villa, kaliurang homestay, merapi view villa, joglo stay yogyakarta, boutique homestay jogja, tropical resort sleman'
        : 'homestay sleman, penginapan kaliurang, villa pakem yogyakarta, homestay merapi, sekar arum homestay, joglo yogyakarta, sewa villa murah sleman';

    const pageKeywords = keywords || defaultKeywords;

    const jsonLdSchema = {
        '@context': 'https://schema.org',
        '@type': ['LodgingBusiness', 'BedAndBreakfast', 'Hotel'],
        'name': 'Sekar Arum Boutique Homestay Sleman',
        'alternateName': 'Sekar Arum Sanctuary Pakem',
        'description': pageDesc,
        'image': [
            pageImg,
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        ],
        'url': currentUrl,
        'telephone': settings?.contact_phone || '+62 812-3456-7890',
        'email': settings?.contact_email || 'info@sekararumhomestay.com',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': settings?.contact_address || 'Jl. Kaliurang Km 14, Harjobinangun, Pakem',
            'addressLocality': 'Sleman',
            'addressRegion': 'D.I. Yogyakarta',
            'postalCode': '55581',
            'addressCountry': 'ID',
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': -7.6833,
            'longitude': 110.4167,
        },
        'priceRange': 'Rp350.000 - Rp1.200.000',
        'currenciesAccepted': 'IDR',
        'paymentAccepted': 'Cash, Bank Transfer, QRIS',
        'checkinTime': '14:00',
        'checkoutTime': '12:00',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '128',
            'bestRating': '5',
            'worstRating': '1',
        },
        'amenityFeature': [
            { '@type': 'LocationFeatureSpecification', 'name': 'Outdoor Swimming Pool', 'value': true },
            { '@type': 'LocationFeatureSpecification', 'name': 'High-Speed Free Wi-Fi', 'value': true },
            { '@type': 'LocationFeatureSpecification', 'name': 'Air Conditioning', 'value': true },
            { '@type': 'LocationFeatureSpecification', 'name': 'Free Onsite Parking', 'value': true },
            { '@type': 'LocationFeatureSpecification', 'name': 'Tropical Garden', 'value': true },
            { '@type': 'LocationFeatureSpecification', 'name': 'Traditional Javanese Breakfast', 'value': true },
        ],
    };

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDesc} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="author" content="Sekar Arum Homestay" />

            {/* Canonical Link */}
            <link rel="canonical" href={currentUrl} />

            {/* Multilingual Hreflang Annotations */}
            <link rel="alternate" hrefLang="id-ID" href={`${siteUrl}/id`} />
            <link rel="alternate" hrefLang="en-US" href={`${siteUrl}/en`} />
            <link rel="alternate" hrefLang="x-default" href={siteUrl} />

            {/* OpenGraph / Facebook Meta Tags */}
            <meta property="og:site_name" content="Sekar Arum Homestay Sleman" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDesc} />
            <meta property="og:image" content={pageImg} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content={isEn ? 'en_US' : 'id_ID'} />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDesc} />
            <meta name="twitter:image" content={pageImg} />

            {/* Schema.org Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLdSchema)}
            </script>
        </Head>
    );
}
