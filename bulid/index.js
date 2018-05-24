// (function () {
    /** Array **/
    if (!Array.prototype.filter) {
        console.log("关爱码农，远离IE","color:red")
        Array.prototype.filter = function(fun /* , thisArg*/) {
            "use strict";

            if (this === void 0 || this === null)
                throw new TypeError();

            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fun !== "function")
                throw new TypeError();

            var res = [];
            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < len; i++) {
                if (i in t) {
                    var val = t[i];

                    // NOTE: Technically this should Object.defineProperty at
                    //       the next index, as push can be affected by
                    //       properties on Object.prototype and Array.prototype.
                    //       But that method's new, and collisions should be
                    //       rare, so use the more-compatible alternative.
                    if (fun.call(thisArg, val, i, t))
                        res.push(val);
                }
            }

            return res;
        };
    }
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback, thisArg) {
            var T, k;
            if (this == null) {
                throw new TypeError(' this is null or not defined');
            }

            var O = Object(this);
            var len = O.length >>> 0;
            if (typeof callback !== "function") {
                throw new TypeError(callback + ' is not a function');
            }
            if (arguments.length > 1) {
                T = thisArg;
            }
            k = 0;
            while (k < len) {
                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        };
    }
    if (!Array.prototype.map) {
        Array.prototype.map = function(callback, thisArg) {
            var T, A, k;
            if (this == null) {
                throw new TypeError(" this is null or not defined");
            }

            var O = Object(this);
            var len = O.length >>> 0;
            if (Object.prototype.toString.call(callback) != "[object Function]") {
                throw new TypeError(callback + " is not a function");
            }
            if (thisArg) {
                T = thisArg;
            }

            A = new Array(len);
            k = 0;

            while(k < len) {
                var kValue, mappedValue;
                if (k in O) {
                    kValue = O[ k ];
                    mappedValue = callback.call(T, kValue, k, O);
                    A[k] = mappedValue;
                }
                k++;
            }
            return A;
        };
    }
    /**
     * 
     * @desc 判断两个数组是否相等
     * @param {Array} arr1 
     * @param {Array} arr2 
     * @return {Boolean}
     */
    function arrayEqual(arr1, arr2) {
        if (arr1 === arr2) return true;
        if (arr1.length != arr2.length) return false;
        for (var i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    /**
     * 
     * @desc 数组去重
     * @param {Array} array 
     * @return {array}
     */
    function arrayUnique(array) {
        var obj = {};
        return array.filter(function(item, index, array) {
            return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true);
        })
    }

    /**
     * 
     * @desc 根据个数分割数组，并转化成多个数组
     * @param {Array} array 
     * @param {number} subGroupLength 
     * @return {array}
     */
    function group(array, subGroupLength) {
        
        var index = 0;
        var newArray = [];

        while (index < array.length) {
            newArray.push(array.slice(index, index += subGroupLength));
        }

        return newArray;
    }

    /** Class **/
    /**
     * 
     * @desc 判断元素是否有某个class
     * @param {HTMLElement} ele 
     * @param {String} cls 
     * @return {Boolean}
     */
    function hasClass(ele, cls) {
        return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
    }
    /**
     * 
     * @desc   为元素添加class
     * @param  {HTMLElement} ele 
     * @param  {String} cls 
     */
    function addClass(ele, cls) {
        if (!hasClass(ele, cls)) {
            ele.className += ' ' + cls;
        }
    }
    /**
     * 
     * @desc 为元素移除class
     * @param {HTMLElement} ele 
     * @param {String} cls 
     */
    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }

    /** Cookie */
    /**
     * 
     * @desc 根据name读取cookie
     * @param  {String} name 
     * @return {String}
     */
    function getCookie(name) {
        var arr = document.cookie.replace(/\s/g, "").split(';');
        for (var i = 0; i < arr.length; i++) {
            var tempArr = arr[i].split('=');
            if (tempArr[0] == name) {
                return decodeURIComponent(tempArr[1]);
            }
        }
        return '';
    }
    /**
     * 
     * @desc  设置Cookie
     * @param {String} name 
     * @param {String} value 
     * @param {Number} days 
     */
    function setCookie(name, value, days) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        document.cookie = name + '=' + value + ';expires=' + date;
    }
    /**
     * 
     * @desc 根据name删除cookie
     * @param  {String} name 
     */
    function removeCookie(name) {
        // 设置已过期，系统会立刻删除cookie
        setCookie(name, '1', -1);
    }
    /** Device */
    /**
     * 
     * @desc 获取浏览器类型和版本
     * @return {String} 
     */
    function getExplore() {
        var sys = {},
            ua = navigator.userAgent.toLowerCase(),
            s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
            (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
            (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
            (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
            (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
        // 根据关系进行判断
        if (sys.ie) return ('IE: ' + sys.ie)
        if (sys.edge) return ('EDGE: ' + sys.edge)
        if (sys.firefox) return ('Firefox: ' + sys.firefox)
        if (sys.chrome) return ('Chrome: ' + sys.chrome)
        if (sys.opera) return ('Opera: ' + sys.opera)
        if (sys.safari) return ('Safari: ' + sys.safari)
        return 'Unkonwn'
    }
    /**
     * 
     * @desc 获取操作系统类型
     * @return {String} 
     */
    function getOS() {
        var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
        var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
        var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
        if (/mac/i.test(appVersion)) return 'MacOSX';
        if (/win/i.test(appVersion)) return 'windows';
        if (/linux/i.test(appVersion)) return 'linux';
        if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
        if (/android/i.test(userAgent)) return 'android';
        if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';
    }
    /** Dom **/
    /**
     * 
     * @desc 获取滚动条距顶部的距离
     */
    function getScrollTop() {
        return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    }

    /**
     * 
     * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
     * @param {HTMLElement} ele 
     * @returns { {left: number, top: number} }
     */
    function offset(ele) {
        var pos = {
            left: 0,
            top: 0
        };
        while (ele) {
            pos.left += ele.offsetLeft;
            pos.top += ele.offsetTop;
            ele = ele.offsetParent;
        };
        return pos;
    }

    /** Object **/
    /**
     * 
     * @desc   判断`obj`是否为空
     * @param  {Object} obj
     * @return {Boolean}
     */
    function isEmptyObject(obj) {
        if (!obj || typeof obj !== 'object' || Array.isArray(obj))
            return false
        return !Object.keys(obj).length
    }
    /**
     * @desc 深拷贝，支持常见类型
     * @param {Any} values
     */
    function deepClone(values) {
        var copy;
        // Handle the 3 simple types, and null or undefined
        if (null == values || "object" != typeof values) return values;
        // Handle Date
        if (values instanceof Date) {
            copy = new Date();
            copy.setTime(values.getTime());
            return copy;
        }
        // Handle Array
        if (values instanceof Array) {
            copy = [];
            for (var i = 0, len = values.length; i < len; i++) {
                copy[i] = deepClone(values[i]);
            }
            return copy;
        }
        // Handle Object
        if (values instanceof Object) {
            copy = {};
            for (var attr in values) {
                if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
            }
            return copy;
        }
        throw new Error("Unable to copy values! Its type isn't supported.");
    }

    /** Regexp **/
    /**
     * 
     * @desc   判断是否为邮箱地址
     * @param  {String}  str
     * @return {Boolean} 
     */
    function isEmail(str) {
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
    }
    /**
     * 
     * @desc  判断是否为身份证号
     * @param  {String|Number} str 
     * @return {Boolean}
     */
    function isIdCard(str) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
    }
    /**
     * 
     * isNative 查看浏览器的对于API的支持 ---  例如对于ES6新方法的支持
     */
    function isNative(api) {
        return /native code/.test(api.toString()) && typeof api !== 'undefined'
    }
    /**
     * 
     * @desc   判断是否为手机号
     * @param  {String|Number} str 
     * @return {Boolean} 
     */
    function isPhoneNum(str) {
        return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
    }
    function isPrototype(data) {
        return Object.prototype.toString.call(data).toLowerCase();
    };
    /**
     * 
     * @desc   判断是否为Array
     * @param  {any}  data
     * @return {Boolean} 
     */
    function isArray(data) {
        return isPrototype(data) === '[object array]';
    }

    /**
     * 
     * @desc   判断是否为Array
     * @param  {any}  data
     * @return {Boolean} 
     */
    function isJSON(data) {
        return isPrototype(data) === '[object object]';
    }
    /**
     * 
     * @desc   判断是否为Function
     * @param  {any}  data
     * @return {Boolean} 
     */
    function isFunction(data) {
        return isPrototype(data) === '[object function]';
    }
    /**
     * 
     * @desc   判断是否为String
     * @param  {any}  data
     * @return {Boolean} 
     */
    function isString(data) {
        return isPrototype(data) === '[object string]';
    }
    /**
     * 
     * @desc   判断是否为Number
     * @param  {any}  data
     * @return {Boolean} 
     */
    function isNumber(data) {
        return isPrototype(data) === '[object number]';
    }
    /**
     * 
     * @desc   判断是否为Undefined
     * @param  {any}  data
     * @return {Boolean} 
     */
    function isUndefined(data) {
        return isPrototype(data) === '[object undefined]';
    }
    /**
     * 
     * @desc   判断是否为Null
     * @param  {any}  data
     * @return {Boolean} 
     */
    function isNull(data) {
        return isPrototype(data) === '[object null]';
    }
    /**
     * 
     * @desc   判断是否为URL地址
     * @param  {String} str 
     * @return {Boolean}
     */
    function isUrl(str) {
        return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
    }
    /**
     * 
     * @desc   取出字符串中所有的空格， 第二个参数为：g
     * @param  {String} str 
     * @param  {String} is_global 
     * @return {String}
     */
    function Trim(str, is_global) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g, "");
        if (is_global.toLowerCase() == "g") {
            result = result.replace(/\s/g, "");
        }
        return result;
    }
    /**
     * 
     * @desc 判断浏览器是否支持webP格式图片
     * @return {Boolean} 
     */
    function isSupportWebP() {
        return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    /**
     * 
     * @desc   对象序列化
     * @param  {Object} obj 
     * @return {String}
     */
    function stringfyQueryString(obj) {
        if (!obj) return '';
        var pairs = [];
        for (var key in obj) {
            var value = obj[key];
            if (value instanceof Array) {
                for (var i = 0; i < value.length; ++i) {
                    pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                }
                continue;
            }
            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return pairs.join('&');
    }
    // 判断浏览器是否支持Promise方法，如果不支持就添加Promise方法
    // if (!isNative(Promise)) {
    //     // resolve 和 reject 最终都会调用该函数
    //     function init(status, value) {
    //         var promise = this, fn, st;

    //         if(promise._status !== 'PENDING') return;

    //         // 所以的执行都是异步调用，保证then是先执行的
    //         setTimeout(function () {
    //             promise._status = status;
    //             st = promise._status === 'FULFILLED'
    //             queue = promise[st ? '_resolves' : '_rejects'];
    //             while(fn = queue.shift()) {
    //                 value = fn.call(promise, value) || value;
    //             }
    //             promise[st ? '_value' : '_reason'] = value;
    //             promise['_resolves'] = promise['_rejects'] = undefined;

    //         }, 0);

    //     };
    //     //参数是一个函数，内部提供两个函数作为该函数的参数,分别是resolve 和 reject
    //     function PromiseVexth(fn) {

    //         if (!(typeof fn === 'function' ))
    //             throw new TypeError('You must pass a fn function as the first argument to the promise constructor');

    //         // 如果不是promise实例，就new一个
    //         if(!(this instanceof PromiseVexth)) return new PromiseVexth(fn);

    //         var promise = this;
    //         promise._value;
    //         promise._reason;
    //         promise._status = 'PENDING';

    //         //存储状态
    //         promise._resolves = [];
    //         promise._rejects = [];

    //         var resolve = function (value) {
    //             init.apply(promise, ['FULFILLED'].concat([value]));
    //         }

    //         var reject = function (reason) {
    //             init.apply(promise, ['REJECTED'].concat([reason]));
    //         }

    //         fn(resolve, reject);
    //     };
    //     PromiseVexth.prototype.then = function (onFulfilled, onRejected) {
    //         var promise = this;

    //         // 每次返回一个promise，保证是可thenable的
    //         return new PromiseVexth(function (resolve, reject) {
    //             function handle(value) {
    //                 // 将值传递给下一个resolve
    //                 var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;

    //                 // 判断是不是promise 对象
    //                 if (ret && typeof ret ['then'] == 'function') {
    //                     ret.then(function (value) {
    //                         resolve(value);
    //                     }, function (reason) {
    //                         reject(reason);
    //                     });
    //                 } else {
    //                     resolve(ret);
    //                 }
    //             }

    //             function errback (reason){
    //                 reason = typeof onRejected === 'function' && onRejected(reason) || reason;
    //                 reject(reason);
    //             }

    //             if (promise._status === 'PENDING') {
    //                 promise._resolves.push(handle);
    //                 promise._rejects.push(errback);
    //             } else if (promise._status === 'FULFILLED') { // 状态改变后的then操作，立刻执行
    //                 callback(promise._value);
    //             } else if (promise._status === 'REJECTED') {
    //                 errback(promise._reason);
    //             }
    //         });
    //     };
    //     PromiseVexth.prototype.catch = function (onRejected) {
    //         return this.then(undefined, onRejected);
    //     };
    //     PromiseVexth.prototype.delay = function (ms, value) {
    //         return this.then(function (ori) {
    //             return PromiseVexth.delay(ms, value || ori);
    //         })
    //     };
    //     PromiseVexth.delay = function (ms, value) {
    //         return new PromiseVexth(function (resolve, reject) {
    //             setTimeout(function () {
    //                 resolve(value);
    //             }, ms);
    //         })
    //     };
    //     PromiseVexth.resolve = function (arg) {
    //         return new PromiseVexth(function (resolve, reject) {
    //             resolve(arg);
    //         })
    //     };
    //     PromiseVexth.reject = function (arg) {
    //         return PromiseVexth(function (resolve, reject) {
    //             reject(arg);
    //         })
    //     };
    //     PromiseVexth.all = function (promises) {
    //         if (!Array.isArray(promises)) {
    //             throw new TypeError('You must pass an array to all.');
    //         }
    //         return new PromiseVexth(function(resolve,reject){
    //             var i = 0,
    //                 result = [],
    //                 len = promises.length,
    //                 count = len;
    //             //这里与race中的函数相比，多了一层嵌套，要传入index
    //             function resolver(index) {
    //                 return function(value) {
    //                     resolveAll(index, value);
    //                 };
    //             }
    //             function rejecter(reason){
    //                 reject(reason);
    //             }
    //             function resolveAll(index,value){
    //                 result[index] = value;
    //                 if( --count == 0){
    //                     resolve(result);
    //                 }
    //             }
    //             for (; i < len; i++) {
    //                 promises[i].then(resolver(i), rejecter);
    //             }
    //         });
    //     };
    //     PromiseVexth.race = function (promises) {
    //         if (!Array.isArray(promises)) {
    //             throw new TypeError('You must pass an array to race.');
    //         }
    //         return PromiseVexth(function (resolve, reject) {
    //             var i = 0,
    //                 len = promises.length;
    //             function resolver (value) {
    //                 resolve(value);
    //             }
    //             function rejecter (reason) {
    //                 reject(reason);
    //             }

    //             for (; i < len; i++) {
    //                 promises[i].then(resolver, rejecter);
    //             }
    //         });
    //     };
    // }
// })()