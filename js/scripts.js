function Pizza(price, size, topping1, topping2, topping3) {
  this.price = 0
  this.size = size
  this.topping1 = topping1
  this.topping2 = topping2
  this.topping3 = topping3
}

Pizza.prototype.modifyPrice = function(){
  if (this.size === "medium"){
    this.price += 8;
  }else{
    this.price += 10;
  }
    if (this.topping1 === "anchovies"){
      this.price += 1;
    }else{
      this.price;
    }
    if (this.topping1 === "pineapple"){
      this.price += 1;
    }else {
      this.price;
    }
    if (this.topping1 === "shrimp"){
      this.price += 3;
    }else {
      this.price;
    }
    if (this.topping1 === "squid"){
      this.price += 2;
    }else {
      this.price;
    }
    if (this.topping2 === "anchovies"){
      this.price += 1;
    }else{
      this.price;
    }
    if (this.topping2 === "pineapple"){
      this.price += 1;
    }else {
      this.price;
    }
    if (this.topping2 === "shrimp"){
      this.price += 3;
    }else {
      this.price;
    }
    if (this.topping2 === "squid"){
      this.price += 2;
    }else {
      this.price;
    }
    if (this.topping3 === "anchovies"){
      this.price += 1;
    }else{
      this.price;
    }
    if (this.topping3 === "pineapple"){
      this.price += 1;
    }else {
      this.price;
    }
    if (this.topping3 === "shrimp"){
      this.price += 3;
    }else {
      this.price;
    }
    if (this.topping3 === "squid"){
      this.price += 2;
    }else {
      this.price;
    }
}

let pizzaOne = new Pizza(0, "medium", "anchovies");
let pizzaTwo = new Pizza(0, "large", "pineapple", "anchovies");