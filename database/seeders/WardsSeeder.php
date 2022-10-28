<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class WardsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        // Find UUID of Thanh Pho Thu Duc
        $district = DB::table('districts')->where('name', 'Thành phố Thủ Đức')->first();

        // Insert wards
        $wards = [
            'Phường An Khánh',
            'Phường An Lợi Đông',
            'Phường An Phú',
            'Phường Bình Chiểu',
            'Phường Bình Thọ',
            'Phường Bình Trưng Đông',
            'Phường Bình Trưng Tây',
            'Phường Cát Lái',
            'Phường Hiệp Bình Chánh',
            'Phường Hiệp Bình Phước',
            'Phường Hiệp Phú',
            'Phường Linh Chiểu',
            'Phường Linh Đông',
            'Phường Linh Tây',
            'Phường Linh Trung',
            'Phường Linh Xuân',
            'Phường Long Bình',
            'Phường Long Phước',
            'Phường Long Thạnh Mỹ',
            'Phường Long Trường',
            'Phường Phú Hữu',
            'Phường Phước Bình',
            'Phường Phước Long A',
            'Phường Phước Long B',
            'Phường Tam Bình',
            'Phường Tam Phú',
            'Phường Tăng Nhơn Phú A',
            'Phường Tăng Nhơn Phú B',
            'Phường Tân Phú',
            'Phường Thảo Điền',
            'Phường Thạnh Mỹ Lợi',
            'Phường Thủ Thiêm',
            'Phường Trường Thạnh',
            'Phường Trường Thọ',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }


        // Find UUID of quận 1
        $district = DB::table('districts')->where('name', 'Quận 1')->first();

        // Insert wards
        $wards = [
            'Phường Bến Nghé',
            'Phường Bến Thành',
            'Phường Cầu Kho',
            'Phường Cầu Ông Lãnh',
            'Phường Cô Giang',
            'Phường Đa Kao',
            'Phường Nguyễn Cư Trinh',
            'Phường Nguyễn Thái Bình',
            'Phường Phạm Ngũ Lão',
            'Phường Tân Định',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận 3
        $district = DB::table('districts')->where('name', 'Quận 3')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 03',
            'Phường 04',
            'Phường 05',
            'Phường Võ Thị Sáu',
            'Phường 09',
            'Phường 10',
            'Phường 11',
            'Phường 12',
            'Phường 13',
            'Phường 14',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận 4
        $district = DB::table('districts')->where('name', 'Quận 4')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 03',
            'Phường 04',
            'Phường 06',
            'Phường 08',
            'Phường 09',
            'Phường 10',
            'Phường 13',
            'Phường 14',
            'Phường 15',
            'Phường 16',
            'Phường 18',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận 5
        $district = DB::table('districts')->where('name', 'Quận 5')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 03',
            'Phường 04',
            'Phường 05',
            'Phường 06',
            'Phường 07',
            'Phường 08',
            'Phường 09',
            'Phường 10',
            'Phường 11',
            'Phường 12',
            'Phường 13',
            'Phường 14',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận 6
        $district = DB::table('districts')->where('name', 'Quận 6')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 03',
            'Phường 04',
            'Phường 05',
            'Phường 06',
            'Phường 07',
            'Phường 08',
            'Phường 09',
            'Phường 10',
            'Phường 11',
            'Phường 12',
            'Phường 13',
            'Phường 14',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận 7
        $district = DB::table('districts')->where('name', 'Quận 7')->first();

        // Insert wards
        $wards = [
            'Phường Bình Thuận',
            'Phường Phú Mỹ',
            'Phường Phú Thuận',
            'Phường Tân Hưng',
            'Phường Tân Kiểng',
            'Phường Tân Phong',
            'Phường Tân Phú',
            'Phường Tân Quy',
            'Phường Tân Thuận Đông',
            'Phường Tân Thuận Tây',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận 8
        $district = DB::table('districts')->where('name', 'Quận 8')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 03',
            'Phường 04',
            'Phường 05',
            'Phường 06',
            'Phường 07',
            'Phường 08',
            'Phường 09',
            'Phường 10',
            'Phường 11',
            'Phường 12',
            'Phường 13',
            'Phường 14',
            'Phường 15',
            'Phường 16',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận 10
        $district = DB::table('districts')->where('name', 'Quận 10')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 04',
            'Phường 05',
            'Phường 06',
            'Phường 07',
            'Phường 08',
            'Phường 09',
            'Phường 10',
            'Phường 11',
            'Phường 12',
            'Phường 13',
            'Phường 14',
            'Phường 15',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận 11
        $district = DB::table('districts')->where('name', 'Quận 11')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 03',
            'Phường 04',
            'Phường 05',
            'Phường 06',
            'Phường 07',
            'Phường 08',
            'Phường 09',
            'Phường 10',
            'Phường 11',
            'Phường 12',
            'Phường 13',
            'Phường 14',
            'Phường 15',
            'Phường 16',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận 12
        $district = DB::table('districts')->where('name', 'Quận 12')->first();

        // Insert wards
        $wards = [
            'Phường An Phú Đông',
            'Phường Đông Hưng Thuận',
            'Phường Hiệp Thành',
            'Phường Tân Chánh Hiệp',
            'Phường Tân Hưng Thuận',
            'Phường Tân Thới Hiệp',
            'Phường Tân Thới Nhất',
            'Phường Thạnh Lộc',
            'Phường Thạnh Xuân',
            'Phường Thới An',
            'Phường Trung Mỹ Tây',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận Bình Tân
        $district = DB::table('districts')->where('name', 'Quận Bình Tân')->first();

        // Insert wards
        $wards = [
            'Phường An Lạc',
            'Phường An Lạc A',
            'Phường Bình Hưng Hòa',
            'Phường Bình Hưng Hoà A',
            'Phường Bình Hưng Hoà B',
            'Phường Bình Trị Đông',
            'Phường Bình Trị Đông A',
            'Phường Bình Trị Đông B',
            'Phường Tân Tạo',
            'Phường Tân Tạo A',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận Bình Thạnh
        $district = DB::table('districts')->where('name', 'Quận Bình Thạnh')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 03',
            'Phường 05',
            'Phường 06',
            'Phường 07',
            'Phường 11',
            'Phường 12',
            'Phường 13',
            'Phường 14',
            'Phường 15',
            'Phường 17',
            'Phường 19',
            'Phường 21',
            'Phường 22',
            'Phường 24',
            'Phường 25',
            'Phường 26',
            'Phường 27',
            'Phường 28',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận Gò Vấp
        $district = DB::table('districts')->where('name', 'Quận Gò Vấp')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 03',
            'Phường 04',
            'Phường 05',
            'Phường 06',
            'Phường 07',
            'Phường 08',
            'Phường 09',
            'Phường 10',
            'Phường 11',
            'Phường 12',
            'Phường 13',
            'Phường 14',
            'Phường 15',
            'Phường 16',
            'Phường 17',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận Phú Nhuận
        $district = DB::table('districts')->where('name', 'Quận Phú Nhuận')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 03',
            'Phường 04',
            'Phường 05',
            'Phường 07',
            'Phường 08',
            'Phường 09',
            'Phường 10',
            'Phường 11',
            'Phường 13',
            'Phường 15',
            'Phường 17',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận Tân Bình
        $district = DB::table('districts')->where('name', 'Quận Tân Bình')->first();

        // Insert wards
        $wards = [
            'Phường 01',
            'Phường 02',
            'Phường 03',
            'Phường 04',
            'Phường 05',
            'Phường 06',
            'Phường 07',
            'Phường 08',
            'Phường 09',
            'Phường 10',
            'Phường 11',
            'Phường 12',
            'Phường 13',
            'Phường 14',
            'Phường 15',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of quận Tân Phú
        $district = DB::table('districts')->where('name', 'Quận Tân Phú')->first();

        // Insert wards
        $wards = [
            'Phường Hiệp Tân',
            'Phường Hoà Thạnh',
            'Phường Phú Thạnh',
            'Phường Phú Thọ Hoà',
            'Phường Phú Trung',
            'Phường Sơn Kỳ',
            'Phường Tân Qúy',
            'Phường Tân Sơn Nhì',
            'Phường Tân Thành',
            'Phường Tân Thới Hoà',
            'Phường Tây Thạnh',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of Huyện Bình Chánh
        $district = DB::table('districts')->where('name', 'Huyện Bình Chánh')->first();

        // Insert wards
        $wards = [
            'Thị trấn Tân Túc',
            'Xã An Phú Tây',
            'Xã Bình Chánh',
            'Xã Bình Hưng',
            'Xã Bình Lợi',
            'Xã Đa Phước',
            'Xã Hưng Long',
            'Xã Lê Minh Xuân',
            'Xã Phạm Văn Hai',
            'Xã Phong Phú',
            'Xã Quy Đức',
            'Xã Tân Kiên',
            'Xã Tân Nhựt',
            'Xã Tân Quý Tây',
            'Xã Vĩnh Lộc A',
            'Xã Vĩnh Lộc B',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of Huyện Cần Giờ
        $district = DB::table('districts')->where('name', 'Huyện Cần Giờ')->first();

        // Insert wards
        $wards = [
            'Thị trấn Cần Thạnh',
            'Xã An Thới Đông',
            'Xã Bình Khánh',
            'Xã Long Hòa',
            'Xã Lý Nhơn',
            'Xã Tam Thôn Hiệp',
            'Xã Thạnh An',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }
        
        // Find UUID of Huyện Củ Chi
        $district = DB::table('districts')->where('name', 'Huyện Củ Chi')->first();

        // Insert wards
        $wards = [
            'Thị trấn Củ Chi',
            'Xã An Nhơn Tây',
            'Xã An Phú',
            'Xã Bình Mỹ',
            'Xã Hòa Phú',
            'Xã Nhuận Đức',
            'Xã Phạm Văn Cội',
            'Xã Phú Hòa Đông',
            'Xã Phú Mỹ Hưng',
            'Xã Phước Hiệp',
            'Xã Phước Thạnh',
            'Xã Phước Vĩnh An',
            'Xã Tân An Hội',
            'Xã Tân Phú Trung',
            'Xã Tân Thạnh Đông',
            'Xã Tân Thạnh Tây',
            'Xã Tân Thông Hội',
            'Xã Thái Mỹ',
            'Xã Trung An',
            'Xã Trung Lập Hạ',
            'Xã Trung Lập Thượng',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of Huyện Hóc Môn
        $district = DB::table('districts')->where('name', 'Huyện Hóc Môn')->first();

        // Insert wards
        $wards = [
            'Thị trấn Hóc Môn',
            'Xã Bà Điểm',
            'Xã Đông Thạnh',
            'Xã Nhị Bình',
            'Xã Tân Hiệp',
            'Xã Tân Thới Nhì',
            'Xã Tân Xuân',
            'Xã Thới Tam Thôn',
            'Xã Trung Chánh',
            'Xã Xuân Thới Đông',
            'Xã Xuân Thới Sơn',
            'Xã Xuân Thới Thượng',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }

        // Find UUID of Huyện Nhà Bè
        $district = DB::table('districts')->where('name', 'Huyện Nhà Bè')->first();

        // Insert wards
        $wards = [
            'Thị trấn Nhà Bè',
            'Xã Hiệp Phước',
            'Xã Long Thới',
            'Xã Nhơn Đức',
            'Xã Phú Xuân',
            'Xã Phước Kiển',
            'Xã Phước Lộc',
        ];

        foreach ($wards as $ward) {
            DB::table('wards')->insert([
                'id' => Str::uuid(),
                'name' => $ward,
                'Districts_id' => $district->id,
            ]);
        }
    }
}
