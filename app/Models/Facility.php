<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_id',
        'name_en',
        'icon_name',
        'category',
        'is_featured',
        'sort_order',
    ];

    public function rooms()
    {
        return $this->belongsToMany(Room::class, 'room_facility');
    }
}
