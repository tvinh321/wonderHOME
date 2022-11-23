<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PropertiesController extends Controller
{
    // Get 6 highest priority properties
    public function getHighestPriorityProperties()
    {
        $properties = DB::table('properties')
        ->select('properties.id', 'properties.title', 'properties.created_at', 'properties.location', 'properties.description', 'properties.num_of_bedrooms', 'properties.num_of_toilets', 'properties.direction', 'properties.price', 'properties.priority', 'properties.facade', 'properties.area', 'properties.expire_date', 'properties.juridical_status', 'properties.furniture')
        ->orderBy('properties.priority', 'desc')
        ->limit(6)
        ->get();

        return response()->json($properties);
    }

    // Get 1 property by ID
    public function getPropertyById(Request $request)
    {
        $id = $request->id;

        $property = DB::table('properties')
        ->where('properties.id', $id)
        ->leftJoin('wards', 'properties.wards_id', '=', 'wards.id')
        ->leftJoin('districts', 'wards.districts_id', '=', 'districts.id')
        ->leftJoin('cities', 'districts.cities_id', '=', 'cities.id')
        ->leftJoin('juridicals', 'properties.juridicals_id', '=', 'juridicals.id')
        ->leftJoin('property_types', 'properties.property_types_id', '=', 'property_types.id')
        ->leftJoin('conveniences_properties', 'properties.id', '=', 'conveniences_properties.properties_id')
        ->leftJoin('files', 'properties.id', '=', 'files.properties_id')
        ->select('properties.id', 'properties.title', 'properties.created_at', 'properties.location', 'properties.description', 'properties.num_of_bedrooms', 'properties.num_of_toilets', 'properties.direction', 'properties.price', 'properties.priority', 'properties.facade', 'properties.area', 'properties.expire_date', 'properties.juridical_status', 'properties.furniture', 'juridicals.type as juridical_type', 'property_types.name as property_type', 'wards.name as ward', 'districts.name as district', 'cities.name as city')
        ->selectRaw("string_agg(conveniences_properties.conveniences_id::character varying, ', ') as conveniences")
        ->groupBy('properties.id', 'properties.title', 'properties.created_at', 'properties.location', 'properties.description', 'properties.num_of_bedrooms', 'properties.num_of_toilets', 'properties.direction', 'properties.price', 'properties.priority', 'properties.facade', 'properties.area', 'properties.expire_date', 'properties.juridical_status', 'properties.furniture', 'juridicals.type', 'property_types.name', 'wards.name', 'districts.name', 'cities.name')
        ->get();

        if ($property->isEmpty()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Property not found'
            ]);
        }
        else {
            // Get Files
            $files = DB::table('files')
            ->where('properties_id', $id)
            ->select('content', 'type')
            ->get();

            // Seperate files by type
            $images = [];
            $videos = [];

            foreach ($files as $file) {
                if ($file->type == 'image') {
                    array_push($images, $file->content);
                }
                else {
                    array_push($videos, $file->content);
                }
            }

            $property[0]->images = $images;
            $property[0]->videos = $videos;
        }

        return response()->json($property[0]);
    }

    // Get property types
    public function getPropertyTypes()
    {
        $propertyTypes = DB::table('property_types')
        ->select('id', 'name')
        ->get();

        return response()->json($propertyTypes);
    }

    // Post property
    public function postProperty(Request $request)
    {
        $user = $request->user;

        $id = DB::table('properties')->insertGetId([
            'title' => $request->title,
            'location' => $request->location,
            'description' => $request->description,
            'num_of_bedrooms' => $request->bedrooms,
            'num_of_toilets' => $request->bathrooms,
            'direction' => $request->direction,
            'price' => $request->price,
            'priority' => 10,
            'facade' => $request->facade,
            'area' => $request->area,
            'expire_date' => now()->addDays(30),
            'juridical_status' => $request->juridical_status,
            'furniture' => $request->furniture,
            'juridicals_id' => $request->juridicals_id,
            'property_types_id' => $request->property_types_id,
            'wards_id' => $request->wards_id,
            'users_id' => $user,
            'created_at' => now(),
        ]);

        $images = $request->images;
        $videos = $request->videos;
        $conveniences = $request->conveniences;
        $panoramas = $request->panoramas;
        $juridicals = $request->juridicals;

        if ($images) {
            foreach ($images as $image) {
                DB::table('files')->insert([
                    'content' => $image,
                    'type' => 'image',
                    'properties_id' => $id,
                ]);
            }
        }

        if ($videos) {
            foreach ($videos as $video) {
                DB::table('files')->insert([
                    'content' => $video,
                    'type' => 'video',
                    'properties_id' => $id,
                ]);
            }
        }

        if ($panoramas) {
            foreach ($panoramas as $panorama) {
                DB::table('files')->insert([
                    'content' => $panorama,
                    'type' => 'panorama',
                    'properties_id' => $id,
                ]);
            }
        }

        if ($juridicals) {
            foreach ($juridicals as $juridical) {
                DB::table('files')->insert([
                    'content' => $juridical,
                    'type' => 'juridical',
                    'properties_id' => $id,
                ]);
            }
        }

        if ($conveniences) {
            foreach ($conveniences as $convenience) {
                DB::table('conveniences_properties')->insert([
                    'conveniences_id' => $convenience,
                    'properties_id' => $id,
                ]);
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Property posted successfully',
            'property_id' => $id
        ]);
    }
    
    public function queryProperties(Request $request)
    {
        $title = $request->title;
        $ward = $request->ward;
        $price = $request->price;
        $area = $request->area;
        $type = $request->type;
        $bedroom = $request->bedroom;

        $properties = DB::table('properties')
        ->join('juridicals', 'properties.juridicals_id', '=', 'juridicals.id')
        ->join('property_types', 'properties.property_types_id', '=', 'property_types.id')
        ->join('wards', 'properties.wards_id', '=', 'wards.id')
        ->join('districts', 'wards.districts_id', '=', 'districts.id')
        ->join('cities', 'districts.cities_id', '=', 'cities.id')
        ->select('properties.id', 'properties.title', 'properties.created_at', 'properties.location', 'properties.description', 'properties.num_of_bedrooms', 'properties.num_of_toilets', 'properties.direction', 'properties.price', 'properties.priority', 'properties.facade', 'properties.area', 'properties.expire_date', 'properties.juridical_status', 'properties.furniture')
        ->where('properties.expire_date', '>', now())
        ->where('properties.status', '=', 'active');

        if ($title) {
            $properties = $properties->where('properties.title', 'like', '%' . $title . '%');
        }

        if ($ward) {
            $properties = $properties->where('properties.wards_id', '=', $ward);
        }

        if ($district) {
            $properties = $properties->where('districts.id', '=', $district);
        }

        if ($city) {
            $properties = $properties->where('cities.id', '=', $city);
        }

        if ($price) {
            $price = explode('-', $price);
            $properties = $properties->whereBetween('properties.price', [$price[0], $price[1]]);
        }

        if ($area) {
            $area = explode('-', $area);
            $properties = $properties->whereBetween('properties.area', [$area[0], $area[1]]);
        }

        if ($type) {
            $type = explode(',', $type);
            $properties = $properties->whereIn('properties.property_types_id', $type);
        }

        if ($bedroom) {
            $properties = $properties->where('properties.num_of_bedrooms', '=', $bedroom);
        }

        $properties = $properties->get();

        return response()->json([
            'status' => 'success',
            'properties' => $properties
        ]);
    }
}