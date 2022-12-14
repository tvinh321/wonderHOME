<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class CheckUser
{
    public function handle($request, Closure $next)
    {
        $output = new \Symfony\Component\Console\Output\ConsoleOutput();
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', '', $token);

        if ($token) {
            try {
                $output->writeln('Token: ' . $token);
                $output->writeln('Key: ' . env('JWT_KEY'));

                $decoded = JWT::decode($token, new Key(env('JWT_KEY'), 'HS256'));
                $request->user = $decoded->sub;
                return $next($request);
            } catch (\Exception $e) {
                $output->writeln($e->getMessage());

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