<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Facility;

class FacilityController extends Controller
{
    public function index()
    {
        $facilities = Facility::orderBy('sort_order')->get();

        return Inertia::render('Frontend/Facilities', [
            'facilities' => $facilities,
        ]);
    }
}
