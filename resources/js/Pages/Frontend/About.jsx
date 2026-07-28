import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEOHead from '@/Components/Common/SEOHead';
import { usePage } from '@inertiajs/react';
import { ShieldCheck, Trees, Heart } from 'lucide-react';

export default function About() {
    const { locale } = usePage().props;
    const isEn = locale === 'en';

    return (
        <GuestLayout>
            <SEOHead
                title={isEn ? 'The Story' : 'Tentang Kami'}
                description={isEn ? 'Discover our story, Javanese hospitality philosophy, and tropical sanctuary concept in Sleman.' : 'Ketahui kisah pendirian, filosofi pelayanan khas Jawa, dan konsep tropis modern Sekar Arum Homestay Sleman.'}
            />

            {/* LUXURY ATMOSPHERIC HERO HEADER (MATCHING ROOMS SHOW HERO DESIGN WITH ADJUSTED HEIGHT) */}
            <section className="relative h-[55vh] min-h-[420px] max-h-[560px] w-full flex flex-col justify-center items-center text-center -mt-20 pt-20 overflow-hidden bg-black text-white">
                {/* Background Photography Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1920&q=80')`,
                    }}
                >
                    {/* Dark Vignette & Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
                </div>

                {/* Center Hero Copy */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 my-auto">
                    <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-[#C5A028] font-mono">
                        <span className="w-8 h-[1px] bg-[#C5A028]" />
                        <span>{isEn ? 'Heritage & Story' : 'Kisah & Filosofi'}</span>
                        <span className="w-8 h-[1px] bg-[#C5A028]" />
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
                        {isEn ? (
                            <>About Sekar Arum <br /><span className="italic font-light text-[#DFD7CC]">Boutique Sanctuary</span></>
                        ) : (
                            <>Tentang Sekar Arum <br /><span className="italic font-light text-[#DFD7CC]">Homestay Sleman</span></>
                        )}
                    </h1>

                    <p className="text-xs sm:text-sm text-[#DFD7CC]/90 font-light leading-relaxed max-w-lg mx-auto">
                        {isEn
                            ? 'A serene tropical retreat rooted in Javanese Joglo architecture and genuine warmth on the slopes of Mount Merapi.'
                            : 'Peraduan tropis yang tenang di lereng Merapi, berakar pada filosofi arsitektur Joglo Jawa dan kehangatan keluarga.'}
                    </p>
                </div>
            </section>

            {/* MAIN ABOUT CONTENT SECTION WITH SUBTLE BATIK KAWUNG PATTERN */}
            <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
                {/* Authentic Javanese Batik Kawung Subtle Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] text-[#1A3326]">
                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="batik-kawung-about" width="60" height="60" patternUnits="userSpaceOnUse">
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
                        <rect width="100%" height="100%" fill="url(#batik-kawung-about)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    {/* Story Narrative Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="md:col-span-7 space-y-6">
                            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#BA5C40] block">
                                Sleman Sanctuary
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3326] leading-tight">
                                {isEn ? 'A Harmony of Nature & Javanese Warmth' : 'Harmoni Alam Tropis & Kehangatan Tradisi Jawa'}
                            </h2>
                            <p className="text-sm sm:text-base text-[#5C6B61] leading-relaxed font-light">
                                {isEn
                                    ? 'Sekar Arum Homestay was born out of a desire to provide a peaceful retreat away from city bustle. Located in Pakem, Sleman, near the foot of Mount Merapi, our sanctuary embraces lush tropical vegetation and traditional Javanese hospitality.'
                                    : 'Sekar Arum Homestay lahir dari keinginan menghadirkan ruang peraduan yang tenang di tengah keasrian Sleman. Berada di Pakem dekat lereng Gunung Merapi, homestay kami menyatu dengan alam tropis dan keramahan khas Jawa.'}
                            </p>
                        </div>
                        <div className="md:col-span-5">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#DFD7CC]/80 group">
                                <img
                                    src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80"
                                    alt="Homestay Joglo Architecture"
                                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Core Values Section - Card-less Editorial Grid */}
                    <div className="space-y-12 pt-12 border-t border-[#DFD7CC]/80">
                        <div className="text-center space-y-2">
                            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#BA5C40]">
                                Core Values
                            </span>
                            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A3326]">
                                {isEn ? 'The Pillars of Our Guest Experience' : 'Pilar Utama Pelayanan Kami'}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="space-y-4 pt-6 border-t border-[#DFD7CC]/80 sm:border-t-0 sm:border-l sm:border-[#DFD7CC]/80 sm:pl-6 first:border-l-0 first:pl-0">
                                <div className="w-10 h-10 rounded-xl bg-[#1A3326] text-[#DFD7CC] flex items-center justify-center">
                                    <Trees className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono text-[#BA5C40] uppercase tracking-wider block">01 / Atmosphere</span>
                                    <h4 className="font-serif font-bold text-lg text-[#1A3326]">
                                        {isEn ? 'Natural Atmosphere' : 'Suasana Asri & Sejuk'}
                                    </h4>
                                    <p className="text-xs text-[#5C6B61] leading-relaxed font-light">
                                        {isEn ? 'Cool mountain air in Pakem near Kaliurang & Merapi trails.' : 'Udara segar lereng Merapi dekat Kaliurang & museum budaya.'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-[#DFD7CC]/80 sm:border-t-0 sm:border-l sm:border-[#DFD7CC]/80 sm:pl-6">
                                <div className="w-10 h-10 rounded-xl bg-[#1A3326] text-[#DFD7CC] flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-[#BA5C40]" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono text-[#BA5C40] uppercase tracking-wider block">02 / Hospitality</span>
                                    <h4 className="font-serif font-bold text-lg text-[#1A3326]">
                                        {isEn ? 'Warm Hospitality' : 'Keramahan Jawa'}
                                    </h4>
                                    <p className="text-xs text-[#5C6B61] leading-relaxed font-light">
                                        {isEn ? 'Personal host care and authentic Javanese breakfast.' : 'Pelayanan penuh perhatian dari pengelola dengan sarapan tradisional.'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-[#DFD7CC]/80 sm:border-t-0 sm:border-l sm:border-[#DFD7CC]/80 sm:pl-6">
                                <div className="w-10 h-10 rounded-xl bg-[#1A3326] text-[#DFD7CC] flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5 text-[#C5A028]" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono text-[#BA5C40] uppercase tracking-wider block">03 / Transparency</span>
                                    <h4 className="font-serif font-bold text-lg text-[#1A3326]">
                                        {isEn ? 'Direct Host Rates' : 'Tanpa Komisi Agen'}
                                    </h4>
                                    <p className="text-xs text-[#5C6B61] leading-relaxed font-light">
                                        {isEn ? 'Transparent prices directly with host via WhatsApp.' : 'Tarif paling jujur langsung ke pengelola tanpa komisi OTA.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
