import Layer from './components/Layer/layer.js'
import './common/common.css'

const Opp = function () {
    let arr = [1,2,3];
    console.log([...arr,4,5,6]);
    var app = document.getElementById('app');
    app.innerHTML = Layer().tpl({
        name: 'Layerwknvdkjnvjkdsvnjdsvndskv',
        arr: ['apple','orange','oppo']
    });
};

new Opp();