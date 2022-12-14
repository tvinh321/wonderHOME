<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AppointmentController extends Controller
{
    // Get all appointments
    public function getAppointments(Request $request)
    {
        $user_id = $request->user->id;

        $appointments = DB::table('appointments')
            ->join('users_appointments', 'users_appointments.appointments_id', '=', 'appointments.id')
            ->where('users_appointments.users_id', $user_id)
            ->select('appointments.*')
            ->get();

        return response()->json($appointments);
    }

    // Post appointment
    public function postAppointment(Request $request)
    {
        $from_time = strtotime($request->from_time);
        $to_time = strtotime($request->to_time);
        $user_id = $request->user_id;

        $id = DB::table('appointments')->insertGetId([
            'from_time' => $from_time,
            'to_time' => $to_time,
            'status' => 'pending'
        ]);

        DB::table('users_appointments')->insert([[
            'appointments_id' => $id,
            'users_id' => $user_id
        ], [
            'appointments_id' => $id,
            'users_id' => $request->user->id
        ]]);

        return response()->json($appointment);
    }

    // Cancel appointment
    public function cancelAppointment(Request $request)
    {
        $id = $request->id;

        $user_id = $request->user->id;

        $appointment = DB::table('users_appointments')
            ->where('appointments_id', $id)
            ->where('users_id', $user_id)
            ->get()
            ->first();

        if (!$appointment) {
            return response()->json([
                'message' => 'Appointment not found'
            ], 404);
        }

        DB::table('appointments')
            ->where('id', $id)
            ->update([
                'status' => 'canceled'
            ]);

        return response()->json([
            'message' => 'Appointment canceled'
        ]);
    }
}
