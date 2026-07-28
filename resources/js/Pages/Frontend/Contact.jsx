import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEOHead from '@/Components/Common/SEOHead';
import LeafletMap from '@/Components/Map/LeafletMap';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
    const { locale, settings, flash } = usePage().props;
    const isEn = locale === 'en';

    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => {
                reset();
                setSubmitted(true);
            },
        });
    };

    const phone = settings?.contact_phone || '+62 812-3456-7890';
    const email = settings?.contact_email || 'info@sekararumhomestay.com';
    const address = settings?.contact_address || 'Jl. Kaliurang Km 14, Pakem, Sleman, D.I. Yogyakarta';
    const waNumber = settings?.whatsapp_number || '6281234567890';

    return (
        <GuestLayout>
            <SEOHead
                title={isEn ? 'Contact & Location' : 'Kontak & Lokasi Sleman'}
                description={isEn ? 'Get in touch with Sekar Arum Homestay team in Sleman Yogyakarta.' : 'Hubungi pengelola Sekar Arum Homestay Pakem Sleman Yogyakarta.'}
            />

            {/* LUXURY ATMOSPHERIC HERO HEADER */}
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
                        <span>{isEn ? 'Get in Touch' : 'Hubungi Pengelola'}</span>
                        <span className="w-8 h-[1px] bg-[#C5A028]" />
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
                        {isEn ? (
                            <>Connect With Us & <br /><span className="italic font-light text-[#DFD7CC]">Location Sanctuary</span></>
                        ) : (
                            <>Kontak & Akses <br /><span className="italic font-light text-[#DFD7CC]">Lokasi Homestay</span></>
                        )}
                    </h1>

                    <p className="text-xs sm:text-sm text-[#DFD7CC]/90 font-light leading-relaxed max-w-lg mx-auto">
                        {isEn
                            ? 'Our team is available 24/7 to assist with your room inquiries, custom stay packages, and direct WhatsApp reservations.'
                            : 'Tim pengelola kami siap membantu pertanyaan reservasi, paket menginap rombongan, dan informasi akses lokasi.'}
                    </p>
                </div>
            </section>

            {/* MAIN CONTACT SECTION WITH BATIK KAWUNG PATTERN */}
            <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
                {/* Authentic Javanese Batik Kawung Subtle Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] text-[#1A3326]">
                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="batik-kawung-contact" width="60" height="60" patternUnits="userSpaceOnUse">
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
                        <rect width="100%" height="100%" fill="url(#batik-kawung-contact)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Left Communication Channels Panel */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="bg-white p-8 rounded-2xl border border-[#DFD7CC]/80 shadow-xl space-y-6">
                                <div className="space-y-1">
                                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#BA5C40]">
                                        01 / Direct Channels
                                    </span>
                                    <h3 className="font-serif font-bold text-2xl text-[#1A3326]">
                                        {isEn ? 'Reservation Channels' : 'Saluran Komunikasi'}
                                    </h3>
                                </div>

                                <div className="space-y-5 text-xs text-[#5C6B61] pt-2 border-t border-[#DFD7CC]/80">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-4 h-4 text-[#BA5C40] shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-[#1A3326] font-serif font-bold text-sm mb-0.5">{isEn ? 'Address' : 'Alamat'}</strong>
                                            <span className="font-light leading-relaxed">{address}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Phone className="w-4 h-4 text-[#BA5C40] shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-[#1A3326] font-serif font-bold text-sm mb-0.5">{isEn ? 'Phone / Cell' : 'Telepon / HP'}</strong>
                                            <span className="font-mono text-xs">{phone}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Mail className="w-4 h-4 text-[#BA5C40] shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-[#1A3326] font-serif font-bold text-sm mb-0.5">Email</strong>
                                            <span className="font-mono text-xs">{email}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-[#DFD7CC]/80">
                                    <a
                                        href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                                            isEn ? 'Hello, I want to ask about homestay booking' : 'Halo, saya ingin bertanya tentang reservasi homestay'
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center space-x-2 bg-[#BA5C40] hover:bg-[#1A3326] text-white text-xs font-semibold uppercase tracking-widest py-3.5 px-4 rounded-xl shadow-md transition duration-300 group"
                                    >
                                        <MessageCircle className="w-4 h-4 text-white/90" />
                                        <span>{isEn ? 'Chat Instant WhatsApp' : 'Chat WhatsApp Langsung'}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Contact Form Panel */}
                        <div className="lg:col-span-7">
                            <div className="bg-white p-8 rounded-2xl border border-[#DFD7CC]/80 shadow-xl space-y-6">
                                <div className="space-y-1">
                                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#BA5C40]">
                                        02 / Inquiry Form
                                    </span>
                                    <h3 className="font-serif font-bold text-2xl text-[#1A3326]">
                                        {isEn ? 'Send Us a Message' : 'Kirim Pesan Pertanyaan'}
                                    </h3>
                                </div>

                                {(submitted || flash?.success) && (
                                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>{flash?.success || (isEn ? 'Your message has been sent successfully!' : 'Pesan Anda telah berhasil terkirim!')}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4 text-xs pt-2 border-t border-[#DFD7CC]/80">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] font-mono uppercase tracking-wider text-[#5C6B61] mb-1">{isEn ? 'Your Name' : 'Nama Lengkap'}</label>
                                            <input
                                                type="text"
                                                required
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="w-full bg-[#FAF7F2] border border-[#DFD7CC] rounded-xl py-2.5 px-3 focus:outline-none focus:border-[#BA5C40] transition text-xs text-[#1A3326]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-mono uppercase tracking-wider text-[#5C6B61] mb-1">Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="w-full bg-[#FAF7F2] border border-[#DFD7CC] rounded-xl py-2.5 px-3 focus:outline-none focus:border-[#BA5C40] transition text-xs text-[#1A3326]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono uppercase tracking-wider text-[#5C6B61] mb-1">{isEn ? 'Phone / WhatsApp' : 'Nomor HP / WA'}</label>
                                        <input
                                            type="text"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="w-full bg-[#FAF7F2] border border-[#DFD7CC] rounded-xl py-2.5 px-3 focus:outline-none focus:border-[#BA5C40] transition text-xs text-[#1A3326]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono uppercase tracking-wider text-[#5C6B61] mb-1">{isEn ? 'Message' : 'Pesan Anda'}</label>
                                        <textarea
                                            rows="4"
                                            required
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className="w-full bg-[#FAF7F2] border border-[#DFD7CC] rounded-xl py-2.5 px-3 focus:outline-none focus:border-[#BA5C40] transition text-xs text-[#1A3326]"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-[#1A3326] hover:bg-[#BA5C40] text-white font-semibold uppercase tracking-widest text-xs py-3.5 px-6 rounded-xl shadow-md transition duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
                                    >
                                        <Send className="w-4 h-4 text-[#DFD7CC] group-hover:translate-x-0.5 transition-transform" />
                                        <span>{isEn ? 'Submit Inquiry' : 'Kirim Pesan'}</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Map Section */}
                    <div className="pt-12 border-t border-[#DFD7CC]/80 space-y-6">
                        <div className="space-y-1">
                            <span className="text-[11px] font-mono uppercase tracking-widest text-[#BA5C40]">
                                03 / Sanctuary Access Map
                            </span>
                            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A3326]">
                                {isEn ? 'Interactive Location Map' : 'Peta Lokasi Interaktif (Pakem Sleman)'}
                            </h3>
                        </div>
                        <LeafletMap requireCtrlZoom={true} />
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
