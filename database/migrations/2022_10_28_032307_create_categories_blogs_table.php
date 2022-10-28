<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Categories_Blogs (
    Categories_id int  NOT NULL,
    Blogs_id int  NOT NULL,
    CONSTRAINT Categories_Blogs_pk PRIMARY KEY (Categories_id,Blogs_id)
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
        Schema::create('categories_blogs', function (Blueprint $table) {
            $table->uuid('Categories_id');
            $table->uuid('Blogs_id');
            $table->primary(['Categories_id', 'Blogs_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories_blogs');
    }
};
