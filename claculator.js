//计算器程序
let num1 = 10;
let num2 =3;
let operator = "/"; // 可以是 "+", "-", "*", "/"

console.log("==========计算器==========");
console.log("数字1:", num1);
console.log("数字2:", num2);
console.log("运算符:", operator);

let result;

if (operator === "+") {
    result = num1 + num2;
    console.log("结果:", num1, "+", num2, "=", result);
} else if (operator === "-") {
    result = num1 - num2;
    console.log("结果:", num1, "-", num2, "=", result);
} else if (operator === "*") {
    result = num1 * num2;
    console.log("结果:", num1, "*", num2, "=", result);
} else if (operator === "/") {
    if (num2 === 0) {
        console.log("错误: 不能除以 0!");
    } else {
        result = num1 / num2;
        console.log("结果:", num1, "/", num2, "=", result);
    }
} else {
    console.log("错误: 不支持的运算符!");
}

console.log("===================================");

// 挑战: 判断结果是否大于 100
if (result >100) {
    console.log("结果大于 100!");
} else {
    console.log("结果小于或等于 100");
}