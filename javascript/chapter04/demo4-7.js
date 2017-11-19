var fs = require('fs');

fs.stat('E:/a.txt', function (err, stats) {
  //判断是否是文件
  console.log("是否是文件："+stats.isFile());
  console.log(stats); 		//输出文件信息
})