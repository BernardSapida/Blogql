<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\Topic;
use App\Models\User;
use App\Models\Post;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(20)->create();

        /* Create a topic into the database. */
        Topic::create(['name' => "Featured Sites", 'slug' => "featured"]);
        Topic::create(['name' => "Useful Links", 'slug' => "links"]);
        Topic::create(['name' => "Guides & Tutorials", 'slug' => "tutorials"]);

        Post::factory(20)->create();
    }
}
