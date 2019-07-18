seajs.use(['./main','./helper'], function (main,helper) {
    // 给每个li添加点击事件
    main.changeSelected(main.$("lis"), 'li', function (tags, target, index) {
        for (var i = 0; i < tags.length; i++) {
            tags[i].className = '';
        }
        target.className = 'selected';
    })

    helper.addClick();
})