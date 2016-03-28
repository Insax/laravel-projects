@extends('layout')
@section('title')
<title>Raidparser - Contribute New Log</title>
@stop
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-envelope"></i> <b class="caret"></b></a>
<ul class="dropdown-menu message-dropdown">
<li class="message-preview">
<a href="#">
<div class="media">
<span class="pull-left">
<img class="media-object" src="http://placehold.it/50x50" alt="">
</span>
<div class="media-body">
<h5 class="media-heading"><strong>John Smith</strong>
</h5>
<p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
<p>Lorem ipsum dolor sit amet, consectetur...</p>
</div>
</div>
</a>
</li>
<li class="message-preview">
<a href="#">
<div class="media">
<span class="pull-left">
<img class="media-object" src="http://placehold.it/50x50" alt="">
</span>
<div class="media-body">
<h5 class="media-heading"><strong>John Smith</strong>
</h5>
<p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
<p>Lorem ipsum dolor sit amet, consectetur...</p>
</div>
</div>
</a>
</li>
<li class="message-preview">
<a href="#">
<div class="media">
<span class="pull-left">
<img class="media-object" src="http://placehold.it/50x50" alt="">
</span>
<div class="media-body">
<h5 class="media-heading"><strong>John Smith</strong>
</h5>
<p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
<p>Lorem ipsum dolor sit amet, consectetur...</p>
</div>
</div>
</a>
</li>
<li class="message-footer">
<a href="#">Read All New Messages</a>
</li>
</ul>
</li>
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <b class="caret"></b></a>
<ul class="dropdown-menu alert-dropdown">
<li>
<a href="#">Alert Name <span class="label label-default">Alert Badge</span></a>
</li>
<li>
<a href="#">Alert Name <span class="label label-primary">Alert Badge</span></a>
</li>
<li>
<a href="#">Alert Name <span class="label label-success">Alert Badge</span></a>
</li>
<li>
<a href="#">Alert Name <span class="label label-info">Alert Badge</span></a>
</li>
<li>
<a href="#">Alert Name <span class="label label-warning">Alert Badge</span></a>
</li>
<li>
<a href="#">Alert Name <span class="label label-danger">Alert Badge</span></a>
</li>
<li class="divider"></li>
<li>
<a href="#">View All</a>
</li>
</ul>
</li>
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> John Smith <b class="caret"></b></a>
<ul class="dropdown-menu">
<li>
<a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
</li>
<li>
<a href="#"><i class="fa fa-fw fa-envelope"></i> Inbox</a>
</li>
<li>
<a href="#"><i class="fa fa-fw fa-gear"></i> Settings</a>
</li>
<li class="divider"></li>
<li>
<a href="#"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
</li>
</ul>
</li>
</ul>
<!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
<div class="collapse navbar-collapse navbar-ex1-collapse">
<ul class="nav navbar-nav side-nav">
<li class="active">
<a href="{{URL::to('/')}}"><i class="fa fa-fw fa-dashboard"></i> Home</a>
</li>
<li>
<a href="{{URL::to('logs')}}"><i class="fa fa-fw fa-bar-chart-o"></i> Logs</a>
</li>
<li>
<a href="{{URL::to('newlog')}}"><i class="fa fa-fw fa-edit"></i> Upload New Log</a>
</li>
<li>
<a href="{{URL::to('users')}}"><i class="fa fa-fw fa-table"></i> Userlist</a>
</li>
<li>
<a href="{{URL::to('analyzer')}}"><i class="fa fa-fw fa-desktop"></i> Analyzer</a>
</li>
</ul>
</div>
<!-- /.navbar-collapse -->
</nav>

<div id="page-wrapper">

<div class="container-fluid">

<!-- Page Heading -->
<div class="row">
<div class="col-lg-12">
<h1 class="page-header">
Dashboard <small>Statistics Overview</small>
</h1>
<ol class="breadcrumb">
<li class="active">
<i class="fa fa-dashboard"></i> Dashboard
</li>
</ol>
</div>
</div>
<!-- /.row -->
</div>
<!-- /.container-fluid -->

</div>
<!-- /#page-wrapper -->