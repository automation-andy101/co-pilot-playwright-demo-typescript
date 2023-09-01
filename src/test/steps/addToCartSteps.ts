import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 1) // 1 minutes

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";


Given('user searches for {string}', async function (book) {
    fixture.logger.info("Searching for book: " + book)
    await fixture.page.locator("input[type='search']").type(book);
    await fixture.page.waitForTimeout(1000);
    await fixture.page.locator("mat-option[role='option'] span").click();
});

When('user adds the book to the cart', async function () {
    await fixture.page.locator("button[color='primary']").click();
});

Then('the cart badge gets updated', async function () {
    const badgeCount = await fixture.page.locator("#mat-badge-content-0").textContent();
    expect(Number(badgeCount.length)).toBeGreaterThan(0);
});

