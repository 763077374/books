//通过回调函数来接收异步代码执行的处理结果

function parseJsonStrToObj(str,callback) {
    setTimeout(function() {
        try {
            var obj = JSON.parse(str);
            callback(null, obj);
        } catch (e) {
            callback(e, null);
        }
    }, 0);
}
//注意区分错误信息和正确的数据信息
parseJsonStrToObj('{"foo":"bar"}',function (err, result) {
    if (err) {
        return console.log('转换失败了');
    }
    console.log('数据转换成功，没有问题可以直接使用了：' + result);
});
