/**
 * 取出数组中，对象相同属性的对象
 * @param {Array} arr 
 * @param {Function} fn
 * 
 * let arr = [{name: "aaa1", age: 22}, {name: "aaa2", age: 21}, {name: "aaa3", age: 22}, {name: "aaa4", age: 21}]
 * bifurcateBy(arr, res => res['age] === 22)  // [[{name: "aaa1", age: 22}, {name: "aaa3", age: 22}],[{name: "aaa2", age: 21}, {name: "aaa4", age: 21}]]
 */

const bifurcateBy = (arr, fn) => arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

module.exports = bifurcateBy