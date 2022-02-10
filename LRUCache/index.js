//LRU Cache 如果有新元素加入，
//就是将最近最少使用的元素淘汰，如果之前就存在元素，则更新元素在链表中的位置为最新
// max size 3
// 1=>3=>5
//put 2
//3=>5=>2
//put 3
//5=>2=>3


/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.cache=new Map()
    this.max=capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        const temp = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key,temp)
        return this.cache.get(key)
    }else{
        return -1
    }
  
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.cache.delete(key)
        this.cache.set(key,value)
    }else{
        if(this.cache.size>=this.max){
        //大于最大缓存容量了，就要考虑清除策略
        this.cache.delete(this.cache.keys().next().value)
        this.cache.set(key,value)
        }else{
            this.cache.set(key,value)
        }
    }
  
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */