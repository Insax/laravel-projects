<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LogRow extends Model
{
    public function LogRow()
    {
    	return $this->belongsTo(Log::class);
    }
}
