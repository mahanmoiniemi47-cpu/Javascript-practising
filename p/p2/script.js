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

let exsersize = ["world"];

exsersize.shift(1,"Hello")

console.log(exsersize);



