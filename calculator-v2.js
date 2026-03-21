console.log("======== 计算器 V2.0(函数版) ==========");

// 定义计算函数
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;   
}
function multiply(a, b) {
    return a * b;   
}
function divide(a, b) {
    if (b === 0) {
        return "错误: 除数不能为零";
    }
    return a / b;
}

// 主计算函数 （根据运算符调用不同函数）
function calculate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*")  {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else {
        return "错误: 不支持的运算符";
    }
}

// 测试
console.log("20+6=", calculate(20, 6, "+"));
console.log("20-6=", calculate(20, 6, "-"));
console.log("20*6=", calculate(20, 6, "*"));
console.log("20/6=", calculate(20, 6, "/"));
console.log("20/0=", calculate(20, 0, "/"));
console.log("20^6=", calculate(20, 6, "^"));

console.log("================================== ")



// 数学工具函数库
function square(n) { //平方
    return n * n;
}

function cube(n) {  //立方
    return n * n * n;
}

function absolute(n) {  //绝对值 
    if (n < 0) {
        return  -n;
    } 
    return n;
}

// 测试
console.log("5的平方: ", square(5));
console.log("3的立方: ", cube(3));
console.log("-10的绝对值: ", absolute(-10));

// 练习2 成绩处理系统
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F"
}
function isPass(score) {
    return score >= 60;
}

//处理一批成绩
let scores = [85, 92, 65, 54, 43, 99];
for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    console.log(
        "分数: ", score,
        "等级: ", getGrade(score),
        "是否及格:", isPass(score) ? "是" : "否"
    );
}