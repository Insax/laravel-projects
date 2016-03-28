@extends('layouts.app')
@section('title')
<title>Welcome to Raidparser</title>
@stop

@section('content')
                <h2 class="product-head">Featured Tools</h2>
            <!-- Heading Ends -->
            <!-- Products Row Starts -->
                <div class="row">
                <!-- Product #1 Starts -->
                    <div class="col-md-3 col-sm-6">
                        <div class="product-col">
                            <div class="image">
                                <vue-chart
                                    :columns="
                                    [{
                                        'type': 'string',
                                        'label': 'Time'
                                    },
                                    {
                                        'type': 'number',
                                        'label': 'Insaxs DPS'
                                    },
                                    {
                                        'type': 'number',
                                        'label': 'Joes DPS'
                                    },
                                    {
                                        'type': 'number',
                                        'label': 'Janes DPS'
                                    },
                                    {
                                        'type': 'number',
                                        'label': 'Johns DPS'
                                    },                                       
                                    ]"
                                    :rows="
                                    [
                                        ['18:30:2Ch5', Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000)],
                                        ['18:30:26', Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000)],
                                        ['18:30:27', Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000)],
                                        ['18:30:28', Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000)],
                                        ['18:30:29', Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000)],
                                        ['18:30:30', Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000), Math.floor((Math.random() * 10000) + 2000)]        
                                    ]"
                                    :options="
                                    {
                                        title: 'Example Chart',
                                        hAxis: 
                                        {
                                            title: 'Time',
                                            minValue: '18:30:25',
                                            maxValue: '18:30:30'
                                        },
                                        vAxis: 
                                        {
                                            title: 'DPS',
                                            minValue: 1500,
                                            maxValue: 15000
                                        },
                                        colors: ['#C41F3B', '#FF7D0A', '#ABD473', '#69CCF0'],
                                        width: 200,
                                        height: 210,
                                        curveType: 'function',
                                    }"
                                    >
                                </vue-chart>
                            </div>
                            <div class="caption">
                                <h4>Combat Analysis</h4>
                                <div class="description">
                                    Combat Analysis like Recount or Skada, just with more input.
                                </div>
                                <div class="cart-button button-group">
                                <a href="{{url('register')}}">
                                    <button type="button" class="btn btn-cart">
                                        <i class="fa fa-link"></i>                     
                                       Sign Up now!
                                    </button>                               
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- Product #1 Ends -->
                <!-- Product #2 Starts -->
                    <div class="col-md-3 col-sm-6">
                        <div class="product-col">
                            <div class="image">
                                <img src="images/product-images/2.jpg" alt="product" class="img-responsive img-center-sm" />
                            </div>
                            <div class="caption">
                                <h4><a href="product.html">Error Analysis</a></h4>
                                <div class="description">
                                    We'll analyze your Errors and will show them to you!
                                </div>
                                <div class="cart-button button-group">
                                    <button type="button" class="btn btn-cart">
                                        <i class="fa fa-shopping-cart"></i>                     
                                        Add to cart
                                    </button>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- Product #2 Ends -->
                <!-- Product #3 Starts -->
                    <div class="col-md-3 col-sm-6">
                        <div class="product-col">
                            <div class="image">
                                <img src="images/product-images/3.jpg" alt="product" class="img-responsive img-center-sm" />
                            </div>
                            <div class="caption">
                                <h4><a href="product.html">Improvement Suggestions</a></h4>
                                <div class="description">
                                    We'll also analyze the actions of all players to make improvement suggestions!
                                </div>
                                <div class="cart-button button-group">
                                    <button type="button" class="btn btn-cart">
                                        <i class="fa fa-shopping-cart"></i>                     
                                        Add to cart
                                    </button>                               
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- Product #3 Ends -->
                <!-- Product #4 Starts -->
                    <div class="col-md-3 col-sm-6">
                        <div class="product-col">
                            <div class="image">
                                <img src="images/product-images/4.jpg" alt="product" class="img-responsive img-center-sm" />
                            </div>
                            <div class="caption">
                                <h4><a href="product.html">Educating Analysis</a></h4>
                                <div class="description">
                                    The Tool will also learn from the Inputs, the more you contribute, the better  will be the results!
                                </div>
                                <div class="cart-button button-group">
                                    <button type="button" class="btn btn-cart">
                                        <i class="fa fa-shopping-cart"></i>                     
                                        Add to cart
                                    </button>                               
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- Product #4 Ends -->
                </div>
            <!-- Products Row Ends -->
            </div>
        </section>
    <!-- Featured Products Ends -->
    </div>
<!-- Main Container Ends -->
@stop