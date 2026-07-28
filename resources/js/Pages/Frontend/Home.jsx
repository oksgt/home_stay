import React, { useState, useRef } from 'react';
import { Link, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEOHead from '@/Components/Common/SEOHead';
import LeafletMap from '@/Components/Map/LeafletMap';
import {
    Calendar,
    Users,
    ChevronRight,
    ChevronLeft,
    Star,
    Wifi,
    Wind,
    Waves,
    Utensils,
    Tv,
    Flame,
    Car,
    Trees,
    Heart,
    Check,
    MessageCircle,
    ArrowUpRight,
    MapPin,
} from 'lucide-react';

// Scroll-driven Motion In/Out Component
function MotionIn({ children, delay = 0, className = '' }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={domRef}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out transform ${
                isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
            } ${className}`}
        >
            {children}
        </div>
    );
}

export default function Home({
    featuredRooms = [],
    featuredFacilities = [],
    attractions = [],
    testimonials = [],
    faqs = [],
}) {
    const { locale, settings } = usePage().props;
    const isEn = locale === 'en';
    const langPrefix = isEn ? '/en' : '/id';

    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [guests, setGuests] = useState('2');

    const heroImages = [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=80',
    ];

    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const sliderRef = useRef(null);
    const attractionSliderRef = useRef(null);

    const scrollSlider = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -360 : 360;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollAttractionSlider = (direction) => {
        if (attractionSliderRef.current) {
            const scrollAmount = direction === 'left' ? -340 : 340;
            attractionSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const defaultDummyRooms = [
        {
            id: 'dummy-1',
            slug: 'deluxe-garden-suite',
            name_id: 'Deluxe Garden Suite',
            name_en: 'Deluxe Garden Suite',
            price_per_night: 450000,
            bed_type: 'King Bed',
            room_size: '35 m²',
            capacity_adults: 2,
            short_desc_id: 'Suasana tenang dengan pemandangan taman tropis sejuk dan teras santai.',
            short_desc_en: 'Serene atmosphere with cool tropical garden view and private terrace.',
            images: [{ image_path: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80' }],
        },
        {
            id: 'dummy-2',
            slug: 'merapi-view-villa',
            name_id: 'Merapi View Villa',
            name_en: 'Merapi View Villa',
            price_per_night: 850000,
            bed_type: 'King Bed + Balcony',
            room_size: '55 m²',
            capacity_adults: 3,
            short_desc_id: 'Villa eksklusif dengan panorama lanskap Gunung Merapi yang megah.',
            short_desc_en: 'Exclusive villa featuring breathtaking panorama of Mount Merapi.',
            images: [{ image_path: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' }],
        },
        {
            id: 'dummy-3',
            slug: 'family-heritage-joglo',
            name_id: 'Family Heritage Joglo',
            name_en: 'Family Heritage Joglo',
            price_per_night: 1200000,
            bed_type: '2 Queen Beds',
            room_size: '75 m²',
            capacity_adults: 5,
            short_desc_id: 'Rumah Joglo kayu tradisional hangat untuk momen liburan keluarga.',
            short_desc_en: 'Warm authentic wooden Javanese Joglo perfect for family getaway.',
            images: [{ image_path: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80' }],
        },
        {
            id: 'dummy-4',
            slug: 'terrace-bamboo-pavilion',
            name_id: 'Terrace Bamboo Pavilion',
            name_en: 'Terrace Bamboo Pavilion',
            price_per_night: 650000,
            bed_type: 'Queen Bed',
            room_size: '42 m²',
            capacity_adults: 2,
            short_desc_id: 'Paviliun alami bernuansa bambu dengan teras santai pemandangan kebun.',
            short_desc_en: 'Natural bamboo style pavilion with relaxed patio facing lush garden.',
            images: [{ image_path: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80' }],
        },
        {
            id: 'dummy-5',
            slug: 'executive-merapi-suite',
            name_id: 'Executive Merapi Suite',
            name_en: 'Executive Merapi Suite',
            price_per_night: 950000,
            bed_type: 'Super King Bed',
            room_size: '60 m²',
            capacity_adults: 2,
            short_desc_id: 'Kamar mewah privat dengan bathtub aesthetic dan pemandangan perbukitan.',
            short_desc_en: 'Luxury private suite with freestanding bathtub and mountain view.',
            images: [{ image_path: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80' }],
        },
        {
            id: 'dummy-6',
            slug: 'royal-tropical-bungalow',
            name_id: 'Royal Tropical Bungalow',
            name_en: 'Royal Tropical Bungalow',
            price_per_night: 1350000,
            bed_type: '2 King Beds',
            room_size: '80 m²',
            capacity_adults: 6,
            short_desc_id: 'Bungalow privat lapang dengan kolam renang outdoor dan gazebo santai.',
            short_desc_en: 'Spacious private bungalow with outdoor dip pool and relaxation gazebo.',
            images: [{ image_path: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80' }],
        },
    ];

    const displayRooms = featuredRooms.length >= 4 ? featuredRooms : defaultDummyRooms;

    const iconMap = {
        Wifi: <Wifi className="w-4 h-4" />,
        Wind: <Wind className="w-4 h-4" />,
        Waves: <Waves className="w-4 h-4" />,
        Utensils: <Utensils className="w-4 h-4" />,
        Tv: <Tv className="w-4 h-4" />,
        Flame: <Flame className="w-4 h-4" />,
        Car: <Car className="w-4 h-4" />,
        Trees: <Trees className="w-4 h-4" />,
        Heart: <Heart className="w-4 h-4" />,
    };

    const handleSearchBooking = (e) => {
        e.preventDefault();
        const waNumber = settings?.whatsapp_number || '6281234567890';
        const msg = isEn
            ? `Hello Sekar Arum Homestay, I want to reserve a room.\nCheck-in: ${checkin || 'TBD'}\nCheck-out: ${checkout || 'TBD'}\nGuests: ${guests} Person(s)`
            : `Halo Sekar Arum Homestay, saya mau reservasi kamar.\nCheck-in: ${checkin || 'Belum diatur'}\nCheck-out: ${checkout || 'Belum diatur'}\nTamu: ${guests} Orang`;

        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <GuestLayout>
            <SEOHead />

            {/* LUXURY ATMOSPHERIC HERO SECTION WITH AUTO-SLIDE VILLA IMAGES */}
            <section className="relative min-h-screen h-screen w-full flex flex-col justify-between items-center text-center -mt-20 pt-28 pb-12 overflow-hidden bg-black">
                {/* Auto-sliding Background Villa Photography */}
                {heroImages.map((imgUrl, index) => (
                    <div
                        key={imgUrl}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out transform scale-105 ${
                            index === currentHeroIndex ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
                        }`}
                        style={{ backgroundImage: `url('${imgUrl}')` }}
                    >
                        {/* Dark Vignette & Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
                    </div>
                ))}

                {/* Top Spacer for Navbar Alignment */}
                <div className="relative z-10 w-full" />

                {/* Center Hero Copy */}
                <MotionIn delay={100} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 my-auto">
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-white drop-shadow-lg">
                        {isEn ? (
                            <>Find Your Best <br /><span className="italic font-light text-[#DFD7CC]">Private Retreat</span></>
                        ) : (
                            <>Temukan Ketenangan <br /><span className="italic font-light text-[#DFD7CC]">Peraduan Privat Anda</span></>
                        )}
                    </h1>

                    <p className="text-sm sm:text-base text-[#DFD7CC]/90 font-light leading-relaxed max-w-xl mx-auto">
                        {isEn
                            ? 'Immerse yourself in authentic Javanese hospitality, cool mountain breezes near Mount Merapi, and boutique luxury comfort.'
                            : 'Rasakan kehangatan keramahan Jawa, sejuknya udara lereng Gunung Merapi, dan kenyamanan kamar boutique yang elegan.'}
                    </p>
                </MotionIn>

                {/* Bottom Center Scroll Down Indicator (Clickable Smooth Scroll) */}
                <button
                    onClick={() => {
                        document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="relative z-10 flex flex-col items-center space-y-2 text-[#DFD7CC]/80 transition-all duration-300 hover:text-white group cursor-pointer"
                    aria-label="Scroll Down to Story Section"
                >
                    <div className="w-7 h-11 rounded-full border border-white/50 flex items-start justify-center pt-2 group-hover:border-white transition-colors">
                        <div className="w-1 h-2.5 bg-white rounded-full animate-bounce" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#DFD7CC]/90 group-hover:text-white transition-colors">
                        SCROLL DOWN
                    </span>
                </button>
            </section>

            {/* SECTION 01: STORY & ARCHITECTURE - EDITORIAL BOUTIQUE LAYOUT (100% VH) */}
            <section id="story-section" className="min-h-screen py-20 bg-[#FAF7F2] flex items-center relative overflow-hidden">
                {/* Authentic Javanese Batik Kawung Subtle Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.06] text-[#1A3326]">
                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="batik-kawung-story" width="60" height="60" patternUnits="userSpaceOnUse">
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
                        <rect width="100%" height="100%" fill="url(#batik-kawung-story)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Left Editorial Text Column */}
                        <MotionIn delay={100} className="lg:col-span-6 space-y-8">
                            <div className="space-y-3">
                                <div className="inline-flex items-center space-x-3 text-[11px] font-mono uppercase tracking-[0.3em] text-[#BA5C40]">
                                    <span className="w-6 h-[1px] bg-[#BA5C40]" />
                                    <span>01 / Heritage & Philosophy</span>
                                </div>

                                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A3326] leading-[1.15]">
                                    {isEn ? (
                                        <>A Thoughtful Harmony <br /><span className="italic font-normal text-[#5C6B61]">of Tradition & Living</span></>
                                    ) : (
                                        <>Keharmonisan Arsitektur <br /><span className="italic font-normal text-[#5C6B61]">Jawa & Ketenangan Tropis</span></>
                                    )}
                                </h2>
                            </div>

                            <p className="text-sm sm:text-base text-[#5C6B61] leading-relaxed font-light">
                                {isEn
                                    ? 'Nestled in the serene foothills of Pakem, Sleman, Sekar Arum Homestay is thoughtfully designed for travelers seeking genuine tranquility. From hand-carved Javanese Joglo timber to breeze-filled garden patios, every corner honors slow living and Javanese warmth.'
                                    : 'Berada di sejuknya lereng Pakem, Sleman, Sekar Arum Homestay dirancang khusus bagi Anda yang mengapresiasi ketenangan sejati. Dari detil ukiran kayu Joglo tradisional hingga teras taman tropis yang asri, setiap sudut menyambut Anda dengan kehangatan khas Jawa.'}
                            </p>

                            {/* Editorial Feature Highlights */}
                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#DFD7CC]/70">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#BA5C40]">Location</span>
                                    <h4 className="font-serif font-bold text-lg text-[#1A3326]">Pakem Foothills</h4>
                                    <p className="text-xs text-[#5C6B61]">{isEn ? 'Cool Merapi mountain breeze' : 'Udara sejuk lereng Merapi'}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#BA5C40]">Hospitality</span>
                                    <h4 className="font-serif font-bold text-lg text-[#1A3326]">100% Direct Stay</h4>
                                    <p className="text-xs text-[#5C6B61]">{isEn ? 'Personalized owner service' : 'Pelayanan hangat keluarga'}</p>
                                </div>
                            </div>
                        </MotionIn>

                        {/* Right Layered Editorial Photo Framing */}
                        <MotionIn delay={250} className="lg:col-span-6 relative">
                            {/* Main High-Res Resort Photo */}
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#DFD7CC]/80 group">
                                <img
                                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                                    alt="Sekar Arum Sanctuary"
                                    className="w-full h-[480px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121C16]/80 via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A028]">Sleman Sanctuary</span>
                                    <h3 className="font-serif text-xl font-bold">Authentic Javanese Heritage</h3>
                                </div>
                            </div>
                        </MotionIn>
                    </div>
                </div>
            </section>

            {/* SECTION 02: ROOMS SHOWCASE SLIDER - 100% VH */}
            <section className="min-h-screen py-20 bg-white border-y border-[#DFD7CC]/60 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                        <div className="space-y-1">
                            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#BA5C40]">
                                {isEn ? 'Our Accommodations' : 'Kamar & Suite'}
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3326]">
                                {isEn ? 'Simple, Homey & Modern Stays' : 'Pilihan Kamar Nyaman & Homey'}
                            </h2>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center space-x-4">
                            {/* Slider Controls (Icon Only, No Border) */}
                            <div className="flex items-center space-x-1">
                                <button
                                    onClick={() => scrollSlider('left')}
                                    className="p-2 text-[#1A3326] hover:text-[#BA5C40] transition cursor-pointer"
                                    aria-label="Previous Slide"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => scrollSlider('right')}
                                    className="p-2 text-[#1A3326] hover:text-[#BA5C40] transition cursor-pointer"
                                    aria-label="Next Slide"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            <Link
                                href={`${langPrefix}/rooms`}
                                className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A3326] hover:text-[#BA5C40] transition pl-2"
                            >
                                <span>{isEn ? 'View All Rooms' : 'Lihat Semua'}</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Horizontal Sliding Cards Container */}
                    <div
                        ref={sliderRef}
                        className="flex space-x-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 pb-6"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {displayRooms.map((room) => {
                            const primaryImg = room.images?.[0]?.image_path || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80';
                            const title = isEn ? (room.name_en || room.name_id) : room.name_id;
                            const desc = isEn ? (room.short_desc_en || room.short_desc_id) : room.short_desc_id;

                            return (
                                <div
                                    key={room.id}
                                    className="w-[320px] sm:w-[360px] shrink-0 snap-start bg-[#FAF7F2] rounded-xl border border-[#DFD7CC]/70 overflow-hidden hover:border-[#BA5C40]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="relative h-60 overflow-hidden image-mask-hover">
                                            <img
                                                src={primaryImg}
                                                alt={title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-3.5 right-3.5 bg-[#1A3326]/90 backdrop-blur-md text-[#DFD7CC] text-xs font-mono font-medium px-3 py-1 rounded-xl shadow-sm">
                                                Rp {Number(room.price_per_night).toLocaleString('id-ID')} <span className="text-[10px] text-[#DFD7CC]/80">/ {isEn ? 'night' : 'malam'}</span>
                                            </div>
                                        </div>

                                        <div className="p-6 space-y-3">
                                            <div className="flex items-center space-x-2 text-[11px] font-mono text-[#5C6B61]">
                                                <span>{room.bed_type}</span>
                                                <span>•</span>
                                                <span>{room.room_size}</span>
                                                <span>•</span>
                                                <span>{room.capacity_adults} {isEn ? 'Guests' : 'Orang'}</span>
                                            </div>

                                            <h3 className="font-serif font-bold text-xl text-[#1A3326] group-hover:text-[#BA5C40] transition">
                                                {title}
                                            </h3>

                                            <p className="text-xs text-[#5C6B61] leading-relaxed line-clamp-2">
                                                {desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-6 pb-6 pt-4 border-t border-[#DFD7CC]/60 flex items-center justify-between gap-3">
                                        <Link
                                            href={`${langPrefix}/rooms/${room.slug}`}
                                            className="inline-flex items-center space-x-1.5 text-xs font-serif font-semibold text-[#1A3326] hover:text-[#BA5C40] transition group/link"
                                        >
                                            <span>{isEn ? 'Explore Suite' : 'Lihat Detail'}</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </Link>

                                        <a
                                            href={`https://wa.me/${settings?.whatsapp_number || '6281234567890'}?text=${encodeURIComponent(
                                                `Halo Sekar Arum, saya berminat pesan ${room.name_id}`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-2 bg-[#BA5C40] hover:bg-[#1A3326] text-white text-[11px] font-semibold uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-300 shadow-sm"
                                        >
                                            <MessageCircle className="w-3.5 h-3.5 text-white/90" />
                                            <span>{isEn ? 'Book' : 'Reservasi'}</span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 03: AMENITIES - FULLWIDTH BACKGROUND IMAGE WITH FLOATING GRADIENT PANEL */}
            <section className="relative min-h-screen h-screen w-full overflow-hidden border-y border-[#DFD7CC]/60">
                {/* Full-width Mirrored Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform scale-x-[-1]"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Floating Right Flush Panel with Smooth Left Gradient Fade (Width 60%) */}
                <MotionIn delay={150} className="absolute top-0 right-0 bottom-0 z-20 w-full md:w-[60%] lg:w-[60%] h-full bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/95 to-transparent p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 pointer-events-auto items-end text-right">
                    <div className="space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#BA5C40] block">
                            03 / Guest Amenities
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3326]">
                            {isEn ? 'Tailored Amenities For Your Comfort' : 'Fasilitas Lengkap Kenyamanan Menginap'}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#5C6B61] leading-relaxed max-w-lg">
                            {isEn
                                ? 'From high-speed Wi-Fi to refreshing outdoor pool and traditional breakfast, experience Javanese warmth in every detail.'
                                : 'Dari koneksi internet cepat, kolam renang sejuk, hingga hidangan sarapan lokal khas Jogja, nikmati setiap momen menginap Anda.'}
                        </p>
                    </div>

                    {/* Facility Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg pt-2">
                        {featuredFacilities.map((fac) => {
                            const icon = iconMap[fac.icon_name] || <Check className="w-4 h-4" />;
                            const facName = isEn ? (fac.name_en || fac.name_id) : fac.name_id;

                            return (
                                <div
                                    key={fac.id}
                                    className="p-3.5 bg-white/95 backdrop-blur-sm rounded-xl border border-[#DFD7CC]/80 shadow-sm hover:border-[#BA5C40] hover:shadow-md transition-all duration-300 flex items-center space-x-3 group cursor-pointer"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] text-[#BA5C40] group-hover:bg-[#1A3326] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                                        {icon}
                                    </div>
                                    <h4 className="font-serif font-semibold text-xs text-[#1A3326] group-hover:text-[#BA5C40] transition-colors duration-300">
                                        {facName}
                                    </h4>
                                </div>
                            );
                        })}
                    </div>

                    <div className="pt-2">
                        <Link
                            href={`${langPrefix}/facilities`}
                            className="inline-flex items-center space-x-2 bg-[#1A3326] hover:bg-[#BA5C40] text-white text-xs font-semibold uppercase tracking-widest py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md"
                        >
                            <span>{isEn ? 'Explore All Facilities' : 'Lihat Semua Fasilitas'}</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </MotionIn>
            </section>

            {/* SECTION 04: SLEMAN ATTRACTIONS SLIDER - 100% VH */}
            <section className="min-h-screen py-20 bg-white border-y border-[#DFD7CC]/60 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                        <div className="space-y-1">
                            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#BA5C40]">
                                04 / Sleman Concierge
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3326]">
                                {isEn ? 'Nearby Destinations & Nature' : 'Wisata & Alur Destinasi Sleman'}
                            </h2>
                        </div>

                        <div className="mt-4 md:mt-0 flex items-center space-x-4">
                            {/* Slider Controls (Icon Only, No Border) */}
                            <div className="flex items-center space-x-1">
                                <button
                                    onClick={() => scrollAttractionSlider('left')}
                                    className="p-2 text-[#1A3326] hover:text-[#BA5C40] transition cursor-pointer"
                                    aria-label="Previous attraction"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => scrollAttractionSlider('right')}
                                    className="p-2 text-[#1A3326] hover:text-[#BA5C40] transition cursor-pointer"
                                    aria-label="Next attraction"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            <Link
                                href={`${langPrefix}/attractions`}
                                className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-[#1A3326] hover:text-[#BA5C40] transition"
                            >
                                <span>{isEn ? 'View All' : 'Lihat Semua'}</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Horizontal Sliding Container */}
                    <div
                        ref={attractionSliderRef}
                        className="flex space-x-6 overflow-x-auto scrollbar-none py-2 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {(attractions && attractions.length > 0 ? attractions : [
                            {
                                id: 101,
                                name_id: 'Museum Ullen Sentalu',
                                name_en: 'Ullen Sentalu Museum',
                                description_id: 'Museum seni & budaya Jawa terbaik di Kaliurang dengan koleksi sejarah Mataram yang megah.',
                                description_en: 'Award-winning Javanese art and culture museum in Kaliurang amidst lush pine forests.',
                                image_path: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80',
                                distance_km: '3.5 km',
                                travel_time: '8 min',
                            },
                            {
                                id: 102,
                                name_id: 'Jeep Tour Merapi Lava',
                                name_en: 'Merapi Lava Jeep Tour',
                                description_id: 'Petualangan off-road seru menjelajahi sisa erupsi Merapi dan Bunker Kaliadem.',
                                description_en: 'Thrilling 4x4 Jeep adventure exploring historic volcanic eruption tracks of Mount Merapi.',
                                image_path: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
                                distance_km: '4.2 km',
                                travel_time: '10 min',
                            },
                            {
                                id: 103,
                                name_id: 'Ledok Sambi Riverside',
                                name_en: 'Ledok Sambi River Park',
                                description_id: 'Taman rekreasi pinggir sungai alami khas Pakem, cocok untuk santai keluarga & picnic.',
                                description_en: 'Scenic natural riverbank park in Pakem, perfect for outdoor picnics and bamboo coffee.',
                                image_path: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
                                distance_km: '2.1 km',
                                travel_time: '5 min',
                            },
                            {
                                id: 104,
                                name_id: 'Kopi Klotok Pakem',
                                name_en: 'Kopi Klotok Traditional Diner',
                                description_id: 'Kuliner populer khas pedesaan Jogja dengan sajian pisang goreng hangat & lodeh.',
                                description_en: 'Iconic authentic Javanese countryside diner known for hot banana fritters & traditional coffee.',
                                image_path: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
                                distance_km: '1.5 km',
                                travel_time: '4 min',
                            },
                            {
                                id: 105,
                                name_id: 'Agrowisata Bhumi Merapi',
                                name_en: 'Bhumi Merapi Agrotourism',
                                description_id: 'Wisata edukasi peternakan, kebun kopi, dan spot foto bangunan ala Eropa.',
                                description_en: 'Educational farm & coffee garden with European architecture photo spots in Sleman.',
                                image_path: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
                                distance_km: '2.8 km',
                                travel_time: '6 min',
                            },
                            {
                                id: 106,
                                name_id: 'Candi Prambanan Heritage',
                                name_en: 'Prambanan Temple Heritage',
                                description_id: 'Candi Hindu terbesar di Indonesia yang megah dan penuh dengan ukiran relief epik.',
                                description_en: 'UNESCO World Heritage magnificent Hindu temple compound in Sleman, Yogyakarta.',
                                image_path: 'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?auto=format&fit=crop&w=800&q=80',
                                distance_km: '18 km',
                                travel_time: '30 min',
                            },
                        ]).map((att, idx) => {
                            const name = isEn ? (att.name_en || att.name_id) : att.name_id;
                            const desc = isEn ? (att.description_en || att.description_id) : att.description_id;

                            return (
                                <MotionIn
                                    key={att.id || idx}
                                    delay={idx * 80}
                                    className="min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0"
                                >
                                    <div className="editorial-card rounded-xl overflow-hidden flex flex-col justify-between h-full group hover:shadow-xl transition-all duration-300">
                                        <div>
                                            <div className="h-52 overflow-hidden relative image-mask-hover">
                                                <img
                                                    src={att.image_path}
                                                    alt={name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute bottom-3 left-3 bg-[#1A3326]/90 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-xl shadow-sm">
                                                    {att.distance_km} ({att.travel_time})
                                                </div>
                                            </div>
                                            <div className="p-6 space-y-2">
                                                <h3 className="font-serif font-bold text-lg text-[#1A3326] group-hover:text-[#BA5C40] transition">
                                                    {name}
                                                </h3>
                                                <p className="text-xs text-[#5C6B61] leading-relaxed line-clamp-2">
                                                    {desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </MotionIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 05: GUEST REVIEWS - MINIMALIST EDITORIAL LAYOUT (100% VH) */}
            <section className="min-h-screen py-20 bg-[#1A3326] text-[#DFD7CC] flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-center space-y-2 mb-16">
                        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C5A028]">
                            05 / Guest Stories
                        </span>
                        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                            {isEn ? 'Words From Our Guests' : 'Kesan Menginap Tamu'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                        {testimonials.map((t, idx) => (
                            <MotionIn
                                key={t.id}
                                delay={idx * 120}
                                className="space-y-6 flex flex-col justify-between border-l border-white/20 pl-6 sm:pl-8"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-1 text-[#C5A028]">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                        ))}
                                    </div>
                                    <p className="font-serif text-base sm:text-lg text-white/90 leading-relaxed font-light italic">
                                        "{t.comment}"
                                    </p>
                                </div>

                                <div className="space-y-0.5 pt-2">
                                    <h4 className="font-serif font-bold text-sm text-white">{t.guest_name}</h4>
                                    <div className="flex items-center space-x-2 text-[10px] font-mono text-[#CEBFB1]/80 uppercase tracking-wider">
                                        <span>{t.guest_country}</span>
                                        <span>•</span>
                                        <span>{t.source_badge}</span>
                                    </div>
                                </div>
                            </MotionIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 06: LOCATION & MAP - DESKTOP VIEW (MD UP: SPLIT FULLSCREEN MAP & FLUSH GRADIENT PANEL) */}
            <section className="hidden md:block relative min-h-screen h-screen w-full overflow-hidden border-t border-[#DFD7CC]/60">
                {/* Fullscreen Background Leaflet Map */}
                <div className="absolute inset-0 z-0 w-full h-full">
                    <LeafletMap className="w-full h-full rounded-none border-none shadow-none" requireCtrlZoom={true} centerOffsetLng={-0.038} />
                </div>

                {/* Left Flush Info Panel with Smooth Right Gradient Fade (Width 60%) */}
                <div className="absolute top-0 left-0 bottom-0 z-20 w-full md:w-[60%] lg:w-[60%] h-full bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/95 to-transparent p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 pointer-events-auto">
                    <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#BA5C40] block">
                        06 / Location & Sanctuary Access
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3326]">
                        Pakem, Sleman, D.I. Yogyakarta
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5C6B61] leading-relaxed">
                        {isEn
                            ? 'Located on the serene slopes of Mount Merapi in Pakem, Sleman. Easily accessible from Adisucipto Airport, Mount Merapi tour base, and Ullen Sentalu Museum.'
                            : 'Berlokasi di kawasan sejuk Pakem, Sleman, lereng Gunung Merapi. Akses sangat mudah menuju tempat wisata utama Kaliurang, Museum Ullen Sentalu, dan Candi Prambanan.'}
                    </p>

                    {/* Editorial Boutique Location & Directions Block */}
                    <div className="pt-6 space-y-4 text-xs">
                        <div className="space-y-1.5">
                            <div className="flex items-center space-x-2 text-[#BA5C40]">
                                <span className="font-serif font-bold text-sm text-[#1A3326]">
                                    {isEn ? 'Sanctuary Address' : 'Alamat Homestay'}
                                </span>
                            </div>
                            <p className="text-[#5C6B61] leading-relaxed font-light max-w-md">
                                {settings?.contact_address || 'Jl. Kaliurang Km 14, Harjobinangun, Pakem, Sleman, D.I. Yogyakarta 55581'}
                            </p>
                        </div>

                        {/* Direct Google Maps Action Trigger */}
                        <div className="pt-1">
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(settings?.contact_address || 'Sekar Arum Homestay Pakem Sleman')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-[11px] font-semibold uppercase tracking-widest text-[#1A3326] hover:text-[#BA5C40] transition group/gmaps"
                            >
                                <span>{isEn ? 'Open in Google Maps' : 'Buka di Google Maps'}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/gmaps:translate-x-0.5 group-hover/gmaps:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 06: LOCATION & MAP - MOBILE VIEW (STACKED: TOP INFO PANEL + BOTTOM MAP) */}
            <section className="block md:hidden bg-[#FAF7F2] border-t border-[#DFD7CC]/60">
                {/* Top Info Panel */}
                <div className="py-12 px-6 space-y-5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#BA5C40] block">
                        06 / Location & Sanctuary Access
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#1A3326]">
                        Pakem, Sleman, D.I. Yogyakarta
                    </h2>
                    <p className="text-xs text-[#5C6B61] leading-relaxed font-light">
                        {isEn
                            ? 'Located on the serene slopes of Mount Merapi in Pakem, Sleman. Easily accessible from Adisucipto Airport, Mount Merapi tour base, and Ullen Sentalu Museum.'
                            : 'Berlokasi di kawasan sejuk Pakem, Sleman, lereng Gunung Merapi. Akses sangat mudah menuju tempat wisata utama Kaliurang, Museum Ullen Sentalu, dan Candi Prambanan.'}
                    </p>

                    <div className="pt-4 border-t border-[#DFD7CC]/80 space-y-3 text-xs">
                        <div>
                            <span className="font-serif font-bold text-xs text-[#1A3326] block mb-1">
                                {isEn ? 'Sanctuary Address' : 'Alamat Homestay'}
                            </span>
                            <p className="text-[#5C6B61] leading-relaxed font-light">
                                {settings?.contact_address || 'Jl. Kaliurang Km 14, Harjobinangun, Pakem, Sleman, D.I. Yogyakarta 55581'}
                            </p>
                        </div>

                        <div className="pt-1">
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(settings?.contact_address || 'Sekar Arum Homestay Pakem Sleman')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-widest text-[#1A3326] hover:text-[#BA5C40] transition group/gmaps"
                            >
                                <span>{isEn ? 'Open in Google Maps' : 'Buka di Google Maps'}</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Map Container */}
                <div className="w-full h-[360px] relative border-t border-b border-[#DFD7CC]/60">
                    <LeafletMap className="w-full h-full rounded-none border-none shadow-none" requireCtrlZoom={true} />
                </div>
            </section>

            {/* SECTION 07: FAQS - MINIMALIST EDITORIAL LIST WITH JOGJA BATIK PATTERN OVERLAY */}
            <section className="relative min-h-screen py-20 bg-[#FAF7F2] flex items-center border-t border-[#DFD7CC]/60 overflow-hidden">
                {/* Authentic Javanese Batik Kawung Subtle Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.06] text-[#1A3326]">
                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="batik-kawung" width="60" height="60" patternUnits="userSpaceOnUse">
                            {/* Kawung Ellipse Motifs */}
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
                        <rect width="100%" height="100%" fill="url(#batik-kawung)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <MotionIn delay={100} className="text-center space-y-2 mb-16">
                        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#BA5C40]">
                            07 / FAQs
                        </span>
                        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A3326]">
                            {isEn ? 'Frequently Asked Questions' : 'Pertanyaan Yang Sering Ditanyakan'}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#5C6B61] max-w-lg mx-auto font-light leading-relaxed">
                            {isEn
                                ? 'Find clear answers regarding check-in timing, traditional breakfast, parking space, and direct WhatsApp reservations.'
                                : 'Temukan jawaban seputar jadwal check-in, sajian sarapan, ketersediaan lahan parkir, dan reservasi langsung.'}
                        </p>
                    </MotionIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {faqs.map((faq, idx) => {
                            const q = isEn ? (faq.question_en || faq.question_id) : faq.question_id;
                            const a = isEn ? (faq.answer_en || faq.answer_id) : faq.answer_id;
                            const num = String(idx + 1).padStart(2, '0');

                            return (
                                <MotionIn
                                    key={faq.id || idx}
                                    delay={idx * 100}
                                    className="pt-6 border-t border-[#DFD7CC]/80 space-y-2"
                                >
                                    <div className="flex items-baseline space-x-3">
                                        <span className="text-xs font-mono font-semibold text-[#BA5C40] shrink-0">{num}.</span>
                                        <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A3326] leading-snug">
                                            {q}
                                        </h4>
                                    </div>
                                    <p className="text-xs sm:text-sm text-[#5C6B61] leading-relaxed font-light pl-7">
                                        {a}
                                    </p>
                                </MotionIn>
                            );
                        })}
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
