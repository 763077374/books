/*
 *  异步方式写入文件
 */
var fs = require('fs');

console.log(1);
//该方法中回调函数的第一个参数为错误对象
fs.writeFile('e:/b.txt', '传智播客', function(err) {
    //判断是否出现错误，进行错误提示
  if (err) {
    console.log('不好意思，文件写入失败了');
  }
  console.log(2);
})
console.log(3);
