<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartItemController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login' , [AuthController::class , 'login']);
Route::post('/register' , [AuthController::class , 'register']);
Route::post('/products' , [ProductController::class , 'index']);
Route::get('/product/{product}' , [ProductController::class , 'details']);

Route::group(['middleware' => ['jwt.verify']], function() {

   Route::post('/logout' , [AuthController::class , 'logout']);
   Route::post('/logout' , [AuthController::class , 'logout']);

   //Cart
   Route::post('/cart/add' , [CartItemController::class , 'add']);
   Route::post('/cartItems' , [CartItemController::class , 'index']);
   Route::post('/cart/increase/{cartItem}' , [CartItemController::class , 'increase']);
   Route::post('/cart/decrease/{cartItem}' , [CartItemController::class , 'decrease']);
   Route::post('/cart/delete/{cartItem}' , [CartItemController::class , 'delete']);
   Route::post('/cart/empty' , [CartItemController::class , 'empty']);

   //Order
    Route::post('/order' , [OrderController::class , 'order']);
    Route::post('/order/get' , [OrderController::class , 'index']);


});
