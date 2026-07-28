<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'guest_name',
        'guest_country',
        'rating',
        'comment',
        'source_badge',
        'avatar_path',
        'is_featured',
    ];
}
