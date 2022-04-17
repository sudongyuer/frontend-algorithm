# 「LeetCode」39-组合总和⚡️

![Untitled - Made with DesignCap - 2022-04-17T162216.255](https://tva1.sinaimg.cn/large/e6c9d24egy1h1cttpkr2dj21hc0u0wic.jpg)

> 大家好，我是速冻鱼🐟，一条水系前端💦，喜欢花里胡哨💐，持续沙雕🌲，是隔壁寒草🌿的好兄弟，刚开始写文章。
> 如果喜欢我的文章，可以关注➕点赞，为我注入能量，与我一同成长吧～

# 前言🌧️

算法，对前端人来说陌生又熟悉，很多时候我们都不会像后端工程师一样重视这项能力。但事实上，算法对每一个程序员来说，都有着不可撼动的地位。

因为开发的过程就是把实际问题转换成计算机可识别的指令，也就是《数据结构》里说的，「**设计出数据结构，在施加以算法就行了**」。 

编写指令的好坏，会直接影响到程序的性能优劣，而指令又由数据结构和算法组成，所以**数据结构和算法的设计基本上决定了最终程序的好坏**。

# 题目🦀

[65. 有效数字](https://leetcode-cn.com/problems/valid-number/)

难度`困难`

**有效数字**（按顺序）可以分成以下几个部分：

1. 一个 **小数** 或者 **整数**
2. （可选）一个 `'e'` 或 `'E'` ，后面跟着一个 **整数**

**小数**（按顺序）可以分成以下几个部分：

1. （可选）一个符号字符（`'+'` 或 `'-'`）
2. 下述格式之一：
   1. 至少一位数字，后面跟着一个点 `'.'`
   2. 至少一位数字，后面跟着一个点 `'.'` ，后面再跟着至少一位数字
   3. 一个点 `'.'` ，后面跟着至少一位数字

**整数**（按顺序）可以分成以下几个部分：

1. （可选）一个符号字符（`'+'` 或 `'-'`）
2. 至少一位数字

部分有效数字列举如下：

- `["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]`

部分无效数字列举如下：

- `["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]`

给你一个字符串 `s` ，如果 `s` 是一个 **有效数字** ，请返回 `true` 。

 

**示例 1：**

```
输入：s = "0"
输出：true
```

**示例 2：**

```
输入：s = "e"
输出：false
```

**示例 3：**

```
输入：s = "."
输出：false
```

**示例 4：**

```
输入：s = ".1"
输出：true
```

 

**提示：**

- `1 <= s.length <= 20`
- `s` 仅含英文字母（大写和小写），数字（`0-9`），加号 `'+'` ，减号 `'-'` ，或者点 `'.'` 。

# 解题思路🌵

- 此题采用回溯算法即可

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



# 解题步骤🐂

- 先排序，降低后边的时间复杂度

- 初始化path

- 初始化result

- 编写backTrack函数，确定入参，为sum和现在candidates所在index

- 确定backTrack减枝条件

  ```js
  if(sum>target){
     return
  }
  if(sum===target){
     result.push([...path])
     return
  }
  
  ```

- 循环backTrack

- 利用排好序的优势 

当前值+sum大于target时直接return不必进行后续的遍历

```js
if(candidates[i]+sum>target){
	return
}
```

- ⚠️注意for循环的其实下标为backTrack传入的index

# 源码🔥

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //先排序,降低复杂度
    candidates.sort((a,b)=>a-b)
    let path = []
    let result = []
    const backTrack = (index,sum)=>{
        if(sum>target){
            return
        }
        if(sum===target){
            result.push([...path])
            return
        }
        for(let i=index;i<candidates.length;i++){  
            if(candidates[i]+sum>target){
                return
            }
            path.push(candidates[i])
            sum+=candidates[i]
            //backTrack
            backTrack(i,sum)
            sum-=candidates[i]
            path.pop()
        }
    }

    backTrack(0,0)

    return result

};
```

时间复杂度:O(nlogn) 

空间复杂度:O(1)

# 结束语🌞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fba1cd45ab394a5da2c93dec288246be~tplv-k3u1fbpfcp-zoom-1.image)

那么鱼鱼的LeetCode算法篇的`「LeetCode」39-组合总和⚡️`就结束了，算法这个东西没有捷径，只能多写多练，多总结，文章的目的其实很简单，就是督促自己去完成算法练习并总结和输出，**菜不菜不重要，但是热爱**🔥，喜欢大家能够喜欢我的短文，也希望通过文章认识更多志同道合的朋友，如果你也喜欢`折腾`，欢迎加我`好友`，一起`沙雕`，一起`进步`。

github🤖:[sudongyu](https://github.com/sudongyuer/)

个人博客👨‍💻:[速冻鱼blog](https://sudongyuer.github.io/)

vx👦:sudongyuer

`写在最后`

伙伴们，如果喜欢我的`口水话`给🐟🐟点一个赞👍或者关注➕都是对我最大的支持。
