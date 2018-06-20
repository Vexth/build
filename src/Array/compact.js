/**
 * 
 * @param {array} arr
 * 
 * 去除不需要的元素。   使用Array.prototype.filter()过滤掉不需要的元素（null,undefined,"",false,NaN）。
 */

const compact = arr => arr.filter(Boolean);

module.exports = compact;
