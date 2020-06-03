const {resolve} = require('path')
const r = (url) => resolve(__dirname, url)
const assetsPath = resolve(process.cwd(), './mina')


module.exports = {
    "pages": [
        "pages/index/index"
    ],
    "tabBar": {
        "selectedColor": "#5aaca5",
        "color": "#565656",
        "list": [
            {
                "pagePath": "page/index/index",
                "text": "家族脸谱"
            },
            {
                "pagePath": "page/index/index",
                "text": "家族脸谱"
            }
        ]
    },
    "window": {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "权利的游戏",
        "navigationBarTextStyle": "black"
    },
    "assetsPath": assetsPath,
    "app": r('./app.js')
}