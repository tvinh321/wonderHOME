<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Reports (
    id int  NOT NULL,
    content Text()  NOT NULL,
    Users_id int  NOT NULL,
    CONSTRAINT Reports_pk PRIMARY KEY (id)
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
        Schema::create('reports', function (Blueprint $table) {
            $table->uuid('id')->primary();
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
        Schema::dropIfExists('reports');
    }
};