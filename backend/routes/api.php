<?php

use App\Http\Controllers\AccountantController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartItemController;
use App\Http\Controllers\NewAmountsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StorekeeperController;
use App\Models\Product;
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
Route::get('/brands' , [BrandController::class , 'index']);

Route::group(['middleware' => ['jwt.verify']], function() {



   Route::post('/profile' , [AuthController::class , 'userProfile']);
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

    //Accountant
    Route::group(['middleware' => ['accountant']], function() {

         Route::post('/accountant/orders' , [AccountantController::class , 'index']);
         Route::post('/accountant/paid' , [AccountantController::class , 'paid']);
         Route::post('/accountant/confirmNewAmounts' , [AccountantController::class , 'confirmNewAmounts']);




        });

    //StoreKeeper
    Route::group(['middleware' => ['storekeeper']], function() {
        Route::post('/storekeeper/orders' , [StorekeeperController::class , 'index']);
        Route::post('/admins/products' , [ProductController::class , 'getForAdmins']);
        Route::post('/storekeeper/ready' , [StorekeeperController::class , 'setReady']);
        Route::post('/storekeeper/amounts' , [StorekeeperController::class , 'orderAmounts']);
        Route::post('/storekeeper/delete' , [ProductController::class , 'delete']);

    });

    //admins
    Route::group(['middleware' => ['admin']], function() {
        Route::post('/admin/products' , [ProductController::class , 'getForAdmins']);
        Route::post('/admin/users' , [AdminController::class , 'getUsers']);
        Route::post('/admin/user/order' , [AdminController::class , 'getUserOrders']);
        Route::post('/admin/confirm' , [AdminController::class , 'confirmAmounts']);

    });

    Route::post('/newAmounts/get' , [NewAmountsController::class , 'index']);


});