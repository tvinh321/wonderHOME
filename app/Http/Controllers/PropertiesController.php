<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PropertiesController extends Controller
{
    // Get 6 highest priority properties
    public function getHighestPriorityProperties(Request $request)
    {
        $ward = $request->ward;

        $properties = DB::table('properties')
        ->where('properties.status', 1)
        ->orderBy('properties.priority', 'desc')
        ->limit(6);

        if ($ward) {
            $properties = $properties->where('properties.wards_id', $ward);
        }

        // Get 6 highest priority properties
        $properties = $properties->get();

        // Get files for each property
        foreach ($properties as $property) {
            $property->files = DB::table('files')
            ->where('files.properties_id', $property->id)
            ->get();
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
        }

        return response()->json($property);
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
            'wards_id' => $request->wards_id,
            'users_id' => $user,
            'created_at' => now(),
        ]);

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
            $output->writeln($title);
            $properties = $properties->where('properties.title', 'like', '%' . $title . '%');
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
                $property->files = DB::table('files')
                ->where('properties_id', '=', $property->id)
                ->get();
            }
        }

        return response()->json([
            'status' => 'success',
            'properties' => $properties
        ]);
    }
}