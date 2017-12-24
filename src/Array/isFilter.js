/**
 * 
 * @desc 让IE9以下的浏览器兼容Array.prototype.filter方法
 *       关爱码农，远离IE
 * @param {} 
 * @return {}
 */

function isFilter() {
	if (!Array.prototype.filter) {
		console.log("关爱码农，远离IE","color:red")
		Array.prototype.filter = function(fun /* , thisArg*/) {
			"use strict";

			if (this === void 0 || this === null)
				throw new TypeError();

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun !== "function")
				throw new TypeError();

			var res = [];
			var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++) {
				if (i in t) {
					var val = t[i];

					// NOTE: Technically this should Object.defineProperty at
					//       the next index, as push can be affected by
					//       properties on Object.prototype and Array.prototype.
					//       But that method's new, and collisions should be
					//       rare, so use the more-compatible alternative.
					if (fun.call(thisArg, val, i, t))
						res.push(val);
				}
			}

			return res;
		};
	}
};

module.exports = isFilter;