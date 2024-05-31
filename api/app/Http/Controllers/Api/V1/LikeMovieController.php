<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Response\ApiResponse;
use App\Models\Movie;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class LikeMovieController extends Controller
{
    public function __invoke(Request $request, int $id)
    {
        try {
            $movie = Movie::where('status', true)->findOrFail($id);
            $movie->is_liked = $request->is_liked;
            $movie->save();

            return ApiResponse::success($movie);
        } catch (ModelNotFoundException $e) {
            return ApiResponse::error('Pelicula no encontrada', 404);
        }
    }
}
