<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/* $table->uuid('id')->primary()->default(Str::orderedUuid());
    $table->string('title', 255);
    $table->timestamp('created_at');
    $table->string('location', 64);
    $table->text('description');
    $table->smallInteger('num_of_bedrooms');
    $table->smallInteger('num_of_toilets');
    $table->smallInteger('direction');
    $table->integer('price');
    $table->smallInteger('priority');
    $table->float('facade');
    $table->float('area');
    $table->date('expire_date');
    $table->smallInteger('juridical_status');
    $table->uuid('Juridicals_id');
    $table->uuid('Users_id');
    $table->uuid('Wards_id'); */

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
        $juridicals = DB::table('juridicals')->get();
        $users = DB::table('users')->get();
        $property_types = DB::table('property_types')->get();
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

        // For 50 properties
        for ($i = 0; $i < 50; $i++) {
            $ward = $wards->random();
            $juridical = $juridicals->random();
            $user = $users->random();
            $property_type = $property_types->random();
            $loc = $location[array_rand($location)];

            $price = [1400000000, 2000000000, 2220000000, 4000000000, 5000000000][array_rand([0, 1, 2, 3, 4])];
            $area = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200][array_rand([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])];
            // Location = loc + ward + district + city
            $district = DB::table('districts')->where('id', $ward->districts_id)->first();
            $city = DB::table('cities')->where('id', $district->cities_id)->first();
            $loca = $loc . ', ' . $ward->name . ', ' . $district->name . ', ' . $city->name;
            $title = ['Bán nhà ', 'Bán căn hộ ', 'Bán căn hộ chung cư ', 'Bán nhà mặt tiền '][array_rand([0, 1, 2, 3])];

            DB::table('properties')->insert([
                'id' => Str::orderedUuid(),
                'title' => $title . (number_format( (float) ($price / 1000000000), 1, '.', '')) . ' tỷ ' . $area . 'm2',
                'created_at' => now(),
                'location' => $loca,
                'description' => 'Đây là mô tả',
                'num_of_bedrooms' => rand(1, 5),
                'num_of_toilets' => rand(1, 5),
                'direction' => rand(1, 16),
                'price' => $price,
                'priority' => rand(1, 5),
                'facade' => rand(20, 100),
                'area' => $area,
                'expire_date' => now()->addDays(rand(50, 100)),
                'juridical_status' => rand(-1, 1),
                'furniture' => rand(1, 2),
                'juridicals_id' => $juridical->id,
                'users_id' => $user->id,
                'wards_id' => $ward->id,
                'property_types_id' => $property_type->id,
            ]);
        }
    }
}
