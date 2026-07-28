import React, { useState } from 'react';
import { MessageCircle, X, ShieldCheck, Clock } from 'lucide-react';
import { usePage } from '@inertiajs/react';

export default function WhatsAppFloatingButton() {
    const { settings, locale } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);

    const waNumber = settings?.whatsapp_number || '6281234567890';
    const isEn = locale === 'en';

    const defaultMsg = isEn
        ? 'Hello Sekar Arum Homestay! I am interested in reserving a room.'
        : 'Halo Sekar Arum Homestay! Saya berminat untuk reservasi kamar.';

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(defaultMsg)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Pop-over Concierge Card */}
            {isOpen && (
                <div className="mb-3 w-80 bg-white rounded-xl shadow-2xl border border-[#DFD7CC] p-5 text-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="flex items-center justify-between pb-3 border-b border-[#DFD7CC]/60">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-[#1A3326] text-[#DFD7CC] flex items-center justify-center font-serif font-bold text-base shadow-sm">
                                    S
                                </div>
                                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-sm text-[#1A3326]">Host Concierge</h4>
                                <span className="text-[10px] text-[#5C6B61] flex items-center space-x-1">
                                    <Clock className="w-3 h-3 text-[#BA5C40]" />
                                    <span>{isEn ? 'Responds in ~5 minutes' : 'Respon cepat ~5 menit'}</span>
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 text-gray-400 hover:text-[#121C16] transition"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="py-4 space-y-2">
                        <p className="text-xs text-[#5C6B61] leading-relaxed">
                            {isEn
                                ? 'Welcome! Looking for direct rates, availability, or local recommendations in Sleman?'
                                : 'Selamat datang! Membutuhkan info ketersediaan kamar, tarif langsung, atau panduan lokasi di Sleman?'}
                        </p>
                    </div>

                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-2 bg-[#1A3326] hover:bg-[#BA5C40] text-[#DFD7CC] hover:text-white font-semibold text-xs py-3 px-4 rounded-xl shadow-md transition duration-300 border border-[#C5A028]/30"
                    >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>{isEn ? 'Start WhatsApp Chat' : 'Chat WhatsApp Pengelola'}</span>
                    </a>

                    <div className="mt-3 text-center text-[10px] text-[#5C6B61] flex items-center justify-center space-x-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#BA5C40]" />
                        <span>{isEn ? 'Guaranteed best direct rate' : 'Jaminan tarif langsung tanpa admin'}</span>
                    </div>
                </div>
            )}

            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center space-x-2.5 bg-[#1A3326] hover:bg-[#BA5C40] text-[#DFD7CC] hover:text-white py-3 px-5 rounded-xl shadow-2xl border border-[#C5A028]/30 transition-all duration-300 transform hover:scale-105"
                aria-label="Direct WhatsApp Concierge"
            >
                <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                    {isEn ? 'Concierge WA' : 'Reservasi WA'}
                </span>
            </button>
        </div>
    );
}
