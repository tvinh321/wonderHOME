<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class CheckAdmin extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->header('Authorization');

        if ($token) {
            try {
                $decoded = JWT::decode($token, new Key(env('JWT_KEY'), 'HS256'));
                $request->user = $decoded->user;

                if ($request->user->role == 'admin') {
                    return $next($request);
                } else {
                    return response()->json([
                        'message' => 'You are not admin'
                    ], 401);
                }
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Invalid token'
                ], 401);
            }
        } else {
            return response()->json([
                'message' => 'Token not found'
            ], 401);
        }
    }
}