<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Properties (
    id int  NOT NULL,
    created_at timestamp  NOT NULL,
    location_number varchar(32)  NOT NULL,
    description Text()  NOT NULL,
    num_of_bedrooms smallint  NOT NULL,
    num_of_toilets smallint  NOT NULL,
    direction smallint  NOT NULL,
    price int  NOT NULL,
    priority smallint  NOT NULL,
    facade Float()  NOT NULL,
    area Float()  NOT NULL,
    expire_date date  NOT NULL,
    Streets_id int  NOT NULL,
    Juridicals_id int  NOT NULL,
    Users_id int  NOT NULL,
    CONSTRAINT Properties_pk PRIMARY KEY (id)
); */

return new class extends Migration
{

    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title', 256);
            $table->dateTime('created_at');
            $table->string('location', 256)->unique();
            $table->text('description');
            $table->smallInteger('num_of_bedrooms');
            $table->smallInteger('num_of_toilets');
            $table->smallInteger('direction');
            $table->bigInteger('price');
            $table->smallInteger('priority');
            $table->float('facade');
            $table->float('area');
            $table->date('expire_date');
            $table->uuid('Wards_id');
            $table->uuid('Juridicals_id');
            $table->uuid('Users_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('properties', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
};
