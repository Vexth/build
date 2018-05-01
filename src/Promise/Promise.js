/**
 * Promise --- 为了解决在低版本浏览器中不能使用Promise方法而写的一个兼容性 PromiseVexth 方法
 * 
 * 整个方法还有待完善，所以没有打包
 */

/*
function PromiseVexth(fn) {

	var self = this;

	PromiseVexth.name = this.name = 'PromiseVexth';
	// console.log(PromiseVexth.name)

	this.timer = null;         // fn事件执行的定时器
	this.startFn = fn;         // 初始化事件

	this.callback = [];        // 回调函数数组
	this.errCallback = null;   // 失败的回调函数的数组
	this.status = 0;           // 数组指针

	this.PromiseStatus = 'pending';
	this.PromiseValue = undefined;

	this.then = function (cb) {
		self.callback.push(cb);
		return self;
	};

	this.resolve = function (value) {
		// console.log(value)
		self.PromiseStatus = 'resolved';
		self.PromiseValue = value;
		self.done.call(self, value);
		return self;
	};

	this.reject = function (err) {
		// console.log(err)
		self.PromiseStatus = 'rejected';
		if(self.errCallback){
			self.errCallback(err);
		}
		return self;
	};

	this.catch = function (errCallback) {
		// console.log('catch')
		self.errCallback = errCallback;
		return self;
	};

	this.done = function (value) {
		// console.log('done')
		if (self.status < self.callback.length) {
			if(typeof value === 'object' && 'name' in value && value.name === self.name){
				clearTimeout(value.timer);  // 清除timer
				value.startFn.call(self, self.resolve, self.reject);
			}else{
				self.PromiseValue = self.callback[self.status++].call(self, value);
				self.done.call(self, self.PromiseValue);
			}
		}
	};

	// 对象 

	PromiseVexth.resolve = function (value) {
		return new PromiseVexth(function (resolve, reject) {
			resolve(value);
		});
	};

	PromiseVexth.reject = function (value) {
		return new PromiseVexth(function (resolve, reject) {
			reject(value);
		});
	};

	PromiseVexth.all = function (value) {
		if (!Array.isArray(value)) {
			throw new TypeError('You must pass an array to all.');
		}

		return new PromiseVexth(function (resolve, reject) {
			var i = 0,
	            result = [],
	            len = value.length,
	            count = len;

	        //这里与race中的函数相比，多了一层嵌套，要传入index
	        function resolver(index) {
				return function(value) {
					resolveAll(index, value);
				};
	        }

	        function rejecter(reason) {
	            reject(reason);
	        }

	        function resolveAll(index, value) {
	            result[index] = value;
	            if( --count == 0){
	                resolve(result)
	            }
	        }

	        for (; i < len; i++) {
	            value[i].then(resolver(i), rejecter);
	        }
		})
	}

	// init 

	this.timer = setTimeout(function () {
		self.startFn.call(self, self.resolve, self.reject);
	}, 0);
}
*/
const isNative = require('../Regexp/isNative');
function isPromise() {
	// 判断浏览器是否支持Promise方法，如果不支持就添加Promise方法
	if (!isNative(Promise)) {

		// resolve 和 reject 最终都会调用该函数
		var init = function (status,value) {
		    var promise = this, fn, st;

		    if(promise._status !== 'PENDING') return;

		    // 所以的执行都是异步调用，保证then是先执行的
		    setTimeout(function () {

		        promise._status = status;

		        st = promise._status === 'FULFILLED'

		        queue = promise[st ? '_resolves' : '_rejects'];

		        while(fn = queue.shift()) {
		            value = fn.call(promise, value) || value;
		        }

		        promise[st ? '_value' : '_reason'] = value;
		        promise['_resolves'] = promise['_rejects'] = undefined;

		    }, 0);

		}

		//参数是一个函数，内部提供两个函数作为该函数的参数,分别是resolve 和 reject
		var Promise = function(fn){

		    if (!(typeof fn === 'function' ))
		        throw new TypeError('You must pass a fn function as the first argument to the promise constructor');

		    // 如果不是promise实例，就new一个
		    if(!(this instanceof Promise)) return new Promise(fn);

		    var promise = this;
		    promise._value;
		    promise._reason;
		    promise._status = 'PENDING';

		    //存储状态
		    promise._resolves = [];
		    promise._rejects = [];

		    var resolve = function (value) {
		        init.apply(promise, ['FULFILLED'].concat([value]));
		    }

		    var reject = function (reason) {
		        init.apply(promise, ['REJECTED'].concat([reason]));
		    }

		    fn(resolve, reject);
		}

		Promise.prototype.then = function (onFulfilled, onRejected) {
		    var promise = this;

		    // 每次返回一个promise，保证是可thenable的
		    return new Promise(function (resolve, reject) {

		        function handle(value) {

		            // 将值传递给下一个resolve
		            var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;

		            // 判断是不是promise 对象
		            if (ret && typeof ret ['then'] == 'function') {
		                ret.then(function (value) {
		                    resolve(value);
		                }, function (reason) {
		                    reject(reason);
		                });
		            } else {
		                resolve(ret);
		            }
		        }

		        function errback (reason){
		            reason = typeof onRejected === 'function' && onRejected(reason) || reason;
		            reject(reason);
		        }

		        if (promise._status === 'PENDING') {
		            promise._resolves.push(handle);
		            promise._rejects.push(errback);
		        } else if (promise._status === 'FULFILLED') { // 状态改变后的then操作，立刻执行
		            callback(promise._value);
		        } else if (promise._status === 'REJECTED') {
		            errback(promise._reason);
		        }
		    });
		}

		Promise.prototype.catch = function (onRejected) {
		    return this.then(undefined, onRejected)
		}

		Promise.prototype.delay = function (ms, value) {
		    return this.then(function (ori) {
		        return Promise.delay(ms, value || ori);
		    })
		}

		Promise.delay = function (ms, value) {
		    return new Promise(function (resolve, reject) {
		        setTimeout(function () {
		            resolve(value);
		        }, ms);
		    })
		}

		Promise.resolve = function (arg) {
		    return new Promise(function (resolve, reject) {
		        resolve(arg)
		    })
		}

		Promise.reject = function (arg) {
		    return Promise(function (resolve, reject) {
		        reject(arg)
		    })
		}
		 
		Promise.all = function (promises) {
		    if (!Array.isArray(promises)) {
		        throw new TypeError('You must pass an array to all.');

		    }
		    return new Promise(function(resolve,reject){
		        var i = 0,
		            result = [],
		            len = promises.length,
		            count = len;

		        //这里与race中的函数相比，多了一层嵌套，要传入index
		        function resolver(index) {
					return function(value) {
						resolveAll(index, value);
					};
		        }

		        function rejecter(reason){
		            reject(reason);
		        }

		        function resolveAll(index,value){
		            result[index] = value;
		            if( --count == 0){
		                resolve(result)
		            }
		        }

		        for (; i < len; i++) {
		            promises[i].then(resolver(i), rejecter);
		        }
		    });
		}

		Promise.race = function (promises) {

		    if (!Array.isArray(promises)) {
		        throw new TypeError('You must pass an array to race.');
		    }

		    return Promise(function (resolve, reject) {
		        var i = 0,
		            len = promises.length;
		        function resolver (value) {
		            resolve(value);
		        }
		        function rejecter (reason) {
		            reject(reason);
		        }

		        for (; i < len; i++) {
		            promises[i].then(resolver, rejecter);
		        }
		    });
		}
	}
}

module.exports = isPromise;