require('shelljs/global')

const { resolve } = require('path')
const fs = require('fs')
const webpack = require('webpack')
const _ = require('lodash')
const r = url => resolve(process.cwd(), url)
const config = require('../config')
const webpackConf = require('./webpack.config')

const assetsPath = config.assetsPath

rm('rf', assetsPath)
// 1.
mkdir(assetsPath)
// 2.

const entry = () => _.reduce(config.pages, (en, i)=>{
    en[i] = resolve(__dirname, '../', `${i}.mina`)
    return en
}, {})

const renderConf = webpackConf
renderConf.output = {
    path: config.assetsPath,
    filename: '[name].js'
}

renderConf.entry = entry()
renderConf.entry.app = config.app
const compiler = webpack(renderConf)
fs.writeFileSync(resolve(config.assetsPath, './app.json'), JSON.stringify(config.json), 'utf8')
// 3.
compiler.watch({}, (err, stats)=>{
    if (err) {
        process.stdout.write(err)
    }
    console.log('[webpack:build]', stats.toString({
        chunks: false,
        colors: true
    }))
})