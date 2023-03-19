<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    public function setImageAttribute($src)
    {
        $newImageName = uniqid().''.'image'.'.'.$src->extention();
        $src->move(public_path('images'),$newImageName);
        return $this->attributes['src'] = '/images/'. $newImageName;
    }
}