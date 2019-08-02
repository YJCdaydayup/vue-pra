import Banner from './Banner'
import './index.styl'


window.onload = function () {
    var banner = new Banner('container',{
        duration: 1000
    },function () {

    })

    banner.init();
}