<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded=[];

    use HasFactory;


    public function scopeFilter($quary, array $filters)
    {

        $quary->when($filters['search'] ?? false, function ($quary, $search) {
            $quary->where(fn($quary) => $quary->where('name', 'like', '%' . $search . '%')
                ->orWhere('processor', 'like', '%' . $search . '%')
            );

        });


        $quary->when($filters['brand'] ?? false, function($quary, $brand){
            $quary->where('brand_id',$brand);
          }
        )  ;

        $quary->when($filters['ram'] ?? false, function($quary, $ram){
            $quary->where('ram','<=',$ram);
          }
        ) ;

        $quary->when($filters['price'] ?? false, function($quary, $price){
            $quary->where('price_for_selling','<=',$price);
          }
        ) ;

        $quary->when($filters['amount_in_warehouse'] ?? false, function($quary, $amount){
            $quary->where('amount_in_warehouse','<=',$amount);
          }
        ) ;

    }

    public function images(){
        return $this->hasMany(Image::class);
    }

    public function brand(){
        return $this->belongsTo(Brand::class);
    }


}
