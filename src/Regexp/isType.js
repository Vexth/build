/*
function isPrototype(data) {
	return Object.prototype.toString.call(data).toLowerCase();
};
*/
/**
 * 
 * @desc   判断是否为Array
 * @param  {any}  data
 * @return {Boolean} 

function isArray(data) {
	return isPrototype(data) === '[object array]';
}


 * 
 * @desc   判断是否为object
 * @param  {any}  data
 * @return {Boolean} 

function isJSON(data) {
	return isPrototype(data) === '[object object]';
}

 * 
 * @desc   判断是否为Function
 * @param  {any}  data
 * @return {Boolean} 

function isFunction(data) {
	return isPrototype(data) === '[object function]';
}

 * 
 * @desc   判断是否为String
 * @param  {any}  data
 * @return {Boolean} 

function isString(data) {
	return isPrototype(data) === '[object string]';
}

 * 
 * @desc   判断是否为Number
 * @param  {any}  data
 * @return {Boolean} 

function isNumber(data) {
	return isPrototype(data) === '[object number]';
}

 * 
 * @desc   判断是否为Undefined
 * @param  {any}  data
 * @return {Boolean} 

function isUndefined(data) {
	return isPrototype(data) === '[object undefined]';
}

 * 
 * @desc   判断是否为Null
 * @param  {any}  data
 * @return {Boolean} 

function isNull(data) {
	return isPrototype(data) === '[object null]';
}
*/

/**
 * 判断数据类型
 * @param {any} res 
 */
const isType = res => {
  const obj = {
    '[object Number]': 'Number',
    '[object String]': 'String',
    '[object Boolean]': 'Boolean',
    '[object Array]': 'Array',
    '[object Object]': 'Object',
    '[object Function]': 'Function',
    '[object Undefined]': 'Undefined',
    '[object Null]': 'Null',
    '[object Date]': 'Date',
    '[object RegExp]': 'RegExp',
    '[object Error]': 'Error'
  };

  const type = Object.prototype.toString.call(res)
  return obj[type]
}

module.exports = isType;