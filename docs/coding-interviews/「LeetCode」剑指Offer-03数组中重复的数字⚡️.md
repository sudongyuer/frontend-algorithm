# 「LeetCode」剑指Offer-03数组中重复的数字⚡️

![Untitled - Made with DesignCap (38)](https://tva1.sinaimg.cn/large/e6c9d24ely1h0v7l91t8nj21hc0u0aex.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲，是隔壁寒草🌿的好兄弟，刚开始写文章。
> 如果喜欢我的文章，可以关注➕点赞，为我注入能量，与我一同成长吧～

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」。 

如今的大环境里，算法已经成为了前端工程师发展路上不可或缺的技能之一。如果我们想未来更上一层楼，**不再是只写业务代码的应用工程师，就离不开对算法和数据结构的掌握。**

当然，学习也是有侧重点的，作为前端我们不需要像后端开发一样对算法全盘掌握，有些比较偏、不实用的类型和解法，只要稍做了解即可。



# 题目🦀

[剑指 Offer 03. 数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

难度`简单`

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

**示例 1：**

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
```

 

**限制：**

```
2 <= n <= 100000
```

# 解题思路🌵

- 这个题有很多解法，可以暴力便利，也可以使用HashMap。

- 由于只需要找重复元素，所以只需要先排好序，遍历，如果后边元素等于之前一个元素则退出循环。


# 解题步骤🐂

- 先将数组排序

- 遍历数组

- 比较数组前后的大小，如果相同的则退出循环，并返回当前元素。



# 源码🔥

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    if(!nums){return -1}
    nums.sort((a,b)=>{
        return a-b
    })
    let result=-1
    for(let i=0;i<nums.length;i++){
        if(result==nums[i]){
            return result
        }
        result=nums[i]
    }
    return result
};
```

时间复杂度:O(n*logN) 

空间复杂度:O(1)

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」剑指Offer-03数组中重复的数字⚡️`就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。

