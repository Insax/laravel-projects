<?php
Route::group(['middleware' => 'web'], function () {
    Route::auth();
    Route::get('/home', 'HomeController@index');
    Route::get('/', 'HomeController@root');
    Route::get('/logs', 'LogsController@home');
    Route::post('/logs', 'LogsController@upload');
    Route::get('/chart', 'HomeController@chart');
});