<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
//        return parent::toArray($request);

        return [
            "id"=> $this->id,
            "user"=> User::find($this->user_id),
            "total_price"=> $this->total_price,
            "paid"=> $this->paid,
            "ready"=> $this->ready,
            "date"=> $this->created_at,
            "order_items"=> $this->orderItems->map(function ($item){
                return new OrderItemResource($item);
            }),
        ];
    }
}
