import React, { useEffect, useRef, useState } from 'react';

export default function LeafletMap({
    lat = -7.6833,
    lng = 110.4167,
    title = 'Sekar Arum Homestay Sleman',
    className = 'w-full h-[400px] md:h-[480px] rounded-xl border border-[#DFD7CC] shadow-lg',
    centerOffsetLng = 0,
    requireCtrlZoom = false,
}) {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [showCtrlPrompt, setShowCtrlPrompt] = useState(false);
    const promptTimerRef = useRef(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;
        if (mapInstanceRef.current) return;

        const centerLat = lat;
        const centerLng = lng + centerOffsetLng;

        if (typeof window !== 'undefined' && window.L) {
            const L = window.L;
            const map = L.map(mapContainerRef.current, {
                scrollWheelZoom: !requireCtrlZoom,
            }).setView([centerLat, centerLng], 14);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19,
            }).addTo(map);

            const customIcon = L.divIcon({
                className: 'custom-leaflet-pin',
                html: `<div style="background-color:#1A3326; border:2px solid #C5A028; width:38px; height:38px; border-radius:0.75rem; display:flex; align-items:center; justify-content:center; color:#DFD7CC; box-shadow:0 4px 12px rgba(0,0,0,0.35); font-weight:bold; font-family:serif;">S</div>`,
                iconSize: [38, 38],
                iconAnchor: [19, 19],
            });

            L.marker([lat, lng], { icon: customIcon })
                .addTo(map)
                .bindPopup(`<b>${title}</b><br/>Jl. Kaliurang Km 14, Sleman, Yogyakarta`)
                .openPopup();

            if (requireCtrlZoom) {
                const container = mapContainerRef.current;
                const handleKeyDown = (e) => {
                    if (e.key === 'Control' || e.key === 'Meta') {
                        map.scrollWheelZoom.enable();
                        setShowCtrlPrompt(false);
                    }
                };
                const handleKeyUp = (e) => {
                    if (e.key === 'Control' || e.key === 'Meta') {
                        map.scrollWheelZoom.disable();
                    }
                };
                const handleWheel = (e) => {
                    if (e.ctrlKey || e.metaKey) {
                        map.scrollWheelZoom.enable();
                        setShowCtrlPrompt(false);
                    } else {
                        map.scrollWheelZoom.disable();
                        setShowCtrlPrompt(true);
                        if (promptTimerRef.current) clearTimeout(promptTimerRef.current);
                        promptTimerRef.current = setTimeout(() => {
                            setShowCtrlPrompt(false);
                        }, 2000);
                    }
                };
                container.addEventListener('wheel', handleWheel, { passive: true });
                window.addEventListener('keydown', handleKeyDown);
                window.addEventListener('keyup', handleKeyUp);
            }

            mapInstanceRef.current = map;
        } else {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            script.onload = () => {
                const L = window.L;
                const map = L.map(mapContainerRef.current, {
                    scrollWheelZoom: !requireCtrlZoom,
                }).setView([centerLat, centerLng], 14);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors',
                    maxZoom: 19,
                }).addTo(map);

                const customIcon = L.divIcon({
                    className: 'custom-leaflet-pin',
                    html: `<div style="background-color:#1A3326; border:2px solid #C5A028; width:38px; height:38px; border-radius:0.75rem; display:flex; align-items:center; justify-content:center; color:#DFD7CC; box-shadow:0 4px 12px rgba(0,0,0,0.35); font-weight:bold; font-family:serif;">S</div>`,
                    iconSize: [38, 38],
                    iconAnchor: [19, 19],
                });

                L.marker([lat, lng], { icon: customIcon })
                    .addTo(map)
                    .bindPopup(`<b>${title}</b><br/>Jl. Kaliurang Km 14, Sleman, Yogyakarta`)
                    .openPopup();

                if (requireCtrlZoom) {
                    const container = mapContainerRef.current;
                    const handleKeyDown = (e) => {
                        if (e.key === 'Control' || e.key === 'Meta') {
                            map.scrollWheelZoom.enable();
                            setShowCtrlPrompt(false);
                        }
                    };
                    const handleKeyUp = (e) => {
                        if (e.key === 'Control' || e.key === 'Meta') {
                            map.scrollWheelZoom.disable();
                        }
                    };
                    const handleWheel = (e) => {
                        if (e.ctrlKey || e.metaKey) {
                            map.scrollWheelZoom.enable();
                            setShowCtrlPrompt(false);
                        } else {
                            map.scrollWheelZoom.disable();
                            setShowCtrlPrompt(true);
                            if (promptTimerRef.current) clearTimeout(promptTimerRef.current);
                            promptTimerRef.current = setTimeout(() => {
                                setShowCtrlPrompt(false);
                            }, 2000);
                        }
                    };
                    container.addEventListener('wheel', handleWheel, { passive: true });
                    window.addEventListener('keydown', handleKeyDown);
                    window.addEventListener('keyup', handleKeyUp);
                }

                mapInstanceRef.current = map;
            };
            document.body.appendChild(script);
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [lat, lng, title, centerOffsetLng, requireCtrlZoom]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div ref={mapContainerRef} className="w-full h-full z-10" />

            {/* Ctrl + Scroll Helper Badge at Bottom-Right (Replacing Old Route Button) */}
            <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
                <div
                    className={`text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 border ${
                        showCtrlPrompt
                            ? 'bg-[#BA5C40] text-white border-white/50 scale-105 shadow-2xl'
                            : 'bg-[#1A3326]/90 text-[#DFD7CC] border-[#C5A028]/40'
                    }`}
                >
                    Gunakan <kbd className="px-1.5 py-0.5 bg-white/20 rounded font-mono text-[10px]">Ctrl</kbd> + Scroll untuk zoom peta
                </div>
            </div>
        </div>
    );
}
