import React, { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEOHead from '@/Components/Common/SEOHead';
import { usePage } from '@inertiajs/react';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery({ galleries = [] }) {
    const { locale } = usePage().props;
    const isEn = locale === 'en';

    const [activeTab, setActiveTab] = useState('all');
    const [selectedImg, setSelectedImg] = useState(null);

    const categories = [
        { id: 'all', label: isEn ? 'All Photos' : 'Semua Foto' },
        { id: 'interior', label: isEn ? 'Interior' : 'Interior' },
        { id: 'exterior', label: isEn ? 'Exterior' : 'Eksterior' },
        { id: 'room', label: isEn ? 'Rooms' : 'Kamar' },
        { id: 'garden', label: isEn ? 'Garden' : 'Taman' },
    ];

    const filteredGalleries = galleries.filter((g) => {
        if (activeTab === 'all') return true;
        return g.category === activeTab;
    });

    const getBentoClass = (index) => {
        const pattern = index % 5;
        if (pattern === 0) return 'md:col-span-2 md:row-span-2 h-[400px] sm:h-[460px]';
        if (pattern === 1) return 'md:col-span-1 md:row-span-1 h-[195px] sm:h-[222px]';
        if (pattern === 2) return 'md:col-span-1 md:row-span-1 h-[195px] sm:h-[222px]';
        if (pattern === 3) return 'md:col-span-1 md:row-span-2 h-[400px] sm:h-[460px]';
        return 'md:col-span-2 md:row-span-1 h-[195px] sm:h-[222px]';
    };

    return (
        <GuestLayout>
            <SEOHead
                title={isEn ? 'Photo Gallery' : 'Galeri Foto Sleman'}
                description={isEn ? 'Browse photos of our tropical garden, Joglo architecture, pool, and boutique rooms.' : 'Lihat galeri foto taman tropis, arsitektur Joglo, kolam renang, dan kamar Sekar Arum Homestay.'}
            />

            {/* LUXURY ATMOSPHERIC HERO HEADER */}
            <section className="relative h-[55vh] min-h-[420px] max-h-[560px] w-full flex flex-col justify-center items-center text-center -mt-20 pt-20 overflow-hidden bg-black text-white">
                {/* Background Photography Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80')`,
                    }}
                >
                    {/* Dark Vignette & Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
                </div>

                {/* Center Hero Copy */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 my-auto">
                    <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-[#C5A028] font-mono">
                        <span className="w-8 h-[1px] bg-[#C5A028]" />
                        <span>{isEn ? 'Visual Atmosphere' : 'Suasana & Keindahan'}</span>
                        <span className="w-8 h-[1px] bg-[#C5A028]" />
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
                        {isEn ? (
                            <>Visual Sanctuary <br /><span className="italic font-light text-[#DFD7CC]">Gallery</span></>
                        ) : (
                            <>Galeri Suasana <br /><span className="italic font-light text-[#DFD7CC]">Sekar Arum Homestay</span></>
                        )}
                    </h1>

                    <p className="text-xs sm:text-sm text-[#DFD7CC]/90 font-light leading-relaxed max-w-lg mx-auto">
                        {isEn
                            ? 'Immerse yourself in the authentic Javanese architecture, lush tropical gardens, and tranquil living spaces.'
                            : 'Nikmati setiap jepretan suasana keasrian arsitektur Joglo, sudut taman tropis, dan ruang peraduan tenang.'}
                    </p>
                </div>
            </section>

            {/* MAIN GALLERY SECTION WITH BENTO GRID & BATIK KAWUNG PATTERN */}
            <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
                {/* Authentic Javanese Batik Kawung Subtle Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] text-[#1A3326]">
                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="batik-kawung-gallery" width="60" height="60" patternUnits="userSpaceOnUse">
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
                        <rect width="100%" height="100%" fill="url(#batik-kawung-gallery)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    {/* Editorial Category Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    activeTab === cat.id
                                        ? 'bg-[#1A3326] text-[#DFD7CC] shadow-md scale-105'
                                        : 'bg-white/80 text-[#5C6B61] border border-[#DFD7CC]/80 hover:border-[#BA5C40]'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Editorial Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filteredGalleries.map((img, idx) => {
                            const title = isEn ? (img.title_en || img.title_id) : img.title_id;
                            const bentoClass = getBentoClass(idx);

                            return (
                                <div
                                    key={img.id || idx}
                                    onClick={() => setSelectedImg(img)}
                                    className={`group relative rounded-2xl overflow-hidden shadow-lg border border-[#DFD7CC]/80 cursor-pointer ${bentoClass}`}
                                >
                                    <img
                                        src={img.image_path}
                                        alt={title || 'Gallery'}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <span className="text-[10px] font-mono text-[#C5A028] uppercase tracking-widest block">
                                                    {img.category || 'SANCTUARY'}
                                                </span>
                                                <h3 className="font-serif font-bold text-lg">{title}</h3>
                                            </div>
                                            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl text-[#DFD7CC]">
                                                <ZoomIn className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <button
                        onClick={() => setSelectedImg(null)}
                        className="absolute top-6 right-6 text-white hover:text-[#BA5C40] transition cursor-pointer"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="max-w-4xl w-full text-center space-y-3" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImg.image_path}
                            alt="Lightbox View"
                            className="max-h-[80vh] w-auto mx-auto rounded-xl shadow-2xl border border-white/20 object-contain"
                        />
                        <p className="text-white font-serif text-lg">{isEn ? selectedImg.title_en : selectedImg.title_id}</p>
                    </div>
                </div>
            )}
        </GuestLayout>
    );
}
