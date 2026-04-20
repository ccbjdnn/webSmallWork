// 函数：获取数组的第二大值和第二小值
function getSecondMinMax(arr) {
    // 处理空数组或元素不足的情况
    if (arr.length < 2) {
        return "数组元素数量不足";
    }

    // 初始化第一、第二小值（取一个较大的初始值）
    let min1 = Infinity, min2 = Infinity;
    // 初始化第一、第二大值（取一个较小的初始值）
    let max1 = -Infinity, max2 = -Infinity;

    // 遍历数组，更新四个值
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        // 处理最小值相关
        if (num < min1) {
            // 比当前最小还小，更新第二小为原来的最小
            min2 = min1;
            min1 = num;
        } else if (num < min2 && num !== min1) {
            // 介于最小和第二小之间，更新第二小
            min2 = num;
        }

        // 处理最大值相关
        if (num > max1) {
            // 比当前最大还大，更新第二大为原来的最大
            max2 = max1;
            max1 = num;
        } else if (num > max2 && num !== max1) {
            // 介于最大和第二大之间，更新第二大
            max2 = num;
        }
    }

    // 返回结果（处理无第二小/大值的情况，如数组所有元素相同）
    return {
        第二小值: min2 !== Infinity ? min2 : "不存在",
        第二大值: max2 !== -Infinity ? max2 : "不存在"
    };
}

// 测试示例
let testArr1 = [5, 2, 8, 1, 9, 3];
let testArr2 = [10, 10, 10]; // 所有元素相同
let testArr3 = [3]; // 元素不足

console.log(getSecondMinMax(testArr1)); // { 第二小值: 2, 第二大值: 8 }
console.log(getSecondMinMax(testArr2)); // { 第二小值: "不存在", 第二大值: "不存在" }
console.log(getSecondMinMax(testArr3)); // "数组元素数量不足"