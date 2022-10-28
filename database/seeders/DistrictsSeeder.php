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
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Đống Đa',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Ba Đình',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Hai Bà Trưng',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Hoàng Mai',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Thanh Xuân',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Long Biên',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Nam Từ Liêm',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Bắc Từ Liêm',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Tây Hồ',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Cầu Giấy',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Hà Đông',
            'Cities_id' => $city->id
        ]);
        // Find UUID of Hồ Chí Minh
        $city = DB::table('cities')->where('name', 'Hồ Chí Minh')->first();
        // Insert quận of Hồ Chí Minh
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Thành phố Thủ Đức',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 1',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 3',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 4',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 5',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 6',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 7',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 8',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 10',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 11',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận 12',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Bình Tân',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Bình Thạnh',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Gò Vấp',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Phú Nhuận',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Tân Bình',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Quận Tân Phú',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Bình Chánh',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Cần Giờ',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Củ Chi',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Hóc Môn',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Huyện Nhà Bè',
            'Cities_id' => $city->id
        ]);
        
        // Find UUID of Đà Nẵng
        $city = DB::table('cities')->where('name', 'Đà Nẵng')->first();
        // Insert quận of Đà Nẵng: Hải Châu, Thanh Khê, Sơn Trà, Ngũ Hành Sơn, Liên Chiểu, Cẩm Lệ.
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Hải Châu',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Thanh Khê',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Sơn Trà',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Ngũ Hành Sơn',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Liên Chiểu',
            'Cities_id' => $city->id
        ]);
        DB::table('districts')->insert([
            'id' => Str::uuid(),
            'name' => 'Cẩm Lệ',
            'Cities_id' => $city->id
        ]);
    }
}
