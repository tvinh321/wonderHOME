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
        /* Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('full_name', 128);
            $table->string('username', 32);
            $table->string('email', 254);
            $table->string('password', 128);
            $table->smallInteger('gender');
            $table->date('dob');
            $table->timestamp('register_at');
            $table->timestamp('last_active');
            $table->smallInteger('role');
            $table->binary('avatar')->nullable();
            $table->uuid('location')->nullable();
            $table->string('identity_number', 12)->nullable();
            $table->string('phone', 11)->nullable();
            $table->text('description')->nullable();
            $table->string('company', 128)->nullable();
            $table->string('registration_number', 15)->nullable();
        }); */

        $users = [
            [
                'full_name' => 'Nguyễn Văn A',
                'username' => 'nguyenvana',
                'email' => 'abc@gmail.com',
                'password' => bcrypt('123456'),
                'gender' => 1,
                'dob' => '1999-01-01',
                'register_at' => now(),
                'last_active' => now(),
                'role' => 1,
                'avatar' => null,
                'location' => null,
                'identity_number' => null,
                'phone' => null,
                'description' => null,
                'company' => null,
                'registration_number' => null,
            ],
            [
                'full_name' => 'Nguyễn Văn B',
                'username' => 'nguyenvanb',
                'email' => 'def@gmail.com',
                'password' => bcrypt('123456'),
                'gender' => 0,
                'dob' => '1999-01-01',
                'register_at' => now(),
                'last_active' => now(),
                'role' => 1,
                'avatar' => null,
                'location' => null,
                'identity_number' => null,
                'phone' => null,
                'description' => null,
                'company' => null,
                'registration_number' => null,
            ]
        ];

        DB::table('users')->insert($users);
    }
}
