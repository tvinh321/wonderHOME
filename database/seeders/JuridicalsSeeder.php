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
            'type' => 'Sổ đỏ'
        ]);
        DB::table('juridicals')->insert([
            'type' => 'Sổ hồng'
        ]);
        DB::table('juridicals')->insert([
            'type' => 'Sổ xanh'
        ]);
        DB::table('juridicals')->insert([
            'type' => 'Sổ trắng'
        ]);
    }
}
