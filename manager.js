var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "safety",
	database: "bamazon_db"
});

connection.connect(function(err, rsp){
	if(err) throw err;
	whatDo();
});

function whatDo(){
	inquirer.prompt({
		name: "choice",
		type: "list",
		message: "What would you like to do:",
		choices: ["View Products", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"] 
	}).then(function(answer){
		switch(answer.choice){
			case "View Products":
				displayInv();
				break;
			case "View Low Inventory":
				displayLow();
				break;
			case "Add to Inventory":
				updateInv();
				break;
			case "Add New Product":
				addProd();
				break;
			case "Exit":
				connection.end;
				break;
			default:
				whatDo();
		}
	})
}

function displayInv(){
	connection.query("SELECT * FROM products", function(err, resp){
		for(var i=0; i < resp.length; i++){
			console.log("ID: "+ resp[i].unique_id +" || Item: "+ resp[i].item_name +" || Price: $"+ resp[i].price +" || Stock: "+ resp[i].stock);
		}
		whatDo();
	});
}

function displayLow(){
	inquirer.prompt({
		name: "low",
		type: "input",
		message: "How many is low?",
		validate: function(value) {
			if (isNaN(value) === false) {
            return true;
          }
          return false;
		}
	}).then(function(answer){
		connection.query("SELECT * FROM products WHERE stock < ?", [parseInt(answer.low)] , function(err, resp){
		if(resp.length === 0) console.log("There are no items with low inventory.");
		for(var i=0; i < resp.length; i++){
			console.log("ID: "+ resp[i].unique_id +" || Item: "+ resp[i].item_name +" || Price: $"+ resp[i].price +" || Stock: "+ resp[i].stock);
		}
		whatDo();
		});
	});
}

function updateInv(){
	connection.query("SELECT * FROM products", function(err, resp){
		for(var i=0; i < resp.length; i++){
			console.log("ID: "+ resp[i].unique_id +" || Item: "+ resp[i].item_name +" || Price: $"+ resp[i].price +" || Stock: "+ resp[i].stock);
		}
		inquirer.prompt([
		{
		name: "choice",
		type: "input",
		message: "Select the ID of the Item you'd like to increase:",
		validate: function(value) {
			if (isNaN(value) === false) {
            return true;
         	 }
          return false;
			}
		},
		{
		name: "amount",
		type: "input",
		message: "How much would you like to add:",
		validate: function(value) {
			if (isNaN(value) === false) {
            return true;
          	}
          return false;
			}
		}
		]).then(function(answer){
			var item = parseInt(answer.choice);
			connection.query("UPDATE products SET stock = stock + ? WHERE unique_id = ?", [parseInt(answer.amount), item], function(err, resp){
				connection.query("SELECT * FROM products WHERE unique_id = ?", [item], function(err, resp){
					console.log("ID: "+ resp[0].unique_id +" || Item: "+ resp[0].item_name +" || Price: $"+ resp[0].price +" || Stock: "+ resp[0].stock);
					console.log("Inventory has been updated.");
					whatDo();
				});
			});
		});
	});
}

function addProd(){
	inquirer.prompt([
	{
		name: "item",
		type: "input",
		message: "Name of the New Item:"
	},
	{
		name: "price",
		type: "input",
		message: "Enter Item Price: $"
	},
	{
		name: "stock",
		type: "input",
		message: "Enter starting stock quantity:"
	},
	{
		name: "dept",
		type: "input",
		message: "Enter New Item's Department:"
	}
	]).then(function(answer){
		connection.query("INSERT INTO products(item_name, price, stock, department) VALUES (?,?,?,?)", [answer.item, parseFloat(answer.price), parseInt(answer.stock), answer.dept], function(err, resp){
			console.log("New item has been added.");
			displayInv();
		});
	});
}