/**
 * 
 * @desc   判断属性
 * @param  { }  data
 * @return {String} 
 */

isPrototype(data) => Object.prototype.toString.call(data).toLowerCase();

/**
 * 
 * @desc   判断是否为Array
 * @param  { }  data
 * @return {String} 
 */
isArray(data) => isPrototype(data) === '[object array]';

/**
 * 
 * @desc   判断是否为Array
 * @param  { }  data
 * @return {String} 
 */
isJSON(data) => isPrototype(data) === '[object object]';

/**
 * 
 * @desc   判断是否为Function
 * @param  { }  data
 * @return {String} 
 */
isFunction(data) => isPrototype(data) === '[object function]';

/**
 * 
 * @desc   判断是否为String
 * @param  { }  data
 * @return {String} 
 */
isString(data) => isPrototype(data) === '[object string]';

/**
 * 
 * @desc   判断是否为Number
 * @param  { }  data
 * @return {String} 
 */
isNumber(data) => isPrototype(data) === '[object number]';

/**
 * 
 * @desc   判断是否为Undefined
 * @param  { }  data
 * @return {String} 
 */
isUndefined(data) => isPrototype(data) === '[object undefined]';

/**
 * 
 * @desc   判断是否为Null
 * @param  { }  data
 * @return {String} 
 */
isNull(data) => isPrototype(data) === '[object null]';


module.exports = {
    isArray,
    isJSON,
    isFunction,
    isString,
    isNumber,
    isUndefined,
    isNull
};