<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PropertiesController extends Controller
{
    // Get 6 highest priority properties
    public function getHighestPriorityProperties(Request $request)
    {
        $ward = $request->ward;

        $properties = DB::table('properties')
        ->orderBy('properties.priority', 'desc')
        ->limit(6);

        if ($ward) {
            $properties = $properties->where('properties.wards_id', $ward);
        }

        // Get 6 highest priority properties
        $properties = $properties->get();

        // Get files for each property
        foreach ($properties as $property) {
            $property->image = DB::table('files')
            ->where('files.properties_id', $property->id)
            ->where('files.type', 'image')
            ->first();
        }

        return response()->json($properties);
    }

    // Get 1 property by ID
    public function getPropertyById(Request $request)
    {
        $id = $request->id;

        $property = DB::table('properties')
        ->select('properties.*')
        ->where('properties.id', $id)
        ->get()
        ->first();

        if ($property) {
            $property->files = DB::table('files')
            ->where('files.properties_id', $id)
            ->get();

            $property->owner = DB::table('users')
            ->select('users.id' ,'users.full_name', 'users.phone', 'users.email', 'users.facebook')
            ->where('users.id', $property->users_id)
            ->first();
        }

        return response()->json($property);
    }

    // Post property
    public function postProperty(Request $request)
    {
        $userId = $request->user->id;

        $output = new \Symfony\Component\Console\Output\ConsoleOutput();

        $id = DB::table('properties')->insertGetId([
            'title' => $request->title,
            'location' => $request->location,
            'description' => $request->description,
            'type' => $request->type,
            'num_of_bedrooms' => $request->bedroom,
            'num_of_toilets' => $request->bathroom,
            'direction' => $request->direction,
            'price' => $request->price,
            'priority' => 10,
            'facade' => $request->facade,
            'area' => $request->area,
            'floor' => $request->floors,
            'expire_date' => now()->addDays(30),
            'juridical_status' => $request->juridicalStatus,
            'juridical_type' => 'sohong',
            'furniture' => $request->furniture,
            'wards_id' => $request->ward,
            'users_id' => $userId,
            'created_at' => now(),
            'access_count' => 0,
            'conveniences' => $request->conveniences,
            'direction' => $request->direction,
            'status' => 0
        ]);

        if ($request->video) {
            DB::table('files')->insert([
                'content' => $request->video,
                'properties_id' => $id,
                'type' => 'video',
                'permission' => 'public',
            ]);
        }

        if ($request->has('images')) {
            // Print
            $output->writeln('Has images');

            foreach ($request->images as $image) {
                // Print
                $output->writeln('Image: ' . $image->getClientOriginalName());

                $fileName = 'image_' . $image->getClientOriginalName();

                Storage::putFileAs('public/properties/' . $id, $image, $fileName);

                DB::table('files')->insert([
                    'content' => $fileName,
                    'properties_id' => $id,
                    'type' => 'image',
                    'permission' => 'public',
                ]);
            }
        }

        if ($request->has('panoramas')) {
            // Print
            $output->writeln('Has panoramas');

            foreach ($request->panoramas as $panorama) {
                // Print
                $output->writeln('Panorama: ' . $panorama->getClientOriginalName());

                $fileName = 'pano_' . $panorama->getClientOriginalName();

                Storage::putFileAs('public/properties/' . $id, $panorama, $fileName);

                DB::table('files')->insert([
                    'content' => $fileName,
                    'properties_id' => $id,
                    'type' => 'pano',
                    'permission' => 'public',
                ]);
            }
        }

        if ($request->has('juridicalImages')) {
            // Print
            $output->writeln('Has juridical images');

            foreach ($request->juridicalImages as $juridicalImage) {
                // Print
                $output->writeln('Juridical image: ' . $juridicalImage->getClientOriginalName());
                $fileName = 'juridical_' . $juridicalImage->getClientOriginalName();

                Storage::putFileAs('public/properties/' . $id, $juridicalImage, $fileName);

                DB::table('files')->insert([
                    'content' => $fileName,
                    'properties_id' => $id,
                    'type' => 'juridical',
                    'permission' => 'public',
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
        $output = new \Symfony\Component\Console\Output\ConsoleOutput();

        $title = $request->title;
        $city = $request->city;
        $district = $request->district;
        $ward = $request->ward;
        $price = $request->price;
        $area = $request->area;
        $type = $request->type;
        $bedroom = $request->bedroom;
        $toilet = $request->toilet;
        $direction = $request->direction;

        $properties = DB::table('properties')
        ->leftJoin('wards', 'properties.wards_id', '=', 'wards.id')
        ->leftJoin('districts', 'wards.districts_id', '=', 'districts.id')
        ->leftJoin('cities', 'districts.cities_id', '=', 'cities.id');

        if ($title) {
            // Case insensitive query
            $output->writeln('Title: ' . mb_strtolower($title, 'UTF-8'));
            $properties = $properties->whereRaw('LOWER(properties.title) LIKE ?', ['%' . mb_strtolower($title) . '%']);
        }

        if ($ward) {
            $output->writeln('Ward: ' . $ward);
            $properties = $properties->where('properties.wards_id', '=', $ward);
        }
        else if ($district) {
            $output->writeln('District: ' . $district);
            $properties = $properties->where('districts.id', '=', $district);
        }
        else if ($city) {
            $output->writeln('City: ' . $city);
            $properties = $properties->where('cities.id', '=', $city);
        }

        if ($price) {
            $output->writeln('Price: ' . $price[0] . ' - ' . $price[1]);
            $properties = $properties->whereBetween('properties.price', [$price[0]*1000000000, $price[1]*1000000000]);
        }

        if ($area) {
            $output->writeln('Area: ' . $area[0] . ' - ' . $area[1]);
            $properties = $properties->whereBetween('properties.area', [$area[0], $area[1]]);
        }

        if ($type) {
            $output->writeln('Type: ' . $type[0]);
            $properties = $properties->whereIn('properties.type', $type);
        }

        if ($bedroom) {
            $output->writeln('Bedroom: ' . $bedroom);
            $properties = $properties->where('properties.num_of_bedrooms', '=', $bedroom);
        }

        if ($toilet) {
            $output->writeln('Toilet: ' . $toilet);
            $properties = $properties->where('properties.num_of_toilets', '=', $toilet);
        }

        if ($direction) {
            $output->writeln('Direction: ' . $direction);
            $properties = $properties->where('properties.direction', '=', $direction);
        }

        $properties = $properties->select('properties.*', 'wards.name as ward_name', 'districts.name as district_name', 'cities.name as city_name')->get();

        if ($properties->isEmpty()) {
            return response()->json([
                'status' => 'error',
                'message' => 'No properties found'
            ]);
        }
        else {
            // Get files
            foreach ($properties as $property) {
                $property->image = DB::table('files')
                ->where('properties_id', '=', $property->id)
                ->where('type', '=', 'image')
                ->first();
            }
        }

        return response()->json([
            'status' => 'success',
            'properties' => $properties
        ]);
    }
}