
//向外暴漏变量name
exports.name = 'itcast';
exports.type='edu';
//向外暴漏变量age
module.exports.age='10';
//向外暴漏函数
module.exports.sayHello= function () {
    console.log('hello');
}
