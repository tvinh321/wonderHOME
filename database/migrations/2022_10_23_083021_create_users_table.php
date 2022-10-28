<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Users (
    id int  NOT NULL,
    avatar varchar(256)  NOT NULL,
    username varchar(32)  NOT NULL,
    password varchar(128)  NOT NULL,
    email varchar(254)  NOT NULL,
    full_name varchar(128)  NOT NULL,
    phone varchar(11)  NOT NULL,
    register_at timestamp  NOT NULL,
    last_active timestamp  NOT NULL,
    identity_number varchar(12)  NOT NULL,
    role int  NOT NULL,
    description Text()  NULL,
    company varchar(128)  NULL,
    registration_number varchar(15)  NULL,
    CONSTRAINT Users_pk PRIMARY KEY (id)
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
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('avatar');
            $table->string('username', 32)->unique();
            $table->string('password', 128);
            $table->string('email', 128)->unique();
            $table->string('full_name', 128);
            $table->string('phone', 14);
            $table->dateTime('register_at');
            $table->dateTime('last_active');
            $table->string('identity_number', 12);
            $table->integer('role');
            $table->text('description')->nullable();
            $table->string('company', 128)->nullable();
            $table->string('registration_number', 32)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
};
