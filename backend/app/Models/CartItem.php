<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;
    protected $guarded=[];
    static public function getCartPrice(){

        $totalPrice = 0;
        auth()->user()->cartItems->each(function ($item)use(&$totalPrice){
            $totalPrice += $item->subtotal;
        });
        return $totalPrice;
    }
}
