# build

- 您的`star`是我最大的动力，欢迎`star`😆😆😆😆😆

在html文件里调用方式
```html
<script src="bulid.min.js"></script>
<script>
	var os = Vexth.getOS();
	console.log(os);
</script>
```

对于API调用的说明：

**Array**

- [arrayEqual](https://github.com/Vexth/build/blob/master/src/Array/arrayEqual.js)：判断两个数组是否相等

- [group](https://github.com/Vexth/build/blob/master/src/Array/group.js)：根据个数分割数组，并转化成多个数组

- [isFilter](https://github.com/Vexth/build/blob/master/src/Array/isFilter.js)：让IE9以下的浏览器兼容Array.prototype.filter方法

- [arrayUnique](https://github.com/Vexth/build/blob/master/src/Array/arrayUnique.js)：数组去重

**Class**

- [hasClass](https://github.com/Vexth/build/blob/master/src/Class/hasClass.js)：判断元素是否有某个class

- [addClass](https://github.com/Vexth/build/blob/master/src/Class/addClass.js)：为元素添加class

- [removeClass](https://github.com/Vexth/build/blob/master/src/Class/removeClass.js)：为元素移除class

**Cookie**

- [setCookie](https://github.com/Vexth/build/blob/master/src/Cookie/setCookie.js)：设置Cookie

- [getCookie](https://github.com/Vexth/build/blob/master/src/Cookie/getCookie.js)：根据name读取cookie

- [removeCookie](https://github.com/Vexth/build/blob/master/src/Cookie/removeCookie.js)：根据name删除cookie

**Device**

- [getExplore](https://github.com/Vexth/build/blob/master/src/Device/getExplore.js)：获取浏览器类型和版本

- [getOS](https://github.com/Vexth/build/blob/master/src/Device/getOS.js)：获取操作系统类型

**Dom**

- [getScrollTop](https://github.com/Vexth/build/blob/master/src/Dom/getScrollTop.js)：获取滚动条距顶部的距离

- [offset](https://github.com/Vexth/build/blob/master/src/Dom/offset.js)：获取一个元素的距离文档```(document)```的位置，类似```jQ```中的```offset()```

- [scrollTo](https://github.com/Vexth/build/blob/master/src/Dom/scrollTo.js)：在```${duration}```时间内，滚动条平滑滚动到```${to}```指定位置

- [setScrollTop](https://github.com/Vexth/build/blob/master/src/Dom/setScrollTop.js)：设置滚动条距顶部的距离

- [windowResize](https://github.com/Vexth/build/blob/master/src/Dom/windowResize.js)：H5软键盘缩回、弹起回调 当软件键盘弹起会改变当前 ```window.innerHeight```，监听这个值变化

**Function**

- [debounce](https://github.com/Vexth/build/blob/master/src/Function/debounce.js)：函数防抖 

- [throttle](https://github.com/Vexth/build/blob/master/src/Function/throttle.js)：函数节流

**Keycode**

- [getKeyName](https://github.com/Vexth/build/blob/master/src/Keycode/getKeyName.js)：根据keycode获得键名

**Object**

- [deepClone](https://github.com/Vexth/build/blob/master/src/Object/deepClone.js)：深拷贝，支持常见类型

- [isEmptyObject](https://github.com/Vexth/build/blob/master/src/Object/isEmptyObject.js)：判断`obj`是否为空

**Random**

- [randomColor](https://github.com/Vexth/build/blob/master/src/Random/randomColor.js)：随机生成颜色

- [randomNum](https://github.com/Vexth/build/blob/master/src/Random/randomNum.js)：生成指定范围```[min, max]```的随机数

**Regexp**

- [isEmail](https://github.com/Vexth/build/blob/master/src/Regexp/isEmail.js)：判断是否为邮箱地址

- [isIdCard](https://github.com/Vexth/build/blob/master/src/Regexp/isIdCard.js)：判断是否为身份证号

- [isPhoneNum](https://github.com/Vexth/build/blob/master/src/Regexp/isPhoneNum.js)：判断是否为手机号

- [isUrl](https://github.com/Vexth/build/blob/master/src/Regexp/isUrl.js)：判断是否为URL地址

- [isType](https://github.com/Vexth/build/blob/master/src/Regexp/isType.js): ```isArray```;```isJSON```;```isFunction```;```isString```;```isNumber```;```isUndefined```;```isNull```的判断

- [isNative](https://github.com/Vexth/build/blob/master/src/Regexp/isNative.js)：查看浏览器的对于API的支持

**String**

- [digitUppercase](https://github.com/Vexth/build/blob/master/src/String/digitUppercase.js)：现金额转大写

- [Trim](https://github.com/Vexth/build/blob/master/src/String/Trim.js)：取出字符串中所有的空格， 第二个参数为：```g```

**Support**

- [isSupportWebP](https://github.com/Vexth/build/blob/master/src/Support/isSupportWebP.js)：判断浏览器是否支持webP格式图片

**Time**

- [formatDate](https://github.com/Vexth/build/blob/master/src/Time/formatDate.js)：时间戳转换成年月日时分秒

- [formatPassTime](https://github.com/Vexth/build/blob/master/src/Time/formatPassTime.js)：格式化```${startTime}```距现在的已过时间

- [formatRemainTime](https://github.com/Vexth/build/blob/master/src/Time/formatRemainTime.js)：格式化现在距```${endTime}```的剩余时间

- [isSameDay](https://github.com/Vexth/build/blob/master/src/Time/isSameDay.js)：判断是否为同一天

**Url**

- [getQueryString](https://github.com/Vexth/build/blob/master/src/Url/getQueryString.js)：根据url中name获取其参数

- [parseQueryString](https://github.com/Vexth/build/blob/master/src/Url/parseQueryString.js)：url参数转对象

- [stringfyQueryString](https://github.com/Vexth/build/blob/master/src/Url/stringfyQueryString.js)：对象序列化

**Promise**

- [isPromise](https://github.com/Vexth/build/blob/master/src/Promise/Promise.js)：给不支持``Promise``的浏览器增加此方法

# 说明

- 目前浏览器直接使用的还没有打包生成
