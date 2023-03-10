<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orderIn', function (Blueprint $table) {
            $table->id();
            $table->string('storekeeper_id');
            $table->float('total_price');
            $table->foreignId('supplier_id');
            $table->boolean('admin_checking');
            $table->boolean('accountant_checking');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_items');
    }
};
