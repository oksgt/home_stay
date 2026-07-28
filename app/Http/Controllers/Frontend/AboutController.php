<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Testimonial;

class AboutController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::where('is_featured', true)->get();

        return Inertia::render('Frontend/About', [
            'testimonials' => $testimonials,
        ]);
    }
}
