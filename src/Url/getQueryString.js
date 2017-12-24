/**
 * 
 * @desc   根据url中参数name获取其参数
 * @param  {String} name 
 * @return {String}
 */

function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if( r != null) {
        return unescape(r[2]); 
    }
    return null;
}

module.exports = getQueryString;