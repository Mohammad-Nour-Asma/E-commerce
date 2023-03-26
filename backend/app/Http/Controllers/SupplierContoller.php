<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class SupplierContoller extends Controller
{
    public function index()
    {
        return response(['suppliers'=>Supplier::all()]);
    }
    public function add()
    {
        if(auth()->user()->role->role_name == 'accountant' || 'storekeeper' || 'admin'){
        $supplier = Supplier::create([
            'name'=>request('name'),
            'email'=>request('email'),
            'phone'=>request('phone'),
    ]);
    return response(['supplier' => $supplier]);
}
            return response(['message'=>'unauthorized']);

    }
}
