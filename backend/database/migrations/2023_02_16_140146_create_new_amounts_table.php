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
        Schema::create('new_amounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id');
            $table->integer('amount_to_add');
            $table->float('price_for_one');
            $table->float('total_price');
            $table->foreignId('supplier_id');
            $table->boolean('admin_checking')->default(false);
            $table->boolean('accountant_checking')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('new_amounts');
    }
};