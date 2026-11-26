const {test,expect} = require('@playwright/test');


test.only('First playwright test', async ({page}) => {
 // Define locators
   const username = page.locator('input#username');
 const password = page.locator('input#password');
 const signInBtn = page.locator('input#signInBtn');
 const products = page.locator('.card-body a');
 const dropdown= page.locator('select.form-control');
 const checkboxUser= page.locator("input[value='user']");
 const checkboxAdmin= page.locator("input[value='admin']");

   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await console.log (await page.title());
  expect(await page.title()).toBe('LoginPage Practise | Rahul Shetty Academy');
 // enter username and password
  await username .fill('rahulshettyacademy2');
  await password.fill('learning');
  await signInBtn.click();
 //await page.screenshot({path: 'usernamescreenshot.png'});
 await expect(page.locator('.alert-danger')).toBeVisible();
 console.log(await page.locator('.alert-danger').textContent());
 //await expect(await page.locator('.alert-danger').toHaveText('Incorrect username/password.'));
 await expect(page.locator('.alert-danger')).toHaveText('Incorrect username/password.');

// enter username and password correct
  await username .fill("");
  await username .fill('rahulshettyacademy');
  await password.fill("");
  await password.fill('Learning@830$3mK2');

  // click on the user checkbox
await checkboxUser.click();
console.log(await checkboxUser.isChecked());
// click on the popup and select the ok button

await page.locator('#okayBtn').click();
// click on the admin checkbox
await checkboxAdmin.isChecked()
console.log(await checkboxAdmin.isChecked());

console.log(await checkboxUser.isChecked());


// select the dropdown and click on the checkbox
await dropdown.selectOption('consult');

  await signInBtn.click();
  await expect(page).toHaveTitle('ProtoCommerce');

  
  
//console.log(await page.locator(".card-body a").first().textContent());
//console.log(await page.locator(".card-body a").nth(1).textContent());
//await page.waitForLoadState('networkidle');
await products.first().waitFor();

console.log(await products.allTextContents());
await expect(products).toHaveCount(4);
await expect(products.first()).toHaveText('iphone X', 'Samsung Note 8', 'Nokia Edge', 'Blackberry');

});



test('Second playwright test', async ({page}) => {

   await page.goto('https://www.google.com/');
  console.log(await page.title());
  expect(await page.title()).toBe('Google');
});