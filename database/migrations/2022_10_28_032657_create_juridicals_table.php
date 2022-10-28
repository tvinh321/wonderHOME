<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Juridicals (
    id int  NOT NULL,
    path varchar(256)  NOT NULL,
    status smallint  NOT NULL,
    CONSTRAINT Juridicals_pk PRIMARY KEY (id)
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
        Schema::create('juridicals', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type', 32);
            $table->string('path', 256);
            $table->smallInteger('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('juridicals');
    }
};
