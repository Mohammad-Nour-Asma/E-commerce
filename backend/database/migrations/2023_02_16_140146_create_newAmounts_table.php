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
        Schema::create('newAmounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id');
            $table->foreignId('orderIn_id');
            $table->integer('amount_to_add');
            $table->float('price_for_one');
            $table->float('total_price');
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
