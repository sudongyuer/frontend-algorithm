# 「leetCode」17-电话号码的字母组合⚡️

![Untitled - Made with DesignCap - 2022-04-17T145837.222](https://tva1.sinaimg.cn/large/e6c9d24egy1h1ctt6s985j21hc0u0n1g.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲，是隔壁寒草🌿的好兄弟，刚开始写文章。
> 如果喜欢我的文章，可以关注➕点赞，为我注入能量，与我一同成长吧～

# 题目🦀

#### [17. 电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

难度中等

给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。答案可以按 **任意顺序** 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/11/09/200px-telephone-keypad2svg.png)

 

**示例 1：**

```
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

**示例 2：**

```
输入：digits = ""
输出：[]
```

**示例 3：**

```
输入：digits = "2"
输出：["a","b","c"]
```

 

**提示：**

- `0 <= digits.length <= 4`
- `digits[i]` 是范围 `['2', '9']` 的一个数字。

# 解题思路🌵

- 此题采用回溯算法求解

```js
//一般回溯公式如下
//遍历确定起点
backTrack(xxx,xxx,[])
function backTrack(path){
  //退出条件
  //标记
  backTrack(path)
  //撤回标记
}
```

# 解题步骤🌟

- 根据题意写好map
- 处理边缘case
- 书写backTrack函数
- 确定backTrack入参(当前第几个digit)
- 处理backTrack的退出条件
- 标记
- 循环backTrack
- 撤销标记
- 最后返回结果

# 源码🔥

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits){
        return []
    }
    const result=[]
  
    const map={
        2:["a","b","c"],
        3:["d","e","f"],
        4:["g","h","i"],
        5:["j","k","l"],
        6:["m","n","o"],
        7:["p","q","r","s"],
        8:["t","u","v"],
        9:["w","x","y","z"],
    }

    if(digits.length===1){
        return map[digits[0]]    
    }

    const len = digits.length
    let path = []
    //遍历
    function backTrack(index){
        //终止条件
        if(path.length===len){
           return result.push(path.join(''))
        }
        //标记
        for(const char of map[digits[index]]){
            path.push(char)
            //backTrack
            backTrack(index+1)
            //撤回标记
            path.pop()
        }
    }
    backTrack(0)

    return result
};
```

时间复杂度:O(n)

空间复杂度:O(1)

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「leetCode」17-电话号码的字母组合⚡️`就结束了，虽然前端对算法要求没有后端高，但是算法是编程基础，`程序=数据结构➕算法`，所以算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。

