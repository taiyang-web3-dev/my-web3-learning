//练习 1:判断是否成年
let age = 20;

if (age >= 18) {
    console.log("你是成年人");
} else {
    console.log("你是未成年人");
}

//练习 2:判断评级
let score = 85;

if (score >=90) {
    console.log("优秀");
} else if (score >= 80) {
    console.log("良好");
} else if (score >= 60) {
    console.log("及格");
} else {
    console.log("不及格");
}

//练习 3:判断奇偶（结合昨天的取余）
let number = 15;

if (number % 2 === 0) {
    console.log(number,"是偶数");
} else {
    console.log(number,"是奇数");
}