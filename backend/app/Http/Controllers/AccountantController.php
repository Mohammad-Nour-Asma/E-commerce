<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use PhpParser\Node\Expr\BinaryOp\BooleanOr;

class AccountantController extends Controller
{
    //

    public function index(){

        if(Role::find(auth()->user()->role_id)->role_name == 'accountant') {




            $order = Order::latest()
                ->filter(\request(['paid' , 'ready']))
                ->get()
                ->map(function ($item) {
                    return new OrderResource($item);
                });


            return response(['orders' => $order]);
        }
        return response(['message'=>'you are not authorized']);
    }

    public function paid(){
        if(Role::find(auth()->user()->role_id)->role_name == 'accountant') {
        $order= Order::find(\request('order_id'));
        $order->update(['paid'=>true]);
        return response(['order'=>$order,'message'=>"updated", 'status'=>200]);
        }
        return response(['message'=>'you are not authorized']);

    }
}