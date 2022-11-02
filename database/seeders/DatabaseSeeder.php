<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CitiesSeeder::class,
            DistrictsSeeder::class,
            WardsSeeder::class,
            JuridicalsSeeder::class,
            PropertyTypesSeeder::class,
            UsersSeeder::class,
            PropertiesSeeder::class,
        ]);
    }
}
