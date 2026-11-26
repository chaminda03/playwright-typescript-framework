const {test,expect} = require('@playwright/test');


test.only('First playwright test', async ({page}) => {
 // Define locators
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
const userName = page.locator('input#userEmail');
const passWord = page.locator('input#userPassword');
const signInBtn = page.locator('input#login');
const products = page.locator('.card-body b');

   //await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await console.log (await page.title());
  expect(await page.title()).toBe('Let\'s Shop');
 // enter username and password
  await userName .fill(process.env.USER_EMAIL);
  await passWord.fill(process.env.USER_PASSWORD);
  await signInBtn.click();

  //await expect ( products).toHaveCount(1);
  await console.log(await products.first().textContent());

  await console.log(await products.allTextContents());
 

});

