<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckUser;
use App\Http\Middleware\CheckAdmin;

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

//Get React page
Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api\/)[\/\w\.-]*');

// Get cities
Route::get('/api/cities', [App\Http\Controllers\LocationController::class, 'getCities']);

// Get districts
Route::get('/api/districts/{city_id}', [App\Http\Controllers\LocationController::class, 'getDistricts']);

// Get wards
Route::get('/api/wards/{district_id}', [App\Http\Controllers\LocationController::class, 'getWards']);

// Get property
Route::get('/api/property/{id}', [App\Http\Controllers\PropertiesController::class, 'getPropertyById']);

// Get 6 highest priority properties (for Landing Page)
Route::get('/api/properties/highest-priority', [App\Http\Controllers\PropertiesController::class, 'getHighestPriorityProperties']);

// Post new property
Route::post('/api/property', [App\Http\Controllers\PropertiesController::class, 'postProperty'])->middleware(CheckUser::class);

// Upload file
Route::post('/api/upload', [App\Http\Controllers\FilesController::class, 'uploadFiles'])->middleware(CheckUser::class);

// Register
Route::post('/api/register', [App\Http\Controllers\UsersController::class, 'register']);

// Login
Route::post('/api/login', [App\Http\Controllers\UsersController::class, 'login']);

// Get Types
Route::get('/api/types', [App\Http\Controllers\PropertiesController::class, 'getPropertyTypes']);

Route::get('/', function () {
    return view('app');
});



// Route::get('/{any}', function () {
//     return view('app');
// })->where('any', '^(?!api\/)[\/\w\.-]*');