function Pizza(price, size, topping) {
  this.price = 0
  this.size = size
  this.topping = topping
}

Pizza.prototype.modifyPrice = function(){
  
  if (this.size === "medium"){
    this.price+=(8 + this.topping.length *2);
  }else{
    this.price+=(10 + this.topping.length *2);
  }
}

function showSelections(orderPizza) {
  $("#summary").show();
  $(".1").html(orderPizza.price);
  $(".2").html(orderPizza.size);
  $(".3").html(orderPizza.topping.join(", "));
}

$(document).ready(function(){
  $("#pizzaOptions").submit(function(event){
    event.preventDefault();
    let pizzaSize = $("input:radio[name=size]:checked").val();
    let toppingsArray = [];
    let tOne = $("input:checkbox[name=topping]:checked").each(function(){
      toppingsArray.push($(this).val())
    });
    let orderPizza = new Pizza(0, pizzaSize, toppingsArray);
    orderPizza.modifyPrice();
    showSelections(orderPizza);
  });
});