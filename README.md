Captcha Demo (Puppeteer + Stealth + Anti-Captcha)
This project opens the public Google reCAPTCHA v2 demo page and solves it using Puppeteer with the puppeteer-extra stealth plugin and the Anti-Captcha SDK.

⚠️ Use responsibly. Only run CAPTCHA automation on sites you own or have permission to test. You’re responsible for complying with applicable Terms of Service and laws.

Prerequisites
Node.js 18+

An Anti-Captcha API key — Get one here

Quick Start
Install
npm install

Configure environment
Create a .env file in the project root:
ANTICAPTCHA_API_KEY=your_key_here
HEADLESS=true

ANTICAPTCHA_API_KEY is required.
HEADLESS controls browser mode (true for CI/servers, false for local debugging).

Run
npm start

What the Script Does
Launches Chromium via Puppeteer with the Stealth plugin enabled

Visits Google’s reCAPTCHA v2 demo page

Requests a solution token from Anti-Captcha using the page URL and sitekey

Injects the token into the page and submits the demo form

Scripts
npm start — runs the main script (index.js)

Configuration
Environment variables
ANTICAPTCHA_API_KEY (required): your Anti-Captcha API key

HEADLESS (optional): true or false (defaults to true if not set)

Tuning tips
If debugging locally, set HEADLESS=false to see the browser.

Network instability can cause timeouts; consider adding explicit waits/retries if needed.

Project Structure
.
├─ index.js # Main script (Puppeteer + Stealth + Anti-Captcha)
├─ package.json
├─ package-lock.json
└─ .env # Not committed; holds ANTICAPTCHA_API_KEY and HEADLESS

.gitignore (recommended)
node_modules/
.env
.DS_Store

Troubleshooting
“API key not set” → Ensure .env exists and ANTICAPTCHA_API_KEY is defined.

Puppeteer launch issues → Confirm Node 18+, and try HEADLESS=false to debug visually.

Token injection didn’t work → The page may have changed; re-check the sitekey and element selectors.

License
ISC (see package.json)
