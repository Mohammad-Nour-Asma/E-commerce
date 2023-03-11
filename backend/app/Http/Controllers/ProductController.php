<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductDetails;
use App\Http\Resources\ProductsBrowse;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ProductController extends Controller
{
    //
    public function index (){
        return response([
            "products"=>Product::latest()
                ->filter(\request(['search' , 'brand' , 'ram', 'price']))
                ->get()
                ->map(function ($item ){
                    return new ProductsBrowse($item);
                }),
                'status'=>200,
            ]);
    }

    public function details(Product $product){

        return response([
            'product'=> new ProductDetails($product),
            'status'=> 200,
        ]);
    }
}
