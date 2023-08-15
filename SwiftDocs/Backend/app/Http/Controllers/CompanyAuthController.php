<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Company;
use Illuminate\Validation\ValidationException;

class CompanyAuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function guard()
    {
        return Auth::guard('company');
    }

    // Register method for API
    public function register(Request $request)
    {
        // ... Registration logic as previously mentioned
        // return response()->json(['Message' => 'Connected to DB '], 201);

        $validator = Validator::make($request->all(), [
            'company_name' => 'required|string',
            'industry' => 'required|string',
            'description' => 'required|string',
            'company_contact' => 'required|string',
            'headquarters' => 'required|string',
            'ceo_founder' => 'required|string',
            'email' => 'required|email|unique:companies',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $company = new Company();
        $company->company_name = $request->input('company_name');
        $company->industry = $request->input('industry');
        $company->description = $request->input('description');
        $company->company_contact = $request->input('company_contact');
        $company->headquarters = $request->input('headquarters');
        $company->ceo_founder = $request->input('ceo_founder');
        $company->email = $request->input('email');
        $company->password = bcrypt($request->input('password'));
        // $company->save();

        try {
            $company->save();
            return response()->json(['message' => 'Company account created successfully!'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create Company account'], 500);
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

        $company = Company::where('email', $request->email)->first();

        if (!$company || !Hash::check($request->password, $company->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        if ($company->company_name !== $request->company_name) {
            throw ValidationException::withMessages([
                'company_name' => ['The provided company name is incorrect.'],
            ]);
        }

        $token = $company->createToken('company-token')->plainTextToken;

        return response()->json([
            'message' => 'Company logged in successfully',
            'token' => $token,
            'company' => $company,
        ], 200);
    }

    // Logout method for API
    public function logout(Request $request)
    {
        // ... Logout logic as previously mentioned
    }
}
