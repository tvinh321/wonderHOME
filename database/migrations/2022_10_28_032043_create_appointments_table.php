<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Appointments (
    id int  NOT NULL,
    from_time timestamp  NOT NULL,
    to_time timestamp  NOT NULL,
    CONSTRAINT Appointments_pk PRIMARY KEY (id)
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
        Schema::create('appointments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->dateTime('from_time');
            $table->dateTime('to_time');
            $table->uuid('buyer');
            $table->uuid('seller');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
};
