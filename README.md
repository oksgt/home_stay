# Sekar Arum Homestay Pakem Sleman Yogyakarta

Official Web Application for **Sekar Arum Homestay**, a luxury boutique homestay sanctuary situated on the cool tropical slopes of Mount Merapi in Pakem, Sleman, Special Region of Yogyakarta.

## 🌿 Project Stack

- **Backend:** Laravel 11 (PHP 8.2+)
- **Frontend:** React 19 + Inertia.js 2
- **Styling:** Tailwind CSS 4 + Custom Javanese Aesthetic Design Tokens
- **Icons:** Lucide React
- **Maps:** Leaflet.js Interactive Maps

## 🏡 Features

1. **Multilingual Support (Indonesian & English):**
   - Direct locale routing (`/id`, `/en`) with persistent language selection.
2. **Atmospheric Editorial Pages:**
   - **Beranda (Home):** Hero auto-slider, room showcase, guest amenities, attractions slider, testimonials & FAQ with subtle Batik Kawung pattern overlays.
   - **Kamar & Villa (Rooms & Show):** Detailed room specifications, editorial gallery, and instant WhatsApp booking panel.
   - **Fasilitas (Facilities):** Boutique amenity tiles with interactive hover transitions.
   - **Galeri Foto (Gallery):** Asymmetrical Bento Grid photo gallery with fullscreen lightbox modal.
   - **Wisata Terdekat (Attractions):** Sleman local concierge guide with direction routes.
   - **Kontak & Lokasi (Contact):** Direct inquiry form and interactive Leaflet map with Ctrl+Scroll zoom protection.

## 🚀 Quick Start

1. **Install Dependencies:**
   ```bash
   composer install
   npm install
   ```

2. **Environment Configuration:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   php artisan serve
   ```

4. **Build Production Assets:**
   ```bash
   npm run build
   ```

---
© 2026 Sekar Arum Homestay Sleman Yogyakarta. All Rights Reserved.
