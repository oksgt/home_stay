import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const { locale, settings } = usePage().props;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isEn = locale === 'en';
    const langPrefix = isEn ? '/en' : '/id';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const experienceLinks = [
        { label: isEn ? 'The Story' : 'Tentang Kami', href: `${langPrefix}/about` },
        { label: isEn ? 'Amenities' : 'Fasilitas', href: `${langPrefix}/facilities` },
        { label: isEn ? 'Photo Gallery' : 'Galeri Foto', href: `${langPrefix}/gallery` },
        { label: isEn ? 'Sleman Guide' : 'Wisata Sleman', href: `${langPrefix}/attractions` },
    ];

    const waNumber = settings?.whatsapp_number || '6281234567890';
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
        isEn ? 'Hello Sekar Arum, I would like to inquire about room availability.' : 'Halo Sekar Arum, saya ingin mengonfirmasi ketersediaan kamar.'
    )}`;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
                scrolled
                    ? 'bg-[#FAF7F2] border-b border-[#DFD7CC] py-3.5 shadow-sm'
                    : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 text-white'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
                {/* LEFT: Grouped Menu Navigation with Dropdown */}
                <nav className="hidden lg:flex items-center space-x-7 flex-1 justify-start">
                    {/* Link 1: Rooms & Suites */}
                    <Link
                        href={`${langPrefix}/rooms`}
                        className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 relative py-1 hover:text-[#BA5C40] group ${
                            scrolled ? 'text-[#121C16]' : 'text-white/90 hover:text-white'
                        }`}
                    >
                        <span>{isEn ? 'Rooms & Suites' : 'Kamar & Suite'}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#BA5C40] transition-all duration-300 group-hover:w-full" />
                    </Link>

                    {/* Link 2: Experience Dropdown */}
                    <div className="relative group py-1">
                        <button
                            className={`flex items-center space-x-1.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:text-[#BA5C40] ${
                                scrolled ? 'text-[#121C16]' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            <span>{isEn ? 'Experience' : 'Pengalaman'}</span>
                            <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-[#BA5C40]" />
                        </button>

                        {/* Dropdown Menu Container */}
                        <div className="absolute top-full left-0 pt-2 w-52 hidden group-hover:block transition-all duration-300 animate-in fade-in zoom-in-95">
                            <div className="bg-[#FAF7F2] border border-[#DFD7CC] rounded-xl shadow-xl p-2 space-y-1">
                                {experienceLinks.map((subLink) => (
                                    <Link
                                        key={subLink.href}
                                        href={subLink.href}
                                        className="block px-3.5 py-2 text-xs font-medium text-[#1A3326] hover:bg-[#1A3326] hover:text-[#DFD7CC] rounded-lg transition duration-200"
                                    >
                                        {subLink.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Link 3: Contact */}
                    <Link
                        href={`${langPrefix}/contact`}
                        className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 relative py-1 hover:text-[#BA5C40] group ${
                            scrolled ? 'text-[#121C16]' : 'text-white/90 hover:text-white'
                        }`}
                    >
                        <span>{isEn ? 'Contact' : 'Kontak'}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#BA5C40] transition-all duration-300 group-hover:w-full" />
                    </Link>
                </nav>

                {/* CENTER: Brand Logo & Title */}
                <div className="flex-1 flex items-center justify-start lg:justify-center">
                    <Link href={langPrefix} className="flex items-center space-x-3 group">
                        <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif font-bold text-lg transition duration-500 ${
                                scrolled
                                    ? 'bg-[#1A3326] text-[#DFD7CC]'
                                    : 'bg-white/15 text-white backdrop-blur-md group-hover:bg-white/25'
                            }`}
                        >
                            S
                        </div>
                        <div className="text-left">
                            <span
                                className={`font-serif font-bold text-lg tracking-tight block transition duration-300 ${
                                    scrolled ? 'text-[#1A3326]' : 'text-white'
                                }`}
                            >
                                Sekar Arum
                            </span>
                            <span
                                className={`text-[8px] tracking-[0.2em] uppercase block -mt-1 font-mono ${
                                    scrolled ? 'text-[#5C6B61]' : 'text-[#DFD7CC]/80'
                                }`}
                            >
                                Sleman Sanctuary
                            </span>
                        </div>
                    </Link>
                </div>

                {/* RIGHT: Language Switcher & Icon-Only WA Trigger */}
                <div className="hidden lg:flex items-center justify-end space-x-4 flex-1">
                    <LanguageSwitcher />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center space-x-3">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`p-2 rounded-xl transition ${
                            scrolled ? 'text-[#1A3326]' : 'text-white'
                        }`}
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-[#FAF7F2] border-b border-[#DFD7CC] px-6 pt-5 pb-8 space-y-4 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
                    <div className="space-y-3">
                        <Link
                            href={`${langPrefix}/rooms`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm uppercase tracking-wider font-semibold text-[#1A3326] hover:text-[#BA5C40] border-b border-[#DFD7CC]/40"
                        >
                            {isEn ? 'Rooms & Suites' : 'Kamar & Suite'}
                        </Link>
                        {experienceLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 text-sm uppercase tracking-wider font-semibold text-[#1A3326] hover:text-[#BA5C40] border-b border-[#DFD7CC]/40"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href={`${langPrefix}/contact`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm uppercase tracking-wider font-semibold text-[#1A3326] hover:text-[#BA5C40] border-b border-[#DFD7CC]/40"
                        >
                            {isEn ? 'Contact' : 'Kontak'}
                        </Link>
                    </div>
                    <div className="pt-3">
                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center space-x-2 bg-[#1A3326] text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-xl shadow"
                        >
                            <MessageCircle className="w-4 h-4 text-[#25D366]" />
                            <span>{isEn ? 'Direct WhatsApp Booking' : 'Reservasi WhatsApp'}</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
