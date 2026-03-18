// 你的个人信息
let name = "太阳";
let age = 25;
let job = "学习者";
let isLearningWeb3 = true;
let targetJob = "Web3开发者";
let studyHoursPerDay = 2;

// 打印档案
console.log("==========个人档案==========");
console.log("姓名:", name);
console.log("年龄:", age);
console.log("职业:", job);      
console.log("目标:", targetJob);
console.log("每天学习Web3的时间:", studyHoursPerDay, "小时");
console.log("正在学习Web3:", isLearningWeb3 ? "是" : "否");

// 计算成为开发者需要的天数
let totalHoursNeeded = 1000;
let daysNeeded = totalHoursNeeded / studyHoursPerDay;
console.log("预计", daysNeeded, "天后成为开发者！");
console