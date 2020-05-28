<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assessment extends Model
{
    protected $fillable=[ 'user_id','room_id', 'assessment', 'points'];
    public function room()
    {
       return $this->belongsTo('\App\Room');
    }
    public function user()
    {
       return $this->belongsTo('\App\User');
    }
}
