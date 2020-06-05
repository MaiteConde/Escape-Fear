<?php

namespace App\Http\Controllers;

use App\Reservation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Mail\ReservationShipped;
use Illuminate\Support\Facades\Mail;



class ReservationController extends Controller
{
    public function getAll()
    { 
        $reservations = Reservation::with('room', 'user')->get();
        return $reservations;
    }
   
    public function insert(Request $request, $id)
    {
        try {
            $body = $request->all(); 
            
           
            $body['room_id'] = $id;
            $body['user_id'] = Auth::id();
            $reservation = Reservation::create($body);
            Mail::to($reservation->user->email)->send(new ReservationShipped($reservation));

            return $reservation;
      } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function delete($id)
    {
        try {
            $reservation = Reservation::find($id) ;
           
            $reservation->delete();
            
            return response([
                'message' => 'Reservation deleted',
                'reservation' => $reservation
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        
        }
    }
}
