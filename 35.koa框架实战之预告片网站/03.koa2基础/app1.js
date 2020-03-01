'use strict'


let obj = {
    get socket() {
        return this.msg + 'A'
    },
    set socket(val) {
        this.msg = val
    }
}


obj.socket = '1234567'
console.log(obj.socket)