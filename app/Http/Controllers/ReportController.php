<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class ReportController extends Controller
{
    public function getReports(Request $request)
    {
        $userId = $request->user->id;

        $reports = DB::table('reports')
            ->join('properties', 'properties.id', '=', 'reports.properties_id')
            ->where('properties.users_id', $userId)
            ->select('reports.*', 'properties.id as propertyId', 'properties.title as propertyName')
            ->orderBy('reports.created_at', 'desc')
            ->get();

        return response()->json([
            'reports' => $reports
        ]);
    }

    public function postReport(Request $request)
    {
        $propertyId = $request->propertyId;
        $reason = $request->reason;
        $content = $request->content;

        DB::table('reports')->insert([
            'properties_id' => $propertyId,
            'reason' => $reason,
            'content' => $content,
            'created_at' => now(),
        ]);

        return response()->json([
            'message' => 'Report sent successfully'
        ]);
    }
}
