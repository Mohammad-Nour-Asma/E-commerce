<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewAmount extends Model
{
    protected $guarded =[];
    protected $with=['supplier','product'];
    use HasFactory;

    public function scopeFilter($quary, array $filters)
    {


        $quary->when($filters['accountant_checking'] ?? false, function($quary, $accountant_checking){
            $res =  $accountant_checking === 'true'? true: 0;

            $quary->where('accountant_checking',$res);
        });

        $quary->when($filters['admin_checking'] ?? false, function($quary, $admin_checking){
            $res =  $admin_checking === 'true'? true: 0;

            $quary->where('admin_checking',$res);
        });

    }
    public function supplier(){
        return $this->hasOne(Supplier::class,'id');
    }
    public function product(){
        return $this->hasOne(Product::class,'id');
    }

}