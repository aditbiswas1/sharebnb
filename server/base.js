Meteor.startup(function () {
    stocksArr = [
    	{company: "Apple", ticker: "AAPL"},
    	{company: "Google", ticker: "GOOG"},
    	{company: "Microsoft", ticker: "MSFT"},
    ];

    if (Stocks.find({}).count() == 0){
    	stocksArr.forEach(function(stock){
    	Stocks.insert(stock);
    });	
    }
    
});

