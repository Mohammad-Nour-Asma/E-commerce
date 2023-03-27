<?php

namespace App\Http\Resources;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
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
            "product"=> new ProductsBrowse(Product::find($this->product_id)),
            "amount_in_warehouse"=> (Product::find($this->product_id))->amount_in_warehouse,
            "amount"=> $this->amount,
            'total_price'=> $this->total_price,
            'status'=> ((Product::find($this->product_id))->amount_in_warehouse - $this->amount)>=0 ?true : false,
        ];

    }
}
