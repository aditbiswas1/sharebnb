Template.visTicker.helpers({

});

Template.visTicker.rendered = function(){
	var svg, width = 500, height = 500, x ,y;
	svg = d3.select("#visualization").append('svg')
			.attr('width', width)
			.attr('height', height);
	console.log(svg);
};