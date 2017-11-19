/*
 * 二进制数据和乱码
 */
var fs = require('fs');

fs.readFile('./test.txt',function (err, data) {
  if (err) {
    throw err;
  }
  // 1. 输出二进制数据
  console.log(data);
  // 2. 输出乱码
  console.log(data.toString());
});
