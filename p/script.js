let text = "Salam ";

function Find(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char === char.toUpperCase()) {
      count++;
    }
  }
  return count;
}

console.log(Find(text));

console.clear();

let nums = [2, 5, 8, 10, 12];

function array(nums) {
  if (nums.length === 0) {
    return null;
  } else {
    return Math.max(...nums);
  }
}

console.log(array(nums));

console.clear();

let num1 = [5, 10, 15, 20];

function littleNum(num1) {
  if (num1.length === 0) {
    return "مقدار آرایه خالی است";
  } else {
    return Math.min(...num1);
  }
}

console.log(littleNum(num1));

console.clear();

// Array methods

// دو برابر کردن اعداد در یک آرایه

let point = [2, 4, 6, 8, 10];

function doublenum(point) {
  return point.map(function (n) {
    return n * 2;
  });
}

//پیدا کردن طول رشته

let text1 = ["salam vaght be khair"];

function FindLength(text1) {
  return text1.map(function (l) {
    return l.length;
  });
}

console.clear();

//  اولین حرف هر کلمه رو بزرگ  کند(UpperCase)

let text2 = ["hello", "world"];
function letter(text2) {
  return text2.map(function (d) {
    return d[0].toUpperCase() + d.slice(1);
  });
}

console.clear();

// فقط نام ها را بیرون می آورد

let names = [
  { name: "mmad", age: 34 },
  { name: "reza", age: 22 },
];

function getNames(names) {
  return names.map(function (n) {
    return n.name;
  });
}

console.clear();

// فقط اعداد زوج را نشان میدهد
let adad = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function even(adad) {
  return adad.filter(function (zoj) {
    return zoj % 2 === 0;
  });
}

// تنها افراد بالای 18 سال نشان میدهد
let students = [
  { name: "mmad", age: 18 },
  { name: "reza", age: 22 },
  { name: "ali", age: 28 },
];

function ageAnalize(students) {
  return students.filter(function (a) {
    return a.age > 18;
  });
}

console.clear();

// انتخاب رشته هایی که بیشتر از 5 حرف هستند

let sentence = ["farmer", "police", "taxi", "car", "driver"];

function moreThanFive(sentence) {
  return sentence.filter(function (word) {
    return word.length > 5;
  });
}

console.clear();

// انتخاب truthy ها در یک آرایه

let tf = ["hello", 0, 1, "", NaN];

function findTrue(tf) {
  return tf.filter(function (T) {
    return T;
  });

  // return tf.filter(Boolean)
}

console.clear();

// جمع دو عدد در آرایه

let cal = [20, 13, 523, 43];

function scoreSum(cal) {
  return cal.reduce(function (a, b) {
    return a + b;
  });
}

console.clear();

// تعداد دفعات تکرار هر حرف در یک رشته

let turns = "hello world";

function countLetter(turns) {
  return turns.split("").reduce(function (acc, ch) {
    // acc[ch] = (acc[ch] || 0) + 1;

    // if (!acc[ch]) acc[ch] = 0;
    // acc[ch]++;

    //  _____________________________________
    // if (acc[ch]) {
    //   acc[ch] + 1;
    // } else {
    //   acc[ch] = 1;
    // }⬇️ همان روش زیراست ⬇️

    acc[ch] = acc[ch] ? acc[ch] + 1 : 1;

    return acc;
  }, {});
}

console.log(countLetter(turns));

let hi = "hello";

function countLetters(hi) {
  let resualt = {};

  for (let i = 0; i < hi.length; i++) {
    let ch = hi[i];
    // if (!resualt[ch]) resualt[ch] = 0;
    // resualt[ch]++;

    // if (!resualt[ch]) resualt[ch] = 0;
    // resualt[ch]++;

    // _________________________________________
    // if (resualt[ch]) {
    //   resualt[ch] + 1;
    // } else{
    //   resualt[ch]=1
    // }⬇️ همان روش زیراست ⬇️

    resualt[ch] = resualt[ch] ? resualt[ch] + 1 : 1;
  }

  return resualt;
}

console.clear();

//  پیدا کردن بزگترین عدد در آرایه با استفاده از reduce

let array1 = [2, 3, 4, 5, 6];

function findMax(array1) {
  return array1.reduce(function (a, b) {
    return a > b ? a : b;
  });
}

console.clear();

// ساخت یک رشته واحد با جدا کننده (-) از طریق reduce

let array2 = ["salam", "cheh", "khabar"];

function cutWord(array2) {
  return array2.reduce(function (a, b) {
    return a + "-" + b;
  });
}

console.clear();

// با foreach تمام عناصر درون آرایه را چاپ می کند

let array3 = ["hello", 2, "you"];

function for1(array3) {
  return array3.forEach(function (e3) {
    console.log(e3);
  });
}

console.clear();

let array4 = [43, 24, 41];

