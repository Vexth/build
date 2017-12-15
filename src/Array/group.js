/**
 * 
 * @desc 根据个数分割数组，并转化成多个数组
 * @param {Array} array 
 * @param {number} subGroupLength 
 * @return {array}
 */
function group(array, subGroupLength) {
    
    let index = 0;
    let newArray = [];

    while (index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }

    return newArray;
}