<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\NewAmount;
use App\Models\Order;
use App\Models\Product;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use PhpParser\Node\Expr\BinaryOp\BooleanOr;

class AccountantController extends Controller
{
    //

    public function index(){
            $order = Order::latest()
                ->filter(\request(['paid']))
                ->get()
                ->map(function ($item) {
                    return new OrderResource($item);
                });


            return response(['orders' => $order]);


    }

    public function paid(){
        $order= Order::find(\request('order_id'));
        $order->update(['paid'=>true]);
        return response(['order'=>$order,'message'=>"updated", 'status'=>200]);
    }

    public function confirmNewAmounts()
    {
        $newAmounts = NewAmount::find(request('newAmounts_id'));
        if($newAmounts?->admin_checking){
            $newAmounts->update(['accountant_checking'=>true]);
            $product =Product::find($newAmounts->product_id);
           $product->update([
                'amount_in_warehouse'=> $product->amount_in_warehouse + $newAmounts->amount_to_add,
           ]);
           return response(['amount'=>$newAmounts]);
        }

        return response(['message'=>"Faild"]);
    }
}