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
        DB::table('properties')->insert([
            'title' => $request->title,
            'location' => $request->location,
            'description' => $request->description,
            'num_of_bedrooms' => $request->num_of_bedrooms,
            'num_of_toilets' => $request->num_of_toilets,
            'direction' => $request->direction,
            'price' => $request->price,
            'priority' => $request->priority,
            'facade' => $request->facade,
            'area' => $request->area,
            'expire_date' => $request->expire_date,
            'juridical_status' => $request->juridical_status,
            'furniture' => $request->furniture,
            'juridicals_id' => $request->juridicals_id,
            'property_types_id' => $request->property_types_id,
            'wards_id' => $request->wards_id,
            'users_id' => $request->users_id,
            'created_at' => now(),
        ]);

        $videos = $request->videos;
        $conveniences = $request->conveniences;

        if ($videos) {
            for ($i = 0; $i < count($videos); $i++) {
                $video = $videos[$i];

                DB::table('files')->insert([
                    'type' => 'video',
                    'name' => $propertyId . '/video_' . $i,
                    'properties_id' => $propertyId,
                ]);
            }
        }

        if ($conveniences) {
            foreach ($conveniences as $convenience) {
                DB::table('conveniences_properties')->insert([
                    'conveniences_id' => $convenience,
                    'properties_id' => $propertyId,
                ]);
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Property posted successfully',
            'property_id' => $propertyId
        ]);
    }
}