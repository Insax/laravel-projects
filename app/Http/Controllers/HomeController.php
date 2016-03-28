<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Helpers\LogsManger;
use Illuminate\Http\Request;
use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function root()
    {
        return view('index');
    } 

    public function chart()
    {
        return view('chart');
    }
}
