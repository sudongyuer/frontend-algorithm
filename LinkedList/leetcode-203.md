# 「LeetCode」203-移除链表元素⚡️

![](https://tva1.sinaimg.cn/large/008i3skNgy1gz8qg4mkw7j31hc0u0wir.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲<br/>
> 欢迎小伙伴们加我`微信`：`sudongyuer`拉你进群<br/>
> 关注我的`公众号`:`前端速冻鱼`一起进步，期待与大家共同成长🥂

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」。 

当然，学习也是有侧重点的，作为前端我们不需要像后端开发一样对算法全盘掌握，有些比较偏、不实用的类型和解法，只要稍做了解即可。

# 题目🦀

#### [203. 移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)

难度`简单`

给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 **新的头节点** 。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg)

```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

**示例 2：**

```
输入：head = [], val = 1
输出：[]
```

**示例 3：**

```
输入：head = [7,7,7,7], val = 7
输出：[]
```

 

**提示：**

- 列表中的节点数目在范围 `[0, 104]` 内
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

# 解题思路🌵

- 可以设置一个哨兵
- 哨兵的作用在于我们可以很方便的处理头节点

# 解法🔥

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head){
        return head
    }
    let soldier = {
        next:head
    }
    let p = soldier
 //设置哨兵的意义在于好判断头节点
    while(p.next){
     if(p.next.val===val){
         p.next=p.next.next
     }else{
         p=p.next
     }
    }
    return soldier.next
};
```

时间复杂度：O(n)

空间复杂度：O(1) 

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」203-移除链表元素⚡️`就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。

>加我微信：**sudongyuer**，邀你进群，一起学习前端，成为更优秀的工程师～（群二维码在这里->[前端要午睡](https://juejin.cn/pin/7022136907265998861), 二维码过期了的话看链接沸点中的评论，我会把最新的二维码放在评论区，当然也可以加我微信我拉你进群，毕竟我也是有趣的前端，认识我也不赖🌟～<br/>



