# 「LeetCode」213-打家劫舍⚡️||

![Untitled - Made with DesignCap - 2022-05-22T230234.825](https://tva1.sinaimg.cn/large/e6c9d24egy1h2hkwgaitzj21hc0u0ae0.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲，是隔壁寒草🌿的好兄弟，刚开始写文章。
> 如果喜欢我的文章，可以关注➕点赞，为我注入能量，与我一同成长吧～

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」。 

当然，学习也是有侧重点的，作为前端我们不需要像后端开发一样对算法全盘掌握，有些比较偏、不实用的类型和解法，只要稍做了解即可。



# 题目🦀

#### [213. 打家劫舍 II](https://leetcode.cn/problems/house-robber-ii/)

难度`中等`

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 **围成一圈** ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警** 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **在不触动警报装置的情况下** ，今晚能够偷窃到的最高金额。

 

**示例 1：**

```
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```

**示例 2：**

```
输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

**示例 3：**

```
输入：nums = [1,2,3]
输出：3
```

 

**提示：**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

# 解题思路🌵

- 此题采用动态规划求解问题
- 先确定dp下标的意义
- 初始化dp
- 确定递推公式
- 遍历
- 返回结果

# 解题步骤🐂

- 此题唯一和198不同之处在于，需要判断是否偷盗了第一家和最后一家
- 我们可以采用分别计算不包含第一家的最大金额和不包含最后一家的最大金额取最大值即可

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
    const getMostMoney = (nums,start,end)=>{
        const newNums = nums.slice(start,end+1)
        const dp = [newNums[0],Math.max(newNums[0],newNums[1])]

        for(let i=2;i<=end;i++){
            dp[i] = Math.max(dp[i-1],dp[i-2]+newNums[i])
        }
        return dp[newNums.length-1]
    }

    if(nums.length===0){
        return 0
    }
    if(nums.length===1){
        return nums[0]
    }
    let len = nums.length
    //去掉末尾
    const result1 = getMostMoney(nums,0,len-2)
    
    //去掉头部
    const result2 = getMostMoney(nums,1,len-1)

    return Math.max(result1,result2)
};
```

时间复杂度:O(n)  

空间复杂度:O(2n)  

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」213-打家劫舍⚡️|| `就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。