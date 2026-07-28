import React from 'react';
import Navbar from '@/Components/Common/Navbar';
import Footer from '@/Components/Common/Footer';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-[#FAF7F2] text-[#121C16]">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}
