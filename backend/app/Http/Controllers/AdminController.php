<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Http\Resources\UserResource;
use App\Models\NewAmount;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AdminController extends Controller
{
    public function getUsers()
    {
       $users = User::all()
       ->map(function($item){
        return new UserResource($item);
    });
    return response(['users'=>$users]);
    }

    public function getUserOrders()
    {
      $user = User::find(request('user_id'));
      $orders = $user->orders->map(function($item){
       return new OrderResource($item);
      });
      return response(['orders'=>$orders]);
    }


    public function confirmAmounts()
    {
        $newAmount = NewAmount::find(request('newAmount_id'));
        $newAmount->update(['admin_checking'=>true]);
        return response(['message'=>'updated Successfully']);
    }
}