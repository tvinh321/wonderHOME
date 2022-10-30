<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Favorites (
    Properties_id int  NOT NULL,
    Users_id int  NOT NULL,
    CONSTRAINT Properties_Users_pk PRIMARY KEY (Properties_id,Users_id)
); */

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('favorites', function (Blueprint $table) {
            $table->uuid('Properties_id');
            $table->uuid('Users_id');
            $table->primary(['Properties_id', 'Users_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favorites');
    }
};
