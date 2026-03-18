// 查看数据类型
let name = "太阳";
let age = 25;
let isStudent = true;
let price = 99.9;

console.log("name 的类型:", typeof name); // string
console.log("age 的类型:", typeof age); // number
console.log("isStudent 的类型:", typeof isStudent); // boolean
console.log("price 的类型:", typeof price); // number

// 字符串拼接
let greeting = "Hello," + name;
console.log(greeting); // Hello,太阳

// 模板字符串
let info = `我是${name}，今年${age}岁。`;
console.log(info); // 我是${name}，今年${age}岁。