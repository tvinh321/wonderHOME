<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Users_Appointments (
    Users_id int  NOT NULL,
    Appointments_id int  NOT NULL,
    CONSTRAINT Users_Appointments_pk PRIMARY KEY (Users_id,Appointments_id)
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
        Schema::create('users_appointments', function (Blueprint $table) {
            $table->uuid('Users_id');
            $table->uuid('Appointments_id');
            $table->primary(['Users_id', 'Appointments_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_appointments');
    }
};
