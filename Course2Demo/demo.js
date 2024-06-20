const taxCalc = (inclTax) => {
  const dishes = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
  ];

  if (inclTax) {
    console.log("Prices with tax : ");
    dishes.forEach((dish) => {
      console.log(
        `Dish : ${dish.name}, Price (incl.tax) :$ ${(dish.price +=
          (dish.price * 20) / 100)}`
      );
    });
  } else {
    console.log("Prices without tax : ");
    dishes.forEach((dish) => {
      console.log(`Dish : ${dish.name}, Price (incl.tax) :$ ${dish.price}`);
    });
  }
};

taxCalc(true);
taxCalc(false);
