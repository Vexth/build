/**
 * 
 * @desc   时间戳转换成年月日时分秒
 * @param  {Number} timestamp
 * @return {String}
 */

function tran(n) {
	return n < 10 ? '0' + n : n;
}

function formatDate(timestamp) {
	let time = new Date(timestamp);
	let year = time.getYear();
	let month = time.getMonth() + 1;
	let date = time.getDate();
	let hour = time.getHours();
	let minute = time.getMinutes();
	let second = time.getSeconds();
	return year + "-" + tran(month) + "-" + tran(date) + "  " + tran(hour) + ":" + tran(minute) + ":" + tran(second);
}

module.exports = formatDate;