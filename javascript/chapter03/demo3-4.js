/**
 *异步代码无法使用try-catch处理异常
 */
function parseJsonStrToObj(str) {
    setTimeout(function() {
        return JSON.parse(str);
    }, 0);
}
//对于异步代码的执行来说，try-catch 是无法捕获异步代码中出现的异常的
try {
    var obj = parseJsonStrToObj('foo');
    console.log('执行结果是：' + obj);
} catch (e) {
    console.log('转换失败了');
}