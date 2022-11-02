<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PropertyTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('property_types')->insert([
            'name' => 'Nhà'
        ]);
        DB::table('property_types')->insert([
            'name' => 'Đất'
        ]);
        DB::table('property_types')->insert([
            'name' => 'Căn hộ'
        ]);
        DB::table('property_types')->insert([
            'name' => 'Biệt thự'
        ]);
        DB::table('property_types')->insert([
            'name' => 'Văn phòng'
        ]);
        DB::table('property_types')->insert([
            'name' => 'Khác'
        ]);
    }
}
