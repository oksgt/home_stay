<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Attraction;

class AttractionController extends Controller
{
    public function index()
    {
        $attractions = Attraction::orderBy('sort_order')->get();

        return Inertia::render('Frontend/Attractions', [
            'attractions' => $attractions,
        ]);
    }
}
