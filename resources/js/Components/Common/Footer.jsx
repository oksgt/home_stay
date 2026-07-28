import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { MapPin, Phone, Mail, Globe, Share2, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
    const { settings, locale } = usePage().props;
    const isEn = locale === 'en';
    const langPrefix = isEn ? '/en' : '/id';

    const phone = settings?.contact_phone || '+62 812-3456-7890';
    const email = settings?.contact_email || 'info@sekararumhomestay.com';
    const address = settings?.contact_address || 'Jl. Kaliurang Km 14, Pakem, Sleman, D.I. Yogyakarta';
    const waNumber = settings?.whatsapp_number || '6281234567890';

    return (
        <footer className="bg-[#1A3326] text-[#DFD7CC] pt-16 pb-12 border-t border-[#3E5042]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3E5042]/60">
                    {/* Brand Info (5 Cols) */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-xl bg-[#BA5C40] text-white flex items-center justify-center font-serif font-bold text-xl shadow-md">
                                S
                            </div>
                            <span className="font-serif font-bold text-2xl text-white">Sekar Arum Homestay</span>
                        </div>
                        <p className="text-sm text-[#CEBFB1] leading-relaxed max-w-sm">
                            {isEn
                                ? 'A tranquil boutique homestay in Pakem, Sleman, Yogyakarta — blending modern tropical luxury with warm Javanese hospitality.'
                                : 'Penginapan boutique alami di Pakem, Sleman, Yogyakarta — memadukan kemewahan tropis modern dengan kehangatan khas Jawa.'}
                        </p>
                        <div className="flex space-x-3 pt-2">
                            <a href="#" className="w-9 h-9 rounded-xl bg-[#3E5042] hover:bg-[#BA5C40] text-white flex items-center justify-center transition duration-300">
                                <Globe className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-xl bg-[#3E5042] hover:bg-[#BA5C40] text-white flex items-center justify-center transition duration-300">
                                <Share2 className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Navigation (3 Cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="font-serif font-semibold text-lg text-white mb-4">
                            {isEn ? 'Navigation' : 'Navigasi Utama'}
                        </h4>
                        <ul className="space-y-2.5 text-sm text-[#CEBFB1]">
                            <li><Link href={langPrefix} className="hover:text-white transition">{isEn ? 'Home' : 'Beranda'}</Link></li>
                            <li><Link href={`${langPrefix}/about`} className="hover:text-white transition">{isEn ? 'About Us' : 'Tentang Kami'}</Link></li>
                            <li><Link href={`${langPrefix}/rooms`} className="hover:text-white transition">{isEn ? 'Rooms & Suites' : 'Kamar & Suite'}</Link></li>
                            <li><Link href={`${langPrefix}/facilities`} className="hover:text-white transition">{isEn ? 'Facilities' : 'Fasilitas'}</Link></li>
                            <li><Link href={`${langPrefix}/gallery`} className="hover:text-white transition">{isEn ? 'Photo Gallery' : 'Galeri Foto'}</Link></li>
                            <li><Link href={`${langPrefix}/attractions`} className="hover:text-white transition">{isEn ? 'Sleman Tourism' : 'Wisata Sleman'}</Link></li>
                            <li><Link href={`${langPrefix}/contact`} className="hover:text-white transition">{isEn ? 'Contact' : 'Kontak'}</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Location Info (4 Cols) */}
                    <div className="lg:col-span-4 space-y-4">
                        <h4 className="font-serif font-semibold text-lg text-white mb-4">
                            {isEn ? 'Sanctuary Location' : 'Kontak & Lokasi'}
                        </h4>
                        <ul className="space-y-3 text-sm text-[#CEBFB1]">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-[#BA5C40] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{address}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-[#BA5C40] shrink-0" />
                                <span>{phone}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-[#BA5C40] shrink-0" />
                                <span>{email}</span>
                            </li>
                        </ul>

                        <div className="pt-2">
                            <a
                                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                                    isEn ? 'Hello Sekar Arum Homestay, I want to inquire about reservation.' : 'Halo Sekar Arum Homestay, saya mau bertanya reservasi.'
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow transition duration-300"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>{isEn ? 'Direct Host WA' : 'Reservasi WhatsApp'}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#CEBFB1] space-y-4 sm:space-y-0">
                    <p>© {new Date().getFullYear()} Sekar Arum Homestay. All Rights Reserved.</p>
                    <div className="flex items-center space-x-1">
                        <span>Crafted with</span>
                        <Heart className="w-3.5 h-3.5 text-[#BA5C40] fill-current" />
                        <span>in Sleman, Yogyakarta</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
