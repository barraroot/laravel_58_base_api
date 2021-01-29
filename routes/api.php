<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('auth/login', 'Api\\AuthController@login');

Route::group(['middleware' => ['jwt.verify']], function(){
    //Padrões Sistema
    Route::get('me', 'Api\\AuthController@me');

    Route::apiResource('users', 'Api\\UserController');
    Route::post('change-password/{user}', 'Api\\UserController@chanePassword');
});
