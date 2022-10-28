<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Conveniences_Properties (
    Conveniences_id int  NOT NULL,
    Properties_id int  NOT NULL,
    CONSTRAINT Conveniences_Properties_pk PRIMARY KEY (Conveniences_id,Properties_id)
);  */

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conveniences_properties', function (Blueprint $table) {
            $table->uuid('Conveniences_id');
            $table->uuid('Properties_id');
            $table->primary(['Conveniences_id', 'Properties_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('conveniences_properties');
    }
};
