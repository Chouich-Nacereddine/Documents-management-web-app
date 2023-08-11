<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;


class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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

        $validator = Validator::make($request->all(),[
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
                return response()->json(['errors'=>$validator->errors()], 422);
            }

            $company = new Company();
            $company->company_name= $request->input('company_name');
            $company->industry= $request->input('industry');
            $company->description= $request->input('description');
            $company->company_contact= $request->input('company_contact');
            $company->headquarters= $request->input('headquarters');
            $company->ceo_founder= $request->input('ceo_founder');
            $company->email= $request->input('email');
            $company->password= bcrypt($request->input('password'));
            // $company->save();

        try {
            $company->save();
            return response()->json(['message' => 'Company account created successfully!'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create Company account'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        //
    }
}
