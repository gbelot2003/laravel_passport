<?php

use App\User;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    $role = User::where('id', $request->user()->id)->first();
    return $role;
});

Route::get('/user/role/{id}', function ($id) {
    $role = User::findOrFail($id);
    return $role->firstRole();
});

Route::group(['middleware' => 'auth:api'], function (){
    Route::resource('products', 'ProductController');
});


