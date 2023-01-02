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

// Query properties
Route::post('/api/properties', [App\Http\Controllers\PropertiesController::class, 'queryProperties']);

// Upload file
Route::post('/api/upload', [App\Http\Controllers\FilesController::class, 'uploadFiles'])->middleware(CheckUser::class);

// Register
Route::post('/api/register', [App\Http\Controllers\UsersController::class, 'register']);

// Login
Route::post('/api/login', [App\Http\Controllers\UsersController::class, 'login']);

Route::get('/', function () {
    return view('app');
});

Route::post('/api/messages', [App\Http\Controllers\ChatController::class, 'fetchMessages']);

Route::post('/api/send', [App\Http\Controllers\ChatController::class, 'sendMessage']);

Route::get('/api/chatRoom', [App\Http\Controllers\ChatController::class, 'getChatRooms'])->middleware(CheckUser::class);

Route::post('/api/createChatRoom', [App\Http\Controllers\ChatController::class, 'createChatRoom'])->middleware(CheckUser::class);

Route::get('/api/seen/{chatRoomId}', [App\Http\Controllers\ChatController::class, 'setSeen'])->middleware(CheckUser::class);

Route::get('/api/appointments', [App\Http\Controllers\AppointmentsController::class, 'getAppointments'])->middleware(CheckUser::class);

Route::post('/api/appointments', [App\Http\Controllers\AppointmentsController::class, 'createAppointment'])->middleware(CheckUser::class);

Route::delete('/api/appointments/{id}', [App\Http\Controllers\AppointmentsController::class, 'cancelAppointment'])->middleware(CheckUser::class);

Route::get('/api/18055852-d092774e-eeda-4c94-bc08-8f39f8cc5208', [App\Http\Controllers\SchedulerController::class, 'checkAppointments']);

Route::post('/api/rating/{id}', [App\Http\Controllers\RatingController::class, 'postRating']);

Route::post('/api/chat/uploadFiles', [App\Http\Controllers\FilesController::class, 'uploadFilesForChat'])->middleware(CheckUser::class);

Route::get('/api/chat/downloadFile/{chatId}/{fileName}', [App\Http\Controllers\FilesController::class, 'getFilesForChat']);

Route::get('/api/avatar/{id}', [App\Http\Controllers\FilesController::class, 'getAvatar']);

Route::post('/api/uploadAvatar', [App\Http\Controllers\FilesController::class, 'uploadAvatar'])->middleware(CheckUser::class);

Route::get('/api/reports', [App\Http\Controllers\ReportController::class, 'getReports'])->middleware(CheckUser::class);

Route::post('/api/reports', [App\Http\Controllers\ReportController::class, 'postReport']);

Route::get('/api/property/{id}/{fileName}', [App\Http\Controllers\FilesController::class, 'getFilesForProperty']);

Route::post('/api/userInfo', [App\Http\Controllers\UsersController::class, 'update'])->middleware(CheckUser::class);