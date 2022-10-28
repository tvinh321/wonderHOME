<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/* 
ALTER TABLE Properties ADD CONSTRAINT Belongs
    FOREIGN KEY (Users_id)
    REFERENCES Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Blogs ADD CONSTRAINT Blogs_Users
    FOREIGN KEY (Users_id)
    REFERENCES Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE CallRequests ADD CONSTRAINT CallRequests_Users
    FOREIGN KEY (Users_id)
    REFERENCES Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Categories_Blogs ADD CONSTRAINT Categories_Blogs_Blogs
    FOREIGN KEY (Blogs_id)
    REFERENCES Blogs (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Categories_Blogs ADD CONSTRAINT Categories_Blogs_Categories
    FOREIGN KEY (Categories_id)
    REFERENCES Categories (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE ChatRooms ADD CONSTRAINT ChatRooms_Users
    FOREIGN KEY (Users_id)
    REFERENCES Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Files ADD CONSTRAINT Contains
    FOREIGN KEY (Properties_id)
    REFERENCES Properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Conveniences_Properties ADD CONSTRAINT Conveniences_Properties_Conveniences
    FOREIGN KEY (Conveniences_id)
    REFERENCES Conveniences (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Conveniences_Properties ADD CONSTRAINT Conveniences_Properties_Properties
    FOREIGN KEY (Properties_id)
    REFERENCES Properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Districts ADD CONSTRAINT Districts_Cities
    FOREIGN KEY (Cities_id)
    REFERENCES Cities (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Messages ADD CONSTRAINT Messages_ChatRooms
    FOREIGN KEY (ChatRooms_id)
    REFERENCES ChatRooms (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Payments ADD CONSTRAINT Payments_Users
    FOREIGN KEY (Users_id)
    REFERENCES Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Properties ADD CONSTRAINT Properties_Juridicals
    FOREIGN KEY (Juridicals_id)
    REFERENCES Juridicals (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Properties ADD CONSTRAINT Properties_Streets
    FOREIGN KEY (Streets_id)
    REFERENCES Streets (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Favorites ADD CONSTRAINT Favorites_Properties
    FOREIGN KEY (Properties_id)
    REFERENCES Properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Favorites ADD CONSTRAINT Favorites_Users
    FOREIGN KEY (Users_id)
    REFERENCES Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Reports ADD CONSTRAINT Reports_Users
    FOREIGN KEY (Users_id)
    REFERENCES Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Streets ADD CONSTRAINT Streets_Wards
    FOREIGN KEY (Wards_id)
    REFERENCES Wards (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Users_Appointments ADD CONSTRAINT Users_Appointments_Appointments
    FOREIGN KEY (Appointments_id)
    REFERENCES Appointments (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Users_Appointments ADD CONSTRAINT Users_Appointments_Users
    FOREIGN KEY (Users_id)
    REFERENCES Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Wards ADD CONSTRAINT Wards_Districts
    FOREIGN KEY (Districts_id)
    REFERENCES Districts (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
; */

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Follow SQL Script above
        // Create Foreign Keys
        Schema::table('properties', function (Blueprint $table) {
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('blogs', function (Blueprint $table) {
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('call_requests', function (Blueprint $table) {
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('categories_blogs', function (Blueprint $table) {
            $table->foreign('Blogs_id')->references('id')->on('blogs')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('Categories_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('chat_rooms', function (Blueprint $table) {
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('files', function (Blueprint $table) {
            $table->foreign('Properties_id')->references('id')->on('properties')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('conveniences_properties', function (Blueprint $table) {
            $table->foreign('Conveniences_id')->references('id')->on('conveniences')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('Properties_id')->references('id')->on('properties')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('districts', function (Blueprint $table) {
            $table->foreign('Cities_id')->references('id')->on('cities')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('messages', function (Blueprint $table) {
            $table->foreign('ChatRooms_id')->references('id')->on('chat_rooms')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('payments', function (Blueprint $table) {
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('properties', function (Blueprint $table) {
            $table->foreign('Juridicals_id')->references('id')->on('juridicals')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('Wards_id')->references('id')->on('wards')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('favorites', function (Blueprint $table) {
            $table->foreign('Properties_id')->references('id')->on('properties')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('reports', function (Blueprint $table) {
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('users_appointments', function (Blueprint $table) {
            $table->foreign('Appointments_id')->references('id')->on('appointments')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('wards', function (Blueprint $table) {
            $table->foreign('Districts_id')->references('id')->on('districts')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop Foreign Keys
        Schema::table('properties', function (Blueprint $table) {
            $table->dropForeign(['Users_id']);
        });
        Schema::table('blogs', function (Blueprint $table) {
            $table->dropForeign(['Users_id']);
        });
        Schema::table('call_requests', function (Blueprint $table) {
            $table->dropForeign(['Users_id']);
        });
        Schema::table('categories_blogs', function (Blueprint $table) {
            $table->dropForeign(['Blogs_id']);
            $table->dropForeign(['Categories_id']);
        });
        Schema::table('chat_rooms', function (Blueprint $table) {
            $table->dropForeign(['Users_id']);
        });
        Schema::table('files', function (Blueprint $table) {
            $table->dropForeign(['Properties_id']);
        });
        Schema::table('conveniences_properties', function (Blueprint $table) {
            $table->dropForeign(['Conveniences_id']);
            $table->dropForeign(['Properties_id']);
        });
        Schema::table('districts', function (Blueprint $table) {
            $table->dropForeign(['Cities_id']);
        });
        Schema::table('messages', function (Blueprint $table) {
            $table->dropForeign(['ChatRooms_id']);
        });
        Schema::table('payments', function (Blueprint $table) {
            $table->dropForeign(['Users_id']);
        });
        Schema::table('properties', function (Blueprint $table) {
            $table->dropForeign(['Juridicals_id']);
            $table->dropForeign(['Wards_id']);
        });
        Schema::table('favorites', function (Blueprint $table) {
            $table->dropForeign(['Properties_id']);
            $table->dropForeign(['Users_id']);
        });
        Schema::table('reports', function (Blueprint $table) {
            $table->dropForeign(['Users_id']);
        });
        Schema::table('users_appointments', function (Blueprint $table) {
            $table->dropForeign(['Appointments_id']);
            $table->dropForeign(['Users_id']);
        });
        Schema::table('wards', function (Blueprint $table) {
            $table->dropForeign(['Districts_id']);
        });
    }
};
