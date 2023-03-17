<?php

namespace App\Http\Controllers;


use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class OrderController extends Controller
{
  public function order(){
      //Make The Order
     $order = Order::create([
          'user_id'=>auth()->user()->id,
          'total_price'=>0,

      ]);

      //Create the order items
      $totalOrderPrice = 0;
      auth()->user()->cartItems->each(function ($item) use($order,&$totalOrderPrice) {
         $orderItem= OrderItem::create([
              'order_id'=>$order->id,
              'product_id'=>$item->product_id,
              'amount'=>$item->amount,
              'total_price'=> $item->amount  * (Product::find($item->product_id))->price_for_selling,

          ]);
          $totalOrderPrice= $totalOrderPrice +$orderItem->total_price;
          $item->delete();
      });

      $order->update([
          'total_price'=>$totalOrderPrice
      ]);

      return response([
            'message'=>'successfully ordered',
            'status'=>200,
          ]
      );

  }
  public function index(){
    $orders = Order::latest()
        ->filter( array_merge(\request(['ready' , 'paid']) ,['user'=>auth()->user()->id]  ))
        ->get()
        ->map(function ($item){
            return new OrderResource($item);
        });

      return \response()->json(['orders'=>$orders ], 200);

  }
}