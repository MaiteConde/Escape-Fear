<?php

namespace App\Http\Controllers;

use App\Assessment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AssessmentController extends Controller
{
    public function getAll()
    { 
        $assesments = Assessment::with('user', 'room')->get();
        return $assesments;
    }

    public function getPoints()
    { 
        $assesments = Assessment::where("points" , 5)->get(); 
        return $assesments->load('user', 'room');
    }
   
   
    public function insert(Request $request, $id)
    {
        try {
            $body = $request->all(); 
            
            $body['room_id'] = $id;
            $body['user_id'] = Auth::id();
            
            $assessment = Assessment::create($body);
            return $assessment;
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
