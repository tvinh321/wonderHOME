<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Events\MessageSent;

class FilesController extends Controller
{
    // Upload Files with Property ID, store in storage/app/public/properties/{propertyId}
    public function uploadFilesForProperty(Request $request)
    {
        $propertyId = $request->propertyId;
        $files = $request->files;

        if ($files) {
            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName();
                $file->storeAs('public/properties/' . $propertyId, $fileName);
            }
        }
    }

    // Upload Files for Chat (with Permission), store in storage/app/chats/{chatId}
    public function uploadFilesForChat(Request $request)
    {
        $chatId = $request->chatId;
        $file = $request->file;
        $userId = $request->user->id;

        if ($file) {
            $fileName = bin2hex(random_bytes(32)) . '.' . $file->getClientOriginalExtension();
            Storage::putFileAs('public/chats/' . $chatId, $file, $fileName);

            $message = '[[file:' . $fileName . ']]';

            DB::table('messages')->insert([
                'chat_rooms_id' => $chatId,
                'users_id' => $userId,
                'content' => $message,
                'created_at' => now(),
            ]);

            event(new MessageSent($userId, $message, $chatId));

            return response()->json([
                'message' => 'File uploaded successfully'
            ]);
        }
    }

    // Get Files for Chat, return file
    public function getFilesForChat(Request $request)
    {
        $chatId = $request->chatId;
        $fileName = $request->fileName;

        $file = Storage::get('public/chats/' . $chatId . '/' . $fileName);

        return response($file, 200)->header('Content-Type', 'application/octet-stream');
    }

    public function getAvatar(Request $request)
    {
        $userId = $request->id;

        // Get avatar from database
        $avatar = DB::table('users')->where('id', $userId)->first()->avatar;

        if (!$avatar) {
            $avatar = 'default.png';
        }

        // Get file from storage
        $file = Storage::get('public/avatar/' . $avatar);

        // Return file with correct extension
        return response($file, 200)->header('Content-Type', 'image/' . pathinfo($avatar, PATHINFO_EXTENSION));
    }

    public function uploadAvatar(Request $request)
    {
        $file = $request->file;
        $userId = $request->user->id;

        if ($file) {
            $oldAvatar = DB::table('users')->where('id', $userId)->first()->avatar;

            if ($oldAvatar) {
                Storage::delete('public/avatar/' . $oldAvatar);
            }

            $fileName = $userId . '.' . $file->getClientOriginalExtension();
            Storage::putFileAs('public/avatar', $file, $fileName);

            DB::table('users')->where('id', $userId)->update([
                'avatar' => $fileName,
            ]);

            return response()->json([
                'message' => 'Avatar uploaded successfully'
            ]);
        }
    }

    public function getFilesForProperty(Request $request)
    {
        $propertyId = $request->id;
        $fileName = $request->fileName;

        $file = Storage::get('public/properties/' . $propertyId . '/' . $fileName);

        return response($file, 200)->header('Content-Type', 'application/octet-stream');
    }
}
