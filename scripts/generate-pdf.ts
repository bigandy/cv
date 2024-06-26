// @ts-nocheck
import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });

  await page.pdf({
    path: "public/cv.pdf",
    margin: {
      top: "10px",
      bottom: "20px",
    },
    printBackground: false,
  });

  await browser.close();
})();
