<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\File;


class FileController extends Controller
{
    protected function guard()
    {
        return Auth::guard('file');
    }

    public function addFile(Request $request)
    {
        // return response()->json(['Message' => 'Connected to DB '], 201);
        $validator = Validator::make($request->all(),[
            'File_Name' => 'required|string|unique:files',
            'Physical_location' => 'required|string',
            'Folder_location' => 'required|string',
            'Description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $file = new File();
        $file->File_Name = $request->input('File_Name');
        $file->Physical_location = $request->input('Physical_location');
        $file->Folder_location = $request->input('Folder_location');
        $file->Description = $request->input('Description');

        try {
            $file->save();
            return response()->json(['message' => 'File created successfully!'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create File'], 500);
        }
    }
}
