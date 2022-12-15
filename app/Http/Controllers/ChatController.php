<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Events\MessageSent;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Storage;

class ChatController extends Controller
{
    public function fetchMessages(Request $request)
    {
        $chatId = $request->chatRoomId;

        $messages = DB::table('messages')
        ->where('chat_rooms_id', $chatId)
        ->orderBy('created_at', 'asc')
        ->get();

        return response()->json([
            'messages' => $messages
        ]);
    }

    public function sendMessage(Request $request)
    {
        $chatId = $request->chatRoomId;
        $userId = $request->userId;
        $message = $request->message;

        DB::table('messages')->insert([
            'chat_rooms_id' => $chatId,
            'users_id' => $userId,
            'content' => $message,
            'created_at' => now(),
        ]);

        event(new MessageSent($userId, $message, $chatId));

        return ['status' => 'Message Sent!'];
    }

    public function getChatRooms(Request $request) {
        // Get user ID
        $userId = $request->user->id;

        // Get chat rooms
        $chatRooms = DB::table('users_chat_rooms')
            ->where('users_chat_rooms.users_id', $userId)
            ->select('chat_rooms_id')
            ->get();

        for ($i = 0; $i < count($chatRooms); $i++) {
            // Get other user email
            $otherUser = DB::table('users_chat_rooms')
                ->where('users_chat_rooms.chat_rooms_id', $chatRooms[$i]->chat_rooms_id)
                ->where('users_chat_rooms.users_id', '!=', $userId)
                ->join('users', 'users_chat_rooms.users_id', '=', 'users.id')
                ->select('users.email', 'users.avatar')
                ->first();

            // Get last message
            $lastMessage = DB::table('messages')
                ->where('messages.chat_rooms_id', $chatRooms[$i]->chat_rooms_id)
                ->orderBy('messages.created_at', 'desc')
                ->first();

            $chatRooms[$i]->otherUser = $otherUser;
            $chatRooms[$i]->lastMessage = $lastMessage;
        }

        return response()->json([
            'chatRooms' => $chatRooms
        ]);
    }

    // Create new chat room ID
    public function createChatRoom(Request $request)
    {
        $ownerId = $request->user->id;

        $userId = $request->userId;

        $chatRoom = DB::table('chat_rooms')->insertGetId([]);

        DB::table('users_chat_rooms')->insert([
            'chat_rooms_id' => $chatRoom,
            'users_id' => $userId,
        ]);

        DB::table('users_chat_rooms')->insert([
            'chat_rooms_id' => $chatRoom,
            'users_id' => $ownerId,
        ]);

        return response()->json([
            'chatRoom' => $chatRoom
        ]);
    }

    public function setSeen(Request $request)
    {
        $chatRoomId = $request->chatRoomId;
        $userId = $request->user->id;

        DB::table('messages')
            ->where('chat_rooms_id', $chatRoomId)
            ->where('users_id', '!=', $userId)
            ->update(['read' => true]);

        return response()->json([
            'status' => 'Messages seen'
        ]);
    }

    public function getFile(Request $request)
    {
        $fileName = $request->fileName;

        $file = Storage::url($fileName);

        return response()->json([
            'file' => $file
        ]);
    }
}
