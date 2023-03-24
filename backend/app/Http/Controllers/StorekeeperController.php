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

        //Updating the amount in warehouse
        $order->orderItems->each(function($item){
            $product = Product::find($item->product_id);
            $oldProductAmount  = $product->amount_in_warehouse;
            $product->update([
                'amount_in_warehouse'=> $oldProductAmount - $item->amount ]);
        });
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




}
