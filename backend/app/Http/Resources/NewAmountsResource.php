<?php

namespace App\Http\Resources;

use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NewAmountsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            "product_id"=>  $this->product_id,
            "amount_to_add"=>  $this->iamount_to_addd,
            "price_for_one"=>  $this->price_for_one,
            "total_price"=>  $this->total_price,
            "supplier_id"=>  $this->supplier_id,
            "admin_checking"=> $this->admin_checking,
            "accountant_checking"=>  $this->accountant_checking,
            "created_at"=>  $this->created_at,
            'product'=> Product::find($this->product_id),
            'supplier'=>Supplier::find($this->supplier_id),


        ];
    }
}
