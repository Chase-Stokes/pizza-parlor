function Pizza(toppings, size, price) {
  this.toppings = toppings
  this.size = size
  this.price = 0
}

Pizza.prototype.modifyPrice = function(){
  if (this.size === "medium"){
    this.price += 8
  }else{
    this.price += 10
  }
}

let pizzaOne = new Pizza(["anchovies", "pineapple"], "medium", 0);