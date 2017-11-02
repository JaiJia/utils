/*jshint esversion: 6 */



// 异步文件上传组件 只支持单文件上传
/*
   obj: {
        url: "www.xxx.com",
        file: $(button),
        filename: "file",
        success: function(data) {
            ...
        }
    }
*/
function fileupload(obj) {
    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var url = obj.url;
    var formdata = new FormData();
    formdata.append(obj.filename, this.file);
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                obj.success();
            }
        }
    };
    req.open("POST", obj.url);
    req.send(formdata);
}

// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    if (Array.isArray) {
        return Array.isArray(arr);
    } else {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
        return Array.isArray(arr);
    }
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function deepClone(obj) {
    if (typeof obj !== "object" && typeof obj !== 'function') {
        return obj; //原始类型直接返回
    }
    var o = isArray(obj) ? [] : {};
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
        }
    }
    return o;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    if (new Set()) {
        return [...new Set(arr)];
    } else {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (res.indexOf(arr[i]) == -1) {
                res[res.length] = arr[i];
            }
        }
        return res;
    }
}

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    return str.replace(/\s+/g, "");
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    arr.forEach(fn);
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var n = 0;
    for (var i in obj) {
        n++;
    }
    return n;
}
// 邮箱验证
function isEmail(str) {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    return reg.test(str);
}

