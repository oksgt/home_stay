import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEOHead from '@/Components/Common/SEOHead';
import { usePage } from '@inertiajs/react';
import { Clock, ArrowUpRight } from 'lucide-react';

export default function Attractions({ attractions = [] }) {
    const { locale } = usePage().props;
    const isEn = locale === 'en';

    return (
        <GuestLayout>
            <SEOHead
                title={isEn ? 'Sleman & Jogja Attractions' : 'Wisata Sekitar Sleman'}
                description={isEn ? 'Discover top tourist destinations around Sleman & Pakem: Merapi Lava Tour, Kaliurang, Ullen Sentalu & Prambanan.' : 'Panduan wisata terbaik di Sleman: Kaliurang, Lava Tour Merapi, Museum Ullen Sentalu, & Candi Prambanan.'}
            />

            {/* LUXURY ATMOSPHERIC HERO HEADER */}
            <section className="relative h-[55vh] min-h-[420px] max-h-[560px] w-full flex flex-col justify-center items-center text-center -mt-20 pt-20 overflow-hidden bg-black text-white">
                {/* Background Photography Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')`,
                    }}
                >
                    {/* Dark Vignette & Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
                </div>

                {/* Center Hero Copy */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 my-auto">
                    <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-[#C5A028] font-mono">
                        <span className="w-8 h-[1px] bg-[#C5A028]" />
                        <span>{isEn ? 'Local Concierge Guide' : 'Panduan Destinasi Sleman'}</span>
                        <span className="w-8 h-[1px] bg-[#C5A028]" />
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
                        {isEn ? (
                            <>Sleman Concierge & <br /><span className="italic font-light text-[#DFD7CC]">Nearby Attractions</span></>
                        ) : (
                            <>Panduan Destinasi <br /><span className="italic font-light text-[#DFD7CC]">Wisata Terdekat Sleman</span></>
                        )}
                    </h1>

                    <p className="text-xs sm:text-sm text-[#DFD7CC]/90 font-light leading-relaxed max-w-lg mx-auto">
                        {isEn
                            ? 'Discover iconic Mount Merapi adventure trails, heritage museums, and culinary gems just minutes away from Sekar Arum.'
                            : 'Jelajahi petualangan Jeep Merapi, museum budaya Ullen Sentalu, dan wisata kuliner sejuk Kaliurang di sekitar homestay.'}
                    </p>
                </div>
            </section>

            {/* MAIN ATTRACTIONS SECTION WITH BATIK KAWUNG PATTERN */}
            <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
                {/* Authentic Javanese Batik Kawung Subtle Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] text-[#1A3326]">
                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="batik-kawung-attractions" width="60" height="60" patternUnits="userSpaceOnUse">
                            <g fill="none" stroke="currentColor" strokeWidth="1.2">
                                <circle cx="30" cy="30" r="4" fill="currentColor" />
                                <path d="M 30,10 C 20,20 20,40 30,50 C 40,40 40,20 30,10 Z" />
                                <path d="M 10,30 C 20,20 40,20 50,30 C 40,40 20,40 10,30 Z" />
                                <circle cx="0" cy="0" r="3" fill="currentColor" />
                                <circle cx="60" cy="0" r="3" fill="currentColor" />
                                <circle cx="0" cy="60" r="3" fill="currentColor" />
                                <circle cx="60" cy="60" r="3" fill="currentColor" />
                            </g>
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#batik-kawung-attractions)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {attractions.map((att) => {
                            const name = isEn ? (att.name_en || att.name_id) : att.name_id;
                            const desc = isEn ? (att.description_en || att.description_id) : att.description_id;
                            const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${att.latitude || -7.6833},${att.longitude || 110.4167}`;

                            return (
                                <div
                                    key={att.id}
                                    className="bg-white rounded-2xl border border-[#DFD7CC]/80 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="h-60 overflow-hidden relative">
                                            <img
                                                src={att.image_path}
                                                alt={name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-3.5 left-3.5 bg-[#1A3326]/90 backdrop-blur-md text-[#DFD7CC] text-xs font-mono px-3 py-1 rounded-xl shadow-sm">
                                                {att.distance_km}
                                            </div>
                                        </div>

                                        <div className="p-6 space-y-3">
                                            <div className="flex items-center space-x-1.5 text-xs font-mono text-[#BA5C40]">
                                                <Clock className="w-3.5 h-3.5 shrink-0" />
                                                <span>{att.travel_time} {isEn ? 'drive from homestay' : 'perjalanan dari homestay'}</span>
                                            </div>

                                            <h3 className="font-serif font-bold text-xl text-[#1A3326] group-hover:text-[#BA5C40] transition duration-300">
                                                {name}
                                            </h3>

                                            <p className="text-xs text-[#5C6B61] leading-relaxed font-light line-clamp-3">
                                                {desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-6 pb-6 pt-2">
                                        <a
                                            href={mapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#1A3326] hover:text-[#BA5C40] transition group/link"
                                        >
                                            <span>{isEn ? 'Google Maps Directions' : 'Buka Rute Google Maps'}</span>
                                            <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
