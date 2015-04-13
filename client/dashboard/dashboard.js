Template.dashboard.helpers({
	/*function() {
		var final;
		for( i=0; i<stockValue.length; i++ ) {
			for( j=0; j<stock.length; j++) {
				if( stockValue.stock == stock){
					var value = stockValue
					final.push(stockValue.value)
				}
			}
		}
	}*/
});

Template.stockTick.helpers({
	val : function(){
		/*console.log("It came here");
		var stock = this.data.stock;
		console.log(this)
		a = this.data
		//var stockValue = StockValues.find({stock : this.stock})
		//console.log(stockValue);
		var date1 = new Date("2011/06/25"); 
		var val1; 
		var date2 = new Date("2011/06/25"); 
		for(i=0; i<stockValue.length; i++) {
			if( date1 < stockValue[i].createdAt ) {
				date1 = stockValue[i].createdAt;
				val1 = stockValue[i].value
				date2 = date1;
				val2 = val1;
			}
		}
		var diff = val2 - val1;
		var bool = diff < 0
		return this.val1;*/
		console.log(this.company);
		var stock = Stocks.findOne({company: this.company});
		var stockValues = StockValues.find({stock: stock}, {sort: {createdAt: -1}, limit: 2});
		return stockValues.fetch()[1].value;
	},
	bool : function() {
		var stock = Stocks.findOne({company: this.company});
		var stockValues = StockValues.find({stock: stock}, {sort: {createdAt: -1}, limit: 2});
		console.log( ( stockValues.fetch()[1].value - stockValues.fetch()[0].value) >= 0 )
		return ( stockValues.fetch()[1].value - stockValues.fetch()[0].value) >= 0 ;
	}
});