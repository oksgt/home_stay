<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Room;
use App\Models\Facility;
use App\Models\Attraction;
use App\Models\Testimonial;
use App\Models\Faq;
use App\Models\Gallery;

class HomeController extends Controller
{
    public function index()
    {
        $featuredRooms = Room::with(['images', 'facilities'])
            ->where('is_available', true)
            ->where('is_featured', true)
            ->orderBy('sort_order')
            ->get();

        $featuredFacilities = Facility::where('is_featured', true)
            ->orderBy('sort_order')
            ->take(8)
            ->get();

        $attractions = Attraction::orderBy('sort_order')
            ->take(4)
            ->get();

        $testimonials = Testimonial::where('is_featured', true)
            ->get();

        $faqs = Faq::orderBy('sort_order')
            ->take(5)
            ->get();

        $galleries = Gallery::orderBy('sort_order')
            ->take(6)
            ->get();

        return Inertia::render('Frontend/Home', [
            'featuredRooms' => $featuredRooms,
            'featuredFacilities' => $featuredFacilities,
            'attractions' => $attractions,
            'testimonials' => $testimonials,
            'faqs' => $faqs,
            'galleries' => $galleries,
        ]);
    }
}
