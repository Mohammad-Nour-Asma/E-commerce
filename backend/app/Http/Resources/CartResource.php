<?php

namespace App\Http\Resources;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
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
            "user_id"=> $this->user_id,
            "amount"=> $this->amount,
            "created_at"=> $this->created_at,
       ];
    }
}
