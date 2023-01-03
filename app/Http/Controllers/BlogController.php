<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Events\MessageSent;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    public function addCategory(Request $request)
    {
        $name = $request->name;

        if ($name) {
            $category = DB::table('categories')->where('name', $name)->first();

            if ($category) {
                return response()->json([
                    'message' => 'Category already exists'
                ], 422);
            }
            else {
                DB::table('categories')->insert([
                    'name' => $name,
                ]);

                return response()->json([
                    'message' => 'Category added'
                ], 200);
            }
        }
        else {
            return response()->json([
                'message' => 'Name is required'
            ], 422);
        }
    }
}
