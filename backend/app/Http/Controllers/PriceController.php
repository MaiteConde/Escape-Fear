<?php

namespace App\Http\Controllers;
use App\Price;

use Illuminate\Http\Request;

class PriceController extends Controller
{
    public function getAll()
    { 
        $prices = Price::with('rooms')->get();
        return $prices;
    }
   
    public function insert(Request $request)
    {
        try {
            $body = $request->all(); //req.body
            // dump($body);//dump() y dd() son de laravel, var_dump() de php, dd() corta el flujo
           
            // $body['total_price'] = $body['persons'] * $body['person_price'];

            $price = Price::create($body);
            return $price;
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
