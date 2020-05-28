<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable=[ 'persons', 'date', 'user_id', 'room_id', 'price'];
    public function room()
    {
       return $this->belongsTo('\App\Room');
    }
    public function user()
    {
       return $this->belongsTo('\App\User');
    }
    
  
}
