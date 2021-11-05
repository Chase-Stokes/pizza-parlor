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
    if (this.topping1 === "mushroom"){
      this.price += 1;
    }else {
      this.price;
    }
    if (this.topping1 === "squid"){
      this.price += 2;
    }else {
      this.price;
    }
    if (this.topping1 === "Penne"){
      this.price += 1;
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
    if (this.topping2 === "mushroom"){
      this.price += 1;
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
    if (this.topping3 === "mushroom"){
      this.price += 1;
    }else {
      this.price;
    }
}

function showSelections(orderPizza) {
  $("#summary").show();
  
}

// let pizzaOne = new Pizza(0, "medium", "anchovies");
// let pizzaTwo = new Pizza(0, "large", "pineapple", "anchovies");
$(document).ready(function(){
  $("#pizza").submit(function(event){
    event.preventDefault();
     let pizzaSize = $("input:radio[name=size]:checked").val();
     let tOne = $("input:radio[name=toppingOne]:checked").val();
     let tTwo= $("input:radio[name=toppingTwo]:checked").val();
     let tThree = $("input:radio[name=toppingThree]:checked").val();
    $("input:radio[name=size]:checked").val()
    $("input:radio[name=toppingOne]:checked").val();
    $("input:radio[name=toppingTwo]:checked").val();
    $("input:radio[name=toppingThree]:checked").val();
    let orderPizza = new Pizza(0, pizzaSize, tOne, tTwo, tThree)
    orderPizza.modifyPrice();
    console.log(orderPizza.price)
  })
})