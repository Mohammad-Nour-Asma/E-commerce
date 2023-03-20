<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductDetails;
use App\Http\Resources\ProductResource;
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
    public function getForAdmins (){


        return response([
            "products"=>Product::latest()
                ->filter(\request(['search' , 'brand' , 'ram', 'price','amount_in_warehouse']))
                ->get()
                 ->map(function ($item ){
                    return new ProductResource($item);
                }),
                'status'=>200,
            ]);
    }
    public function delete()
    {
       $product = Product::find(request('product_id'));
       $product?->update(['amount_in_warehouse'=>0]);
       return response(['product'=>$product]);
    }
}