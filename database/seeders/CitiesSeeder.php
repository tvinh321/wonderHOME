<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cities')->insert([
            'id' => Str::uuid(),
            'name' => 'Hà Nội'
        ]);
        DB::table('cities')->insert([
            'id' => Str::uuid(),
            'name' => 'Hồ Chí Minh'
        ]);
        DB::table('cities')->insert([
            'id' => Str::uuid(),
            'name' => 'Đà Nẵng'
        ]);
    }
}
