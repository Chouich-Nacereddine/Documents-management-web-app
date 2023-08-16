<?php

namespace App\Models;

use Illuminate\Auth\Events\Authenticated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

// use Illuminate\Database\Eloquent\Model;

class Employee extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $fillable = [
        'First_name',
        'Last_name',
        'Gender',
        'Phone_number',
        'IsAdmin',
        'Position',
        'email',
        'password'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
