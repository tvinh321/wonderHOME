<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class UsersController extends Controller
{
    // Login with JWT
    public function login(Request $request)
    {
        $username = $request->username;
        $password = $request->password;

        $user = DB::table('users')->where('username', $username)->first();

        if ($user) {
            if (password_verify($password, $user->password)) {
                $token = $this->generateToken($user->id);

                return response()->json([
                    'status' => 'success',
                    'token' => $token,
                    'user' => $user,
                ]);
            } else {
                return response()->json([
                    'message' => 'Password is incorrect'
                ], 401);
            }
        } else {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }
    }

    // Register
    public function register(Request $request)
    {
        $firstName = $request->firstName;
        $lastName = $request->lastName;
        $gender = $request->gender;
        $dob = $request->dob;
        $email = $request->email;
        $phone = $request->phone;
        $location = $request->location;
        $username = $request->username;
        $password = $request->password;

        if ($firstName && $lastName && $gender && $dob && $email && $phone && $location && $username && $password) {
            $user = DB::table('users')->where('email', $email)->first();
            $user2 = DB::table('users')->where('username', $username)->first();

            if ($user) {
                return response()->json([
                    'message' => 'Email already exists'
                ], 422);
            }
            elseif ($user2) {
                return response()->json([
                    'message' => 'Username already exists'
                ], 422);
            }
            else {
                $password = password_hash($password, PASSWORD_DEFAULT);

                $id = DB::table('users')->insertGetId([
                    'full_name' => $lastName . ' ' . $firstName,
                    'username' => $username,
                    'email' => $email,
                    'password' => $password,
                    'phone' => $phone,
                    'gender' => $gender,
                    'dob' => $dob,
                    'location' => $location,
                    'register_at' => date('Y-m-d H:i:s'),
                    'last_active' => date('Y-m-d H:i:s'),
                    'role' => 1
                ]);

                $user = DB::table('users')->where('id', $id)->first();

                return response()->json([
                    'status' => 'success'
                ]);
            }
        } else {
            return response()->json([
                'message' => 'Please fill all fields'
            ], 400);
        }
    }

    // Generate token
    public function generateToken($user_id)
    {
        $key = env('JWT_KEY');
        $payload = [
            'iss' => 'lumen-jwt', // Issuer of the token
            'sub' => $user_id, // Subject of the token
            'iat' => time(), // Time when JWT was issued.
            'exp' => time() + 60 * 60 // Expiration time
        ];

        return JWT::encode($payload, $key, 'HS256');
    }
}
