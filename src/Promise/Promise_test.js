/**
 * Promise.js 测试文件
 * 先实现了一些基本的方法
 * Promise.all 方法目前还在完善当中
 */

const promise = require('./Promise')

new promise(function(resolve, reject){
  setTimeout(function(){
    var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
    if(num <= 5){
      resolve(num);
    }
    else{
      reject('数字太大了');
    }
  }, 2000);
}).then(function(data){
  console.log(data)
}).catch(function(err){
  console.log(err)
})