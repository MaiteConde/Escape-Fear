<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group( function () {

    Route::group([
        'prefix' => 'products',
        'middleware'=>'auth:api'
    ], function () {
        Route::get('/', 'ProductController@getAll');
        Route::post('/', 'ProductController@insert');
    });

    Route::prefix('users')->group(function () {
        Route::post('/register', 'UserController@register');
        Route::post('/login', 'UserController@login');

        Route::middleware('auth:api')->group(function ()
        {
            Route::get('/logout','UserController@logout');
            Route::get('/info','UserController@getUserInfo');
        });
    });
});