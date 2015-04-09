Stocks = new Mongo.Collection("stocks",{
	schema: {
		company : {
			type : String,
			label: "Company",
			max: 200
		},
		ticker : {
			type: String,
			label : "Ticker",
			max: 5
		}
	}
});

StockValues = new Mongo.Collection("stock_values", {
	schema: {
		stock: {
			type : Stocks,
			optional : false,
			index: true
		},
		value : {
			type: Number,
			optional: false
		},
		createdAt: {
			type: Date,
			autoValue: function(){
				if (this.isInsert){
					return new Date;
				}
			},
			denyUpdate: true
		}
	}
});



/* Portfolio */
OrderTypes = new Mongo.Collection("order_type",{
	schema: {
		type: String
	}
});

Transactions = new Mongo.Collection("transactions",{
	schema: {
		type:{
			type : OrderTypes,
			optional: false
		},
		User:{
			type: String
		},
		number_of_stocks:{
			type: Number,
			min: 1
		},
		cost_of_transaction: {
			type: Number,
			min: 0
		},
		date: {
			type: Date,
			optional: false
		}
	}
});

