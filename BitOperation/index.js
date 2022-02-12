//左移 <<1 在二进制位向左移动1位 就是乘2
let num =2
num=num<<3
console.log(num)

//右移 >>1 在二进制位向右移动1位 就是除2 去掉余数
let num1 = 3
num1 = num1 >>1
console.log(num1)

// | 两个同时是0，结果为0，否则为1
let num2 = 0b010
let num3 = 0b100
let num4 = num2 | num3
console.log(num4.toString(2))//110
// & 两个同时是1，结果为1，否则为0
let num5 = 0b010
let num6 = 0b100
let num7 = num2 & num3
console.log(num7.toString(2))//000