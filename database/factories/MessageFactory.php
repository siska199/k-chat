<?php

namespace Database\Factories;

use App\Models\Group;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $senderId = null;
        $receiverId = null;
        $groupId = null;
        //Preparing message that assosiate with conversation or group
        //50 Persen create message assoiate wth group or conversation

        //Message asosiate with group
        if($this->faker->boolean(50)){
            $groupId = $this->faker->randomElement(Group::pluck('id')->toArray());
            $group = Group::find($groupId);
            $senderId =$this->faker->randomElement($group->users->pluck('id')->toArray());

            //Untuk conversation group receiver idnya null 
        }else{
            // Logic ini berdasar pada kita akan menggunkan user 1 sebagai user kita untuk login nanti

            $senderId = $this->faker->randomElement([0,1]);

            //Jika 0 maka kita kan memilikih random sender id lain yang terdapat pada database
            if($senderId==0){
                $senderId = $this->faker->randomElement(User::where('id','!=',1)->pluck('id')->toArray());
                $receiverId=1;
            }else{
                $receiverId=$this->faker->randomElement(User::where('id', '!=', 1)->pluck('id')->toArray());
            }

        }

        return [
            'sender_id'=>$senderId,
            'receiver_id'=>$receiverId,
            'group_id'=>$groupId,
            'message'=>$this->faker->realText(200),
            'created_at'=>$this->faker->dateTimeBetween('-1 year', 'now')
        ];
    }
}
