<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function setSrcAttribute($src)
    {


        $newImageName = uniqid().''.'image'.'.'.$src->getClientOriginalExtension();
        $src->move(public_path('storage/images'),$newImageName);
        return $this->attributes['src'] = '/storage/images/'. $newImageName;
    }
}