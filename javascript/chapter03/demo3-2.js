/**
 * 异步代码
 */
console.log('起床');

console.log('背单词');
function eatBreakfast() {
    console.log('开始吃早餐了');
    // setTimeout 执行的时候，不会阻塞后面代码的继续执行
    setTimeout(function () {
        console.log('早餐吃完了');
    }, 0);
}
eatBreakfast()
console.log('去上学');