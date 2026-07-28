<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Room;
use App\Models\Facility;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index(Request $request)
    {
        $query = Room::with(['images', 'facilities'])->where('is_available', true);

        if ($request->filled('guests')) {
            $query->where('capacity_adults', '>=', (int)$request->guests);
        }

        $rooms = $query->orderBy('sort_order')->get();

        if ($rooms->isEmpty()) {
            $rooms = collect($this->getDummyRooms());
        }

        $facilities = Facility::all();

        return Inertia::render('Frontend/Rooms/Index', [
            'rooms' => $rooms,
            'facilities' => $facilities,
            'filters' => $request->only(['guests', 'checkin', 'checkout']),
        ]);
    }

    public function show($localeOrSlug, $slug = null)
    {
        // Handle localized route parameter matching ({locale}/rooms/{slug} vs /rooms/{slug})
        $targetSlug = $slug ?? $localeOrSlug;

        $room = Room::with(['images', 'facilities'])
            ->where('slug', $targetSlug)
            ->first();

        if (!$room) {
            $dummy = collect($this->getDummyRooms())->firstWhere('slug', $targetSlug);
            if ($dummy) {
                $room = (object) $dummy;
            }
        }

        if (!$room) {
            abort(404, 'Kamar tidak ditemukan.');
        }

        $relatedRooms = Room::with(['images'])
            ->where('slug', '!=', $targetSlug)
            ->take(3)
            ->get();

        if ($relatedRooms->isEmpty()) {
            $relatedRooms = collect($this->getDummyRooms())
                ->where('slug', '!=', $targetSlug)
                ->take(3)
                ->values();
        }

        return Inertia::render('Frontend/Rooms/Show', [
            'room' => $room,
            'relatedRooms' => $relatedRooms,
        ]);
    }

    private function getDummyRooms()
    {
        return [
            [
                'id' => 1,
                'slug' => 'deluxe-garden-suite',
                'name_id' => 'Deluxe Garden Suite',
                'name_en' => 'Deluxe Garden Suite',
                'short_desc_id' => 'Kamar elegan dengan pemandangan taman tropis Sleman yang asri dan sejuk.',
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
                'images' => [
                    (object)['image_path' => 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'],
                    (object)['image_path' => 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'],
                ],
                'facilities' => [
                    (object)['id' => 1, 'name_id' => 'Wi-Fi Cepat', 'name_en' => 'High-Speed Wi-Fi', 'icon_name' => 'Wifi'],
                    (object)['id' => 2, 'name_id' => 'AC', 'name_en' => 'Air Conditioner', 'icon_name' => 'Wind'],
                    (object)['id' => 3, 'name_id' => 'Water Heater', 'name_en' => 'Water Heater', 'icon_name' => 'Flame'],
                    (object)['id' => 4, 'name_id' => 'Sarapan', 'name_en' => 'Breakfast', 'icon_name' => 'Utensils'],
                ]
            ],
            [
                'id' => 2,
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
                'images' => [
                    (object)['image_path' => 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'],
                    (object)['image_path' => 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'],
                ],
                'facilities' => [
                    (object)['id' => 1, 'name_id' => 'Wi-Fi Cepat', 'name_en' => 'High-Speed Wi-Fi', 'icon_name' => 'Wifi'],
                    (object)['id' => 2, 'name_id' => 'AC', 'name_en' => 'Air Conditioner', 'icon_name' => 'Wind'],
                    (object)['id' => 3, 'name_id' => 'Smart TV 50"', 'name_en' => '50" Smart TV', 'icon_name' => 'Tv'],
                    (object)['id' => 4, 'name_id' => 'Kolam Renang', 'name_en' => 'Swimming Pool', 'icon_name' => 'Waves'],
                ]
            ],
            [
                'id' => 3,
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
                'bed_type' => '2 King Beds',
                'room_size' => '90 sqm',
                'is_featured' => true,
                'is_available' => true,
                'images' => [
                    (object)['image_path' => 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80'],
                    (object)['image_path' => 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'],
                ],
                'facilities' => [
                    (object)['id' => 1, 'name_id' => 'Wi-Fi Cepat', 'name_en' => 'High-Speed Wi-Fi', 'icon_name' => 'Wifi'],
                    (object)['id' => 2, 'name_id' => 'AC', 'name_en' => 'Air Conditioner', 'icon_name' => 'Wind'],
                    (object)['id' => 3, 'name_id' => 'Dapur Bersama', 'name_en' => 'Shared Kitchenette', 'icon_name' => 'Coffee'],
                    (object)['id' => 4, 'name_id' => 'Sarapan Tradisional', 'name_en' => 'Traditional Breakfast', 'icon_name' => 'Utensils'],
                ]
            ],
            [
                'id' => 4,
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
                'images' => [
                    (object)['image_path' => 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'],
                    (object)['image_path' => 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'],
                ],
                'facilities' => [
                    (object)['id' => 1, 'name_id' => 'Wi-Fi Cepat', 'name_en' => 'High-Speed Wi-Fi', 'icon_name' => 'Wifi'],
                    (object)['id' => 2, 'name_id' => 'AC', 'name_en' => 'Air Conditioner', 'icon_name' => 'Wind'],
                    (object)['id' => 3, 'name_id' => 'Water Heater', 'name_en' => 'Water Heater', 'icon_name' => 'Flame'],
                ]
            ],
            [
                'id' => 5,
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
                'images' => [
                    (object)['image_path' => 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'],
                    (object)['image_path' => 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'],
                ],
                'facilities' => [
                    (object)['id' => 1, 'name_id' => 'Wi-Fi Cepat', 'name_en' => 'High-Speed Wi-Fi', 'icon_name' => 'Wifi'],
                    (object)['id' => 2, 'name_id' => 'AC', 'name_en' => 'Air Conditioner', 'icon_name' => 'Wind'],
                    (object)['id' => 3, 'name_id' => 'Smart TV 50"', 'name_en' => '50" Smart TV', 'icon_name' => 'Tv'],
                    (object)['id' => 4, 'name_id' => 'Water Heater', 'name_en' => 'Water Heater', 'icon_name' => 'Flame'],
                ]
            ],
            [
                'id' => 6,
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
                'images' => [
                    (object)['image_path' => 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'],
                    (object)['image_path' => 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80'],
                ],
                'facilities' => [
                    (object)['id' => 1, 'name_id' => 'Wi-Fi Cepat', 'name_en' => 'High-Speed Wi-Fi', 'icon_name' => 'Wifi'],
                    (object)['id' => 2, 'name_id' => 'AC', 'name_en' => 'Air Conditioner', 'icon_name' => 'Wind'],
                    (object)['id' => 3, 'name_id' => 'Kolam Renang', 'name_en' => 'Swimming Pool', 'icon_name' => 'Waves'],
                    (object)['id' => 4, 'name_id' => 'Dapur Bersama', 'name_en' => 'Kitchenette', 'icon_name' => 'Coffee'],
                ]
            ],
        ];
    }
}
