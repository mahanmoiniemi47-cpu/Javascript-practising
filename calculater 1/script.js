function calcu(number1, opration, number2) {
  if (opration == "+") {
    console.log(number1 + number2);
  } else if (opration == "-") {
    console.log(number1 - number2);
  } else if (opration == "/") {
    console.log(number1 / number2);
  } else if (opration == "*") {
    console.log(number1 * number2);
  } else {
    console.log("invalid;");
  }
}

calcu(4, "+", 3);
