Router.map( function(){
	this.route('dashboard', {
		path: "/",
		data: function() {
			return { 
				stocks : Stocks.find({})
			}
		}
	});
	
	this.route('stockDetail',{
		path: '/stockDetail/:name',
		data: function() {
			var name =  this.params.name;
			var stock = Stocks.findOne({company: name})
			return {
				stock : stock,
				stockValues : StockValues.find({ stock: stock })
			}
		}
	});
	this.route('portfolio');
});





