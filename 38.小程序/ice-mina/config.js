const {resolve} = require('path')
const r = (url) => resolve(__dirname, url)
const assetsPath = resolve(process.cwd(), './mina')

module.exports = {
    json: {
        "pages": [
            "pages/home/home",
            "pages/mine/mine",
            "pages/index/index",
        ],
        "tabBar": {
            "selectedColor": "#5aaca5",
            "color": "#565656",
            "backgroundColor": "#ababab",
            "list": [
                {
                    "pagePath": "pages/home/home",
                    "text": "家族脸谱",
                    "iconPath": "/static/home.png"
                },
                {
                    "pagePath": "pages/mine/mine",
                    "text": "家族脸谱",
                    "iconPath": "/static/share.png"
                }
            ]
        },
        "window": {
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#fff",
            "navigationBarTitleText": "权利的游戏",
            "navigationBarTextStyle": "black"
        },
    },
    "assetsPath": assetsPath,
    "app": r('./app.js')
}