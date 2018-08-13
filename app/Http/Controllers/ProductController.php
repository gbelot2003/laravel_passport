<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{


    public function index()
    {
        return Product::orderBy('id','DESC')->get();
    }

    public function store(Request $request)
    {
        $request['user_id'] = Auth::id();
        $product = Product::create($request->all());

        return $product;
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product, 200);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return response()->json($product, 200);
    }

    public function destroy($id)
    {
        try{
            $destroyed = Product::findOrFail($id);
            Product::destroy($id);
            return response($destroyed, 204);
        } catch (\Exception $s){
            return response(['Problem deleting the product'], 500);
        }
    }
}
