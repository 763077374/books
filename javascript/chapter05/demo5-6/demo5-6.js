/**
 *  使用文件流进行文件拷贝
 */
var fs = require('fs');
//创建可读流
var readableStream = fs.createReadStream('input.txt');
//创建可写流
var writableStream = fs.createWriteStream('output.txt');
readableStream.setEncoding('utf8');
readableStream.on('data', function(chunk){
    //将读出的数据块写入可写流
    writableStream.write(chunk);
});
readableStream.on('error', function(err){
    console.log(err.stack);
});
readableStream.on('end',function(){
    //将剩下的数据全部写入，并且关闭写入的文件
    writableStream.end();
});
writableStream.on('error', function(err){
    console.log(err.stack);
});