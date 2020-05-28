<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable=['name', 'time' , 'history','persons', 'city','image_path','category_id'];
    public function category()
    {
       return $this->belongsTo('\App\Category');
    }
   
    public function assessment()
    {
       return $this->hasMany('\App\Assessment');
    }

    public function reservations()
    {
       return $this->hasMany('\App\Reservation');
    }
   
    }

    