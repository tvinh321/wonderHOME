<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Events\MessageSent;

class ChatController extends Controller
{
    public function fetchMessages(Request $request)
    {
        $chatId = $request->chatRoomId;

        $messages = DB::table('messages')->where('chat_rooms_id', $chatId)->get();

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

    public function getChatRoom() {
        // Get all chat rooms
        $chatRooms = DB::table('chat_rooms')->get();

        // Get all users in chat rooms
        foreach ($chatRooms as $chatRoom) {
            $users = DB::table('users_chat_rooms')
                ->join('users', 'users_chat_rooms.users_id', '=', 'users.id')
                ->where('users_chat_rooms.chat_rooms_id', $chatRoom->id)
                ->get();

            $chatRoom->users = $users;
        }

        return response()->json([
            'chatRooms' => $chatRooms
        ]);
    }

    // Create new chat room ID
    public function createChatRoom(Request $request)
    {
        $userId = $request->userId;
        $ownerId = $request->ownerId;

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
}
