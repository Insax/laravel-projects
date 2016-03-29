<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Vue-Charts Basic Example</title>
  </head>
  <body>
    <vue-chart
    :columns="
    [
    {
        'type': 'string',
        'label': 'Time'
    },
    @foreach($data as $names)
    {
        'type': 'number',
        'label': '{{$names->sourceName}}\'s DPS'
    },
    @endforeach
    ]"
    :rows="
    [
        ['18:30:25', 3000, 2500],
        ['18:30:26', 4000, 5000],
        ['18:30:27', 7000, 10000],
        ['18:30:28', 11000, 6000],
        ['18:30:29', 12000, 3000],
        ['18:30:30', 7000, 9000],                
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
            minValue: 2000,
            maxValue: 15000
        },
        colors: ['#e2431e', '#d3362d', '#e7711b', '#e49307', '#e49307', '#b9c246'],
        width: 900,
        height: 400,
        curveType: 'function',
    }"
    >
    </vue-chart>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.16/vue.min.js"></script>
    <script src="/js/vue-charts.js"></script>
    <!-- <script src="https://ucarecdn.com/8d8146db-86a4-4d79-98d8-c10fcd270629/vuechartsmin.js"></script> -->
    <script src="{{ asset('js/app.js') }}"></script>
  </body>
</html>