<?php

namespace App\Http\Controllers;

use App\Models\NewAmount;
use App\Models\Product;
use Illuminate\Routing\Controller;

use Illuminate\Http\Request;

class NewAmountsController extends Controller
{
    //

    public function index()
    {
        if(auth()->user()->role->role_name == 'accountant' || 'storekeeper' || 'admin'){
       $newAmounts = NewAmount::latest()
       ->filter(request(['accountant_checking' , 'admin_checking','supplier_id']))
       ->get();

       return response(['newAmounts'=>$newAmounts]);}
       return response(['message'=>'unauthorized']);
    }


}
