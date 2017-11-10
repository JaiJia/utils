# utils
个人代码库

- 完全不兼容IE8及以下
- 不兼容jQuery


Function | Detail
----- | -----
isArray(arr) | 判断arr是否为一个数组，返回一个bool值
toArray(arg) | 类数组转换数组
isFunction(fn) | 判断fn是否为一个函数，返回一个bool值
deepClone(obj) | deepClone(obj)
uniqArray(arr) | 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
trim(str) | 对字符串头尾进行空格字符的去除
each(arr, fn) | 遍历数组的方法，针对数组中每一个元素执行fn函数
getObjectLength(obj) | 获取一个对象里面第一层元素的数量，返回一个整数
isEmail(str) | 邮箱验证
addClass(element, newClassName) | 为element增加一个样式名为newClassName的新样式
removeClass(element, oldClassName) | 移除element中的样式oldClassName
transferClass(parentEle, className, e) | 父元素下后代元素之间转移class
hasClass(element, tarClassName) | 判断元素是否含有目标Class，返回bool
toggleShow(element) | 切换元素显示隐藏
isSiblingNode(element, siblingNode) | 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
enumChildNodes(parentNode) | 返回该元素下所有后代元素
getPosition(element) | 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
$.on(selector, event, listener) | 事件监听
$.un(selector, event, listener) | 解除事件绑定
$.click(selector, listener) | 绑定点击事件
$.enter(selector, listener) | 绑定Enter键点击
$.delegate(selector, tag, event, listener) | 事件代理
