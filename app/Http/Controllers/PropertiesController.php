<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PropertiesController extends Controller
{
    public function getProperties(Request $request)
    {
        // Query params: title, cityId, districtId, wardId, fromPrice, toPrice, fromArea, toArea, direction, bedroom
        $title = $request->title;
        $cityId = $request->cityId;
        $districtId = $request->districtId;
        $wardId = $request->wardId;
        $fromPrice = $request->fromPrice;
        $toPrice = $request->toPrice;
        $fromArea = $request->fromArea;
        $toArea = $request->toArea;
        $direction = $request->direction;
        $bedroom = $request->bedroom;

        $query = DB::table('properties')
        ->join('wards', 'properties.Wards_id', '=', 'wards.id')
        ->join('districts', 'wards.Districts_id', '=', 'districts.id')
        ->join('cities', 'districts.Cities_id', '=', 'cities.id')
        ->select('properties.id', 'properties.title', 'properties.created_at', 'properties.location', 'properties.description', 'properties.num_of_bedrooms', 'properties.num_of_toilets', 'properties.direction', 'properties.price', 'properties.priority', 'properties.facade', 'properties.area', 'properties.expire_date', 'wards.name as ward', 'districts.name as district', 'cities.name as city');

        if ($title) {
            $query = $query->where('properties.title', 'like', '%' . $title . '%');
        }

        if ($cityId) {
            $query = $query->where('cities.id', $cityId);
        }

        if ($districtId) {
            $query = $query->where('districts.id', $districtId);
        }

        if ($wardId) {
            $query = $query->where('wards.id', $wardId);
        }

        if ($fromPrice) {
            $query = $query->where('properties.price', '>=', $fromPrice);
        }

        if ($toPrice) {
            $query = $query->where('properties.price', '<=', $toPrice);
        }

        if ($fromArea) {
            $query = $query->where('properties.area', '>=', $fromArea);
        }

        if ($toArea) {
            $query = $query->where('properties.area', '<=', $toArea);
        }

        if ($direction) {
            $query = $query->where('properties.direction', $direction);
        }

        if ($bedroom) {
            $query = $query->where('properties.num_of_bedrooms', $bedroom);
        }

        $properties = $query->get();

        $files = [
            'images' => [
                'http://localhost:8000/storage/properties/1/1.jpg',
                'http://localhost:8000/storage/properties/1/2.jpg',
                'http://localhost:8000/storage/properties/1/3.jpg',
            ],
            'videos' => [
                'http://localhost:8000/storage/properties/1/1.mp4',
                'http://localhost:8000/storage/properties/1/2.mp4',
                'http://localhost:8000/storage/properties/1/3.mp4',
            ],
        ];

        $properties = $properties->map(function ($property) use ($files) {
            $property->files = $files;

            return $property;
        });
        
        return response()->json($properties);
    }

    public function getProperty($id)
    {
        $property = DB::table('properties')
        ->join('wards', 'properties.Wards_id', '=', 'wards.id')
        ->join('districts', 'wards.Districts_id', '=', 'districts.id')
        ->join('cities', 'districts.Cities_id', '=', 'cities.id')
        ->select('properties.id', 'properties.title', 'properties.created_at', 'properties.location', 'properties.description', 'properties.num_of_bedrooms', 'properties.num_of_toilets', 'properties.direction', 'properties.price', 'properties.priority', 'properties.facade', 'properties.area', 'properties.expire_date', 'wards.name as ward', 'districts.name as district', 'cities.name as city')
        ->where('properties.id', $id)
        ->first();

        $files = [
            'images' => [
                'http://localhost:8000/storage/properties/1/1.jpg',
                'http://localhost:8000/storage/properties/1/2.jpg',
                'http://localhost:8000/storage/properties/1/3.jpg',
            ],
            'videos' => [
                'http://localhost:8000/storage/properties/1/1.mp4',
                'http://localhost:8000/storage/properties/1/2.mp4',
                'http://localhost:8000/storage/properties/1/3.mp4',
            ],
        ];

        $property->files = $files;

        return response()->json($property);
    }
}
