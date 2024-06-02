<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Moviecontroller;
use App\Http\Controllers\Api\V1\LikeMovieController;

Route::prefix('v1')->group(function () {
    Route::apiResource('movies', Moviecontroller::class);
    //Route::get('/movies/{id}/delete', [Moviecontroller::class, 'delete']);
    Route::patch('movies/{id}/like', LikeMovieController::class);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
