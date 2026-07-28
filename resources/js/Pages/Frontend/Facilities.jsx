import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEOHead from '@/Components/Common/SEOHead';
import { usePage } from '@inertiajs/react';
import { Wifi, Wind, Waves, Utensils, Tv, Flame, Car, Trees, Heart, Coffee, Check } from 'lucide-react';

export default function Facilities({ facilities = [] }) {
    const { locale } = usePage().props;
    const isEn = locale === 'en';

    const iconMap = {
        Wifi: <Wifi className="w-5 h-5 text-[#BA5C40]" />,
        Wind: <Wind className="w-5 h-5 text-[#BA5C40]" />,
        Waves: <Waves className="w-5 h-5 text-[#BA5C40]" />,
        Utensils: <Utensils className="w-5 h-5 text-[#BA5C40]" />,
        Tv: <Tv className="w-5 h-5 text-[#BA5C40]" />,
        Flame: <Flame className="w-5 h-5 text-[#BA5C40]" />,
        Car: <Car className="w-5 h-5 text-[#BA5C40]" />,
        Trees: <Trees className="w-5 h-5 text-[#BA5C40]" />,
        Heart: <Heart className="w-5 h-5 text-[#BA5C40]" />,
        Coffee: <Coffee className="w-5 h-5 text-[#BA5C40]" />,
    };

    return (
        <GuestLayout>
            <SEOHead
                title={isEn ? 'Property Facilities' : 'Fasilitas Sekar Arum Homestay'}
                description={isEn ? 'Complete list of amenities: High-Speed Wi-Fi, Pool, AC, Kitchenette, Garden & Parking.' : 'Daftar lengkap fasilitas homestay: Kolam renang, Wi-Fi cepat, AC, TV Smart, Parkir & Taman.'}
            />

            {/* LUXURY ATMOSPHERIC HERO HEADER */}
            <section className="relative h-[55vh] min-h-[420px] max-h-[560px] w-full flex flex-col justify-center items-center text-center -mt-20 pt-20 overflow-hidden bg-black text-white">
                {/* Background Photography Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80')`,
                    }}
                >
                    {/* Dark Vignette & Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
                </div>

                {/* Center Hero Copy */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 my-auto">
                    <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-[#C5A028] font-mono">
                        <span className="w-8 h-[1px] bg-[#C5A028]" />
                        <span>{isEn ? 'Services & Amenities' : 'Layanan & Fasilitas'}</span>
                        <span className="w-8 h-[1px] bg-[#C5A028]" />
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
                        {isEn ? (
                            <>Property & Living <br /><span className="italic font-light text-[#DFD7CC]">Amenities</span></>
                        ) : (
                            <>Fasilitas Lengkap <br /><span className="italic font-light text-[#DFD7CC]">Sekar Arum Sanctuary</span></>
                        )}
                    </h1>

                    <p className="text-xs sm:text-sm text-[#DFD7CC]/90 font-light leading-relaxed max-w-lg mx-auto">
                        {isEn
                            ? 'Experience modern hospitality combined with tropical living: high-speed Wi-Fi, pool access, traditional breakfast, and lush gardens.'
                            : 'Kenyamanan lengkap peraduan tropis: kolam renang alami, Wi-Fi cepat, sarapan khas Jogja, dan lahan parkir luas.'}
                    </p>
                </div>
            </section>

            {/* MAIN FACILITIES GRID WITH BATIK KAWUNG PATTERN */}
            <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
                {/* Authentic Javanese Batik Kawung Subtle Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] text-[#1A3326]">
                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="batik-kawung-facilities" width="60" height="60" patternUnits="userSpaceOnUse">
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
                        <rect width="100%" height="100%" fill="url(#batik-kawung-facilities)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                        {facilities.map((fac, idx) => {
                            const icon = iconMap[fac.icon_name] || <Check className="w-5 h-5 text-[#BA5C40]" />;
                            const title = isEn ? (fac.name_en || fac.name_id) : fac.name_id;
                            const num = String(idx + 1).padStart(2, '0');

                            return (
                                <div
                                    key={fac.id || idx}
                                    className="pt-6 border-t border-[#DFD7CC]/80 space-y-4 group transition duration-300"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="p-3 bg-white rounded-xl border border-[#DFD7CC]/80 shadow-sm group-hover:bg-[#1A3326] transition-colors duration-300 shrink-0">
                                            {icon}
                                        </div>
                                        <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#BA5C40]">
                                            {num} / {fac.category || 'AMENITY'}
                                        </span>
                                    </div>

                                    <div className="space-y-1.5 pt-1">
                                        <h3 className="font-serif font-bold text-xl text-[#1A3326] group-hover:text-[#BA5C40] transition duration-300">
                                            {title}
                                        </h3>
                                        <p className="text-xs text-[#5C6B61] leading-relaxed font-light">
                                            {isEn
                                                ? 'Thoughtfully provided for your maximum comfort and serene stay in Pakem, Sleman.'
                                                : 'Fasilitas terbaik yang disiapkan khusus untuk kenyamanan & ketenangan menginap Anda.'}
                                        </p>
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
