import React from 'react';
import { usePage, Link } from '@inertiajs/react';

export default function LanguageSwitcher() {
    const { locale } = usePage().props;
    const currentLocale = locale || 'id';

    const getTargetUrl = (targetLang) => {
        if (typeof window === 'undefined') return `/${targetLang}`;
        const path = window.location.pathname;
        if (path.startsWith('/id')) {
            return path.replace(/^\/id/, `/${targetLang}`);
        }
        if (path.startsWith('/en')) {
            return path.replace(/^\/en/, `/${targetLang}`);
        }
        return `/${targetLang}${path === '/' ? '' : path}`;
    };

    return (
        <div className="inline-flex items-center space-x-1 text-xs font-medium">
            <Link
                href={getTargetUrl('id')}
                className={`px-2 py-1 rounded-xl transition-all duration-300 flex items-center space-x-1 ${
                    currentLocale === 'id'
                        ? 'font-bold opacity-100 scale-105'
                        : 'opacity-50 hover:opacity-100'
                }`}
                title="Bahasa Indonesia"
            >
                <span>🇮🇩</span>
                <span className="uppercase text-[10px] font-mono">ID</span>
            </Link>
            <span className="opacity-30 text-[10px]">•</span>
            <Link
                href={getTargetUrl('en')}
                className={`px-2 py-1 rounded-xl transition-all duration-300 flex items-center space-x-1 ${
                    currentLocale === 'en'
                        ? 'font-bold opacity-100 scale-105'
                        : 'opacity-50 hover:opacity-100'
                }`}
                title="English"
            >
                <span>🇬🇧</span>
                <span className="uppercase text-[10px] font-mono">EN</span>
            </Link>
        </div>
    );
}
