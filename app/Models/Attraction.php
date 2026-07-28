<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attraction extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_id',
        'name_en',
        'distance_km',
        'travel_time',
        'image_path',
        'description_id',
        'description_en',
        'latitude',
        'longitude',
        'sort_order',
    ];
}
