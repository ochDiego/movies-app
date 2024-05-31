<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->unique()->sentence(1),
            'description' => fake()->text(200),
            'created_at' => fake()->date(),
            'image_path' => fake()->imageUrl(),
            'is_liked' => rand(0, 1),
        ];
    }
}
