// 练习：计算购物总价
let applePrice = 5;
let appleCount = 3;
let bananaPrice =3;
let bananaCount = 2;

//计算各种水果的小计
let appleTotal = applePrice * appleCount; //5*3=15
let bananaTotal = bananaPrice * bananaCount; //3*2=6
let total = appleTotal + bananaTotal; //15+6=21

console.log("苹果:", applePrice, "*", appleCount, "=", appleTotal); // 15
console.log("香蕉:", bananaPrice, "*", bananaCount, "=", bananaTotal); // 6
console.log("总计:", total, "元"); // 21

// 练习：取余运算（判断奇偶）
let number =15;
let remainder = number % 2; // 15除以2的余数是 1
console.log(number,"除以2的余数:", remainder); // 如果余数是0，说明是偶数；如果余数是1，说明是奇数

// 练习: 比较两个值，结果是true或 false
let age =25;

console.log(age >18); // true   (大于）
console.log(age <18); // false   (小于）
console.log(age >=25);  // true  (大于等于）
console.log(age <=20);  // false  (小于等于）
console.log(age === 25);  //true  (等于）
console.log(age !== 30);  //true  (不等于)

// 练习： 判断是否成年
let userAge =20;
let isAdult = userAge >=18; 

console.log("年龄:", userAge);
console.log("是否成年:", isAdult); //true 或 false 

// 练习： 价格比较
let price1 = 100;
let price2 = 80;
let isCheaper = price2 < price1;

console.log("商品 2 更便宜:", isCheaper); // true 或 false


// || (或/or): 满足其中一个就行
let isStudent = false;
let isTeacher = true;
let canEnter = isStudent || isTeacher; // 是学生 或 是老师
console.log(canEnter); // true

// ! (非/not): 取反
let isRaining = true;
let isSunny = !isRaining; //不下雨
console.log(isSunny); // false