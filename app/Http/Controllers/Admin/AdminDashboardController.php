<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Room;
use App\Models\ContactMessage;
use App\Models\Gallery;
use App\Models\Testimonial;

class AdminDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_rooms' => Room::count(),
                'available_rooms' => Room::where('is_available', true)->count(),
                'unread_messages' => ContactMessage::where('is_read', false)->count(),
                'total_gallery' => Gallery::count(),
                'total_testimonials' => Testimonial::count(),
            ],
            'recent_messages' => ContactMessage::latest()->take(5)->get(),
        ]);
    }
}
