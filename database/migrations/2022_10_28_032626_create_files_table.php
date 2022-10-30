<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Files (
    id int  NOT NULL,
    type varchar(16)  NOT NULL,
    content Binary()  NOT NULL,
    Properties_id int  NULL,
    Blogs_id int  NULL,
    Messages_id int  NULL,
    CONSTRAINT Files_pk PRIMARY KEY (id)
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
        Schema::create('files', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('type', 16);
            $table->binary('content');
            $table->uuid('Properties_id')->nullable();
            $table->uuid('Blogs_id')->nullable();
            $table->uuid('Messages_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files');
    }
};
