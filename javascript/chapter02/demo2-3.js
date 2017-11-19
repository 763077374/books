var foo = 'bar';
console.log(foo);
//global对象这时是没有foo属性的
console.log('global:foo '+global.foo);
//为global对象挂载一个foo变量，并将该文件模块中foo的值赋值给它
global.foo = foo;
//这是global.foo的值为'bar'
console.log('global:foo '+global.foo);


