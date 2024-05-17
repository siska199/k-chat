<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/**
 * File to control routing in web
 */

// NON-AUTH ROUTE
Route::group([
    // 'middleware'=>['auth', 'verified']
],function(){
    Route::get('/',[HomeController::class,'home'])->name('home');
    Route::get('/login-test', function () {
        return inertia('LoginTest'); 
    })->name('login');
});

//AUTH ROUTE
Route::group([
    'middleware'=>['auth', 'verified']
],function(){
    //----
});


require __DIR__.'/auth.php';
