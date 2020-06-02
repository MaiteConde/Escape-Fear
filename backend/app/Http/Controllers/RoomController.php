<?php

namespace App\Http\Controllers;

use App\Room;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function getAll()
    { 
        $rooms = Room::with('category', 'assessment.user')->get();
        return $rooms;
    }


    public function getById(Request $request, $id) 
    { 
        $room = Room::with('category', 'assessment.user')->find($id);
        return $room;
    }
    public function insert(Request $request)
    {
        try {
            $body = $request->all(); //req.body
            // dump($body);//dump() y dd() son de laravel, var_dump() de php, dd() corta el flujo

        
            $room = Room::create($body);
            return $room;
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function delete($id)
    {
        try {
            $room = Room::find($id) ;
           
            $room->delete();
            
            return response([
                'message' => 'Reservation deleted',
                'room' => $room
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        
        }
    }

    public function update(Request $request, $id)
    {

        try {
            $body = $request->all();
            $room = Room::find($id);
            $room -> update($body);
           
            return response($room->load('category', 'assessment.user'));
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    } 
}
