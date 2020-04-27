class MyPlugin {
    constructor() {
        console.log('插件被调用了')
    }
    /**
     * compiler是webpack实例，存储了webpack的各种信息，所有的打包信息
     * 特别是里面有个hook钩子，定义了webpack的生命周期函数
     * 
     */
    apply(compiler) {
        /**
         * hooks.emit属于输出资源前的时刻
         * compilation 这一次打包信息
         * tapAsync 
         * 最后的回调一定要调用
         */
        compiler.hooks.emit.tapAsync('MyPlugin', (compilation, cb)=>{
            console.log(compilation)
            compilation.assets['copyright.txt'] = {
              source: function () {
                return 'copyright by q'
              },
              size: function () {
                return 1
              }
            }
            // 最后一定要调用cb
            cb()
        })

        /** 
         * 同步的时刻， 后面只要一个参数就可以了 
         */
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
          console.log(compilation);
        })
    }
}

module.exports = MyPlugin