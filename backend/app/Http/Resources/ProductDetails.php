<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductDetails extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,
            'price'=>$this->price_for_selling,
            'name'=>$this->name,
            'description'=>$this->description,
            'created'=>$this->created_at,
            'processor'=>$this->processor,
            'ram'=>$this->ram,
            'brand'=>$this->brand->name,
            'images'=>$this->images->map(function ($item){
                return $item->src;
            })
        ];
    }
}
