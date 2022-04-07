# 「LeetCode」剑指Offer-05替代空格⚡️

![Untitled - Made with DesignCap (40)](https://tva1.sinaimg.cn/large/e6c9d24egy1h11fte1119j21hc0u0wiv.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲，是隔壁寒草🌿的好兄弟，刚开始写文章。
> 如果喜欢我的文章，可以关注➕点赞，为我注入能量，与我一同成长吧～

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」

# 题目🦀

[剑指 Offer 05. 替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

难度`简单`

请实现一个函数，把字符串 `s` 中的每个空格替换成"%20"。



**示例 1：**

```
输入：s = "We are happy."
输出："We%20are%20happy."
```

 

**限制：**

```
0 <= s 的长度 <= 10000
```

# 解题思路🌵

- 使用javaScript提供的API replace 哈哈哈哈哈 😂 （太水了速冻鱼）
- 第二种，使用从后向前遍历的方法，这样可以让每个字符只移动一次（时间复杂度为O(n)）

# 源码🔥

`最简单的办法 哈哈哈哈哈哈`

但这不是本题的本意

```js
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/\s/g,'%20')
};
```

时间复杂度:O(n) 

空间复杂度:O(1)



`从后向前遍历法`

```js
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    if(!s){return ""}
    s=s.split('')
    let originLength=s.length
    let newLength=originLength
    s.length=newLength
    //获取新的字符串长度
    for(item of s){
        if(item===' '){
            newLength+=2
        }
    }
        let left=originLength-1
        let right=newLength-1

    //从后向前遍历
    while(left>=0){
        if(s[left]!==' '){
            s[right]=s[left];
            right--;
            left--;
        }else{
            s[right--]='0'
            s[right--]='2'
            s[right--]='%'
            left--;
        }
    }
    return s.join('')
};
```

时间复杂度:O(n) 

空间复杂度:O(n)

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」剑指Offer-05替代空格⚡️`就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。

