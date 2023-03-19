<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=>  $this->id,
            "name"=>  $this->name,
            "processor"=>  $this->processor,
            "ram"=>  $this->ram,
            "description"=>  $this->description,
            "amount_in_warehouse"=>  $this->amount_in_warehouse,
            "price_for_selling"=>  $this->price_for_selling,
            "brand"=>  $this->brand->name,
            "created_at"=>  $this->created_at,

        ];
    }
}