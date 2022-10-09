<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->sentence(3),
            'lead' => fake()->text(200),
            'content' => fake()->paragraphs(10, true),
            'topic_id' => random_int(1, 3),
            'author_id' => random_int(1, 3),
        ];
    }
}
