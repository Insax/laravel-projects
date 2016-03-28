<?php
namespace App\Helpers;
use DB;

class LogsManager
{
    public $log_id;
    public $type;
    public function __construct($id, $type)
    {
        $this->log_id = $id;
        $this->type = $type;
    }

    public function getTest()
    {
        return var_dump($this->log_id);
        var_dump($this->type);
    }
}
/*
$test = new LogsManager(1, 'dps');

$test->getTest();
?>
*/