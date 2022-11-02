<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DistrictsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Find UUID of Hà Nội
        $city = DB::table('cities')->where('name', 'Hà Nội')->first();
        // Insert quận of Hà Nội: Hoàn Kiếm, Đống Đa, Ba Đình, Hai Bà Trưng, Hoàng Mai, Thanh Xuân, Long Biên, Nam Từ Liêm, Bắc Từ Liêm, Tây Hồ, Cầu Giấy, Hà Đông.
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Hoàn Kiếm',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Đống Đa',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Ba Đình',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Hai Bà Trưng',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Hoàng Mai',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Thanh Xuân',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Long Biên',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Nam Từ Liêm',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Bắc Từ Liêm',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Tây Hồ',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Cầu Giấy',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Hà Đông',
            'cities_id' => $city->id
        ]);
        // Find UUID of Hồ Chí Minh
        $city = DB::table('cities')->where('name', 'Hồ Chí Minh')->first();
        // Insert quận of Hồ Chí Minh
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Thành phố Thủ Đức',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 1',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 3',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 4',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 5',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 6',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 7',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 8',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 10',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 11',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 12',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Bình Tân',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Bình Thạnh',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Gò Vấp',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Phú Nhuận',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Tân Bình',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Tân Phú',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Bình Chánh',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Cần Giờ',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Củ Chi',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Hóc Môn',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Nhà Bè',
            'cities_id' => $city->id
        ]);
        
        // Find UUID of Đà Nẵng
        $city = DB::table('cities')->where('name', 'Đà Nẵng')->first();
        // Insert quận of Đà Nẵng: Hải Châu, Thanh Khê, Sơn Trà, Ngũ Hành Sơn, Liên Chiểu, Cẩm Lệ.
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Hải Châu',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Thanh Khê',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Sơn Trà',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Ngũ Hành Sơn',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Liên Chiểu',
            'cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Cẩm Lệ',
            'cities_id' => $city->id
        ]);
    }
}
