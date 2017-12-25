function isPrototype(data) {
	return Object.prototype.toString.call(data).toLowerCase();
};

/**
 * 
 * @desc   判断是否为Array
 * @param  { }  data
 * @return {String} 
 */
function isArray(data) {
	return isPrototype(data) === '[object array]';
}

/**
 * 
 * @desc   判断是否为Array
 * @param  { }  data
 * @return {String} 
 */
function isJSON(data) {
	return isPrototype(data) === '[object object]';
}
/**
 * 
 * @desc   判断是否为Function
 * @param  { }  data
 * @return {String} 
 */
function isFunction(data) {
	return isPrototype(data) === '[object function]';
}
/**
 * 
 * @desc   判断是否为String
 * @param  { }  data
 * @return {String} 
 */
function isString(data) {
	return isPrototype(data) === '[object string]';
}
/**
 * 
 * @desc   判断是否为Number
 * @param  { }  data
 * @return {String} 
 */
function isNumber(data) {
	return isPrototype(data) === '[object number]';
}
/**
 * 
 * @desc   判断是否为Undefined
 * @param  { }  data
 * @return {String} 
 */
function isUndefined(data) {
	return isPrototype(data) === '[object undefined]';
}
/**
 * 
 * @desc   判断是否为Null
 * @param  { }  data
 * @return {String} 
 */
function isNull(data) {
	return isPrototype(data) === '[object null]';
}

module.exports = {
    isArray,
    isJSON,
    isFunction,
    isString,
    isNumber,
    isUndefined,
    isNull
};