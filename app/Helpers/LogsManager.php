<?php
namespace App\Helpers;
use DB;

class LogsManager
{
    private static function getLogValidation($id)
    {
        if(count(DB::table('logs')->where('id', '=', $id)->get()))
            return true;
        else
            return false;
    }

    private static function getPlayerNames($id, $type)
    {
        $NameFlags = DB::table('log_rows')->select('sourceName', 'sourceFlags')->where('log_id', '=', $id)->groupBy('sourceName')->get();
        $i=0;
        foreach($NameFlags as $Data)
        {
            $sourceFlags = intval($Data->sourceFlags, 0);
            if(($sourceFlags & 0x400) > 0)
            {
                $Names[$i] = $Data->sourceName;
                $i++;
            }
        }
        return $NameFlags;
    }

    public static function getChartColumns($id, $type)
    {
        if(LogsManager::getLogValidation($id))
        {
            $playerNames = LogsManager::getPlayerNames($id, $type);   
            return $playerNames; 
        }
    }


}