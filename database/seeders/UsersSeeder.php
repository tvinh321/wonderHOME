<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/* $table->uuid('id')->primary()->default(Str::orderedUuid());
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
*/

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'avatar' => 'https://i.imgur.com/1Z1Z1Z1.png',
            'username' => 'admin',
            'password' => 'admin',
            'email' => 'admin@localhost',
            'full_name' => 'Admin',
            'phone' => '0123456789',
            'register_at' => now(),
            'last_active' => now(),
            'identity_number' => '0123456789',
            'role' => 1,
            'description' => 'Admin',
            'company' => 'Admin',
            'registration_number' => '0123456789',
        ]);

        DB::table('users')->insert([
            'avatar' => 'https://i.imgur.com/2Z2Z2Z2.png',
            'username' => 'user',
            'password' => 'user',
            'email' => 'user@localhost',
            'full_name' => 'User',
            'phone' => '0123456789',
            'register_at' => now(),
            'last_active' => now(),
            'identity_number' => '0123456789',
            'role' => 2,
            'description' => 'User',
            'company' => 'User',
            'registration_number' => '0123456789',
        ]);
    }
}
