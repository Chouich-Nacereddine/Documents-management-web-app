<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Employee;
use Illuminate\Validation\ValidationException;

class EmployeeAuthContoller extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function guard()
    {
        return Auth::guard('employee');
    }

    // Register method for API
    public function addEmployeee(Request $request)
    {
        // ... Registration logic as previously mentioned
        // return response()->json(['Message' => 'Connected to DB '], 201);

        $validator = Validator::make($request->all(), [
            'First_name' => 'required|string',
            'Last_name' => 'required|string',
            'Gender' => 'required|string',
            'Phone_number' => 'required|string|unique:employees',
            'IsAdmin' => 'required|boolean',
            'Position' => 'required|string',
            'email' => 'required|email|unique:employees',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $employee = new Employee();
        $employee->First_name = $request->input('First_name');
        $employee->Last_name = $request->input('Last_name');
        $employee->Gender = $request->input('Gender');
        $employee->Phone_number = $request->input('Phone_number');
        $employee->IsAdmin = $request->input('IsAdmin');
        $employee->Position = $request->input('Position');
        $employee->email = $request->input('email');
        $employee->password = bcrypt($request->input('password'));

        try {
            $employee->save();
            return response()->json(['message' => 'Employee account created successfully!'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create Employee account'], 500);
        }
    }

    // Login method for API
    public function login(Request $request)
    {
        // ... Login logic as previously mentioned
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $employee = Employee::where('email', $request->email)->first();
        // error_log($employee);
        if (!$employee || !Hash::check($request->password, $employee->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        if ($employee->First_name !== $request->First_name) {
            throw ValidationException::withMessages([
                'First_name' => ['The provided company name is incorrect.'],
            ]);
        }

        $token = $employee->createToken('employee-token')->plainTextToken;

        return response()->json([
            'message' => 'employee logged in successfully',
            'token' => $token,
            'employee' => $employee,
        ], 200);
    }

    public function index()
    {
        $employees = Employee::all(); // Retrieve all employees from the database
        return response()->json(['employees' => $employees]);
    }

    public function update(Request $request)
    {
        // return response()->json(['Message' => 'Connected to DB '], 201);

        // Log the request data for debugging
        // error_log(print_r($request->all(), true));

        $employeeData = $request->all();


        // Validate the incoming data
        $validator = Validator::make($request->all(), [
            'First_name' => 'required|string',
            'Last_name' => 'required|string',
            'Gender' => 'required|string',
            'Phone_number' => 'required|string',
            'IsAdmin' => 'required|boolean',
            'Position' => 'required|string',
            'email' => 'required|email',
            // 'password' => 'required|string|min:8',
        ]);

        // return response()->json('message: validation successful!');


        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }


        // Find the company by ID
        $employeeToUpdate = Employee::find($employeeData['id']);
        // error_log(print_r($employeeToUpdate, true));

        if (!$employeeToUpdate) {
            return response()->json(['error' => 'Company not found'], 404);
        }

        // // // Update the company information
        $employeeToUpdate->update([
            'First_name' => $request->input('First_name'),
            'Last_name' => $request->input('Last_name'),
            'Gender' => $request->input('Gender'),
            'Phone_number' => $request->input('Phone_number'),
            'IsAdmin' => $request->input('IsAdmin'),
            'Position' => $request->input('Position'),
            'email' => $request->input('email'),
            // 'password' => bcrypt($request->input('password')), // Hash the password

        ]);

        $employeeToUpdate->save();

        return response()->json(['message' => 'Employee information updated successfully!']);


    }

    // Logout method for API
    public function logout(Request $request)
    {
        // ... Logout logic as previously mentioned
    }
}
