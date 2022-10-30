<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

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

ALTER TABLE Files ADD CONSTRAINT Files_Blogs
    FOREIGN KEY (Blogs_id)
    REFERENCES Blogs (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Files ADD CONSTRAINT Files_Messages
    FOREIGN KEY (Messages_id)
    REFERENCES Messages (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Messages ADD CONSTRAINT Messages_ChatRooms
    FOREIGN KEY (ChatRooms_id)
    REFERENCES ChatRooms (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Payments ADD CONSTRAINT Payments_Properties
    FOREIGN KEY (Properties_id)
    REFERENCES Properties (id)  
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

ALTER TABLE Properties ADD CONSTRAINT Properties_Wards
    FOREIGN KEY (Wards_id)
    REFERENCES Wards (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Reports ADD CONSTRAINT Reports_Properties
    FOREIGN KEY (Properties_id)
    REFERENCES Properties (id)  
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

ALTER TABLE Users_ChatRooms ADD CONSTRAINT Users_ChatRooms_ChatRooms
    FOREIGN KEY (ChatRooms_id)
    REFERENCES ChatRooms (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE Users_ChatRooms ADD CONSTRAINT Users_ChatRooms_Users
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
        // Follow SQL Script above
        // Create Foreign Keys, Table Name is lowercase

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
        Schema::table('files', function (Blueprint $table) {
            $table->foreign('Blogs_id')->references('id')->on('blogs')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('Messages_id')->references('id')->on('messages')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('messages', function (Blueprint $table) {
            $table->foreign('ChatRooms_id')->references('id')->on('chat_rooms')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('payments', function (Blueprint $table) {
            $table->foreign('Properties_id')->references('id')->on('properties')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('properties', function (Blueprint $table) {
            $table->foreign('Juridicals_id')->references('id')->on('juridicals')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('favorites', function (Blueprint $table) {
            $table->foreign('Properties_id')->references('id')->on('properties')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('properties', function (Blueprint $table) {
            $table->foreign('Wards_id')->references('id')->on('wards')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('reports', function (Blueprint $table) {
            $table->foreign('Properties_id')->references('id')->on('properties')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('users_appointments', function (Blueprint $table) {
            $table->foreign('Appointments_id')->references('id')->on('appointments')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('Users_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('users_chat_rooms', function (Blueprint $table) {
            $table->foreign('ChatRooms_id')->references('id')->on('chat_rooms')->onUpdate('cascade')->onDelete('cascade');
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
            $table->dropForeign('properties_users_id_foreign');
        });
        Schema::table('blogs', function (Blueprint $table) {
            $table->dropForeign('blogs_users_id_foreign');
        });
        Schema::table('call_requests', function (Blueprint $table) {
            $table->dropForeign('call_requests_users_id_foreign');
        });
        Schema::table('categories_blogs', function (Blueprint $table) {
            $table->dropForeign('categories_blogs_blogs_id_foreign');
            $table->dropForeign('categories_blogs_categories_id_foreign');
        });
        Schema::table('files', function (Blueprint $table) {
            $table->dropForeign('files_properties_id_foreign');
        });
        Schema::table('conveniences_properties', function (Blueprint $table) {
            $table->dropForeign('conveniences_properties_conveniences_id_foreign');
            $table->dropForeign('conveniences_properties_properties_id_foreign');
        });
        Schema::table('districts', function (Blueprint $table) {
            $table->dropForeign('districts_cities_id_foreign');
        });
        Schema::table('files', function (Blueprint $table) {
            $table->dropForeign('files_blogs_id_foreign');
            $table->dropForeign('files_messages_id_foreign');
        });
        Schema::table('messages', function (Blueprint $table) {
            $table->dropForeign('messages_chat_rooms_id_foreign');
        });
        Schema::table('payments', function (Blueprint $table) {
            $table->dropForeign('payments_properties_id_foreign');
            $table->dropForeign('payments_users_id_foreign');
        });
        Schema::table('properties', function (Blueprint $table) {
            $table->dropForeign('properties_juridicals_id_foreign');
        });
        Schema::table('favorites', function (Blueprint $table) {
            $table->dropForeign('favorites_properties_id_foreign');
            $table->dropForeign('favorites_users_id_foreign');
        });
        Schema::table('properties', function (Blueprint $table) {
            $table->dropForeign('properties_wards_id_foreign');
        });
        Schema::table('reports', function (Blueprint $table) {
            $table->dropForeign('reports_properties_id_foreign');
        });
        Schema::table('users_appointments', function (Blueprint $table) {
            $table->dropForeign('users_appointments_appointments_id_foreign');
            $table->dropForeign('users_appointments_users_id_foreign');
        });
        Schema::table('users_chat_rooms', function (Blueprint $table) {
            $table->dropForeign('users_chat_rooms_chat_rooms_id_foreign');
            $table->dropForeign('users_chat_rooms_users_id_foreign');
        });
        Schema::table('wards', function (Blueprint $table) {
            $table->dropForeign('wards_districts_id_foreign');
        });
    }
};
