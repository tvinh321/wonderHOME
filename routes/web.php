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

Route::get('/add-example', [App\Http\Controllers\PropertyController::class, 'addExample']);

Route::get('/properties', [App\Http\Controllers\PropertyController::class, 'index']);

Route::get('/property/{id}', [App\Http\Controllers\PropertyController::class, 'show']);