/**
 * 
 * @desc 让IE9以下的浏览器兼容Array.prototype.map方法
 *       关爱码农，远离IE
 * @param {} 
 * @return {}
 */

module.exports = function () {
    if (!Array.prototype.map) {
        Array.prototype.map = function(callback, thisArg) {

            var T, A, k;

            if (this == null) {
                throw new TypeError(" this is null or not defined");
            }

            var O = Object(this);

            var len = O.length >>> 0;

            if (Object.prototype.toString.call(callback) != "[object Function]") {
                throw new TypeError(callback + " is not a function");
            }

            if (thisArg) {
                T = thisArg;
            }

            A = new Array(len);
            k = 0;

            while(k < len) {

                var kValue, mappedValue;

                if (k in O) {
                    kValue = O[ k ];

                    mappedValue = callback.call(T, kValue, k, O);

                    A[k] = mappedValue;
                }

                k++;
            }

            return A;
        };
    }
};