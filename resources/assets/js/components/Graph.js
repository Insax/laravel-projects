export default 
{
	template: '<div width="200" height="210" id="graph"></div>',
	props: ['amount', 'values', 'colors', 'names', 'labels']
	function drawChart() 
	{
		var data = google.visualization.arrayToDataTable([
		this.colors,
		['2004',  1000,      400],
		['2005',  1170,      460],
		['2006',  660,       1120],
		['2007',  1030,      540]
		]);

		var options = 
		{
			title: 'Company Performance',
			curveType: 'function',
			legend: { position: 'bottom' }
		};

		var chart = new google.visualization.LineChart(document.getElementById('graph'));

		chart.draw(data, options);
	}
}
/*
	ready() 
	{
		function drawChart() 
		{
			var data = google.visualization.arrayToDataTable([
			['Year', 'Sales', 'Expenses'],
			['2004',  1000,      400],
			['2005',  1170,      460],
			['2006',  660,       1120],
			['2007',  1030,      540]
			]);

			var options = 
			{
				title: 'Company Performance',
				curveType: 'function',
				legend: { position: 'bottom' }
			};

			var chart = new google.visualization.LineChart(document.getElementById('graph'));

			chart.draw(data, options);
		}
	}
}



/*
import Chart from 'chart.js';

export default {
	template: '<canvas width="200" height="210" id="graph"></canvas>',
	props: ['amount', 'values', 'colors', 'names', 'labels'],
	ready() 
	{
		var datasetValue = [];
		for (var i = 0; i < this.amount; i++) 
		{    
			datasetValue[i] = 
			{
				data: this.values[i],
				strokeColor : this.colors[i],
				pointHighlightFill: this.colors[i],
            	pointHighlightStroke: this.colors[i],
			};
		}
		var data = {
			labels: this.labels,
			datasets : datasetValue
		};
		var context = document.querySelector('#graph').getContext('2d');
		new Chart(context).Line(data, {
    		pointDot : false,
    		datasetFill : false,
    		datasetStrokeWidth : 4,
			pointHitDetectionRadius : 1,
			mode: 'dataset'
		});
		var options = Chart.defaults.Line = 
		{
			mode : 'single',
		};
	}
}
*/