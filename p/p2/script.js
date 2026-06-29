let data = { first_age: 2, secoend_age: 33, third_age: 62, fourth_age: 10 };

function toKeyValueStrings(data) {
  return Object.entries(data).map((e) => e[0] + ":" + e[2]);

  // .map(([key,value])=> key+":"+value)
}

console.log(toKeyValueStrings(data));

console.log("\n" + "\n");

//________

let dataa = {
  first_age: 2,
  secoend_age: 33,
  third_age: 62,
  fourth_age: 10,
  id: 3242,
};

let mamba = function (obj, value) {
  return obj.hasOwnProperty(value);
};

let awnser = mamba(dataa);

console.log(awnser);

console.log("\n" + "\n");

// ___________

let dataaa = {};

function onlyOwnProps(dataaa) {
  let k = { id: 4 };
  for (let i = 0; i <= dataaa.length; i++) {
    if (dataaa.hasOwnProperty(k)) {
      console.log(k, dataaa[k]);
    }
  }
}

console.log(onlyOwnProps(dataaa));

console.clear();

// first question

let numbers = [12, 7, 25, 18, 30];

function finding1(numbers) {
  return numbers.find(function (n) {
    return n > 20;
  });
}

console.log(finding1(numbers));

let finding2 = function (numbers) {
  return numbers.find(function (n) {
    return n > 20;
  });
};

let after = finding2(numbers);

console.log(after);

let finding3 = numbers.find((n) => n > 20);

console.log(finding3);

// seconed question

let ages = [14, 17, 20, 15];

function uptoEightTeen1(ages) {
  return ages.some(function (age) {
    return age >= 18;
  });
}

console.log(uptoEightTeen1(ages));

let uptoEightTeen2 = function (ages) {
  return ages.some(function (age) {
    return age >= 18;
  });
};

let base = uptoEightTeen2(ages);

console.log(base);

let uptoEightTeen3 = ages.some((age) => age >= 18);

console.log(uptoEightTeen3);

console.log("\n");

// third question

let scores = [85, 90, 78, 92];

let moreThanFifty = scores.every((num) => num > 50);

console.log(moreThanFifty);

// fourth question

let fruits = ["apple", "banana"];

function first_pushing(fruits) {
  fruits.push("orange");
  return fruits;
}

console.log(first_pushing(fruits));

let seconed_pushing = function (fruits) {
  fruits.push("orange");
  return fruits;
};

let pusher = seconed_pushing(fruits);

console.log(pusher);

// fivth question

let colors = ["red", "green", "blue"];

let m= colors.pop()

console.log(m);