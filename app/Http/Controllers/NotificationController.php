<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    // Get all notifications
    public function getNotifications(Request $request)
    {
        $user_id = $request->user->id;

        $notifications = DB::table('notifications')
            ->where('users_id', $user_id)
            ->get();

        return response()->json($notifications);
    }
}
