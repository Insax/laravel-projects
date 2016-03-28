@extends('layouts.app')
@section('title')
<title>Raidparser - Logs Archieve</title>
@stop
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Login</div>
                	<div class="panel-body">
					<!-- Die Encoding-Art enctype MUSS wie dargestellt angegeben werden -->
						<form enctype="multipart/form-data" class="form-horizontal" role="form" method="POST" action="{{url('/logs')}}">
						    {!! csrf_field() !!}
						    <!-- Der Name des Input Felds bestimmt den Namen im $_FILES Array -->
                            <center>
                            <select name="content" size="6"> 
                                <option>Classic</option> 
                                <option>The Burning Crusade</option> 
                                <option>Wrath of the Lich King</option> 
                                <option>Cataclysm</option> 
                                <option>Mists of Pandaria</option>
                                <option>Warlords of Draenor</option> 
                            </select>
                            </center>
                            <label class="col-md-4 control-label">Realmname</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="realm">
                            </div>
                            <label class="col-md-4 control-label">Guildname</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="guild">
                            </div>
                            <center>
                            <div class="col-md-6">
						    Choose file upload: <input name="logfile" type="file"/>
                            </div>
                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Send Logs
                                    </button>
                                </div>
                            </div>
                            </center>
						</form>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
@stop