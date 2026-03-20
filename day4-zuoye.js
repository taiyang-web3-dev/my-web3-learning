console.log("➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤九九乘法表 ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤");
for (let i = 1; i <= 9; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + j + "*" + i + "=" + (i * j) + " ";
    }
    console.log(row);
}


console.log("➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤九九乘法表 ➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤");


// 打印 10个斐波那契数列
let fib = [1, 1];
for (let i = 2; i <= 9; i++) {
    let next = fib[i - 1] + fib[i - 2];
    fib.push(next);
}
console.log(fib.join(','));


// 数组求平均值
let numbers = [10, 30, 50, 60, 80];
let total = 0; 
for (let i =0; i < numbers.length; i++) {
    total = total + numbers[i];
}
let average = total / numbers.length;
console.log(average);