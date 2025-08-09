const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const ac = require("@antiadmin/anticaptchaofficial");
ac.setAPIKey('a725f7ff819271ff5cfa6bf229dbad75');
const fs = require('fs');

const url = 'https://www.google.com/recaptcha/api2/demo';

async function givePage() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    return page;
}
async function completeCaptcha(page) {
    await page.waitForSelector("div[id='recaptcha-demo']");
    // grab captcha sitekey
    const siteKey = await page.$eval("div[id='recaptcha-demo']", (element, keyAttr) => {
        return element.getAttribute(keyAttr);
    }, "data-sitekey");

    let token = await ac.solveRecaptchaV2Proxyless(url, siteKey);
    // waiting for token to be generated
    
    // injecting token
    await page.$eval("textarea[id='g-recaptcha-response']", (element, tkn) => {
        element.innerText = tkn;
    }, token);
    await new Promise(resolve => setTimeout(resolve, 2000));
    // clicking submit
    await page.evaluate(() => {
        document.querySelector("input[id='recaptcha-demo-submit']").click();
    });
}

async function run() {
    var page = await givePage();
    await page.goto(url);
    completeCaptcha(page);
}

run();