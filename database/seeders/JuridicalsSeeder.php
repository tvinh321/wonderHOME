<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class JuridicalsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('juridicals')->insert([
            'id' => Str::uuid(),
            'type' => 'Sổ Hồng/ Sổ Đỏ',
            'path' => 'https://www.google.com',
            'status' => 1
        ]);
        DB::table('juridicals')->insert([
            'id' => Str::uuid(),
            'type' => 'Sổ Xanh',
            'path' => 'https://www.google.com',
            'status' => 1
        ]);
        DB::table('juridicals')->insert([
            'id' => Str::uuid(),
            'type' => 'Sổ Trắng',
            'path' => 'https://www.google.com',
            'status' => 0
        ]);
    }
}
