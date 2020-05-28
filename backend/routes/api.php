<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group( function () {


    Route::prefix('users')->group(function () {
        Route::post('/register', 'UserController@register');
        Route::post('/login', 'UserController@login');

        Route::middleware('auth:api')->group(function ()
        {
            Route::get('/logout','UserController@logout');
            Route::get('/info','UserController@getUserInfo');
        });
    });

    Route::prefix('categories')->group(function () {
        Route::get('/', 'CategoryController@getAll');
        Route::get('/{id}', 'CategoryController@getById');

        Route::middleware('auth:api')->group(function ()
        {
            Route::post('/','CategoryController@insert');
        });
    });

    Route::group([
        'prefix' => 'rooms',
    ], function () {
        Route::get('/', 'RoomController@getAll');
        Route::post('/', 'RoomController@insert');
        Route::get('/{id}', 'RoomController@getById');
    });

    
    Route::group([
        'prefix' => 'assessments',
        'middleware'=>'auth:api'
    ], function () {
        Route::get('/', 'AssessmentController@getAll');
        Route::post('/{id}', 'AssessmentController@insert');
    });
    Route::group([
        'prefix' => 'reservations',
        'middleware'=>'auth:api'
    ], function () {
        Route::get('/', 'ReservationController@getAll');
        Route::post('/{id}', 'ReservationController@insert');
    });



    
});