<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Favorites (
    Users_id int  NOT NULL,
    Properties_id int  NOT NULL,
    CONSTRAINT Favorites_pk PRIMARY KEY (Users_id,Properties_id)
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
            $table->uuid('Users_id');
            $table->uuid('Properties_id');
            $table->primary(['Users_id', 'Properties_id']);
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
