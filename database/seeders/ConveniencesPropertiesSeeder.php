<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ConveniencesPropertiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Conveniences
        $properties = DB::table('properties')->get();
        $conveniences = DB::table('conveniences')->get();
        foreach ($properties as $property) {
            $convenience = $conveniences->random();
            DB::table('conveniences_properties')->insert([
                'properties_id' => $property->id,
                'conveniences_id' => $convenience->id,
            ]);
        }
    }
}
