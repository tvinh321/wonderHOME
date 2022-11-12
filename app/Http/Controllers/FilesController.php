<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FilesController extends Controller
{
    // Upload Files with Property ID, store as base64 in DB
    public function uploadFiles(Request $request)
    {
        $propertyId = $request->propertyId;
        $files = $request->files;

        foreach ($files as $file) {
            $fileBase64 = base64_encode(file_get_contents($file));
            DB::table('files')->insert([
                'properties_id' => $propertyId,
                'file' => $fileBase64,
            ]);
        }

        return response()->json([
            'status' => 'success'
        ]);
    }
}
