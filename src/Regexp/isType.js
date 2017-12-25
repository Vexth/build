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

module.exports = {
    isArray,
    isJSON,
    isFunction,
    isString,
    isNumber,
    isUndefined,
    isNull
};