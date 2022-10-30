<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

/* CREATE TABLE Users (
    id int  NOT NULL,
    avatar Blob  NOT NULL,
    username varchar(32)  NOT NULL,
    password varchar(128)  NOT NULL,
    email varchar(254)  NOT NULL,
    full_name varchar(128)  NOT NULL,
    phone varchar(11)  NOT NULL,
    register_at timestamp  NOT NULL,
    last_active timestamp  NOT NULL,
    identity_number varchar(12)  NOT NULL,
    role smallint  NOT NULL,
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
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->binary('avatar');
            $table->string('username', 32);
            $table->string('password', 128);
            $table->string('email', 254);
            $table->string('full_name', 128);
            $table->string('phone', 11);
            $table->timestamp('register_at');
            $table->timestamp('last_active');
            $table->string('identity_number', 12);
            $table->smallInteger('role');
            $table->text('description')->nullable();
            $table->string('company', 128)->nullable();
            $table->string('registration_number', 15)->nullable();
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
