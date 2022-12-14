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
        $users = [
            [
                'email' => 'abc@gmail.com',
                'password' => bcrypt('123456'),
                'register_at' => now(),
                'last_active' => now(),
                'role' => 0,
                'access' => 1,
            ],
            [
                'email' => 'def@gmail.com',
                'password' => bcrypt('123456'),
                'register_at' => now(),
                'last_active' => now(),
                'role' => 1,
                'access' => 1,
            ]
        ];

        DB::table('users')->insert($users);
    }
}
