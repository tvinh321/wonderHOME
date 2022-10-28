<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
{
    // Get cities
    public function getCities()
    {
        $cities = DB::table('cities')->get();

        return $cities;
    }

    // Get districts
    public function getDistricts($city_id)
    {
        $districts = DB::table('districts')->where('Cities_id', $city_id)->select('id', 'name')->get();

        return $districts;
    }

    // Get wards
    public function getWards($district_id)
    {
        $wards = DB::table('wards')->where('Districts_id', $district_id)->select('id', 'name')->get();

        return $wards;
    }
}
