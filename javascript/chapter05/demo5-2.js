/*
 * 写入缓冲区
 */
//创建一个可以存储 5 个字节的内存空间对象
 var buf = new Buffer(5);
 // 通过 buffer 对象的 length 属性可以获取 buffer 缓存中的字节大小
 console.log(buf.length);
//向缓冲区写入a
 buf.write('a');
//输出缓冲区数据
 console.log(buf);
//向缓冲区写入b
 buf.write('b', 1, 1, 'ascii');
//输出缓冲区数据
 console.log(buf);



