const puppeteer = require('puppeteer');

const sleep = (time) => new Promise((resolve)=>{setTimeout(resolve, time)})

;(async ()=>{
    let browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        dumpio: false
    })

    const page = await browser.newPage()

    let currentURL = 'https://www.sina.com.cn/'

    await page.goto(currentURL, {
        waitUntil: 'networkidle2'
    })

    await page.waitForSelector('img')

    const result = await page.evaluate(() => {
        let $ = window.$
        let items = $('img')
        let links = []
        if (items.length >= 1) {
            items.each((index, item) => {
                let it = $(item)
                let poster = it.attr('src')
                // poster = poster.replace('//', 'https://')
                links.push({
                    poster
                })
            })
        }
        return links
    })

    console.log(result)
    browser.close();
})()