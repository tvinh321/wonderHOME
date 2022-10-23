<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->increments('id');

            // "created_at" and "modified_at" are automatically added by Laravel
            $table->timestamps();

            $table->string('location', 255);
            $table->text('description');
            $table->integer('price');
            $table->integer('bedrooms');
            $table->integer('bathrooms');
            $table->tinyInteger('direction');
            $table->tinyInteger('priority');
            $table->integer('facade');
            $table->integer('area');
            $table->tinyInteger('juridical');
            $table->string('conveniences', 50);
            $table->date('expired_at');

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
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
