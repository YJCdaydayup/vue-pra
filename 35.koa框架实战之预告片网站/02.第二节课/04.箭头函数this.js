/**
 * Created by yangli on 2020/2/17.
 */
 const obj = {
    id: 2,
    say: function () {
        console.log(this.id)
    },
    sayWithThis: function () {
        setTimeout(function () {
            console.log(this.id)
        },50)
    },
    sayWithArrow1: function () {
        setTimeout(()=>{
            console.log(this.id)
        },100)
    },
    sayWithArrow2: function () {
        let that = this
        setTimeout(function () {
            console.log(that.id)
        },150)
    },
    sayWithGlobalArrow: () => {
        setTimeout(()=>{
            console.log(this.id)
        }, 200)
    }
}

obj.say()
obj.sayWithThis()
obj.sayWithArrow1()
obj.sayWithArrow2()
obj.sayWithGlobalArrow()