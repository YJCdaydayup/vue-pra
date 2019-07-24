import './index.css'
import Validation from './model/Validation'

(() => {
    let validation = new Validation("#slider", {
        successLabelTip: '验证完成'
    }, () => {
        alert('验证完成')
    })
    validation.init();
})()