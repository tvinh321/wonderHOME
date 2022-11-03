<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    // Check Register Email Exist
    public function checkRegisterEmailExist(Request $request)
    {
        $email = $request->email;

        $user = DB::table('users')->where('email', $email)->first();

        if ($user) {
            return response()->json([
                'message' => 'Email already exists'
            ], 409);
        } else {
            return response()->json([
                'status' => 'success'
            ]);
        }
    }

    // Register
    public function register(Request $request)
    {
        $fullName = $request->fullName;
        $gender = $request->gender;
        $dob = $request->dob;
        $email = $request->email;
        $phone = $request->phone;
        $location = $request->location;
        $username = $request->username;
        $password = $request->password;

        $password = password_hash($password, PASSWORD_DEFAULT);

        $user = DB::table('users')->insert([
            'full_name' => $fullName,
            'username' => $username,
            'password' => $password,
            'email' => $email,
            'gender' => $gender,
            'dob' => $dob,
            'register_at' => date('Y-m-d H:i:s'),
            'last_active' => date('Y-m-d H:i:s'),
            'role' => 1,
        ]);

        return response()->json([
            'message' => 'Register successfully'
        ], 201);
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

        return JWT::encode($payload, $key);
    }
}
