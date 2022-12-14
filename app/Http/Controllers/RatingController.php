<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class RatingController extends Controller
{
    // Post rating
    public function postRating(Request $request)
    {
        $rating = $request->rating;
        $token = $request->token;

        // Decode token
        $key = env('JWT_KEY');
        $decoded = JWT::decode($token, $key, array('HS256'));

        $id = DB::table('ratings')->insertGetId([
            'stars' => $rating,
            'users_id' => $user_id,
            'created_at' => time(),
        ]);

        return response()->json($rating);
    }

    public function generateToken($payload)
    {
        $key = env('JWT_KEY');
        $token = JWT::encode($payload, $key);
        return $token;
    }
}
