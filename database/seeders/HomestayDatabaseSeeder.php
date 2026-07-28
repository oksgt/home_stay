<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Room;
use App\Models\RoomImage;
use App\Models\Facility;
use App\Models\Attraction;
use App\Models\Testimonial;
use App\Models\Faq;
use App\Models\Gallery;
use App\Models\SiteSetting;

class HomestayDatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Facilities
        $facilities = [
            ['name_id' => 'Wi-Fi Cepat', 'name_en' => 'High-Speed Wi-Fi', 'icon_name' => 'Wifi', 'category' => 'general', 'is_featured' => true, 'sort_order' => 1],
            ['name_id' => 'Air Conditioner (AC)', 'name_en' => 'Air Conditioner', 'icon_name' => 'Wind', 'category' => 'room', 'is_featured' => true, 'sort_order' => 2],
            ['name_id' => 'Kolam Renang Tropis', 'name_en' => 'Tropical Pool', 'icon_name' => 'Waves', 'category' => 'outdoor', 'is_featured' => true, 'sort_order' => 3],
            ['name_id' => 'Sarapan Tradisional', 'name_en' => 'Authentic Breakfast', 'icon_name' => 'Utensils', 'category' => 'dining', 'is_featured' => true, 'sort_order' => 4],
            ['name_id' => 'Smart TV 50"', 'name_en' => '50" Smart TV', 'icon_name' => 'Tv', 'category' => 'room', 'is_featured' => true, 'sort_order' => 5],
            ['name_id' => 'Water Heater / Air Hangat', 'name_en' => 'Water Heater', 'icon_name' => 'Flame', 'category' => 'room', 'is_featured' => true, 'sort_order' => 6],
            ['name_id' => 'Area Parkir Luas', 'name_en' => 'Spacious Parking', 'icon_name' => 'Car', 'category' => 'general', 'is_featured' => true, 'sort_order' => 7],
            ['name_id' => 'Taman Asri Sleman', 'name_en' => 'Lush Garden', 'icon_name' => 'Trees', 'category' => 'outdoor', 'is_featured' => true, 'sort_order' => 8],
            ['name_id' => 'Musholla / Ruang Shalat', 'name_en' => 'Prayer Room', 'icon_name' => 'Heart', 'category' => 'general', 'is_featured' => false, 'sort_order' => 9],
            ['name_id' => 'Dapur Bersama', 'name_en' => 'Shared Kitchenette', 'icon_name' => 'Coffee', 'category' => 'dining', 'is_featured' => false, 'sort_order' => 10],
        ];

        $facilityModels = [];
        foreach ($facilities as $fac) {
            $facilityModels[] = Facility::create($fac);
        }

        // 2. Rooms
        $rooms = [
            [
                'slug' => 'deluxe-garden-suite',
                'name_id' => 'Deluxe Garden Suite',
                'name_en' => 'Deluxe Garden Suite',
                'short_desc_id' => 'Kamar elegan dengan pemandangan taman tropis Sleman yang asri dan sejuk.',
                'name_en' => 'Deluxe Garden Suite',
                'short_desc_en' => 'Elegant room overlooking serene tropical Sleman garden.',
                'description_id' => 'Deluxe Garden Suite menawarkan kenyamanan menginap yang luar biasa di Sleman. Dilengkapi tempat tidur king size berkualitas tinggi, kamar mandi dalam dengan water heater, teras pribadi menghadap taman, serta suasana alami yang menenangkan.',
                'description_en' => 'Deluxe Garden Suite offers exceptional comfort in Sleman. Features a premium king-sized bed, en-suite bathroom with water heater, private garden patio, and a serene natural ambience.',
                'price_per_night' => 450000,
                'discount_price' => 399000,
                'capacity_adults' => 2,
                'capacity_children' => 1,
                'bed_type' => '1 King Bed',
                'room_size' => '36 sqm',
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 1,
                'images' => [
                    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
                ]
            ],
            [
                'slug' => 'merapi-view-villa',
                'name_id' => 'Merapi View Villa',
                'name_en' => 'Merapi View Villa',
                'short_desc_id' => 'Villa eksklusif dengan pemandangan langsung Gunung Merapi dan balkon pribadi.',
                'short_desc_en' => 'Exclusive villa offering direct Mount Merapi view and private balcony.',
                'description_id' => 'Merapi View Villa dirancang bagi pasangan atau wisatawan yang menginginkan pemandangan megah Gunung Merapi di pagi hari. Memiliki teras atas pribadi, sofa santai, Smart TV 50", dan akses langsung ke kolam renang.',
                'description_en' => 'Merapi View Villa is tailored for travelers seeking breathtaking morning views of Mount Merapi. Features a private upper deck, comfortable lounge, 50" Smart TV, and direct pool access.',
                'price_per_night' => 750000,
                'discount_price' => 690000,
                'capacity_adults' => 2,
                'capacity_children' => 2,
                'bed_type' => '1 Super King Bed',
                'room_size' => '50 sqm',
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 2,
                'images' => [
                    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
                ]
            ],
            [
                'slug' => 'family-heritage-joglo',
                'name_id' => 'Family Heritage Joglo',
                'name_en' => 'Family Heritage Joglo',
                'short_desc_id' => 'Rumah Kayu Tradisional Joglo luas cocok untuk rombongan keluarga hingga 6 orang.',
                'short_desc_en' => 'Spacious traditional wooden Joglo house suitable for family up to 6 guests.',
                'description_id' => 'Rasakan kehangatan arsitektur tradisional Jawa Joglo dengan sentuhan modern. Memiliki 2 kamar tidur utama, ruang keluarga hangat, meja makan kayu jati, serta halaman rumput hijau pribadi.',
                'description_en' => 'Experience authentic Javanese Joglo architecture enhanced with modern luxury. Offers 2 main bedrooms, a cozy living room, teak dining table, and private green lawn.',
                'price_per_night' => 1200000,
                'discount_price' => 1050000,
                'capacity_adults' => 6,
                'capacity_children' => 3,
                'bed_type' => '2 King Beds + 2 Extra Beds',
                'room_size' => '90 sqm',
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 3,
                'images' => [
                    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
                ]
            ],
            [
                'slug' => 'terrace-bamboo-pavilion',
                'name_id' => 'Terrace Bamboo Pavilion',
                'name_en' => 'Terrace Bamboo Pavilion',
                'short_desc_id' => 'Paviliun bambu alami dengan teras santai & suasana sejuk khas Pakem.',
                'short_desc_en' => 'Natural bamboo pavilion with relaxing terrace & cool Pakem breeze.',
                'description_id' => 'Terrace Bamboo Pavilion menyajikan peraduan khas alam pedesaan Pakem. Didesain dari kayu bambu berkualitas, tempat tidur queen size, serta teras luas menghadap pepohonan hijau.',
                'description_en' => 'Terrace Bamboo Pavilion offers a serene rustic retreat in Pakem. Crafted from quality bamboo timber with a queen-sized bed and wide balcony overlooking lush trees.',
                'price_per_night' => 550000,
                'discount_price' => 490000,
                'capacity_adults' => 2,
                'capacity_children' => 1,
                'bed_type' => '1 Queen Bed',
                'room_size' => '40 sqm',
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 4,
                'images' => [
                    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
                ]
            ],
            [
                'slug' => 'executive-merapi-suite',
                'name_id' => 'Executive Merapi Suite',
                'name_en' => 'Executive Merapi Suite',
                'short_desc_id' => 'Suite bernuansa mewah dengan bathtub pribadi & pemandangan lereng Merapi.',
                'short_desc_en' => 'Luxury suite featuring private bathtub & Merapi mountain vistas.',
                'description_id' => 'Executive Merapi Suite dirancang untuk pengalaman staycation romantis. Dilengkapi bathtub air hangat, tempat tidur king size, meja kerja kayu jati, dan balkon santai.',
                'description_en' => 'Executive Merapi Suite is crafted for a romantic staycation experience. Features a private hot bathtub, king-sized bed, teak workstation, and relaxing terrace deck.',
                'price_per_night' => 850000,
                'discount_price' => 790000,
                'capacity_adults' => 2,
                'capacity_children' => 1,
                'bed_type' => '1 King Bed',
                'room_size' => '55 sqm',
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 5,
                'images' => [
                    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
                ]
            ],
            [
                'slug' => 'royal-tropical-bungalow',
                'name_id' => 'Royal Tropical Bungalow',
                'name_en' => 'Royal Tropical Bungalow',
                'short_desc_id' => 'Bungalow privat dengan kolam renang mini & ruang keluarga hangat.',
                'short_desc_en' => 'Private bungalow with mini plunge pool & spacious family lounge.',
                'description_id' => 'Royal Tropical Bungalow menyajikan kemewahan privat bagi keluarga. Dilengkapi plunge pool pribadi, 2 kamar tidur mewah, dapur mini, serta ruang santai keluarga.',
                'description_en' => 'Royal Tropical Bungalow provides private luxury for families. Offers a private plunge pool, 2 deluxe bedrooms, kitchenette, and comfortable family lounge.',
                'price_per_night' => 1450000,
                'discount_price' => 1350000,
                'capacity_adults' => 4,
                'capacity_children' => 2,
                'bed_type' => '2 King Beds',
                'room_size' => '85 sqm',
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 6,
                'images' => [
                    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
                ]
            ],
        ];

        foreach ($rooms as $rData) {
            $imgs = $rData['images'];
            unset($rData['images']);

            $room = Room::create($rData);

            // Attach facilities
            $room->facilities()->attach([$facilityModels[0]->id, $facilityModels[1]->id, $facilityModels[3]->id, $facilityModels[5]->id, $facilityModels[6]->id]);

            // Add images
            foreach ($imgs as $idx => $imgPath) {
                RoomImage::create([
                    'room_id' => $room->id,
                    'image_path' => $imgPath,
                    'is_primary' => ($idx === 0),
                    'sort_order' => $idx + 1,
                ]);
            }
        }

        // 3. Attractions
        $attractions = [
            [
                'name_id' => 'Kawasan Wisata Kaliurang',
                'name_en' => 'Kaliurang Tourism Area',
                'distance_km' => '5.2 km',
                'travel_time' => '10 menit',
                'image_path' => 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
                'description_id' => 'Udara sejuk lereng Merapi, taman rekreasi anak, dan kuliner khas Jadah Tempe Kaliurang.',
                'description_en' => 'Cool Merapi hillside breeze, family parks, and famous traditional Jadah Tempe food.',
                'latitude' => -7.5962,
                'longitude' => 110.4286,
                'sort_order' => 1,
            ],
            [
                'name_id' => 'Lava Tour Merapi Jeep',
                'name_en' => 'Mount Merapi Lava Jeep Tour',
                'distance_km' => '7.8 km',
                'travel_time' => '15 menit',
                'image_path' => 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
                'description_id' => 'Petualangan seru menelusuri jejak erupsi Merapi dengan Offroad Jeep 4x4.',
                'description_en' => 'Thrilling 4x4 Jeep adventure exploring historic Merapi volcanic trails.',
                'latitude' => -7.6041,
                'longitude' => 110.4431,
                'sort_order' => 2,
            ],
            [
                'name_id' => 'Museum Ullen Sentalu',
                'name_en' => 'Ullen Sentalu Museum',
                'distance_km' => '6.0 km',
                'travel_time' => '12 menit',
                'image_path' => 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=800&q=80',
                'description_id' => 'Museum seni dan budaya Jawa terbaik yang dikelilingi hutan tropis rindang.',
                'description_en' => 'Award-winning Javanese culture & art museum nestled in lush tropical forest.',
                'latitude' => -7.5975,
                'longitude' => 110.4233,
                'sort_order' => 3,
            ],
            [
                'name_id' => 'Candi Prambanan',
                'name_en' => 'Prambanan Temple',
                'distance_km' => '18.5 km',
                'travel_time' => '28 menit',
                'image_path' => 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
                'description_id' => 'Candi Hindu terbesar di Indonesia warisan UNESCO dengan arsitektur memukau.',
                'description_en' => 'UNESCO World Heritage site and Indonesia\'s largest magnificent Hindu temple complex.',
                'latitude' => -7.7520,
                'longitude' => 110.4915,
                'sort_order' => 4,
            ],
        ];

        foreach ($attractions as $attr) {
            Attraction::create($attr);
        }

        // 4. Testimonials
        $testimonials = [
            [
                'guest_name' => 'Budi Santoso & Keluarga',
                'guest_country' => 'Jakarta, Indonesia',
                'rating' => 5,
                'comment' => 'Homestay sangat bersih, asri, dan tenang! Udara Sleman yang sejuk membuat tidur nyenyak. Pemiliknya ramah sekali dan sarapan gudegnya juara!',
                'source_badge' => 'Google Review',
                'is_featured' => true,
            ],
            [
                'guest_name' => 'Emma & Mark',
                'guest_country' => 'Netherlands',
                'rating' => 5,
                'comment' => 'One of the best homestays in Yogyakarta! Direct view of Mount Merapi, fast Wi-Fi for work, and super easy booking via WhatsApp. Will definitely return!',
                'source_badge' => 'Airbnb Guest',
                'is_featured' => true,
            ],
            [
                'guest_name' => 'Dra. Ratna Sari',
                'guest_country' => 'Surabaya, Indonesia',
                'rating' => 5,
                'comment' => 'Sangat direkomendasikan untuk liburan keluarga. Anak-anak senang bermain di taman dan kolam renang. Dekat sekali dengan Museum Ullen Sentalu.',
                'source_badge' => 'Direct Guest',
                'is_featured' => true,
            ],
        ];

        foreach ($testimonials as $testi) {
            Testimonial::create($testi);
        }

        // 5. FAQs
        $faqs = [
            [
                'question_id' => 'Jam berapa jadwal Check-in dan Check-out?',
                'question_en' => 'What are the Check-in and Check-out times?',
                'answer_id' => 'Check-in dimulai pukul 14.00 WIB dan Check-out maksimal pukul 12.00 WIB. Early check-in atau late check-out dapat dikonfirmasikan terlebih dahulu sesuai ketersediaan kamar.',
                'answer_en' => 'Check-in is from 14:00 WIB and Check-out is until 12:00 WIB. Early check-in or late check-out can be confirmed in advance subject to availability.',
                'category' => 'general',
                'sort_order' => 1,
            ],
            [
                'question_id' => 'Apakah harga kamar sudah termasuk sarapan?',
                'question_en' => 'Is breakfast included in the room rate?',
                'answer_id' => 'Ya, seluruh tipe kamar sudah termasuk sarapan khas Jogja/Sleman untuk 2 orang (atau 6 orang untuk tipe Family Joglo).',
                'answer_en' => 'Yes, all room rates include traditional Javanese breakfast for 2 guests (or up to 6 guests for Family Joglo).',
                'category' => 'dining',
                'sort_order' => 2,
            ],
            [
                'question_id' => 'Bagaimana cara reservasi kamar?',
                'question_en' => 'How do I reserve a room?',
                'answer_id' => 'Reservasi dilakukan secara langsung melalui WhatsApp tanpa biaya komisi tambahan. Pilih tanggal dan klik tombol WhatsApp di situs ini.',
                'answer_en' => 'Reservations are made directly via WhatsApp with zero commission fees. Choose your dates and click the WhatsApp button on this site.',
                'category' => 'booking',
                'sort_order' => 3,
            ],
            [
                'question_id' => 'Apakah tersedia area parkir mobil?',
                'question_en' => 'Is car parking available on-site?',
                'answer_id' => 'Ya, kami menyediakan halaman parkir luas yang aman dan dapat menampung hingga 8 mobil pribadi dan bus sedang.',
                'answer_en' => 'Yes, we provide a spacious and secure parking courtyard accommodating up to 8 private cars and medium buses.',
                'category' => 'general',
                'sort_order' => 4,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }

        // 6. Galleries
        $galleries = [
            ['title_id' => 'Taman Tropis Sleman', 'title_en' => 'Sleman Tropical Garden', 'image_path' => 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80', 'category' => 'garden', 'sort_order' => 1],
            ['title_id' => 'Interior Joglo Tradisional', 'title_en' => 'Traditional Joglo Interior', 'image_path' => 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80', 'category' => 'interior', 'sort_order' => 2],
            ['title_id' => 'Kolam Renang Homestay', 'title_en' => 'Homestay Swimming Pool', 'image_path' => 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80', 'category' => 'exterior', 'sort_order' => 3],
            ['title_id' => 'Area Teras Santai', 'title_en' => 'Relaxing Patio Area', 'image_path' => 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80', 'category' => 'exterior', 'sort_order' => 4],
            ['title_id' => 'Kamar Deluxe Bath', 'title_en' => 'Deluxe Bathroom', 'image_path' => 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80', 'category' => 'room', 'sort_order' => 5],
            ['title_id' => 'Pemandangan Merapi Pagi', 'title_en' => 'Morning Merapi View', 'image_path' => 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80', 'category' => 'surroundings', 'sort_order' => 6],
        ];

        foreach ($galleries as $gal) {
            Gallery::create($gal);
        }

        // 7. Site Settings
        $settings = [
            ['key' => 'site_name', 'value' => 'Sekar Arum Boutique Homestay Sleman', 'group' => 'general'],
            ['key' => 'whatsapp_number', 'value' => '6281234567890', 'group' => 'whatsapp'],
            ['key' => 'whatsapp_default_message', 'value' => 'Halo Sekar Arum Homestay, saya ingin bertanya reservasi kamar.', 'group' => 'whatsapp'],
            ['key' => 'contact_phone', 'value' => '+62 812-3456-7890', 'group' => 'contact'],
            ['key' => 'contact_email', 'value' => 'info@sekararumhomestay.com', 'group' => 'contact'],
            ['key' => 'contact_address', 'value' => 'Jl. Kaliurang Km 14, Harjobinangun, Pakem, Sleman, D.I. Yogyakarta 55581', 'group' => 'contact'],
            ['key' => 'latitude', 'value' => '-7.68333', 'group' => 'location'],
            ['key' => 'longitude', 'value' => '110.41667', 'group' => 'location'],
            ['key' => 'meta_description_id', 'value' => 'Sekar Arum Homestay Sleman Yogyakarta — Penginapan alami yang tenang, nyaman, dan sejuk di lereng Merapi dekat Kaliurang & Ullen Sentalu.', 'group' => 'seo'],
            ['key' => 'meta_description_en', 'value' => 'Sekar Arum Boutique Homestay Sleman Yogyakarta — A tranquil tropical sanctuary near Mount Merapi & Kaliurang.', 'group' => 'seo'],
        ];

        foreach ($settings as $stg) {
            SiteSetting::create($stg);
        }
    }
}
