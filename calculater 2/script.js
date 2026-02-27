function cal() {
  let num1 = Number(prompt("enter the first number"));
  if (isNaN(num1)) {
    alert("the first number was incorrect");
    return;
  }

  let oprator = prompt("enter the operator");

  let num2 = Number(prompt("enter the second number"));
  if (isNaN(num2)) {
    alert("the second number was incorrect");
    return;
  }

  if (oprator === "+") {
    alert(num1 + num2);
  } else if (oprator === "-") {
    alert(num1 - num2);
  } else if (oprator === "/") {
    alert(num1 / num2);
  } else if (oprator === "%") {
    alert(num1 % num2);
  } else if (oprator === "*") {
    alert(num1 * num2);
  } else {
    alert("its invalid");
  }
}

cal();