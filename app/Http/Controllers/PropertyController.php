<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $properties = DB::table('properties')->get();

        // Get user
        foreach ($properties as $property) {
            $property->user = DB::table('users')->where('id', $property->user_id)->first();
        }

        return view('properties.index', compact('properties'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::table('properties')->insert([
            'location' => $request->location,
            'description' => $request->description,
            'price' => $request->price,
            'bedrooms' => $request->bedrooms,
            'bathrooms' => $request->bathrooms,
            'direction' => $request->direction,
            'priority' => $request->priority,
            'facade' => $request->facade,
            'area' => $request->area,
            'juridical' => $request->juridical,
            'conveniences' => $request->conveniences,
            'expired_at' => $request->expired_at,
            'user_id' => $request->user_id,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $property = DB::table('properties')->where('id', $id)->first();
        $property->user = DB::table('users')->where('id', $property->user_id)->first();
        return view('properties.show', compact('property'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $property = DB::table('properties')->where('id', $id)->first();
        return view('property.edit', compact('property'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
    }

    public function addExample()
    {
        DB::table('users')->insert([
            'username' => 'admin',
            'password' => 'admin',
            'email' => 'abc@abc.com',
            'phone' => '0123456789',
            'name' => 'Admin',
        ]);

        DB::table('users')->insert([
            'username' => 'user',
            'password' => 'user',
            'email' => 'user@abc.com',
            'phone' => '0123456787',
            'name' => 'User',
        ]);

        DB::table('properties')->insert([
            'location' => 'Hà Nội',
            'description' => 'Mô tả',
            'price' => 100000000,
            'bedrooms' => 3,
            'bathrooms' => 2,
            'direction' => 1,
            'priority' => 1,
            'facade' => 100,
            'area' => 100,
            'juridical' => 1,
            'conveniences' => '2',
            'expired_at' => '2022-10-23',
            'user_id' => 1,
        ]);

        DB::table('properties')->insert([
            'location' => 'Hà Nội',
            'description' => 'Mô tả',
            'price' => 100000000,
            'bedrooms' => 3,
            'bathrooms' => 2,
            'direction' => 1,
            'priority' => 1,
            'facade' => 100,
            'area' => 100,
            'juridical' => 1,
            'conveniences' => '1,3',
            'expired_at' => '2022-10-23',
            'user_id' => 2,
        ]);

        return "Done :3";
    }
}
