console.log("========== 九九乘法表: ============");

// 外层循环: 控制行数 (1到9)
for (let i = 1; i <=9; i++) {
    let row = "";
    // 内层循环: 控制列数 (1到i)
    for (let j = 1; j <= i; j++) {
        // 拼接乘法公式，比如 "2*3=6"
        row = row + j + "*" + i + "=" + (i * j) + "  ";
    }

    console.log(row);
}

console.log("==========================================");

// 练习1: 打印三角形
console.log("=== 打印三角形 ===");
for (let i =1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line = line + "* ";
    }
    console.log(line);
}

// 练习2: 找出数组中的最大值
let scores = [85, 92, 78, 95, 88, 76];
let max = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i];
    }
}
console.log("数组中的最大值是:", max);