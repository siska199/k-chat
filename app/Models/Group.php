<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'owner_id',
        'last_message_id'
    ];

    public function owner(){
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function users(){
        return $this->belongsToMany(User::class, 'group_users','user_id', 'group_id');
    }

    public function messages(){
        return $this->hasMany(Message::class);
    }

    public function lastMessage(){
        return $this->belongsTo(Message::class, 'last_message_id');
    }

    
    
}
