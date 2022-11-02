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
        /* CREATE TABLE appointments (
            id int  NOT NULL,
            from_time timestamp  NOT NULL,
            to_time timestamp  NOT NULL,
            CONSTRAINT appointments_pk PRIMARY KEY (id)
        ); */
        Schema::create('appointments', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->timestamp('from_time');
            $table->timestamp('to_time');
        });

        /* CREATE TABLE blogs (
            id int  NOT NULL,
            title varchar(255)  NOT NULL,
            created_at timestamp  NOT NULL,
            content Text()  NOT NULL,
            users_id int  NOT NULL,
            CONSTRAINT blogs_pk PRIMARY KEY (id)
        ); */
        Schema::create('blogs', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('title', 255);
            $table->timestamp('created_at');
            $table->text('content');
            $table->uuid('users_id');
        });

        /* CREATE TABLE call_requests (
            id int  NOT NULL,
            phone varchar(14)  NOT NULL,
            created_at timestamp  NOT NULL,
            users_id int  NOT NULL,
            CONSTRAINT call_requests_pk PRIMARY KEY (id)
        ); */
        Schema::create('call_requests', function(Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('phone', 14);
            $table->timestamp('created_at');
            $table->uuid('users_id');
        });

        /* CREATE TABLE categories (
            id int  NOT NULL,
            name varchar(32)  NOT NULL,
            CONSTRAINT categories_pk PRIMARY KEY (id)
        ); */
        Schema::create('categories', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('name', 32);
        });

        /* CREATE TABLE categories_blogs (
            categories_id int  NOT NULL,
            blogs_id int  NOT NULL,
            CONSTRAINT categories_blogs_pk PRIMARY KEY (categories_id,blogs_id)
        ); */
        Schema::create('categories_blogs', function (Blueprint $table) {
            $table->uuid('id')->default(DB::raw('gen_random_uuid()'));
            $table->uuid('blogs_id');
            $table->uuid('categories_id');
            $table->primary(['categories_id', 'blogs_id']);
        });

        /* CREATE TABLE chat_rooms (
            id int  NOT NULL,
            CONSTRAINT chat_rooms_pk PRIMARY KEY (id)
        ); */
        Schema::create('chat_rooms', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
        });

        /* CREATE TABLE cities (
            id int  NOT NULL,
            name varchar(32)  NOT NULL,
            CONSTRAINT cities_pk PRIMARY KEY (id)
        ); */
        Schema::create('cities', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('name', 32);
        });

        /* CREATE TABLE conveniences (
            id int  NOT NULL,
            name varchar(32)  NOT NULL,
            CONSTRAINT conveniences_pk PRIMARY KEY (id)
        ); */
        Schema::create('conveniences', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('name', 32);
        });

        /* CREATE TABLE conveniences_properties (
            conveniences_id int  NOT NULL,
            properties_id int  NOT NULL,
            CONSTRAINT conveniences_properties_pk PRIMARY KEY (conveniences_id,properties_id)
        ); */
        Schema::create('conveniences_properties', function (Blueprint $table) {
            $table->uuid('id')->default(DB::raw('gen_random_uuid()'));
            $table->uuid('conveniences_id');
            $table->uuid('properties_id');
            $table->primary(['conveniences_id', 'properties_id']);
        });

        /* CREATE TABLE districts (
            id int  NOT NULL,
            name varchar(32)  NOT NULL,
            cities_id int  NOT NULL,
            CONSTRAINT districts_pk PRIMARY KEY (id)
        ); */
        Schema::create('districts', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('name', 32);
            $table->uuid('cities_id');
        });

        /* CREATE TABLE files (
            id int  NOT NULL,
            type varchar(16)  NOT NULL,
            content Binary()  NOT NULL,
            properties_id int  NOT NULL,
            blogs_id int  NOT NULL,
            messages_id int  NOT NULL,
            CONSTRAINT files_pk PRIMARY KEY (id)
        ); */
        Schema::create('files', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('type', 16);
            $table->binary('content');
            $table->uuid('properties_id');
            $table->uuid('blogs_id');
            $table->uuid('messages_id');
        });

        /* CREATE TABLE juridicals (
            id int  NOT NULL,
            type varchar(32)  NOT NULL,
            CONSTRAINT juridicals_pk PRIMARY KEY (id)
        ); */
        Schema::create('juridicals', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('type', 32);
        });

        /* CREATE TABLE messages (
            id int  NOT NULL,
            content Text()  NOT NULL,
            created_at timestamp  NOT NULL,
            chat_rooms_id int  NOT NULL,
            users_id int  NOT NULL,
            CONSTRAINT messages_pk PRIMARY KEY (id)
        ); */
        Schema::create('messages', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->text('content');
            $table->timestamp('created_at');
            $table->uuid('chat_rooms_id');
            $table->uuid('users_id');
        });

        /* CREATE TABLE payments (
            id int  NOT NULL,
            created_at timestamp  NOT NULL,
            method varchar(32)  NOT NULL,
            users_id int  NOT NULL,
            properties_id int  NOT NULL,
            CONSTRAINT payments_pk PRIMARY KEY (id)
        ); */
        Schema::create('payments', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->timestamp('created_at');
            $table->string('method', 32);
            $table->uuid('users_id');
            $table->uuid('properties_id');
        });

        /* CREATE TABLE properties (
            id int  NOT NULL,
            title varchar(255)  NOT NULL,
            created_at timestamp  NOT NULL,
            location varchar(64)  NOT NULL,
            description Text()  NOT NULL,
            num_of_bedrooms smallint  NOT NULL,
            num_of_toilets smallint  NOT NULL,
            direction smallint  NOT NULL,
            price bigint  NOT NULL,
            priority smallint  NOT NULL,
            facade Float()  NOT NULL,
            area Float()  NOT NULL,
            expire_date timestamp  NOT NULL,
            juridical_status smallint  NOT NULL,
            furniture smallint  NOT NULL,
            juridicals_id int  NOT NULL,
            users_id int  NOT NULL,
            wards_id int  NOT NULL,
            property_types_id int  NOT NULL,
            CONSTRAINT properties_pk PRIMARY KEY (id)
        ); */
        Schema::create('properties', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('title', 255);
            $table->timestamp('created_at');
            $table->string('location', 255);
            $table->text('description');
            $table->smallInteger('num_of_bedrooms');
            $table->smallInteger('num_of_toilets');
            $table->smallInteger('direction');
            $table->bigInteger('price');
            $table->smallInteger('priority');
            $table->float('facade');
            $table->float('area');
            $table->timestamp('expire_date');
            $table->smallInteger('juridical_status');
            $table->smallInteger('furniture');
            $table->uuid('juridicals_id');
            $table->uuid('users_id');
            $table->uuid('wards_id');
            $table->uuid('property_types_id');
        });

        /* CREATE TABLE favorites (
            properties_id int  NOT NULL,
            users_id int  NOT NULL,
            CONSTRAINT properties_users_pk PRIMARY KEY (properties_id,users_id)
        );*/
        Schema::create('favorites', function (Blueprint $table) {
            $table->uuid('id')->default(DB::raw('gen_random_uuid()'));
            $table->uuid('properties_id');
            $table->uuid('users_id');
            $table->primary(['properties_id', 'users_id']);
        });

        /* CREATE TABLE property_types (
            id int  NOT NULL,
            name varchar(32)  NOT NULL,
            CONSTRAINT property_types_pk PRIMARY KEY (id)
        ); */
        Schema::create('property_types', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('name', 32);
        });

        /* CREATE TABLE reports (
            id int  NOT NULL,
            content Text()  NOT NULL,
            created_at timestamp  NOT NULL,
            properties_id int  NOT NULL,
            CONSTRAINT reports_pk PRIMARY KEY (id)
        ); */
        Schema::create('reports', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->text('content');
            $table->timestamp('created_at');
            $table->uuid('properties_id');
        });

        /* CREATE TABLE users (
            id int  NOT NULL,
            avatar Binary()  NOT NULL,
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
            CONSTRAINT users_pk PRIMARY KEY (id)
        ); */
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

        /* CREATE TABLE users_appointments (
            users_id int  NOT NULL,
            appointments_id int  NOT NULL,
            CONSTRAINT users_appointments_pk PRIMARY KEY (users_id,appointments_id)
        ); */
        Schema::create('users_appointments', function (Blueprint $table) {
            $table->uuid('id')->default(DB::raw('gen_random_uuid()'));
            $table->uuid('users_id');
            $table->uuid('appointments_id');
            $table->primary(['users_id', 'appointments_id']);
        });

        /* CREATE TABLE users_chat_rooms (
            users_id int  NOT NULL,
            chat_rooms_id int  NOT NULL,
            CONSTRAINT users_chat_rooms_pk PRIMARY KEY (users_id,chat_rooms_id)
        ); */
        Schema::create('users_chat_rooms', function (Blueprint $table) {
            $table->uuid('id')->default(DB::raw('gen_random_uuid()'));
            $table->uuid('users_id');
            $table->uuid('chat_rooms_id');
            $table->primary(['users_id', 'chat_rooms_id']);
        });

        /* CREATE TABLE wards (
            id int  NOT NULL,
            name varchar(32)  NOT NULL,
            districts_id int  NOT NULL,
            CONSTRAINT wards_pk PRIMARY KEY (id)
        ); */
        Schema::create('wards', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('name', 32);
            $table->uuid('districts_id');
        });

        /* ALTER TABLE properties ADD CONSTRAINT Belongs
            FOREIGN KEY (users_id)
            REFERENCES users (id)  
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;*/
        Schema::table('properties', function (Blueprint $table) {
            $table->foreign('users_id')->references('id')->on('users');
        });

        /* ALTER TABLE blogs ADD CONSTRAINT Blogs_Users
            FOREIGN KEY (users_id)
            REFERENCES users (id)  
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ; */
        Schema::table('blogs', function (Blueprint $table) {
            $table->foreign('users_id')->references('id')->on('users');
        });

        /* ALTER TABLE call_requests ADD CONSTRAINT CallRequests_Users
            FOREIGN KEY (users_id)
            REFERENCES users (id)  
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;*/
        Schema::table('call_requests', function (Blueprint $table) {
            $table->foreign('users_id')->references('id')->on('users');
        });

        /* ALTER TABLE files ADD CONSTRAINT Contains
            FOREIGN KEY (properties_id)
            REFERENCES properties (id)  
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ; */
        Schema::table('files', function (Blueprint $table) {
            $table->foreign('properties_id')->references('id')->on('properties');
        });

        /* ALTER TABLE districts ADD CONSTRAINT Districts_Cities
    FOREIGN KEY (cities_id)
    REFERENCES cities (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE files ADD CONSTRAINT Files_Blogs
    FOREIGN KEY (blogs_id)
    REFERENCES blogs (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE files ADD CONSTRAINT Files_Messages
    FOREIGN KEY (messages_id)
    REFERENCES messages (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE messages ADD CONSTRAINT Messages_ChatRooms
    FOREIGN KEY (chat_rooms_id)
    REFERENCES chat_rooms (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE messages ADD CONSTRAINT Messages_Users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE payments ADD CONSTRAINT Payments_Properties
    FOREIGN KEY (properties_id)
    REFERENCES properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE payments ADD CONSTRAINT Payments_Users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE properties ADD CONSTRAINT Properties_Juridicals
    FOREIGN KEY (juridicals_id)
    REFERENCES juridicals (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE properties ADD CONSTRAINT Properties_Wards
    FOREIGN KEY (wards_id)
    REFERENCES wards (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE reports ADD CONSTRAINT Reports_Properties
    FOREIGN KEY (properties_id)
    REFERENCES properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE wards ADD CONSTRAINT Wards_Districts
    FOREIGN KEY (districts_id)
    REFERENCES districts (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE categories_blogs ADD CONSTRAINT categories_blogs_blogs
    FOREIGN KEY (blogs_id)
    REFERENCES blogs (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE categories_blogs ADD CONSTRAINT categories_blogs_categories
    FOREIGN KEY (categories_id)
    REFERENCES categories (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE conveniences_properties ADD CONSTRAINT conveniences_properties_conveniences
    FOREIGN KEY (conveniences_id)
    REFERENCES conveniences (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE conveniences_properties ADD CONSTRAINT conveniences_properties_properties
    FOREIGN KEY (properties_id)
    REFERENCES properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE properties ADD CONSTRAINT properties_property_types
    FOREIGN KEY (property_types_id)
    REFERENCES property_types (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE properties_users ADD CONSTRAINT properties_users_properties
    FOREIGN KEY (properties_id)
    REFERENCES properties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE properties_users ADD CONSTRAINT properties_users_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE users_appointments ADD CONSTRAINT users_appointments_appointments
    FOREIGN KEY (appointments_id)
    REFERENCES appointments (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE users_appointments ADD CONSTRAINT users_appointments_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE users_chat_rooms ADD CONSTRAINT users_chat_rooms_chat_rooms
    FOREIGN KEY (chat_rooms_id)
    REFERENCES chat_rooms (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

ALTER TABLE users_chat_rooms ADD CONSTRAINT users_chat_rooms_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;
*/
// Follow SQL script above

        Schema::table('districts', function (Blueprint $table) {
            $table->foreign('cities_id')->references('id')->on('cities');
        });

        Schema::table('files', function (Blueprint $table) {
            $table->foreign('blogs_id')->references('id')->on('blogs');
        });

        Schema::table('files', function (Blueprint $table) {
            $table->foreign('messages_id')->references('id')->on('messages');
        });

        Schema::table('messages', function (Blueprint $table) {
            $table->foreign('chat_rooms_id')->references('id')->on('chat_rooms');
        });

        Schema::table('messages', function (Blueprint $table) {
            $table->foreign('users_id')->references('id')->on('users');
        });

        Schema::table('payments', function (Blueprint $table) {
            $table->foreign('properties_id')->references('id')->on('properties');
        });

        Schema::table('payments', function (Blueprint $table) {
            $table->foreign('users_id')->references('id')->on('users');
        });

        Schema::table('properties', function (Blueprint $table) {
            $table->foreign('juridicals_id')->references('id')->on('juridicals');
        });

        Schema::table('properties', function (Blueprint $table) {
            $table->foreign('wards_id')->references('id')->on('wards');
        });

        Schema::table('reports', function (Blueprint $table) {
            $table->foreign('properties_id')->references('id')->on('properties');
        });

        Schema::table('wards', function (Blueprint $table) {
            $table->foreign('districts_id')->references('id')->on('districts');
        });

        Schema::table('categories_blogs', function (Blueprint $table) {
            $table->foreign('blogs_id')->references('id')->on('blogs');
        });

        Schema::table('categories_blogs', function (Blueprint $table) {
            $table->foreign('categories_id')->references('id')->on('categories');
        });

        Schema::table('conveniences_properties', function (Blueprint $table) {
            $table->foreign('conveniences_id')->references('id')->on('conveniences');
        });

        Schema::table('conveniences_properties', function (Blueprint $table) {
            $table->foreign('properties_id')->references('id')->on('properties');
        });

        Schema::table('properties', function (Blueprint $table) {
            $table->foreign('property_types_id')->references('id')->on('property_types');
        });

        Schema::table('favorites', function (Blueprint $table) {
            $table->foreign('properties_id')->references('id')->on('properties');
        });

        Schema::table('favorites', function (Blueprint $table) {
            $table->foreign('users_id')->references('id')->on('users');
        });

        Schema::table('users_appointments', function (Blueprint $table) {
            $table->foreign('appointments_id')->references('id')->on('appointments');
        });

        Schema::table('users_appointments', function (Blueprint $table) {
            $table->foreign('users_id')->references('id')->on('users');
        });

        Schema::table('users_chat_rooms', function (Blueprint $table) {
            $table->foreign('chat_rooms_id')->references('id')->on('chat_rooms');
        });

        Schema::table('users_chat_rooms', function (Blueprint $table) {
            $table->foreign('users_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
