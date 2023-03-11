<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class BrandController extends Controller
{
  public function index(){
      return \response(['brands'=>Brand::all()]);
  }
}
