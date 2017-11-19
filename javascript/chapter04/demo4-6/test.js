/*
 * 测试文件复制
 */
//加载封装好的文件复制功能模块
var copy = require('./demo4-6');
	//调用copy()函数
    copy('E:/a.txt','E:/d.txt',function(err){
      if(err){
       return console.log('文件复制失败了');
      }
      console.log('文件复制成功了');
    });