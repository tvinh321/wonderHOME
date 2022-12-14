<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class SchedulerController extends Controller
{
    public function checkAppointments() {
        $appointments = DB::table('appointments')
            ->where('status', 'pending')
            ->get();

        foreach ($appointments as $appointment) {
            $from_time = $appointment->from_time;
            $to_time = $appointment->to_time;
            $id = $appointment->id;

            $now = time();

            if ($now > $to_time) {
                DB::table('appointments')
                    ->where('id', $id)
                    ->update([
                        'status' => 'done'
                    ]);

                $users = DB::table('users_appointments')
                    ->where('appointments_id', $id)
                    ->limit(2)
                    ->get();

                $user1 = $users[0];
                $user2 = $users[1];
                
                DB::table('notifications')->insert([
                    'users_id' => $user1,
                    'content' => 'Cuộc hẹn của bạn với ' . $user2->email . ' vừa kết thúc. Hãy đánh giá cuộc hẹn của bạn!',
                    'created_at' => time()
                ]);

                DB::table('notifications')->insert([
                    'users_id' => $user2,
                    'content' => 'Cuộc hẹn của bạn với ' . $user1->email . ' vừa kết thúc. Hãy đánh giá cuộc hẹn của bạn!',
                    'created_at' => time()
                ]);
            }
        }
    }
}
