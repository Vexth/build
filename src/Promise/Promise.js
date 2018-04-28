/**
 * Promise --- 为了解决在低版本浏览器中不能使用Promise方法而写的一个兼容性 PromiseVexth 方法
 * 
 * 整个方法还有待完善，所以没有打包
 */

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

	/* 对象 */

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

	/* init */

	this.timer = setTimeout(function () {
		self.startFn.call(self, self.resolve, self.reject);
	}, 0);
}

module.exports = PromiseVexth;