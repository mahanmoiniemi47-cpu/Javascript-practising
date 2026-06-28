alert("سلام\n چه خبرا 😉");
let nafarat = Number(prompt("\n تعداد دانش آموز ها را وارد کنید:\n \n"));

let stu = [];

for (let i = 1; i <= nafarat; i++) {
  let soc = Number(prompt("\n نمره ها را وارد کنید: \n \n"));
  stu.push(soc);
}

function mian(stu) {
  let sum = 0;
  for (let i = 0; i < stu.length; i++) {
    sum += stu[i];
  }
  alert(sum / stu.length);
}

mian(stu);