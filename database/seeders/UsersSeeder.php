<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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
            'id' => Str::uuid(),
            'avatar' => 'https://i.imgur.com/1Z1Z1Z1.jpg',
            'username' => 'admin',
            'password' => 'admin',
            'email' => 'abc@abc.com',
            'full_name' => 'Nguyễn Văn A',
            'phone' => '0123456789',
            'register_at' => '2021-10-23 08:30:21',
            'last_active' => '2021-10-23 08:30:21',
            'identity_number' => '0123456789',
            'role' => '1',
            'description' => 'abc',
            'company' => 'abc',
            'registration_number' => '0123456789',
        ]);

        DB::table('users')->insert([
            'id' => Str::uuid(),
            'avatar' => 'https://i.imgur.com/1Z1Z1Z1.jpg',
            'username' => 'user',
            'password' => 'user',
            'email' => 'user@abc.com',
            'full_name' => 'Nguyễn Văn B',
            'phone' => '0123456789',
            'register_at' => '2021-10-23 08:30:21',
            'last_active' => '2021-10-23 08:30:21',
            'identity_number' => '0123456789',
            'role' => '0',
            'description' => 'abc',
            'company' => 'abc',
            'registration_number' => '0123456789',
        ]);
    }
}
