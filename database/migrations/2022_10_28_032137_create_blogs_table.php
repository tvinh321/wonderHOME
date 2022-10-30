<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Blogs (
    id int  NOT NULL,
    title varchar(255)  NOT NULL,
    created_at timestamp  NOT NULL,
    content Text()  NOT NULL,
    Users_id int  NOT NULL,
    CONSTRAINT Blogs_pk PRIMARY KEY (id)
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
        Schema::create('blogs', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('title', 255);
            $table->timestamp('created_at');
            $table->text('content');
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
        Schema::dropIfExists('blogs');
    }
};
