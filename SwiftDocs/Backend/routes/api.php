<?php

use App\Http\Controllers\CompanyAuthController;
use App\Http\Controllers\EmployeeAuthContoller;
use App\Http\Controllers\FileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Authenticate Company
Route::post('/Register', [CompanyAuthController::class, 'register']);
Route::post('/login', [CompanyAuthController::class, 'login']);
Route::post('/logout', [CompanyAuthController::class, 'logout']);
Route::put('Company_update', [CompanyAuthController::class, 'update']);


Route::middleware('auth:sanctum')->group(function () {
    // Route::put('/Company/update', [CompanyAuthController::class, 'update']);
});

// Authenticate Employee
Route::post('/Employee/AddEmployee', [EmployeeAuthContoller::class, 'addEmployeee']);
Route::get('/Employee/getAll', [EmployeeAuthContoller::class, 'index']);
Route::put('Employee_update', [EmployeeAuthContoller::class, 'update']);

// Files
Route::post('/file/add', [FileController::class, 'addFile']);
Route::get('/Files/getAll', [FileController::class, 'index']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
