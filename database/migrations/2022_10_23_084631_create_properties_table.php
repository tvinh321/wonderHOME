<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Properties (
    id int  NOT NULL,
    title varchar(255)  NOT NULL,
    created_at timestamp  NOT NULL,
    location varchar(64)  NOT NULL,
    description Text()  NOT NULL,
    num_of_bedrooms smallint  NOT NULL,
    num_of_toilets smallint  NOT NULL,
    direction smallint  NOT NULL,
    price int  NOT NULL,
    priority smallint  NOT NULL,
    facade Float()  NOT NULL,
    area Float()  NOT NULL,
    expire_date date  NOT NULL,
    juridical_status smallint  NOT NULL,
    Juridicals_id int  NOT NULL,
    Users_id int  NOT NULL,
    Wards_id int  NOT NULL,
    CONSTRAINT Properties_pk PRIMARY KEY (id)
); */

return new class extends Migration
{

    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('title', 255);
            $table->timestamp('created_at');
            $table->string('location', 255);
            $table->text('description');
            $table->smallInteger('num_of_bedrooms');
            $table->smallInteger('num_of_toilets');
            $table->smallInteger('direction');
            $table->bigInteger('price');
            $table->smallInteger('priority');
            $table->float('facade');
            $table->float('area');
            $table->date('expire_date');
            $table->smallInteger('juridical_status');
            $table->uuid('Juridicals_id');
            $table->uuid('Users_id');
            $table->uuid('Wards_id');
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
