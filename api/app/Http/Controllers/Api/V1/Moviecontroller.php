<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Response\ApiResponse;
use App\Models\Movie;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Exception;

class Moviecontroller extends Controller
{

    public function index()
    {
        try {
            $movies = Movie::where('status', true)->orderByDesc('id')->get();
            return ApiResponse::success('Lista de peliculas obtenida satisfactoriamente', 200, $movies);
        } catch (ModelNotFoundException $e) {
            return ApiResponse::error('Lista de peliculas no encontrada', 404);
        } catch (Exception $e) {
            return ApiResponse::error('Error al obtener lista de peliculas', 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:191|unique:movies',
                'description' => 'required|string|max:500',
                'created_at' => 'required|string|max:191',
                'image_path' => 'required|string|max:255',
                'is_liked' => 'boolean',
            ]);
            $movie = Movie::create($request->all());
            return ApiResponse::success('Movie creada satisfactoriamente', 201, $movie);
        } catch (ValidationException $e) {
            return ApiResponse::error('Error', 422, $e->validator->errors());
        }
    }

    public function show(int $id)
    {
        try {
            $movie = Movie::where('status', true)->findOrFail($id);
            return ApiResponse::success('Pelicula obtenida satisfactoriamente', 200, $movie);
        } catch (ModelNotFoundException $e) {
            return ApiResponse::error('Pelicula no encontrada', 404);
        }
    }

    public function update(Request $request, int $id)
    {
        try {
            $movie = Movie::where('status', true)->findOrFail($id);
            $request->validate([
                'title' => 'required|string|max:191|unique:movies,title,' . $movie->id,
                'description' => 'required|string|max:500',
                'created_at' => 'required|string|max:191',
                'image_path' => 'required|string|max:255',
                'is_liked' => 'boolean',
            ]);
            $movie->update($request->all());
            return ApiResponse::success('Movie actualizada satisfactoriamente', 200, $movie);
        } catch (ValidationException $e) {
            return ApiResponse::error('Error', 422, $e->validator->errors());
        } catch (ModelNotFoundException $e) {
            return ApiResponse::error('Pelicula no encontrada', 404);
        }
    }

    public function destroy(int $id)
    {
        try {
            $movie = Movie::where('status', true)->findOrFail($id);
            $movie->status = false;
            $movie->save();
            return ApiResponse::success('Pelicula eliminada satisfactoriamente', 204);
        } catch (ModelNotFoundException $e) {
            return ApiResponse::error('Pelicula no encontrada', 404);
        }
    }
}
