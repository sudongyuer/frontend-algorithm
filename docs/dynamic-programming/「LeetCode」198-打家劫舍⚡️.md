# 「LeetCode」198-打家劫舍⚡️

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2ggdk32uzj21hc0u00wp.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲，是隔壁寒草🌿的好兄弟，刚开始写文章。
> 如果喜欢我的文章，可以关注➕点赞，为我注入能量，与我一同成长吧～

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」。 

当然，学习也是有侧重点的，作为前端我们不需要像后端开发一样对算法全盘掌握，有些比较偏、不实用的类型和解法，只要稍做了解即可。



# 题目🦀

[198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)

难度`中等`

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。

 

**示例 1：**

```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

**示例 2：**

```
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

 

**提示：**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

# 解题思路🌵

- 此题采用动态规划求解问题
- 先确定dp下标的意义
- 初始化dp
- 确定递推公式
- 遍历
- 返回结果

# 解题步骤🐂

- dp下标的含义就是dp[i]表示多长的nums数组能偷盗的最大金额
- 初始化dp，最开始长度为1或者2
- 为1时就为nums[0],为2需要判断`Math.max(nums[0],nums[1])`
- 递推公式  `dp[i]= Math.max(dp[i-1],dp[i-2]+nums[i])`
- 最后return结果

# 源码🔥

空间复杂度为O(n):

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp =[nums[0],Math.max(nums[0],nums[1])]
    if(nums.length>2){
        for(let i =2;i<nums.length;i++){
            dp[i]= Math.max(dp[i-1],dp[i-2]+nums[i])
        }
    }
    return dp[nums.length-1]
};
```

时间复杂度:O(n)  

空间复杂度:O(n)  

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」198-打家劫舍⚡️ `就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。
