<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'name_id',
        'name_en',
        'short_desc_id',
        'short_desc_en',
        'description_id',
        'description_en',
        'price_per_night',
        'discount_price',
        'capacity_adults',
        'capacity_children',
        'bed_type',
        'room_size',
        'is_featured',
        'is_available',
        'sort_order',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_available' => 'boolean',
        'price_per_night' => 'decimal:2',
        'discount_price' => 'decimal:2',
    ];

    public function images()
    {
        return $this->hasMany(RoomImage::class)->orderBy('sort_order');
    }

    public function primaryImage()
    {
        return $this->hasOne(RoomImage::class)->where('is_primary', true);
    }

    public function facilities()
    {
        return $this->belongsToMany(Facility::class, 'room_facility');
    }
}
