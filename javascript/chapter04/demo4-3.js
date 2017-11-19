/*
* 向文件追加内容
*/
var fs = require('fs');
//定义需要追加的数据
var data = '欢迎您';
//调用文件追加函数
fs.appendFile('E:/a.txt', data, function(err) {
  if (err) {
    // 出错的情况下，回调函数中的代码就不要继续往后执行了
    // 所以可以使用return 的方式，阻止代码继续执行
    return console.log('文件追加失败了');
  }
  // 希望在文件追加成功之后做一些事情
  console.log('文件追加成功了');
});
