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
        $email = $request->email;
        $password = $request->password;

        $user = DB::table('users')->where('email', $email)->first();

        if ($user) {
            if (password_verify($password, $user->password)) {
                $token = $this->generateToken(
                    [
                        'id' => $user->id,
                        'email' => $user->email,
                        'role' => $user->role,
                    ]
                );

                return response()->json([
                    'status' => 'success',
                    'token' => $token,
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
        $email = $request->email;
        $password = $request->password;

        if ($email && $password) {
            $user = DB::table('users')->where('email', $email)->first();

            if ($user) {
                return response()->json([
                    'message' => 'Email already exists'
                ], 422);
            }
            else {
                $password = password_hash($password, PASSWORD_DEFAULT);

                $id = DB::table('users')->insertGetId([
                    'email' => $email,
                    'password' => $password,
                    'register_at' => now(),
                    'last_active' => now(),
                    'role' => 0,
                    'access' => 1
                ]);

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

    // Update User Info
    public function update(Request $request)
    {
        $id = $request->user->id;
        
        $fullname = $request->fullName;
        $identity = $request->identityNumber;
        $gender = $request->gender;
        $location = $request->location;
        $dob = $request->dob;
        $description = $request->description;
        $facebook = $request->facebook;
        $phone = $request->phone;

        DB::table('users')->where('id', $id)->update([
            'full_name' => $fullname,
            'identity_number' => $identity,
            'gender' => $gender,
            'location' => $location,
            'dob' => $dob,
            'description' => $description,
            'facebook' => $facebook,
            'phone' => $phone
        ]);

        return response()->json([
            'status' => 'success'
        ]);
    }

    // Generate token
    public function generateToken($user_id)
    {
        $key = env('JWT_KEY');
        $payload = [
            'iss' => 'lumen-jwt', // Issuer of the token
            'sub' => $user_id, // Subject of the token
            'iat' => time() // Time when JWT was issued.
        ];

        return JWT::encode($payload, $key, 'HS256');
    }
}
