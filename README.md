# _Pizza Parlor_

#### By _**Chase Stokes**_

#### _Order a Pizza_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JQuery_

## Description

_A web application where a user can build a pizza with one or more topping, choose the size preferred, and have the final cost returned:_

*_Allow the user to choose toppings and size for the pizza they would like to order_
*_Make use of a pizza constructor for the properties of toppings and size_
*_Make use of a prototype method for the cost of the pizza depending on toppings and size_

## Setup/Installation Requirements


* _You can find the github repository [here](https://github.com/Chase-Stokes/pizza-parlor.git)_
* _Clone the repository to your computer_
* _Open the index.html file in a browser_
* _Order a pizza to your liking_


## Known Bugs

* _No known bugs at this time_

## Licence - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a seperate reason, feel free to send me an email @chasehstokes@gmail.com with details of your issue._

Copyright (c) _2021_  _Chase Stokes_

## Tests

Describe: Pizza()

Test: "It should return a Pizza object with three properties for toppings and size and price"
Code: const pizzaOne(["anchovies", "pineapple"], "medium", 0);
Expected Output: pizzaOne {toppings: ["anchovies", "pineapple"], size: "medium", price: 0} 
~completed

Describe: modifyPrice()

Test: "It should modify the price value +8 for a medium size"
Code: pizzaOne.modifyPrice(); pizzaOne
Expected Output: pizzaOne {toppings: ["anchovies", "pineapple"], size: "medium", price: 8}

Test: "It should modify the price value +10 for a large size"
Code: pizzaOne.modifyPrice(); pizzaOne
Expected Output: pizzaOne {toppings: ["anchovies", "pineapple"], size: "large", price: 10}

Test: "It should modify the price value +1 for one topping topping"
Code: pizzaOne.modifyPrice(); pizzaOne
Expected Output: pizzaOne {toppings: "pepperoni", size: "large", price: 11}

Test: "It should modify the price value +1 for each topping, allowing for multiple toppings"
Code: pizzaOne.modifyPrice(); pizzaOne
Expected Output: pizzaOne {toppings: ["anchovies", "pineapple"], size: "large", price: 12}