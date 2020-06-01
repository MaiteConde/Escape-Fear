<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $body = $request->all();
        $body['password'] = Hash::make($body['password']);
        $user = User::create($body);
        return response($user, 201);
    }


    public function uploadImage(Request $request)
    {
        try {
            $request->validate(['img' => 'required|image']);
            $user = Auth::user();
            $imageName = time() . '-' . request()->img->getClientOriginalName();
            request()->img->move('images/profile', $imageName);
            $user->update(['image_path' => $imageName]);
            return response($user);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }


    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Wrong Credentials'
            ], 400); 
        }
        $user = Auth::user(); 
        $token = $user->createToken('authToken')->accessToken;
        return response([
            $user,
            $token
        ]);
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return [
            'mensaje' => 'User successfully logged out'
        ];
    }
    public function getUserInfo(Request $request)
    {
        $user = Auth::user();
        
        return $user->load('assessments','reservations.room'); 
    } 

    public function update(Request $request)
    {
        try {
           
            $body = $request->validate([
                'name' => 'string|max:40',
                
            ]);
            $user = Auth::user();
            $user->update($body);
           
            return response($user->load('assessments','reservations.room'));
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    } 
}
