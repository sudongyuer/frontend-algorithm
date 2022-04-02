# 「LeetCode」剑指Offer-04二维数组中的查找⚡️

![](https://tva1.sinaimg.cn/large/e6c9d24ely1h0v8g56j8aj21hc0u0jw6.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲
> 欢迎小伙伴们加我微信：`sudongyuer`拉你进群，一起讨论，期待与大家共同成长🥂

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」。 

如今的大环境里，算法已经成为了前端工程师发展路上不可或缺的技能之一。如果我们想未来更上一层楼，**不再是只写业务代码的应用工程师，就离不开对算法和数据结构的掌握。**

当然，学习也是有侧重点的，作为前端我们不需要像后端开发一样对算法全盘掌握，有些比较偏、不实用的类型和解法，只要稍做了解即可。



# 题目🦀

[剑指 Offer 04. 二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

难度`中等`

在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

**示例:**

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

给定 target = `5`，返回 `true`。

给定 target = `20`，返回 `false`。

**限制：**

```
0 <= n <= 1000
0 <= m <= 1000
```

# 解题思路🌵

- 将大问题拆分成小问题。
- 每次都从最右上角的元素开始对比
- 如果选取元素小于目标元素，则减少列数
- 如果选取元素大于目标元素，则增加行数
- 如果项目那么就退出找到了

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwz6inq32zj315c0u0116.jpg" alt="image-20211202081404545" style="zoom:50%;" />

# 源码🔥

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
        if(!matrix||!target){
            return false
        }
        let row = 0
        let column = matrix[0].length-1
        while(row<=(matrix.length-1)&&column>=0){
            console.log(row,column)
            const num=matrix[row][column]
             if(num===target){
                 return true
             }else if(num<target){
                   ++row 
             } else if(num>target){
                 --column
             }
        }
        return false
};
```

时间复杂度:O(m*n) 矩阵的长宽 

空间复杂度:O(1)

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」剑指Offer-04二维数组中的查找⚡️`就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。

>加我微信：**sudongyuer**，邀你进群，一起学习前端，成为更优秀的工程师～（群二维码在这里->[前端要早睡](https://juejin.cn/pin/7022136907265998861), 二维码过期了的话看链接沸点中的评论，我会把最新的二维码放在评论区，当然也可以加我微信我拉你进群，毕竟我也是有趣的前端，认识我也不赖🌟～
> ps：公司最近在招聘前端，欢迎小伙伴咨询，坐标成都，我的vx：sudongyuer，或者直接投递邮箱[hr@haiyao.io
