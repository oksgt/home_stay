<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\RoomController;
use App\Http\Controllers\Frontend\AboutController;
use App\Http\Controllers\Frontend\FacilityController;
use App\Http\Controllers\Frontend\GalleryController;
use App\Http\Controllers\Frontend\AttractionController;
use App\Http\Controllers\Frontend\ContactController;
use App\Http\Controllers\Admin\AdminDashboardController;

// Locale Redirect / Handler
Route::get('/', [HomeController::class, 'index'])->name('home');

// Localized Route Group (Indonesian & English URL Support)
Route::prefix('{locale}')->where(['locale' => 'id|en'])->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('localized.home');
    Route::get('/about', [AboutController::class, 'index'])->name('about');
    Route::get('/rooms', [RoomController::class, 'index'])->name('rooms.index');
    Route::get('/rooms/{slug}', [RoomController::class, 'show'])->name('rooms.show');
    Route::get('/facilities', [FacilityController::class, 'index'])->name('facilities');
    Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery');
    Route::get('/attractions', [AttractionController::class, 'index'])->name('attractions');
    Route::get('/contact', [ContactController::class, 'index'])->name('contact');
    Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
});

// Direct Web Fallback Routes (without prefix)
Route::get('/about', [AboutController::class, 'index']);
Route::get('/rooms', [RoomController::class, 'index']);
Route::get('/rooms/{slug}', [RoomController::class, 'show']);
Route::get('/facilities', [FacilityController::class, 'index']);
Route::get('/gallery', [GalleryController::class, 'index']);
Route::get('/attractions', [AttractionController::class, 'index']);
Route::get('/contact', [ContactController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

// CMS Admin Routes
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
});
