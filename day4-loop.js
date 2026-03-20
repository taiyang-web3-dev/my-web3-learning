// 练习 1: 简单计数
console.log("=== 练习 1: 从1 数到 5 ===");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 练习 2: 计算 1+2+3+...+10
console.log("=== 练习2: 累加求和 ===");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i; //sum += i 的简写
    console.log("加上", i, "后, 总和是: ", sum);
}
console.log("1到10的总和是: ", sum);

// 练习 3: 隔一个数 (步长为2)
console.log("=== 练习3: 偶数 ===");
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

// 练习 4: 倒着数
console.log("=== 练习4: 倒计时 ===");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("开始! ");


// 创建数组
let fruits = ["苹果", "香蕉", "橙子", "葡萄"];

// 访问元素 (从0开始数! )
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);

// 修改元素
fruits[1] = "西瓜";
console.log(fruits);

// 练习： 购物车
let prices = [5, 3, 8, 12, 6];
console.log("商品数量: ", prices.length);

// 打印所有价格
console.log("=== 所有商品价格: ===");
for (let i = 0; i < prices.length; i++) {
    console.log("第", i + 1, "个商品: ", prices[i], "元");
}

// 计算总价
console.log("=== 计算总价: ===");
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
    console.log("加上第", i + 1, "个商品，当前总价: ", total);
}
console.log("最终总价: ", total, "元");


