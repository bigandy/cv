import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:4321/", { waitUntil: "networkidle" });


  // Turn on Print CSS
  await page.emulateMedia({ media: 'print' });


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
