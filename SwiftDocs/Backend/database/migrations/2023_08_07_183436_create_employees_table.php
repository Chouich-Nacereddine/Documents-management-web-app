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
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('First name', 100);
            $table->string('Last name', 100);
            $table->string('Gender', 100);
            $table->string('Phone number', 100);
            $table->string('Position', 100);
            $table->string('email', 100);
            $table->string('password', 100);
            $table->boolean('IsAdmin');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
