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
            $table->string('First_name',100)->default('First name');
            $table->string('Last_name',100)->default('Last name');
            $table->string('Gender')->default('M/f');
            $table->string('Phone_number')->default('Phone number');
            $table->boolean('IsAdmin')->default(false);
            $table->string('Position')->default('Position');
            $table->string('email',200);
            $table->string('password', 100);
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
