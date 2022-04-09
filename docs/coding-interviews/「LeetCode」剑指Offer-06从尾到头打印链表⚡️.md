# 「LeetCode」剑指Offer-06从尾到头打印链表⚡️

![Untitled - Made with DesignCap](/Users/sudongyu/Pictures/掘金文章图片/Untitled - Made with DesignCap.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲<br/>
> 欢迎小伙伴们加我微信：`sudongyuer`拉你进群，一起讨论，期待与大家共同成长🥂

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」。 

如今的大环境里，算法已经成为了前端工程师发展路上不可或缺的技能之一。如果我们想未来更上一层楼，**不再是只写业务代码的应用工程师，就离不开对算法和数据结构的掌握。**

当然，学习也是有侧重点的，作为前端我们不需要像后端开发一样对算法全盘掌握，有些比较偏、不实用的类型和解法，只要稍做了解即可。



# 题目🦀

[剑指 Offer 06. 从尾到头打印链表](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

难度`简单`

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

**示例 1：**

```
输入：head = [1,3,2]
输出：[2,3,1]
```

 

**限制：**

```
0 <= 链表长度 <= 10000
```

# 解题思路🌵

- 先进后出就是栈，递归就是栈
- 利用递归取到链表最后的元素依次放入数组即可

# 源码🔥

`最简单的办法 哈哈哈哈哈哈`

但这不是本题的本意

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {

    if(!head){return []}
    const arr=[]
    const loop=(node,arr)=>{
        if(!node){return}
        loop(node.next,arr)
        arr.push(node.val)
    }
    loop(head,arr)
    return arr
  
};
```

时间复杂度:O(n) 

空间复杂度:O(n)

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」剑指Offer-06从尾到头打印链表⚡️`就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。

>加我微信：**sudongyuer**，邀你进群，一起学习前端，成为更优秀的工程师～（群二维码在这里->[前端要早睡](https://juejin.cn/pin/7022136907265998861), 二维码过期了的话看链接沸点中的评论，我会把最新的二维码放在评论区，当然也可以加我微信我拉你进群，毕竟我也是有趣的前端，认识我也不赖🌟～<br/>
>ps：公司最近在招聘前端，欢迎小伙伴咨询，坐标成都，我的vx：sudongyuer，或者直接投递邮箱[hr@haiyao.io]
