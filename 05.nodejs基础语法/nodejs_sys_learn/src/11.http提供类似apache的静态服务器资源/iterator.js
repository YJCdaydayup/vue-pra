(function iterator(i) {
   var timer = setTimeout(function () {
       console.log(i);
       clearTimeout(timer)
       timer = null;
       iterator(i+1)
    },1000);
})(0)