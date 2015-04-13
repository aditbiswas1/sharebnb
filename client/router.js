Router.map( function(){
	this.route('hello', {path:'/'});
	this.route('dashboard');
	this.route('ticker');
	this.route('portfolio');
	this.route('stockDetail',{
		path: '/stockDetail/:name',
		data: function() {return this.params.name}
	});
});





