<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'File_Name',
        'Physical_location',
        'Folder_location',
        'Description',
        'Process',
        'Company',
        'IsValidat',
    ];

}
