<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ConveniencesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('conveniences')->insert([
            'name' => 'Wifi',
        ]);
        DB::table('conveniences')->insert([
            'name' => 'Bãi đỗ xe',
        ]);
        DB::table('conveniences')->insert([
            'name' => 'Cho phép thú cưng',
        ]);
    }
}
