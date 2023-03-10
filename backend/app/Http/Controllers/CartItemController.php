<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class CartItemController extends Controller
{
    //
    public function add(){
        $cartItem =CartItem::create([
            'user_id'=> auth()->user()->id,
            'product_id'=>\request('product_id'),
            'amount'=>\request('amount'),
        ]);

        return response(['cartItem'=>$cartItem,'status'=>201]);

    }
    public function increase($cartItem){
        $cartItem= CartItem::find($cartItem);
        if(!$cartItem){
            return response(['message'=>"item not found" ,'status'=>404]);
        }

        $cartItem->update([
            'amount'=> $cartItem->amount + 1,
        ]);

        return response(['cartItem'=>$cartItem ,'status'=>200]);


    }

    public function decrease($cartItem){
        $cartItem= CartItem::find($cartItem);
        if(!$cartItem){
            return response(['message'=>"item not found" ,'status'=>404]);
        }

        if( $cartItem->amount == 0){
            $cartItem->delete();
            return response(['message'=>"Deleted Successfully" ,'status'=>204]);
        }

        $cartItem->update([
            'amount'=> $cartItem->amount - 1,
        ]);

        return response(['cartItem'=>$cartItem ,'status'=>200]);


    }

    public function delete($cartItem){
        $cartItem= CartItem::find($cartItem);
        if(!$cartItem){
            return response(['message'=>"item not found" ,'status'=>404]);
        }


            $cartItem->delete();
            return response(['message'=>"Deleted Successfully" ,'status'=>204]);

    }

    public function index(){
        return response([
            'cart'=> auth()->user()->cartItems->map(function ($item){
                return new CartResource($item);
            }),
            'status'=>200,
        ]);
    }

    public function empty(){
        auth()->user()->cartItems->each(function ($item){
            $item->delete();
        });

        return response(['message'=>"Emptied cart Successfully" ,'status'=>204]);
    }


}
