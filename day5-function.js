// 练习1: 简单的打招呼函数
function sayHello(name) {
    return "你好, " + name + "! ";
}

console.log(sayHello("太阳"));
console.log(sayHello("月亮"));
console.log(sayHello("星星"));

// 练习2： 加法函数
function add(a, b) {
    return a + b;
}

console.log("2 + 3 =", add(2, 3));
console.log("20 + 30 =", add(20, 30));

// 练习3: 判断是否为偶数
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("6是偶数吗: ", isEven(6));
console.log("3是偶数吗: ", isEven(3));

// 练习4: 计算圆面积
function circleArea(radius) {
    return 3.14159 * radius * radius;
}

console.log("半径 7 的圆面积: ", circleArea(7));
console.log("半径 9 的圆面积: ", circleArea(9));


// 练习5: 找最小值的函数
function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

let scores = [78, 87, 98, 85, 97];
console.log("最低分是: ", findMin(scores));


// 练习6: 过滤奇数的函数
function filterOdd(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }
    return result;      
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("奇数列表: ", filterOdd(nums));