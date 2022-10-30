<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* CREATE TABLE Users_ChatRooms (
    Users_id int  NOT NULL,
    ChatRooms_id int  NOT NULL,
    CONSTRAINT Users_ChatRooms_pk PRIMARY KEY (Users_id,ChatRooms_id)
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
        Schema::create('users_chat_rooms', function (Blueprint $table) {
            $table->uuid('Users_id');
            $table->uuid('ChatRooms_id');
            $table->primary(['Users_id', 'ChatRooms_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_chat_rooms');
    }
};
