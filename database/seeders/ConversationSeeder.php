<?php

namespace Database\Seeders;

use App\Models\Conversation;
use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConversationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $messages = Message::whereNull('group_id')->orderBy('created_at')->get();

        $conversations = $messages->groupBy(function($message){
            return collect([$message->sender_id, $message->receiver_id])->sort()->implode('_');
        })->map(function($groupMessage){
            return[
                'user_id1'=>$groupMessage->first()->sender_id,
                'user_id2'=>$groupMessage->first()->receiver_id,
                'last_message_id'=>$groupMessage->last()->id,
                'created_at'=>new Carbon(),
                'updated_at'=>new Carbon(),
            ];
        });
        Conversation::insertOrIgnore($conversations->toArray());
    }
}
