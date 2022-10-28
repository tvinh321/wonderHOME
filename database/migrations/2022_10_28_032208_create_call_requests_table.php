<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE CallRequests (
    id int  NOT NULL,
    phone varchar(14)  NOT NULL,
    Users_id int  NOT NULL,
    CONSTRAINT CallRequests_pk PRIMARY KEY (id)
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
        Schema::create('call_requests', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('phone', 14);
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
        Schema::dropIfExists('call_requests');
    }
};
