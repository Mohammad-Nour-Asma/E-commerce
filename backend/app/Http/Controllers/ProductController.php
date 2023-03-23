<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductDetails;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductsBrowse;
use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\File;

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

    public function addProduct(){
        $product = Product::create([
          'name'=>request('name'),
          'processor'=>request('processor'),
          'ram'=>request('ram'),
          'description'=>request('description'),
          'price_for_selling'=>request('price_for_selling'),
          'brand_id'=>request('brand_id'),
          'amount_in_warehouse'=>0,

        ]);

        $images=  request('images');
        foreach ($images as $item) {

            Image::create(['product_id'=>$product->id , 'src'=>$item]);

        }

        return response(["product"=>$product]);
    }

    public function editProduct(){
        $product = Product::find(request('id'));


        $product->update([
          'name'=>request('name'),
          'processor'=>request('processor'),
          'ram'=>request('ram'),
          'description'=>request('description'),
          'price_for_selling'=>request('price_for_selling'),
          'brand_id'=>request('brand_id'),
        ]);

        if(request('images')){
            $product->images->each(function($item){
                File::delete(public_path($item->src));
                $item->delete();
            });




            $images=  request('images');

            foreach ($images as $item) {

                Image::create(['product_id'=>$product->id , 'src'=>$item]);

            }

        }

        return response(["product"=>$product]);

    }
}