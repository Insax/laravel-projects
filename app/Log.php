<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    public function Log()
    {
    	return $this->hasMany(LogRow::class);
    }

    public function Userlog()
    {
    	return $this->belongsTo(User::class);
    }
}
