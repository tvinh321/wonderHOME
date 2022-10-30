<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Payments (
    id int  NOT NULL,
    paid_at timestamp  NOT NULL,
    method varchar(32)  NOT NULL,
    Users_id int  NOT NULL,
    Properties_id int  NOT NULL,
    CONSTRAINT Payments_pk PRIMARY KEY (id)
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
        Schema::create('payments', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->timestamp('paid_at');
            $table->string('method', 32);
            $table->uuid('Users_id');
            $table->uuid('Properties_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
};
