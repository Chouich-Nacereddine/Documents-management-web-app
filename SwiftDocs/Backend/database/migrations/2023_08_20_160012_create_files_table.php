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
        Schema::create('files', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('File_Name', 100)->default('File_Name');
            $table->string('Physical_location', 200)->default('Physical_location');
            $table->string('Folder_location', 200)->default('Folder_location');
            $table->text('Description', 600)->default('Description');
            $table->string('Process', 100)->default('Process');
            $table->string('Company', 100)->default('Process');
            $table->boolean('IsValidat', 200)->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files');
    }
};
