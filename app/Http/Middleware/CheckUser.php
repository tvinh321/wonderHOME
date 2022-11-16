<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class CheckUser extends Middleware
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
                return $next($request);
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