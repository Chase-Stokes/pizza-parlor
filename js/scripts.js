function Pizza(topping, size, price) {
  this.topping = topping
  this.size = size
  this.price = 0
}

Pizza.prototype.modifyPrice = function(){
  if (this.size === "medium"){
    this.price += 8;
  }else{
    this.price += 10;
  }
  if (this.topping === "anchovies"){
    this.price += 1;
  }else{
    this.price;
  }
  if (this.topping === "pineapple"){
    this.price += 1;
  }else {
    this.price;
  }
}

let pizzaOne = new Pizza(["anchovies", "pineapple"], "large", 0);
let pizzaTwo = new Pizza("anchovies", "large", 0);