'use strict'

function Saler() {
    this.clientList = {}
}

Saler.prototype.lister = function(person) {
    let type = person.type
    this.clientList[type] = this.clientList[type] || []
    this.clientList[type].push(person)
}

Saler.prototype.trigger = function(type, msg) {
    let persons = this.clientList[type]
    if (persons) {
        for (let i = persons.length;i--;) {
            let person = persons[i]
            typeof person.cb === 'function' ? person.cb.call(person, person.name, type, msg) : (function () {
                console.log(person.name + '用户没有留下联系方式，无法通知到！！！')
            })()
        }
    }
}

function Person(name, type) {
    this.name = name
    this.type = type
    // this.cb = function () {
    //     let args = arguments
    //     console.log(args)
    // }
}

let saler = new Saler()

let xm = new Person('小明', 's200')
let xh = new Person('小红', 's800')

saler.lister(xm)
saler.lister(xh)

// saler.trigger('s200', '快来买房子')
saler.trigger('s800','你的指标到了')



