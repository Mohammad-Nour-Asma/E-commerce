<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $with = ["orderItems"];

    public function scopeFilter($quary, array $filters)
    {


            $quary->where(fn($quary) => $quary->where('user_id', auth()->user()->id)
            );


        $quary->when($filters['paid'] ?? false, function ($quary, $paid) {
            $quary->where(fn($quary) => $quary->where('paid', $paid)
            );

        });


        $quary->when($filters['ready'] ?? false, function($quary, $ready){
            $quary->where('ready',$ready);
        }
        )  ;


    }


    public function orderItems(){
        return $this->hasMany(OrderItem::class);
    }
}
