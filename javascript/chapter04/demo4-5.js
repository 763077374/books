/*
 * 文件复制案例
 */
var fs = require('fs');
//读取a.txt文件数据
  fs.readFile('E:/a.txt', function(err, data) {
    if (err) {
      return console.log('读取文件失败了');
    }
    //将数据写入c.txt文件
    fs.writeFile('E:/c.txt', data.toString(), function(err) {
      if (err) {
        return console.log('写入文件失败了');
      }
    });
    console.log('文件复制成功了');
  });

