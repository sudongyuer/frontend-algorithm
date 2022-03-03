# 「LeetCode」20-有效的括号⚡️

![Untitled---Made-with-DesignCap---2022-03-03T213809](https://cdn.jsdelivr.net/gh/sudongyuer/image-bed@master/20220303/Untitled---Made-with-DesignCap---2022-03-03T213809.3bbluhjlw760.webp)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲<br/>
> 欢迎小伙伴们加我`微信`：`sudongyuer`拉你进群<br/>
> 关注我的`公众号`:`前端速冻鱼`一起进步，期待与大家共同成长🥂

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」。 

编写指令的好坏，会直接影响到程序的性能优劣，而指令又由数据结构和算法组成，所以**数据结构和算法的设计基本上决定了最终程序的好坏**。

# 题目🦀

#### [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

难度`简单`

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

 

**示例 1：**

```
输入：s = "()"
输出：true
```

**示例 2：**

```
输入：s = "()[]{}"
输出：true
```

**示例 3：**

```
输入：s = "(]"
输出：false
```

**示例 4：**

```
输入：s = "([)]"
输出：false
```

**示例 5：**

```
输入：s = "{[]}"
输出：true
```

 

**提示：**

- `1 <= s.length <= 104`
- `s` 仅由括号 `'()[]{}'` 组成

# 解题思路🌵

- 利用栈来求解
- 左括号入栈
- 右括号弹栈

# 解题步骤🐂

- 处理边缘case

- 用数组模拟栈
- 用map先存储括号的一些标识符
- 遍历字符串
- 左括号入栈
- 右括号弹栈
- 如果栈的长度还有剩余，则不是有效括号

# 源码🔥

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 if(s.length%2!==0){
        return false;
    }
    const stack = [];
    const map=new Map()
    map.set('(',')');
    map.set('{','}');
    map.set('[',']');

    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (map.has(c)) {
        stack.push(c);
      } else {
        const t = stack[stack.length - 1];
        if (map.get(t)===c){
            stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0
};
```

时间复杂度:O(n) 

空间复杂度:O(1) 

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」20-有效的括号⚡️ `就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。