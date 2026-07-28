import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEOHead from '@/Components/Common/SEOHead';
import {
    Users,
    Bed,
    Maximize,
    Check,
    MessageCircle,
    ArrowLeft,
    ShieldCheck,
} from 'lucide-react';

export default function RoomShow({ room }) {
    const { locale, settings } = usePage().props;
    const isEn = locale === 'en';
    const langPrefix = isEn ? '/en' : '/id';

    const [activeImg, setActiveImg] = useState(
        room.images?.[0]?.image_path || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    );
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const [guestCount, setGuestCount] = useState(room.capacity_adults.toString());

    const title = isEn ? (room.name_en || room.name_id) : room.name_id;
    const desc = isEn ? (room.description_en || room.description_id) : room.description_id;

    const waNumber = settings?.whatsapp_number || '6281234567890';
    const waMsg = isEn
        ? `Hello Sekar Arum Homestay, I want to reserve ${title}.\nCheck-in: ${checkinDate || 'TBD'}\nCheck-out: ${checkoutDate || 'TBD'}\nGuests: ${guestCount} Person(s)`
        : `Halo Sekar Arum Homestay, saya mau reservasi kamar ${title}.\nCheck-in: ${checkinDate || 'Belum diatur'}\nCheck-out: ${checkoutDate || 'Belum diatur'}\nTamu: ${guestCount} Orang`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;

    return (
        <GuestLayout>
            <SEOHead title={title} description={room.short_desc_id} image={activeImg} />

            {/* LUXURY ROOM SHOW HERO HEADER WITH DYNAMIC ROOM BACKGROUND PHOTO */}
            <section className="relative h-[50vh] min-h-[380px] max-h-[520px] w-full flex flex-col justify-center items-center text-center -mt-20 pt-20 overflow-hidden bg-black text-white">
                {/* Background Photography Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
                    style={{
                        backgroundImage: `url('${activeImg}')`,
                    }}
                >
                    {/* Dark Vignette & Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
                </div>

                {/* Center Hero Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 my-auto">
                    {/* Back Link */}
                    <Link
                        href={`${langPrefix}/rooms`}
                        className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C5A028] hover:text-white transition group"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
                        <span>{isEn ? 'Back to Accommodations' : 'Kembali ke Semua Kamar'}</span>
                    </Link>

                    <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
                        {title}
                    </h1>

                    {/* Room Spec Badge Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-mono text-[#DFD7CC]">
                        <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15">
                            {room.bed_type}
                        </span>
                        <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15">
                            {room.room_size}
                        </span>
                        <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15">
                            {room.capacity_adults} {isEn ? 'Guests' : 'Orang'}
                        </span>
                        <span className="bg-[#BA5C40] text-white px-3 py-1 rounded-xl font-semibold">
                            Rp {Number(room.price_per_night).toLocaleString('id-ID')} / {isEn ? 'night' : 'malam'}
                        </span>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTION WITH SUBTLE BATIK KAWUNG PATTERN */}
            <section className="relative py-16 bg-[#FAF7F2] overflow-hidden">
                {/* Authentic Javanese Batik Kawung Subtle Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] text-[#1A3326]">
                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="batik-kawung-room-show" width="60" height="60" patternUnits="userSpaceOnUse">
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
                        <rect width="100%" height="100%" fill="url(#batik-kawung-room-show)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* LEFT EDITORIAL GALLERY & DETAILS */}
                        <div className="lg:col-span-8 space-y-10">
                            {/* Main Active Image Frame */}
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#DFD7CC]/80 h-[400px] sm:h-[500px]">
                                    <img
                                        src={activeImg}
                                        alt={title}
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                </div>

                                {/* Thumbnail Selector */}
                                <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-none">
                                    {room.images?.map((img) => (
                                        <button
                                            key={img.id || img.image_path}
                                            onClick={() => setActiveImg(img.image_path)}
                                            className={`w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden border shrink-0 transition-all duration-300 cursor-pointer ${
                                                activeImg === img.image_path
                                                    ? 'border-[#BA5C40] ring-2 ring-[#BA5C40]/20 scale-95'
                                                    : 'border-[#DFD7CC]/80 opacity-60 hover:opacity-100'
                                            }`}
                                        >
                                            <img src={img.image_path} alt="Thumbnail" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Editorial Specs Bar (Card-less Border Grid) */}
                            <div className="pt-8 border-t border-[#DFD7CC]/80 grid grid-cols-3 gap-6 text-left">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono text-[#BA5C40] uppercase tracking-wider block">
                                        01 / {isEn ? 'Bed' : 'Tempat Tidur'}
                                    </span>
                                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A3326]">
                                        {room.bed_type}
                                    </h4>
                                </div>
                                <div className="space-y-1 border-l border-[#DFD7CC]/80 pl-6">
                                    <span className="text-[10px] font-mono text-[#BA5C40] uppercase tracking-wider block">
                                        02 / {isEn ? 'Space' : 'Luas Kamar'}
                                    </span>
                                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A3326]">
                                        {room.room_size}
                                    </h4>
                                </div>
                                <div className="space-y-1 border-l border-[#DFD7CC]/80 pl-6">
                                    <span className="text-[10px] font-mono text-[#BA5C40] uppercase tracking-wider block">
                                        03 / {isEn ? 'Capacity' : 'Kapasitas'}
                                    </span>
                                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A3326]">
                                        {room.capacity_adults} {isEn ? 'Guests' : 'Orang'}
                                    </h4>
                                </div>
                            </div>

                            {/* Editorial Room Description (Card-less) */}
                            <div className="pt-8 border-t border-[#DFD7CC]/80 space-y-4">
                                <h3 className="font-serif font-bold text-2xl text-[#1A3326]">
                                    {isEn ? 'About This Suite' : 'Deskripsi Kamar'}
                                </h3>
                                <p className="text-sm sm:text-base text-[#5C6B61] leading-relaxed font-light whitespace-pre-line">
                                    {desc}
                                </p>
                            </div>

                            {/* Included Amenities (Card-less) */}
                            <div className="pt-8 border-t border-[#DFD7CC]/80 space-y-6">
                                <h3 className="font-serif font-bold text-2xl text-[#1A3326]">
                                    {isEn ? 'Included Amenities' : 'Fasilitas Kamar'}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {room.facilities?.map((fac) => (
                                        <div key={fac.id} className="flex items-center space-x-2 text-xs text-[#1A3326]">
                                            <Check className="w-4 h-4 text-[#BA5C40] shrink-0" />
                                            <span className="font-light">{isEn ? (fac.name_en || fac.name_id) : fac.name_id}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT RESERVATION SIDEBAR - ULTRA MINIMALIST BOUTIQUE PANEL */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-28 bg-white p-7 rounded-2xl border border-[#DFD7CC]/80 shadow-xl space-y-6">
                                {/* Price Display - Stacked Lines */}
                                <div className="pb-4 border-b border-[#DFD7CC]/80 space-y-1">
                                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#BA5C40] block">
                                        {isEn ? 'Direct Rate' : 'Tarif Langsung'}
                                    </span>
                                    <div className="flex items-baseline space-x-1.5">
                                        <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1A3326]">
                                            Rp {Number(room.price_per_night).toLocaleString('id-ID')}
                                        </span>
                                        <span className="text-xs text-[#5C6B61] font-light">/ {isEn ? 'night' : 'malam'}</span>
                                    </div>
                                </div>

                                {/* Booking Options Form */}
                                <div className="space-y-3 text-xs">
                                    {/* Date Range 2-Column Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[10px] font-mono uppercase tracking-wider text-[#5C6B61] block mb-1">
                                                Check-In
                                            </label>
                                            <input
                                                type="date"
                                                value={checkinDate}
                                                onChange={(e) => setCheckinDate(e.target.value)}
                                                className="w-full bg-[#FAF7F2] border border-[#DFD7CC] rounded-lg py-2 px-2.5 text-xs font-mono text-[#1A3326] focus:outline-none focus:border-[#BA5C40] transition"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-mono uppercase tracking-wider text-[#5C6B61] block mb-1">
                                                Check-Out
                                            </label>
                                            <input
                                                type="date"
                                                value={checkoutDate}
                                                onChange={(e) => setCheckoutDate(e.target.value)}
                                                className="w-full bg-[#FAF7F2] border border-[#DFD7CC] rounded-lg py-2 px-2.5 text-xs font-mono text-[#1A3326] focus:outline-none focus:border-[#BA5C40] transition"
                                            />
                                        </div>
                                    </div>

                                    {/* Guest Count */}
                                    <div>
                                        <label className="text-[10px] font-mono uppercase tracking-wider text-[#5C6B61] block mb-1">
                                            {isEn ? 'Guests' : 'Jumlah Tamu'}
                                        </label>
                                        <select
                                            value={guestCount}
                                            onChange={(e) => setGuestCount(e.target.value)}
                                            className="w-full bg-[#FAF7F2] border border-[#DFD7CC] rounded-lg py-2 px-2.5 text-xs text-[#1A3326] focus:outline-none focus:border-[#BA5C40] transition"
                                        >
                                            <option value="1">1 {isEn ? 'Guest' : 'Orang'}</option>
                                            <option value="2">2 {isEn ? 'Guests' : 'Orang'}</option>
                                            <option value="4">4 {isEn ? 'Guests' : 'Orang'}</option>
                                        </select>
                                    </div>
                                </div>

                                {/* WhatsApp Booking Button */}
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center space-x-2 bg-[#BA5C40] hover:bg-[#1A3326] text-white font-semibold uppercase tracking-widest text-xs py-3.5 px-4 rounded-xl shadow-md transition duration-300 group"
                                >
                                    <MessageCircle className="w-4 h-4 text-white/90" />
                                    <span>{isEn ? 'Reserve via WhatsApp' : 'Reservasi via WhatsApp'}</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
