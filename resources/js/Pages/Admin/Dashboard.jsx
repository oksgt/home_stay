import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { DoorOpen, MessageSquare, Image, Star, ExternalLink } from 'lucide-react';

export default function AdminDashboard({ stats = {}, recent_messages = [] }) {
    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#121C16] flex flex-col">
            <Head title="Admin CMS Dashboard - Sekar Arum" />

            {/* Admin Header */}
            <header className="bg-[#1A3326] text-white py-4 px-6 border-b border-[#3E5042] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-[#BA5C40] text-white flex items-center justify-center font-serif font-bold text-lg">
                        S
                    </div>
                    <span className="font-serif font-bold text-lg">Sekar Arum Admin CMS</span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-[#DFD7CC]">
                    <Link href="/" target="_blank" className="flex items-center space-x-1 hover:text-white transition">
                        <span>Lihat Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </header>

            {/* Dashboard Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow space-y-8">
                <div>
                    <h1 className="font-serif text-3xl font-bold text-[#1A3326]">Ringkasan Admin Panel</h1>
                    <p className="text-xs text-[#5C6B61] mt-1">Kelola konten kamar, foto galeri, pesan masuk, dan pengaturan SEO situs.</p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 bg-white rounded-xl border border-[#DFD7CC]/60 shadow-sm flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1A3326] text-[#DFD7CC] flex items-center justify-center">
                            <DoorOpen className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-2xl font-serif font-bold text-[#1A3326]">{stats.total_rooms || 0}</span>
                            <span className="block text-xs text-[#5C6B61]">Total Kamar</span>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-[#DFD7CC]/60 shadow-sm flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-[#BA5C40] text-white flex items-center justify-center">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-2xl font-serif font-bold text-[#1A3326]">{stats.unread_messages || 0}</span>
                            <span className="block text-xs text-[#5C6B61]">Pesan Baru</span>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-[#DFD7CC]/60 shadow-sm flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-[#3E5042] text-[#DFD7CC] flex items-center justify-center">
                            <Image className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-2xl font-serif font-bold text-[#1A3326]">{stats.total_gallery || 0}</span>
                            <span className="block text-xs text-[#5C6B61]">Foto Galeri</span>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-[#DFD7CC]/60 shadow-sm flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-[#C5A028] text-white flex items-center justify-center">
                            <Star className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-2xl font-serif font-bold text-[#1A3326]">{stats.total_testimonials || 0}</span>
                            <span className="block text-xs text-[#5C6B61]">Ulasan Tamu</span>
                        </div>
                    </div>
                </div>

                {/* Recent Messages */}
                <div className="p-6 bg-white rounded-xl border border-[#DFD7CC]/60 shadow-sm space-y-4">
                    <h3 className="font-serif font-bold text-xl text-[#1A3326]">Pesan Pertanyaan Tamu Terbaru</h3>

                    {recent_messages.length === 0 ? (
                        <p className="text-xs text-[#5C6B61]">Belum ada pesan baru.</p>
                    ) : (
                        <div className="divide-y divide-[#DFD7CC]/60 text-xs">
                            {recent_messages.map((msg) => (
                                <div key={msg.id} className="py-3 flex items-start justify-between">
                                    <div>
                                        <h4 className="font-semibold text-[#1A3326]">{msg.name} ({msg.email})</h4>
                                        <p className="text-[#5C6B61] mt-0.5">{msg.message}</p>
                                    </div>
                                    <span className="text-[10px] text-[#5C6B61] whitespace-nowrap">{new Date(msg.created_at).toLocaleDateString()}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
