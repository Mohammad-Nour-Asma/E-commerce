<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class CartItemController extends Controller
{
    //
    public function add(){
        $cartExisting = auth()->user()
            ->cartItems
            ->where('product_id', \request('product_id'))
            ->first();

        if($cartExisting){
            $cartExisting->update([
                'amount'=> $cartExisting->amount + \request('amount'),
                'subtotal'=> $cartExisting->subtotal + (\request('amount') * Product::find(\request('product_id'))->price_for_selling) ,
            ]);

            return response(['cartItem'=>$cartExisting,'status'=>201]);

        }

        $cartItem =CartItem::create([
            'user_id'=> auth()->user()->id,
            'product_id'=>\request('product_id'),
            'amount'=>\request('amount'),
            'subtotal'=> \request('amount') * Product::find(\request('product_id'))->price_for_selling
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
            'subtotal'=> $cartItem->subtotal + Product::find($cartItem->product_id)->price_for_selling
        ]);

        return response(['cartItem'=>$cartItem ,'status'=>200]);


    }

    public function decrease($cartItem){
        $cartItem= CartItem::find($cartItem);
        if(!$cartItem){
            return response(['message'=>"item not found" ,'status'=>404]);
        }

        if( $cartItem->amount == 1){
            $cartItem->delete();
            return response(['message'=>"Deleted Successfully" ,'status'=>204]);
        }

        $cartItem->update([
            'amount'=> $cartItem->amount - 1,
            'subtotal'=> $cartItem->subtotal - Product::find($cartItem->product_id)->price_for_selling

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
            'total_cart_price'=>CartItem::getCartPrice(),
            'status'=>200,
        ]);
    }

    public function empty(){
        auth()->user()->cartItems->each(function ($item){
            $item->delete();
        });

        return response(['message'=>"Emptied cart Successfully", 'total_cart_price'=>0 ,'status'=>204]);
    }


}
