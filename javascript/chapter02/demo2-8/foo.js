console.log("foo模块被加载了");
//清除缓存
delete require.cache[module.filename] ;