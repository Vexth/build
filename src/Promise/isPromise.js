const isNative = require('../Regexp/isNative');
const promise = require('./Promise')

module.exports = function () {
    // 判断浏览器是否支持Promise方法，如果不支持就添加Promise方法
    if (!isNative(Promise)) {
        promise
    }
}