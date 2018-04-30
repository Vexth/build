/**
 * 
 * isNative 查看浏览器的对于API的支持 ---  例如对于ES6新方法的支持
 */

function isNative(api) {
    return /native code/.test(api.toString()) && typeof api !== 'undefined'
}

module.exports = isNative;