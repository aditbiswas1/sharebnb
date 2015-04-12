
/*Helper to get YAHOO Finance API */
var getFinanceApi = function(){
	var stocks = Stocks.find({});
	var baseUrl = 'http://download.finance.yahoo.com/d/quotes.json?s=';
	var endOptions = '&f=nab'
	params = ''
	stocks.forEach(function(stock){
		params += stock.ticker + "+"
	});
	
	var url = baseUrl + params + endOptions;
	
	HTTP.get(url, function(resp, data){
		var content = data.content;
		var array1 = content.split("\n");
		array1.pop();
		var stockUpdates = [];
		for(i=0; i < array1.length; i++){
			var x = array1[i].split(',')

			var y = Stocks.findOne(stocksArr[i]);
			stockUpdates.push({stock: y , value: Number(x[1]), createdAt: Date.now() });
		}

		stockUpdates.forEach(function(update){
			StockValues.insert(update);
			console.log("inserted " + update.stock.company + "at " + Date.now());
		})
});
}

/*Cron runs every 10 minutes */
// 60,000 = 1 minute
var interval = 60000;
var GetStockCron = new Cron(interval)


GetStockCron.addJob(1, function(){
	getFinanceApi();	
});