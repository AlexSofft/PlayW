import { test, expect } from '@playwright/test';

test('test', async({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.locator('svg').first().click();
    await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();
    await page.getByPlaceholder('Full Name').click();
    await page.getByPlaceholder('Full Name').fill('Alex');
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').fill('Soft');
    await page.getByPlaceholder('Current Address').click();
    await page.getByPlaceholder('Current Address').fill('Lodz');
    await page.locator('#permanentAddress').click();
    await page.locator('#permanentAddress').fill('Qarsava');
    await page.getByRole('button', { name: 'Submit' }).click();
});