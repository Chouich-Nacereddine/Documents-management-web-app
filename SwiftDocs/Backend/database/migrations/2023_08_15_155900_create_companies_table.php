<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('company_name',100); // Name
            $table->text('description')->default('description'); // Description
            $table->string('industry',100)->default('industry'); // Industry
            $table->string('headquarters')->default('headquarters'); // Headquarters
            $table->string('email',200);
            $table->string('password', 100);
            $table->string('company_contact')->default('contact'); // Phone Number
            $table->string('ceo_founder')->default('ceo_founder'); // CEO/Founder
            $table->json('ownership_structure')->default(DB::raw("'{}'")); // Ownership Structure
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