function sum(array4) {
  let sum = 0;
  return array4.forEach(function (n) {
    console.log((sum += n));
  });
}

console.clear();

let students1 = [
  { name: "mmad", age: 18 },
  { name: "reza", age: 22 },
  { name: "ali", age: 28 },
];

function showUserName(students1) {
  return students1.forEach(function (asm) {
    console.log(asm.name);
  });
}

console.clear();

let num = [4, 5, 6, 7, 8];

function plusOne(num) {
  return num.forEach(function (ct) {
    console.log((ct += 1));
  });
}

console.clear();

let string1 = "salam vaght beh khair";

function Upper(string1) {
  return string1.toUpperCase();
}

console.clear();

let string2 = "salam bad bakhetii";

function Upper2(string2) {
  return string2
    .split(" ")
    .map((n) => n[0].toUpperCase() + n.slice(1))
    .join(" ");
}

// سوالش داخله pdf

let string3 = "   hEllO    woRld    ";

function capitalizeWords(string3) {
  return string3
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.clear();

function s(input) {
  console.log(input.toUpperCase());
}

s("ds");

console.clear();

let sentence1 = "salam donya, hello world";

function splitWords(sentence1) {
  return sentence1.split(" ");
}

console.clear();

let sentence2 = "salam";

function splitWords1(sentence2) {
  return sentence2.split("");
}

console.clear();

let sentence3 = "a,b,c";

function splitWords2(sentence3) {
  return sentence3.split(",");
}

let sentence4 = "Ali|reza|mmad";

function splitWords3(sentence4) {
  return sentence4.split("|");
}

console.clear();

// let str="word"

function findWord(str, word) {
  console.log(str.toUpperCase().includes(word));
}

findWord("hi my names Mahan from bushehr", "M");

console.clear();

function passNum(password) {
  console.log(/\d/.test(password));
}

passNum("gvs432");

console.clear();

// تابعی بسازید که برسی کند آیا ورودی از نوع استرینگ  که وارد شده داری اسپیس هست یا نه؟

function space(n, s) {
  console.log(n.includes(s));
}

space("Hi World", " ");

console.clear();

let str1 = "mahan@gmai.com";

function email(str1) {
  return str1.includes("@");
}

console.clear();

// میتوانیم با replace فاصله ها را کم یا زیاد کنیم

let str = "hello world";

function fixSpaces(str) {
  return str.replace(/ +/g, ""); //⬅️ با این خط کد
}

console.clear();

// اعمال تغییر روی همه ی حروف یک string

function clearWords(str) {
  console.log(str.replace(/-/g, "/"));
}

clearWords("ali-da-adf");

function jsToJavascript(str) {
  console.log(str.replace("js", "javascript"));
}

jsToJavascript("js is a dynamical type languge");

console.clear();

function keyPrint(object1) {
  console.log(Object.keys(object1));
}

keyPrint({ name: "mahan" });

function keyLength(object2) {
  console.log(Object.keys(object2).length);
}

keyLength(
  { name: "mmad", age: 18 },
  { name: "reza", age: 22 },
  { name: "ali", age: 28 },
);

let object3 = { name: "mmad", age: 18 };

function analizeName(object3) {
  return Object.keys(object3).includes("name");
}

console.log(analizeName(object3));

let object4 = { name: "mmad", age: 18 };

function fg(object4) {
  return Object.keys(object4).join(",");
}

console.log(fg(object4));

let object5 = { age1: 13, age2: 18, age3: 34 };

function sumValues(object5) {
  return Object.values(object5).reduce((a, b) => a + b);
}

console.log(sumValues(object5));

console.clear();

let obj = { name: "ali", age: 28, name1: "mmad", age2: 18 };

function printValues(obj) {
  return Object.values(obj).forEach((v) => console.log(v));
}

console.log(printValues(obj));

console.clear();

let user = { firstUser: "client", secoendUser: "admin", thirdUser: "client" };

function searchAdmin(user) {
  return Object.values(user).includes("admin");
}

console.log(searchAdmin(user));

console.clear();

// تابعی بسازید که همه key-value ها را چاپ کند.

let userfourth = {
  firstUser: "client",
  secoendUser: "admin",
  thirdUser: "client",
};

let enteries1 = Object.entries(userfourth).forEach((e) => console.log(e));

console.log(enteries1);

console.clear();

// رنامه‌ای بنویسید که از روی entries یک شیء را دوباره بسازد.

function rebuild(entries) {
  return Object.fromEntries(entries);
}

console.log(rebuild({ name: "dad" }));

// تابعی بسازید که entries را فیلتر کند (مثلا مقدارها بالای ۱۰).

let mydata = {
  first_age: 2,
  secoend_age: 33,
  third_age: 62,
  fourth_age: 10,
};

let lessthan = function (obj) {
  Object.fromEntries(Object.entries(obj).filter(([key, value]) => value >= 10));
};

let after = lessthan(mydata);

console.log(after);

