import {test}from '@playwright/test'

test ('find X path',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[placeholder="username"]').fill('Admin')
    await page.locator ('//input[placeholder="password"]').fill('admin123')
    await page.locator ('//button[type="submitt"]').click()
    })

   
    test('Another way',async({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Locate the username input and fill it
  await page.locator('input[placeholder="Username"]').fill('Admin');

  // Locate the password input and fill it
  await page.locator('input[placeholder="Password"]').fill('admin123');

  // Click the login button
  await page.locator('button[type="submit"]').click();
});

     test ('LocatebyText',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.locator ('[id="user-name"]').fill('secret_sauce')
    await page.getByText('LOGIN').click
    await page.locator (':inventory.item').fliter({hastext:'sauce labs fleece jacket'}).getByText('ADD TO CART').click()
        })

