<?php

namespace Database\Seeders;

use App\Models\Group;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $numberOfGroup = 5;

        $owner = User::findOrFail(1);

        //Create groups
        for($i=0;$i < $numberOfGroup; $i++){
            $group = Group::factory()->create([
                'owner_id' => $owner->id
            ]);

            $users = User::inRandomOrder()->limit(rand(2,5))->pluck('id');
            $group->users()->attach(array_unique([1,...$users]));
        }
    }
}
