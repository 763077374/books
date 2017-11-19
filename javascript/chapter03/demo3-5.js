/**
 * try-catch写在异步代码中
 */
function parseJsonStrToObj(str) {
    setTimeout(function() {
        try{
            return JSON.parse(str);
        }catch(e){
            console.log('转换失败了');
        }
    }, 0);
}
//调用方法输出结果
var obj = parseJsonStrToObj('foo');
console.log('执行结果是：' + obj);
