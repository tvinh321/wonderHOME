<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/thong-tin', function () {
    return view('thong-tin');
});


// Get cities
Route::get('/api/cities', [App\Http\Controllers\LocationController::class, 'getCities']);

// Get districts
Route::get('/api/districts/{city_id}', [App\Http\Controllers\LocationController::class, 'getDistricts']);

// Get wards
Route::get('/api/wards/{district_id}', [App\Http\Controllers\LocationController::class, 'getWards']);

// Get properties
Route::get('/api/properties', [App\Http\Controllers\PropertiesController::class, 'getProperties']);

// Get property
Route::get('/api/property/{id}', [App\Http\Controllers\PropertiesController::class, 'getProperty']);