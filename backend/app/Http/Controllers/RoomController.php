<?php

namespace App\Http\Controllers;

use App\Room;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function getAll()
    { 
        $rooms = Room::with('category', 'assessment.user', 'reservations')->get();
        return $rooms;
    }


    public function getById($id) 
    { 
        $room = Room::with('category', 'assessment.user', 'reservations')->find($id);
        return $room;
    }
     

    public function insert(Request $request)
    {
        try {
          $body=  $request->validate(['name' => 'required','history' => 'required', 'persons' => 'required', 'time' => 'required', 'img' => 'required','city' => 'required', 'category_id' => 'required' ]);
            $imageName = time() . '-' . request()->img->getClientOriginalName(); //time() es como Date.now()
            request()->img->move('images/rooms', $imageName); //mueve el archivo subido al directorio indicado (en este caso public path es dentro de la carpeta public)
            $body['image_path'] = $imageName;
            $room = Room::create($body);
        } catch (\Exception $e) {
            return response($e,500);
        }
        return response($room, 201);
    }

    public function uploadImage(Request $request, $id)
    {
        try {
          
            $room = Room::find($id);
            $imageName = time() . '-' . request()->img->getClientOriginalName();
            request()->img->move('images/rooms', $imageName);
            $room->update(['image_path' => $imageName]);
            return response($room);
        } catch (\Exception $e) {
            return response([
                'error' => $e, 
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
