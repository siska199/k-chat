<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name'=>'Siska Apriana Rifianti',
            'email'=>'siska@gmail.com',
            'password'=>bcrypt('password')
        ]);
        
        User::factory()
        ->count(10)
        ->create();
    }
}
