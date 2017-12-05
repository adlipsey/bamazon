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
Or will prompt a different quantity if stock is not available.
(https://github.com/adlipsey/bamazon/blob/master/images/customer3b.png)

4. After a transaction, the user will be prompted if they would like to keep shopping, if yes, the whole process runs over again, if not, connection is terminated.
(https://github.com/adlipsey/bamazon/blob/master/images/customer4.png)

### manager.js
1. When run, manager.js will prompt the user which of four actions they would like to perform: view inventory, view low inventory, add inventory, or add a new item.
(https://github.com/adlipsey/bamazon/blob/master/images/manager1.png)

2. Displaying the inventory will display all info for all items in inventory (including stock which is not shown to customers).
(https://github.com/adlipsey/bamazon/blob/master/images/manager2.png)

3.Displaying low inventory will prompt the user for a quantity to consider "low."
(https://github.com/adlipsey/bamazon/blob/master/images/manager3.png)

4. And then will return all items in the database with stock values below the given value.
(https://github.com/adlipsey/bamazon/blob/master/images/manager4.png)

5. Add to inventory will display all items in inventory and then prompt the user for the ID of the item they would like to increase.
(https://github.com/adlipsey/bamazon/blob/master/images/manager5.png)

6. The user will then be prompted how much inventory they would like to add.
(https://github.com/adlipsey/bamazon/blob/master/images/manager6.png)

7. The database entry for the adjusted item will then be displayed to confirm addition to inventory, as well as the main menu options.
(https://github.com/adlipsey/bamazon/blob/master/images/manager7.png)

8. When adding a new product, the user will be prompted for the item name...
(https://github.com/adlipsey/bamazon/blob/master/images/manager8.png)

9. ...and price...
(https://github.com/adlipsey/bamazon/blob/master/images/manager9.png)

10. ...and starting stock quantity...
(https://github.com/adlipsey/bamazon/blob/master/images/manager10.png)

11. ...and department (for future use with supervisor.js).
(https://github.com/adlipsey/bamazon/blob/master/images/manager11.png)

12. Finally, the all items in inventory are displayed including the newly added item, and the main menu returns.
(https://github.com/adlipsey/bamazon/blob/master/images/manager12.png)
