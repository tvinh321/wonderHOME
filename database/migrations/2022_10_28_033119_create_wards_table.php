<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Wards (
    id int  NOT NULL,
    name varchar(32)  NOT NULL,
    Districts_id int  NOT NULL,
    CONSTRAINT Wards_pk PRIMARY KEY (id)
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
        Schema::create('wards', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('name', 32);
            $table->uuid('Districts_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wards');
    }
};
