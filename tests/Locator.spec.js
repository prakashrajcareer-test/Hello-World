 import {test}from '@playwright/test'
/*
test ('login page',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[placeholder="username"]').fill('Admin')
    await page.locator ('[placeholder="password"]').fill('admin123')
    await page.locator ('[type="submitt"]').click()
    })
     
test('second time login',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.waitForTimeout(3000)
await page.getByPlaceholder('Username').fill('Admin')
await page.waitForTimeout(3000)
await page.getByPlaceholder('Password').fill('admin123')
await page.waitForTimeout(3000)
await page.getByRole ('button',{name:'Login'}).click()
})


import('radiobutton V1',async ({page})=>{
await page.goto('https://rahulshettyacademy.com/automationpractice/')
await page .locator('[value="radio1"]').click()
await page .locator('[value="radio3"]').click()
await page .locator('[value="radio2"]').click()
 })


 import('radiobutton V2',async ({page})=>{
await page.goto('https://rahulshettyacademy.com/automationpractice/')
await page .locator('[name="radioButton"]').first().click()
await page .locator('[name="radioButton"]').last().click()
await page .locator('[name="radioButton"]').nth(1).click()
 })

  import('radiobutton V3',async ({page})=>{
await page.goto('https://rahulshettyacademy.com/automationpractice/')
await page .getByRole('radio').nth(2).click()
await page .getByRole('radio').nth(1).click()
await page .getBYText('radio1').isvisible()
await page .getBYText(/.*'radio1'*./).click()
 })

import('checkbox',async ({page})=>{
await page.goto('https://rahulshettyacademy.com/automationpractice/')
await page.locator('[id="checkboxoption1"]').check()
await page.locator('[type="checkbox"]').last().check()
await page.locator('[type="checkbox"]').nth(1).check()
await page.locator('[id="checkboxoption1"]').uncheck()
await page.locator('[type="checkbox"]').last().uncheck()
await page.locator('[type="checkbox"]').nth(1).uncheck()
 })

*/
 
import('static drop down',async({page})=>{
await page.goto('https://rahulshettyacademy.com/automationpractice/')
const select_dropdown=page.locator('#dropdown_class_example')
await select_dropdown.selectOption('option1')
await select_dropdown.selectOption('option2')
await select_dropdown.selectOption('option3')
await select_dropdown.selectOption('Index:1')
await select_dropdown.selectOption('Index:2')
await select_dropdown.selectOption('Index:3')
})

  



