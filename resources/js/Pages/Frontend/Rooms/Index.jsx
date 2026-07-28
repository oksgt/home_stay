import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEOHead from '@/Components/Common/SEOHead';
import { Users, Bed, Maximize, Check, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function RoomsIndex({ rooms = [] }) {
    const { locale, settings } = usePage().props;
    const isEn = locale === 'en';
    const langPrefix = isEn ? '/en' : '/id';

    const [guestFilter, setGuestFilter] = useState('all');

    const filteredRooms = rooms.filter((room) => {
        if (guestFilter === 'all') return true;
        return room.capacity_adults >= parseInt(guestFilter);
    });

    return (
        <GuestLayout>
            <SEOHead
                title={isEn ? 'Suites & Villas' : 'Kamar & Villa Sleman'}
                description={isEn ? 'Explore boutique rooms and traditional Joglo suites in Sleman Yogyakarta.' : 'Pilih tipe kamar & villa Joglo modern dengan fasilitas lengkap di Sleman Yogyakarta.'}
            />

            {/* LUXURY ATMOSPHERIC HERO HEADER (MATCHING HOME HERO DESIGN WITH ADJUSTED HEIGHT) */}
            <section className="relative h-[55vh] min-h-[420px] max-h-[560px] w-full flex flex-col justify-center items-center text-center -mt-20 pt-20 overflow-hidden bg-black text-white">
                {/* Background Photography Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80')`,
                    }}
                >
                    {/* Dark Vignette & Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
                </div>

                {/* Center Hero Copy */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 my-auto">
                    <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
                        {isEn ? (
                            <>Suites & Villa <br /><span className="italic font-light text-[#DFD7CC]">Offerings</span></>
                        ) : (
                            <>Pilihan Kamar & <br /><span className="italic font-light text-[#DFD7CC]">Villa Sanctuary</span></>
                        )}
                    </h1>

                    <p className="text-xs sm:text-sm text-[#DFD7CC]/90 font-light leading-relaxed max-w-lg mx-auto">
                        {isEn
                            ? 'Discover handcrafted Javanese suites with private garden views, plush bedding, and modern luxury amenities in Sleman.'
                            : 'Pilih peraduan bernuansa arsitektur Jawa dengan teras taman asri, perlengkapan kamar mewah, dan fasilitas modern.'}
                    </p>
                </div>
            </section>

            <section className="py-20 bg-[#FAF7F2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Capacity Filter Bar */}
                    <div className="flex flex-wrap items-center justify-between mb-12 pb-6 border-b border-[#DFD7CC]/60">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#5C6B61]">
                            {isEn ? `Showing ${filteredRooms.length} available suites` : `Menampilkan ${filteredRooms.length} tipe kamar`}
                        </span>

                        <div className="flex items-center space-x-2 text-xs">
                            <span className="text-[#5C6B61] mr-2">{isEn ? 'Filter Guests:' : 'Filter Tamu:'}</span>
                            {['all', '2', '4'].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => setGuestFilter(val)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase transition duration-300 ${
                                        guestFilter === val
                                            ? 'bg-[#1A3326] text-[#DFD7CC] shadow-sm'
                                            : 'bg-white text-[#5C6B61] border border-[#DFD7CC]'
                                    }`}
                                >
                                    {val === 'all' ? (isEn ? 'All' : 'Semua') : `${val}+ ${isEn ? 'Guests' : 'Orang'}`}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Rooms Catalog */}
                    <div className="space-y-12">
                        {filteredRooms.map((room) => {
                            const primaryImg = room.images?.[0]?.image_path || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80';
                            const title = isEn ? (room.name_en || room.name_id) : room.name_id;
                            const desc = isEn ? (room.description_en || room.description_id) : room.description_id;

                            return (
                                <div
                                    key={room.id}
                                    className="editorial-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
                                >
                                    <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden image-mask-hover">
                                        <img
                                            src={primaryImg}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-[#BA5C40] text-white text-xs font-mono font-medium px-3.5 py-1 rounded-full shadow">
                                            Rp {Number(room.price_per_night).toLocaleString('id-ID')} / {isEn ? 'night' : 'malam'}
                                        </div>
                                    </div>

                                    <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                                        <div className="space-y-4">
                                            <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#5C6B61]">
                                                <span className="flex items-center space-x-1.5">
                                                    <Bed className="w-4 h-4 text-[#1A3326]" />
                                                    <span>{room.bed_type}</span>
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center space-x-1.5">
                                                    <Maximize className="w-4 h-4 text-[#1A3326]" />
                                                    <span>{room.room_size}</span>
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center space-x-1.5">
                                                    <Users className="w-4 h-4 text-[#1A3326]" />
                                                    <span>{room.capacity_adults} {isEn ? 'Guests' : 'Orang'}</span>
                                                </span>
                                            </div>

                                            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A3326]">
                                                {title}
                                            </h2>

                                            <p className="text-xs sm:text-sm text-[#5C6B61] leading-relaxed">
                                                {desc}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {room.facilities?.slice(0, 5).map((f) => (
                                                    <span
                                                        key={f.id}
                                                        className="inline-flex items-center space-x-1 text-[11px] bg-[#FAF7F2] border border-[#DFD7CC] text-[#1A3326] px-3 py-1 rounded-full"
                                                    >
                                                        <Check className="w-3 h-3 text-[#BA5C40]" />
                                                        <span>{isEn ? (f.name_en || f.name_id) : f.name_id}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-[#DFD7CC]/60 flex items-center justify-between">
                                            <Link
                                                href={`${langPrefix}/rooms/${room.slug}`}
                                                className="text-xs font-semibold uppercase tracking-wider text-[#1A3326] hover:text-[#BA5C40] transition flex items-center space-x-1"
                                            >
                                                <span>{isEn ? 'Suite Details' : 'Detail & Foto Kamar'}</span>
                                                <ArrowUpRight className="w-4 h-4" />
                                            </Link>

                                            <a
                                                href={`https://wa.me/${settings?.whatsapp_number || '6281234567890'}?text=${encodeURIComponent(
                                                    `Halo Sekar Arum, saya mau pesan ${room.name_id}`
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs py-2.5 px-5 rounded-xl shadow transition"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                <span>{isEn ? 'WhatsApp Reserve' : 'Reservasi WA'}</span>
                                            </a>
                                        </div>
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
