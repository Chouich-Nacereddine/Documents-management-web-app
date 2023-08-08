<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;


class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return employees::select('id', 'First name', 'email', 'password')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // return response()->json(['Message' => 'Connected to DB '], 201);
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'email' => 'required|email|unique:employees',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $employee = new Employee();
        $employee->first_name = $request->input('first_name');
        $employee->email = $request->input('email');
        $employee->password = bcrypt($request->input('password'));
        $employee->last_name = 'Last name'; // Adding default value here
        $employee->Gender = 'Gender'; // Adding default value here
        $employee->phone_number = 'Phone number'; // Adding default value here
        $employee->position = 'Position'; // Adding default value here
        $employee->isAdmin = false; // Adding default value here
        $employee->save();


        try {
            $employee->save();
            return response()->json(['message' => 'Employee created successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create employee'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
