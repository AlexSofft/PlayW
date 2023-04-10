import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async({ page }) => {
    await page.goto('https://www.theguarantors.com/');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('#navigation').getByRole('link', { name: 'Sign In' }).click();
    const page1 = await page1Promise;
    await page1.getByPlaceholder('Email Address').click();
    await page1.getByPlaceholder('Email Address').fill('qasthpark@gmail.com');
    await page1.getByPlaceholder('Password').click();
    await page1.getByPlaceholder('Password').fill('MJwilson83');
    await page1.getByRole('button', { name: 'Login' }).click();
    await page1.getByRole('link', { name: 'Resume' }).click();
    await page1.getByText('I don\'t know the email of the agent/broker.').click();
    await page1.locator('[id="\\36 0"]').click();

    // End of authentication steps.

    await page.context().storageState({ path: authFile });
});