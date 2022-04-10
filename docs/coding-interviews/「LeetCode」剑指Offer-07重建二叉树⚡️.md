# 「LeetCode」剑指Offer-07重建二叉树⚡️

![Untitled - Made with DesignCap (45)](https://tva1.sinaimg.cn/large/e6c9d24egy1h14tmadfvaj21hc0u0djx.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲<br/>
> 欢迎小伙伴们加我微信：`sudongyuer`拉你进群，一起讨论，期待与大家共同成长🥂

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」。 

如今的大环境里，算法已经成为了前端工程师发展路上不可或缺的技能之一。如果我们想未来更上一层楼，**不再是只写业务代码的应用工程师，就离不开对算法和数据结构的掌握。**

当然，学习也是有侧重点的，作为前端我们不需要像后端开发一样对算法全盘掌握，有些比较偏、不实用的类型和解法，只要稍做了解即可。



# 题目🦀

[剑指 Offer 07. 重建二叉树](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/)

难度`中等`

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

**示例 1:**

![img](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

**示例 2:**

```
Input: preorder = [-1], inorder = [-1]
Output: [-1]
```

 

**限制：**

```
0 <= 节点个数 <= 5000
```

# 解题思路🌵

- 采用分而治之的思想
- 根据前序遍历的首个节点确定根节点，在根据根节点在中序遍历中的位置，确定左右子树的个数，然后分别确定在中序遍历和前序遍历中的左右子树。
- 然后再对左右子树进行上述步骤

# 心得体会❤️

- 一定要多画图
- 一定要多画图
- 一定要多画图

# 源码🔥

`最简单的办法 哈哈哈哈哈哈`

但这不是本题的本意

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    if(preorder.length===0){return null}

     const cur=new TreeNode(preorder[0])
     //拿到根节点在前序遍历中的索引
     const index=inorder.indexOf(cur.val)

     //根据索引在中序遍历中分割左右子树
     const preorderLeft=preorder.slice(1,index+1)


    //根据索引在中序遍历中分割左右子树
     const preorderRight=preorder.slice(index+1)    


    //根据索引在中序遍历中分割左右子树
     const inorderLeft=inorder.slice(0,index)
    //根据索引在中序遍历中分割左右子树
     const inorderRight=inorder.slice(index+1)  

     //构建左子树
     cur.left=buildTree(preorderLeft,inorderLeft)
     //构建右子树
     cur.right=buildTree(preorderRight,inorderRight)
     return cur
};
```

时间复杂度:O(n) 

空间复杂度:O(n)

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」剑指Offer-07重建二叉树⚡️`就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。

>加我微信：**sudongyuer**，邀你进群，一起学习前端，成为更优秀的工程师～（群二维码在这里->[前端要早睡](https://juejin.cn/pin/7022136907265998861), 二维码过期了的话看链接沸点中的评论，我会把最新的二维码放在评论区，当然也可以加我微信我拉你进群，毕竟我也是有趣的前端，认识我也不赖🌟～<br/>
>ps：公司最近在招聘前端，欢迎小伙伴咨询，坐标成都，我的vx：sudongyuer，或者直接投递邮箱[hr@haiyao.io]
