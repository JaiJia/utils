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

//  mini ajax
$.ajax = function ajax(url, options) {
    var type = options.type.toUpperCase();
    var data = options.data;
    var dataResult;
    var req = window.XMLHttpRequest ? new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');
    req.open(type || "GET", url);

    if (typeof data === "object") {
        var str = "";
        for (var i in data) {
            str += i + "=" + data[i] + "&";
        }
        dataResult = str.substr(0, str.length - 1);
    }

    if (type === "GET") {
        req.send(null);
    } else if (type === "POST") {
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send(dataResult);
    }
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                if (options.onsuccess) {}
                options.onsuccess(req.responseText, req.responseXML);
            } else {
                if (options.onfail) {
                    optionss.onfail();
                }
            }
        }
    };
};


// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    var s = navigator.userAgent.toLowerCase();
    console.log(s);
    //ie10的信息：
    //mozilla/5.0 (compatible; msie 10.0; windows nt 6.2; trident/6.0)
    //ie11的信息：
    //mozilla/5.0 (windows nt 6.1; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.2; rv:11.0) like gecko
    var ie = s.match(/rv:([\d.]+)/) || s.match(/msie ([\d.]+)/);
    if (ie) {
        return ie[1];
    } else {
        return -1;
    }
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var cookie = cookieName + "=" + encodeURIComponent(cookieValue);
    if (typeof expiredays === "number") {
        cookie += ";max-age=" + (expiredays * 60 * 60 * 24);
    }
    document.cookie = cookie;
}

// 获取cookie值
function getCookie(cookieName) {
    var cookie = {};
    var all = document.cookie;
    if (all === "") {
        return cookie;
    }
    var list = all.split("; ");
    for (var i = 0; i < list.length; i++) {
        var p = list[i].indexOf("=");
        var name = list[i].substr(0, p);
        var value = list[i].substr(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
}


// 实现一个mini $，它和之前的$是不兼容的
function $(selector) {
    if (!selector) { return null; }
    selector = selector.trim();
    var arr = selector.split(" ");
    var len = arr.length;
    var i;
    item = arguments[1] || document;
    if (len > 1) {
        for (i = 0; i < $(arr[i]).length; i++) {
            // 递归解析 ".fir #sec thi []"
            return ($(arr.slice(1).toString(), $(arr[0])[i]));
        }
    } else {
        switch (selector[0]) {
            case ".":
                {
                    return item.getElementsByClassName(selector.slice(1));
                }
            case "#":
                {
                    return item.getElementById(selector.slice(1));
                }
            case "[":
                {
                    if (/^\[[A-Za-z0-9_-\S]+\]$/.test(selector)) {
                        selector = selector.slice(1, selector.length - 1);
                        selector = selector.split("=");
                        var eles = item.getElementsByTagName("*");
                        var att = selector[0];
                        var val = selector[1];
                        if (val) {
                            for (i = 0; i < eles.length; i++) {
                                if (eles[i].getAttribute(att) === val) {
                                    return eles[i];
                                }
                            }
                        } else {
                            for (i = 0; i < eles.length; i++) {
                                if (eles[i].getAttribute(att)) {
                                    return eles[i];
                                }
                            }
                        }
                    }
                    break;
                }
            default:
                {
                    return item.getElementsByTagName(selector);
                }
        }
    }
}
