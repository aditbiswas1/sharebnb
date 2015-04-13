Template.stockDetail.helpers({

});


Template.stockDetail.rendered = function(){
	var svg, x ,y;
	var lim = 10
	var	margin = {top: 30, right: 20, bottom: 30, left: 50},
		width = 600 - margin.left - margin.right,
		height = 270 - margin.top - margin.bottom; 
	

	var values = this.data.stockValues;
		values.limit = lim;

	a = values;
	console.log(a);
	
	data = values.fetch();
	

	// Set the ranges
	var	x = d3.time.scale().range([0, width]);
	var	y = d3.scale.linear().range([height, 0]); 

	// Define the axes
	var	xAxis = d3.svg.axis().scale(x)
	.orient("bottom").ticks(lim);
	var	yAxis = d3.svg.axis().scale(lim)
	.orient("left").ticks(); 

	var	valueline = d3.svg.line()
	.x(function(d) { return x(d.createdAt); })
	.y(function(d) { return y(d.value); });

	var	svg = d3.select("#visualization")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 


	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.createdAt; }));
	y.domain([0, d3.max(data, function(d) { return d.value; })]);
	// Add the valueline path.
	svg.append("path")
	.attr("class", "line")
	.attr("d", valueline(data));
	// Add the X Axis
	svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);
	// Add the Y Axis
	svg.append("g")
	.attr("class", "y axis")
	.call(yAxis);

	
};
