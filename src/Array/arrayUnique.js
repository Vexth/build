const isFilter = require('./isFilter')()
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

module.exports = arrayUnique;