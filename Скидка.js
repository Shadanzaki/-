let sum = 10;
let numberOfGoods = 1;
let promocode = "ДАРИМ300";

discounts(sum, numberOfGoods, promocode);

function promocode1(sum) {
  console.log("Промокод 'ДАРИМ300' введен, применена скидка в 300р");
  if (sum > 300) {
    return sum - 300;
  } else if (sum <= 300) {
    return 0;
  }
}

function numbersOfGoods(sum) {
  sum = sum - (sum * 0, 05);
  console.log("Кол-во товаров больше 10, скидка применена");
  return sum;
}

function sumDiscount(sum) {
  sum = sum - (sum - 50000 - (sum - 50000) * 0.2);
  console.log ("Сумма чека больше 50000, скидка применена");
  return sum;
}

function promocode2(sum, promocode) {
  sum = sum - sum * 0.15;
  console.log("Промокод 'СКИДКА15' введен, скидка применена");
  return sum;
}

function discounts(sum, numberOfGoods, promocode = null) {
  if (promocode === "ДАРИМ300") {
    sum = promocode1(sum);
  }
  if (numberOfGoods >= 10) {
    sum = numbersOfGoods(sum);
  }
  if (sum > 50000) {
    sum = sumDiscount(sum);
  }
  if (promocode === "СКИДКА15" && sum >= 20000) {
    sum = promocode2(sum);
  }
  console.log(`Сумма после применения скидок равна ${sum}`);
}
