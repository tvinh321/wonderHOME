<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PropertiesController extends Controller
{
    public function getProperty($id)
    {
        $property = DB::table('properties')
        ->join('wards', 'properties.wards_id', '=', 'wards.id')
        ->join('districts', 'wards.districts_id', '=', 'districts.id')
        ->join('cities', 'districts.cities_id', '=', 'cities.id')
        ->join('juridicals', 'properties.juridicals_id', '=', 'juridicals.id')
        ->join('property_types', 'properties.property_types_id', '=', 'property_types.id')
        ->select('properties.id', 'properties.title', 'properties.created_at', 'properties.location', 'properties.description', 'properties.num_of_bedrooms', 'properties.num_of_toilets', 'properties.direction', 'properties.price', 'properties.priority', 'properties.facade', 'properties.area', 'properties.expire_date', 'properties.juridical_status', 'properties.furniture', 'juridicals.type as juridical_type', 'property_types.name as property_type', 'wards.name as ward', 'districts.name as district', 'cities.name as city', )
        ->where('properties.id', $id)
        ->first();

        $files = [
            'images' => [
                'http://localhost:8000/storage/properties/1/1.jpg',
                'http://localhost:8000/storage/properties/1/2.jpg',
                'http://localhost:8000/storage/properties/1/3.jpg',
            ],
        ];

        $property->files = $files;

        return response()->json($property);
    }

    public function getProperties(Request $request)
    {
        $title = $request->title;
        $cityId = $request->cityId;
        $districtId = $request->districtId;
        $wardId = $request->wardId;
        $price = $request->price;
        $area = $request->fromArea;
        $direction = $request->direction;
        $bedroom = $request->bedroom;
        $type = $request->type;

        $query = DB::table('properties')
        ->join('wards', 'properties.wards_id', '=', 'wards.id')
        ->join('districts', 'wards.districts_id', '=', 'districts.id')
        ->join('cities', 'districts.cities_id', '=', 'cities.id')
        ->join('juridicals', 'properties.juridicals_id', '=', 'juridicals.id')
        ->join('property_types', 'properties.property_types_id', '=', 'property_types.id')
        ->select('properties.id', 'properties.title', 'properties.created_at', 'properties.location', 'properties.description', 'properties.num_of_bedrooms', 'properties.num_of_toilets', 'properties.direction', 'properties.price', 'properties.priority', 'properties.facade', 'properties.area', 'properties.expire_date', 'properties.juridical_status', 'properties.furniture', 'juridicals.type as juridical_type', 'property_types.name as property_type', 'wards.name as ward', 'districts.name as district', 'cities.name as city', )
        ->where('properties.juridical_status', 1);
        
        if ($title) {
            $query = $query->where('properties.title', 'like', '%' . $title . '%');
        }

        if ($cityId) {
            $query = $query->whereIn('cities.id', $cityId);
        }

        if ($districtId) {
            $query = $query->whereIn('districts.id', $districtId);
        }

        if ($wardId) {
            $query = $query->whereIn('wards.id', $wardId);
        }

        if ($price) {
            $query = $query->where('properties.price', '>=' , $price[0])->where('properties.price', '<=' , $price[1]);
        }

        if ($area) {
            $query = $query->where('properties.area', '>=' , $area[0])->where('properties.area', '<=' , $area[1]);
        }

        if ($direction) {
            $query = $query->whereIn('properties.direction', $direction);
        }

        if ($bedroom) {
            $query = $query->whereIn('properties.num_of_bedrooms', $bedroom);
        }

        if ($type) {
            $query = $query->whereIn('property_types.id', $type);
        }

        $properties = $query->get();

        $files = [
            'images' => [
                'http://localhost:8000/storage/properties/1/1.jpg',
                'http://localhost:8000/storage/properties/1/2.jpg',
                'http://localhost:8000/storage/properties/1/3.jpg',
            ],
        ];

        $properties = $properties->map(function ($property) use ($files) {
            $property->files = $files;

            return $property;
        });

        return response()->json($properties);
    }

    // Get 6 highest priority properties
    public function getHighestPriorityProperties()
    {
        $properties = DB::table('properties')
        ->join('wards', 'properties.wards_id', '=', 'wards.id')
        ->join('districts', 'wards.districts_id', '=', 'districts.id')
        ->join('cities', 'districts.cities_id', '=', 'cities.id')
        ->join('juridicals', 'properties.juridicals_id', '=', 'juridicals.id')
        ->join('property_types', 'properties.property_types_id', '=', 'property_types.id')
        ->select('properties.id', 'properties.title', 'properties.created_at', 'properties.location', 'properties.description', 'properties.num_of_bedrooms', 'properties.num_of_toilets', 'properties.direction', 'properties.price', 'properties.priority', 'properties.facade', 'properties.area', 'properties.expire_date', 'properties.juridical_status', 'properties.furniture', 'juridicals.type as juridical_type', 'property_types.name as property_type', 'wards.name as ward', 'districts.name as district', 'cities.name as city', )
        ->where('properties.juridical_status', 1)
        ->orderBy('properties.priority', 'desc')
        ->limit(6)
        ->get();

        $files = [
            'images' => [
                'http://localhost:8000/storage/properties/1/1.jpg',
                'http://localhost:8000/storage/properties/1/2.jpg',
                'http://localhost:8000/storage/properties/1/3.jpg',
            ],
        ];

        $properties = $properties->map(function ($property) use ($files) {
            $property->files = $files;

            return $property;
        });

        return response()->json($properties);
    }

    // Get property types
    public function getPropertyTypes()
    {
        $propertyTypes = DB::table('property_types')
        ->select('id', 'name')
        ->get();

        return response()->json($propertyTypes);
    }
}