<?php

namespace App\Http\Controllers;

use App\Category;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAll()
    { 
        $categories = Category::with('rooms')->get();
        return $categories;
    }


    public function getById(Request $request, $id)
    { 
        $category = Category::with('rooms')->find($id);
        return $category;
    }

    public function insert(Request $request)
    {
        try {
            $body = $request->all(); //req.body
            // dump($body);//dump() y dd() son de laravel, var_dump() de php, dd() corta el flujo
 
        
            $category = Category::create($body);
            return $category;
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
