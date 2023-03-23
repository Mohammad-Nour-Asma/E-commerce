<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Image;
use App\Models\NewAmount;
use App\Models\Order;
use App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\File;
use Psy\Readline\Hoa\Console;

class StorekeeperController extends Controller
{
    //
    public function index(){

        $order = Order::latest()
        ->filter(array_merge(\request(['ready']),['paid'=>'true']))
        ->get()
        ->map(function ($item) {
            return new OrderResource($item);
        });
        return response(['orders' => $order]);
    }



    public function setReady()
    {
       $order = Order::find(request('order_id'));
       if($order->paid == true){
        $order->update(['ready'=>true]);
        return response(['message'=>'became ready']);
    }
    return response(['message'=>'faild']);
    }

    public function orderAmounts(){
        $n = NewAmount::create([

            'product_id'=>request('product_id'),
            'amount_to_add'=>request('amount_to_add'),
            'price_for_one'=>request('price_for_one'),
            'total_price' => request('amount_to_add') * request('price_for_one'),
            'supplier_id'=>request('supplier_id'),
        ]);
        if($n) return response(['amount'=>$n,'message'=>"created"]);
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

        request('images')->each(function($item)use($product){
            Image::create(['product_id'=>$product->id]);
        });

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


            // (request('images'))->each(function($item) use($product){
            //      Image::create(['src'=>$item , 'product_id'=>$product->id]);
            // });

            $images=  request('images');

            foreach ($images as $item) {

                Image::create(['product_id'=>$product->id , 'src'=>$item]);

            }

        }

        return response(["product"=>$product]);

    }

    public function deleteProduct(){
        $product = request('product_id');
        $product->delete();

        return response(["messate"=>"deleted"]);

    }

}
