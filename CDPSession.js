const Puppeteer = require("puppeteer");

(async () => {
    const browser = await Puppeteer.launch({
        headless: "new"
    }).catch(() => browser.close);

    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => {
        console.log(request.url());
        request.continue();
    });
    page.on('response', response => {
        console.log(response.url());
    });
    page.on('requestfailed', request => {
        console.log(request.url());
    });
    page.on('requestfinished', request => {
        console.log(request.url());
    });

    await page.goto('https://m.qtfm.cn/vchannels/353596/programs/14647412/').catch(() => browser.close);
    //await page.waitFor(500);

    await browser.close();
})()