function OrderDrink (num){
  if (num == 0){
    return"Orange Juice";
  }
  if (num == 1){
    return"Coffee";
  }
  if (num == 2){
    return"Bubble Tea";
  }
  if (num == 3){
    return"Fruit Tea";
  }
  if (num == 4){
    return"Hot Chocolate";
  }
  else {
    return"Sorry, this drink has been sold out.";
  }
}

console.log(OrderDrink(6));
