/**
 * 
 * @desc   取出字符串中所有的空格， 第二个参数为：g
 * @param  {String} str 
 * @param  {String} is_global 
 * @return {String}
 */
function Trim(str, is_global) {
    let result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
}

module.exports = Trim;

