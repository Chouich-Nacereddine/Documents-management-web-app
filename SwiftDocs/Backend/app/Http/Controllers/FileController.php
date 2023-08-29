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

    public function update(Request $request)
    {

        // return response()->json(['Message' => 'Connected to DB '], 201);

        // Log the request data for debugging
        // error_log(print_r($request->all(), true));

        $fileData = $request->all();


        // Validate the incoming data
        $validator = Validator::make($request->all(), [
            'File_Name' => 'required|string',
            'Physical_location' => 'required|string',
            'Folder_location' => 'required|string',
            'Description' => 'required|string',
            // 'password' => 'required|string|min:8',
        ]);

        // return response()->json('message: validation successful!');


        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }


       // Find the company by ID
       $fileToUpdate = File::find($fileData['id']);
       error_log(print_r($fileToUpdate, true));

        if (!$fileToUpdate) {
            return response()->json(['error' => 'file not found'], 404);
        }

        // // // Update the file information
        $fileToUpdate->update([
            'File_Name' => $request->input('File_Name'),
            'Physical_location' => $request->input('Physical_location'),
            'Folder_location' => $request->input('Folder_location'),
            'Description' => $request->input('Description'),
            // 'password' => bcrypt($request->input('password')), // Hash the password

        ]);

        $fileToUpdate->save();

        return response()->json(['message' => 'File information updated successfully!']);



    }

    public function index()
    {
        $files = File::all(); // Retrieve all files from the database
        return response()->json(['files' => $files]);
    }
}
