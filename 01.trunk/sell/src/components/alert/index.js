import vue from 'vue'
import alert from './alert'

let instance = vue.extend(alert).$amount(document.createElement('div'))
let div = instance.$el
document.body.appendChild(div)

instance.visible = false

export default {
    install() {
        this.prototype.$show = function() {
            instance.visible = true
        }
    }
}