const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.baidu.com/ ');
    await driver.findElement(By.name
            ('wd')).sendKeys('abc', Key.RETURN);
        await driver.wait(until.titleIs('abc_百度搜索'), 1000);
    } finally {
        await driver.quit();
    }
})();