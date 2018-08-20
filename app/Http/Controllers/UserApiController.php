<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserApiController extends Controller
{
    public function user()
    {
        return User::with('roles')->get();
    }
}
