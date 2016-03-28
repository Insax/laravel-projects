<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @yield('title')

    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700italic,700,400italic,300italic,300" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet" type="text/css">

    <!--[if lt IE 9]>
        <script src="js/ie8-responsive-file-warning.js"></script>
    <![endif]-->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
<!-- Header Section Starts -->
    <header id="header-area">
    <!-- Nested Container Starts -->
        <div class="container">
        <!-- Header Top Starts -->
            <div class="header-top">
            <!-- Row Starts -->
                <div class="row">
                <!-- Header Links Starts -->
                    <div class="col-sm-8 col-xs-12">
                        <div class="header-links">
                            <ul class="nav navbar-nav pull-left">
                            @if(Auth::check())
                                <li>
                                    <a href="index.html">
                                        <i class="fa fa-home hidden-lg hidden-md" title="Home"></i>
                                        <span class="hidden-sm hidden-xs">
                                            Dashboard
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="{{url('/logs')}}">    
                                        <i class="fa fa-heart hidden-lg hidden-md" title="Wish List"></i>
                                        <span class="hidden-sm hidden-xs">
                                            View Logs
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-user hidden-lg hidden-md" title="My Account"></i>
                                        <span class="hidden-sm hidden-xs">
                                            View Profile
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="cart.html">
                                        <i class="fa fa-shopping-cart hidden-lg hidden-md" title="Shopping Cart"></i>
                                        <span class="hidden-sm hidden-xs">
                                            View Analysis
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="register.html">
                                        <i class="fa fa-unlock hidden-lg hidden-md" title="Register"></i>
                                        <span class="hidden-sm hidden-xs">
                                            Speaker
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="{{URL::to('test')}}">
                                        <i class="fa fa-lock hidden-lg hidden-md" title="Login"></i>
                                        <span class="hidden-sm hidden-xs">
                                            Userlist
                                        </span>
                                    </a>
                                </li>
                            @endif
                            </ul>
                        </div>
                    </div>
                <!-- Header Links Ends -->
                <!-- Currency & Languages Starts -->
                    <div class="col-sm-4 col-xs-12">
                        <div class="pull-right">
                        <!-- Languages Starts -->
                            <div class="btn-group">
                                <button class="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                    English
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <ul class="pull-right dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">English</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">German</a>
                                    </li>
                                </ul>
                            </div>
                        <!-- Languages Ends -->
                        <!-- Register and Login Starts -->
                        @if(Auth::guest())
                            <div class="btn-group">
                                <a href="{{ url('register') }}">
                                    <button class="btn btn-link">
                                        Register
                                    </button>
                                </a>
                            </div>
                        <!-- Register and Login Ends -->
                            <div class="btn-group">
                                <a href="{{ url('login') }}">
                                    <button class="btn btn-link">
                                        Login
                                    </button>
                                </a>
                            </div>
                        @else
                            <div class="btn-group">
                                <button class="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                    {{Auth::User()->name}}
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <ul class="pull-right dropdown-menu">
                                    <li><a tabindex="-1" href="{{url('profile')}}">Profile </a></li>
                                    <li><a tabindex="-1" href="{{url('chars')}}">Charakter</a></li>
                                    <li><a tabindex="-1" href="{{url('logout')}}">Logout</a></li>
                                </ul>
                            </div>
                        @endif                      
                        </div>
                    </div>
                <!-- Currency & Languages Ends -->
                </div>
            <!-- Row Ends -->
            </div>
        <!-- Header Top Ends -->
        <!-- Main Header Starts -->
            <div class="main-header">
            <!-- Row Starts -->
                <div class="row">
                <!-- Search Starts -->
                    <div class="col-sm-3 col-xs-12">
                        <div id="search">
                            <div class="input-group">
                              <input type="text" class="form-control input-lg" placeholder="Search for {{ (Auth::check() ? 'all' : 'public') }} Logs">
                              <span class="input-group-btn">
                                <button class="btn btn-lg" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                              </span>
                            </div>
                        </div>  
                    </div>
                <!-- Search Ends -->
                <!-- Logo Starts -->
                    <div class="col-md-6 col-sm-5 col-xs-12">
                        <div id="logo">
                            <a href="{{url('/')}}"><img src="images/logo.png" title="Raidparser" alt="Raidparser" class="img-responsive" /></a>
                        </div>
                    </div>
                <!-- Logo Starts -->
                <!-- Shopping Cart Starts -->
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div id="cart" class="btn-group btn-block">
                            <button type="button" data-toggle="dropdown" class="btn btn-block btn-lg dropdown-toggle">
                                <i class="fa fa-info"></i>
                                <span class="hidden-md">Information:</span> 
                                <span id="cart-total">about you!</span>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <ul class="dropdown-menu pull-right">
                                <li>
                                    <table class="table table-bordered total">
                                        <tbody>
                                            <tr>
                                                <td class="text-right"><strong>IP: </strong></td>
                                                <td class="text-left">{{Request::ip()}}</td>
                                            </tr>
                                            <tr>
                                                <td class="text-right"><strong>Browser: </strong></td>
                                                <td class="text-left">{{UserInfo::getBrowser()}}</td>
                                            </tr>
                                            <tr>
                                                <td class="text-right"><strong>OS: </strong></td>
                                                <td class="text-left">{{UserInfo::getOS()}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p class="text-right btn-block1">
                                        <a href="{{url('aboutme')}}">
                                            Tell me more
                                        </a>
                                        <a href="#">
                                            Ok thanks!
                                        </a>
                                    </p>
                                </li>                                   
                            </ul>
                        </div>
                    </div>
                <!-- Shopping Cart Ends -->
                </div>
            <!-- Row Ends -->
            </div>
        <!-- Main Header Ends -->
        </div>
    <!-- Nested Container Ends -->
    </header>
<!-- Header Section Ends -->
<!-- Main Menu Starts -->
<!-- Main Menu Ends -->
<!-- Slider Section Starts -->
    <div class="slider">
    <!-- Nested Container Starts -->
        <div class="container">
        <!-- Carousel Starts -->
            <div id="main-carousel" class="carousel slide" data-ride="carousel">
                <!-- Wrapper For Slides Starts -->
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="images/slider-imgs/slide1-img.jpg" alt="Slider" class="img-responsive" />
                        </div>
                        <div class="item">
                            <img src="images/slider-imgs/slide2-img.jpg" alt="Slider" class="img-responsive" />
                        </div>
                    </div>
                <!-- Wrapper For Slides Ends -->
                <!-- Controls Starts -->
                    <a class="left carousel-control" href="#main-carousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a class="right carousel-control" href="#main-carousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                <!-- Controls Ends -->
            </div>
        <!-- Carousel Ends -->
        <!-- 3 Column Banners Starts -->
        <!-- 3 Column Banners Ends -->          
        </div>
    <!-- Nested Container Ends -->
    </div>
<!-- Slider Section Ends -->
    <nav id="main-menu" class="navbar" role="navigation">
    <!-- Nested Container Starts -->
        <div class="container">
        <!-- Nav Header Starts -->
            <div class="navbar-header">
                <button type="button" class="btn btn-navbar navbar-toggle" data-toggle="collapse" data-target=".navbar-cat-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <i class="fa fa-bars"></i>
                </button>
            </div>
        <!-- Nav Header Ends -->
        <!-- Navbar Cat collapse Starts -->
            <div class="collapse navbar-collapse navbar-cat-collapse">
                <ul class="nav navbar-nav">
                @if(Auth::guest())
                @if(Request::is('register'))
                    <li><a href="{{url('login')}}">Login</a></li>
                @endif
                @if(Request::is('login'))
                    <li><a href="{{url('register')}}">Register</a></li>
                @endif
                @endif
                    <li><a href="{{url('instructions')}}">Instructions</a></li>
                    <li><a href="{{url('data')}}">Data Policy</a></li>
                    <li><a href="{{url('progress')}}">Progress</a></li>
                    <li><a href="{{url('about')}}">About</a></li>
                </ul>
            </div>
        <!-- Navbar Cat collapse Ends -->
        </div>
    <!-- Nested Container Ends -->
    </nav>
<!-- Main Container Starts -->
    <div class="main-container container">
    <!-- Featured Products Starts -->
        <section class="products-list">         
            <div class="container">
            <!-- Heading Starts -->
            @yield('content')
<!-- Footer Section Starts -->
    <footer id="footer-area">
    <!-- Footer Links Starts -->
        <div class="footer-links">
        <!-- Container Starts -->
            <div class="container">
                <!-- Information Links Starts -->
                    <div class="col-md-2 col-sm-4 col-xs-12">
                        <h5>Information</h5>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                <!-- Information Links Ends -->
                <!-- My Account Links Starts -->
                    <div class="col-md-2 col-sm-4 col-xs-12">
                        <h5>My Account</h5>
                        <ul>
                            <li><a href="#">My orders</a></li>
                            <li><a href="#">My merchandise returns</a></li>
                            <li><a href="#">My credit slips</a></li>
                            <li><a href="#">My addresses</a></li>
                            <li><a href="#">My personal info</a></li>
                        </ul>
                    </div>
                <!-- My Account Links Ends -->
                <!-- Customer Service Links Starts -->
                    <div class="col-md-2 col-sm-4 col-xs-12">
                        <h5>Service</h5>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Site Map</a></li>
                            <li><a href="#">Affiliates</a></li>
                            <li><a href="#">Specials</a></li>
                        </ul>
                    </div>
                <!-- Customer Service Links Ends -->
                <!-- Follow Us Links Starts -->
                    <div class="col-md-2 col-sm-4 col-xs-12">
                        <h5>Follow Us</h5>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">RSS</a></li>
                            <li><a href="#">YouTube</a></li>
                        </ul>
                    </div>
                <!-- Follow Us Links Ends -->
                <!-- Contact Us Starts -->
                    <div class="col-md-4 col-sm-8 col-xs-12 last">
                        <h5>Contact Us</h5>
                        <ul>
                            <li>My Company</li>
                            <li>
                                1247 LB Nagar Road, Hyderabad, Telangana - 35
                            </li>
                            <li>
                                Email: <a href="#">info@demolink.com</a>
                            </li>                               
                        </ul>
                        <h4 class="lead">
                            Tel: <span>1(234) 567-9842</span>
                        </h4>
                    </div>
                <!-- Contact Us Ends -->
            </div>
        <!-- Container Ends -->
        </div>
    <!-- Footer Links Ends -->
    <!-- Copyright Area Starts -->
        <div class="copyright">
        <!-- Container Starts -->
            <div class="container">
            <!-- Starts -->
                <p class="pull-left">
                    &copy; 2015 Sports &amp; Fitness Stores. Designed By <a href="http://sainathchillapuram.com">Sainath Chillapuram</a>
                </p>
            <!-- Ends -->
            <!-- Payment Gateway Links Starts -->
                <ul class="pull-right list-inline">
                    <li>
                        <img src="images/payment-icon/cirrus.png" alt="PaymentGateway" />
                    </li>
                    <li>
                        <img src="images/payment-icon/paypal.png" alt="PaymentGateway" />
                    </li>
                    <li>
                        <img src="images/payment-icon/visa.png" alt="PaymentGateway" />
                    </li>
                    <li>
                        <img src="images/payment-icon/mastercard.png" alt="PaymentGateway" />
                    </li>
                    <li>
                        <img src="images/payment-icon/americanexpress.png" alt="PaymentGateway" />
                    </li>
                </ul>
            <!-- Payment Gateway Links Ends -->
            </div>
        <!-- Container Ends -->
        </div>
    <!-- Copyright Area Ends -->
    </footer>
<!-- Footer Section Ends -->
<!-- JavaScript Files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.16/vue.min.js"></script>
    <script src="/js/vue-charts.js"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/hover_dropdown.js') }}"></script>
    <script src="{{ asset('js/popup.js') }}"></script>

</body>
</html>
