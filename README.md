# Bamazon

## What This App Is:

This app combines node.js and MySQL to imitate a customer and manager interface on a Point of Sales system.

## What This App Does:

customer.js displays the available items for purchase, ask the customer which item they would like, how many of that item they would like, and after checking if available stock is adequate, will inform the customer their purchase was successful, calculate their total cost, and subtract the purchase quantity from the database.

manager.js provides the user four options: display all items, display items with low inventory (a quantity specified by the user), increase inventory of an item in the database, and add a new item entirely.

## What This App Could Do:

Functionality for a supervisor.js could be added to track and display profits by department.

## This App Step-by-Step:
### customer.js
1. When run, customer.js will display all items in the database and prompt user for the ID of the item they wish to buy.
(https://github.com/adlipsey/bamazon/blob/master/images/customer1.png)

2. When an ID has been entered, the user will be prompted for the quantity of the item they would like.
(https://github.com/adlipsey/bamazon/blob/master/images/customer2.png)

3. After entering a quantity, inventory is checked if there is enough available stock and if so will fulfill the order, totaling cost and subtracting inventory from the databse.
(https://github.com/adlipsey/bamazon/blob/master/images/customer3.png)
