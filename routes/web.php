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

Route::get('/old', function () {
    return view('index');
});

Route::get('/old/thong-tin/{house_id}', function () {
    return view('thong-tin');
});

Route::get('/old/dang-nhap', function () {
    return view('dang-nhap');
});


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
Route::post('/api/property', [App\Http\Controllers\PropertiesController::class, 'postProperty']);

// Upload file
Route::post('/api/upload', [App\Http\Controllers\FilesController::class, 'uploadFiles']);

// Check register email exist
Route::post('/api/register/checkEmail', [App\Http\Controllers\UsersController::class, 'checkRegisterEmailExist']);

// Register
Route::post('/api/register', [App\Http\Controllers\UsersController::class, 'register']);

// Login
Route::post('/api/login', [App\Http\Controllers\UsersController::class, 'login']);

// Get Types
Route::get('/api/types', [App\Http\Controllers\PropertiesController::class, 'getPropertyTypes']);

Route::get('/', function () {
    return view('app');
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api\/)[\/\w\.-]*');

// Route::get('/{any}', function () {
//     return view('app');
// })->where('any', '^(?!api\/)[\/\w\.-]*');