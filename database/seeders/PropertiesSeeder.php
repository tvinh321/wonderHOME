<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PropertiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $wards = DB::table('wards')->get();
        $users = DB::table('users')->get();
        $location = [
            '12 Nguyễn Trãi',
            '234 Nguyễn Trãi',
            '767 Nguyễn Văn Cừ',
            '65 Nguyễn Văn Cừ',
            '3 Nguyễn Văn Linh',
            '19 Nguyễn Văn Linh',
            '54 Nguyễn Văn Huyên',
            '98 Nguyễn Văn Huyên',
        ];

        $properties_arr = [];

        // For 50 properties
        for ($i = 0; $i < 50; $i++) {
            $ward = $wards->random();
            $user = $users->random();
            $loc = $location[array_rand($location)];

            $price = [1400000000, 2000000000, 2220000000, 4000000000, 5000000000][array_rand([0, 1, 2, 3, 4])];
            $area = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200][array_rand([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])];
            // Location = loc + ward + district + city
            $district = DB::table('districts')->where('id', $ward->districts_id)->first();
            $city = DB::table('cities')->where('id', $district->cities_id)->first();
            $loca = $loc . ', ' . $ward->name . ', ' . $district->name . ', ' . $city->name;
            $title = ['Bán nhà ', 'Bán căn hộ ', 'Bán căn hộ chung cư ', 'Bán nhà mặt tiền '][array_rand([0, 1, 2, 3])];

            $properties_arr->array_push([
                'title' => $title . (number_format( (float) ($price / 1000000000), 1, '.', '')) . ' tỷ ' . $area . 'm2',
                'type' => 'nha',
                'created_at' => now(),
                'location' => $loca,
                'description' => 'Đây là mô tả',
                'price' => $price,
                'priority' => rand(1, 5),
                'area' => $area,
                'expire_date' => now()->addDays(rand(50, 100)),
                'juridical_status' => rand(-1, 1),
                'juridical_type' => 'sodo',
                'access_count' => rand(0, 100),
                'conveniences' => 'thucung,wifi,doxe',
                'num_of_bedrooms' => rand(1, 5),
                'num_of_toilets' => rand(1, 5),
                'facade' => rand(20, 100),
                'floor' => rand(1, 5),
                'direction' => rand(1, 16),
                'furniture' => rand(1, 2),
                'users_id' => $user->id,
                'wards_id' => $ward->id,
            ]);
        }

        DB::table('properties')->insert($properties_arr);
    }
}
