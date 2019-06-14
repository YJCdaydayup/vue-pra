var events = require('events');
var eventEmitter = new events.EventEmitter();


// 创建事件处理程序
var connectHandler = function () {
    console.log('连接成功');

    // 触发data_received事件
    eventEmitter.emit('data_received');
}

eventEmitter.on('haha', function () {
    setTimeout(function () {
        console.log('哈哈');
    }, 2000)
})

// 绑定connecttion事件处理程序
eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection', connectHandler);

eventEmitter.removeListener('connection',function () {
    console.log('移除事件')
})


eventEmitter.addListener('haha', function () {
    console.log('为haha添加了另外一个监听器');
})

eventEmitter.on('data_received', function () {
    console.log('数据接收成功');
    eventEmitter.emit('haha');
})

eventEmitter.emit('connection');
eventEmitter.emit('connection');
eventEmitter.on('error', function () {
    console.log('error事件')
})

eventEmitter.emit('error');

console.log('程序执行完毕')
console.log(eventEmitter.listenerCount('haha'));
