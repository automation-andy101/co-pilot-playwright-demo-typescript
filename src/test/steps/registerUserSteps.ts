import { Given, Then, When } from "@cucumber/cucumber"
import Assert from "../../helper/wrapper/assert"
import { fixture } from "../../hooks/pageFixture"
import RegisterPage from "../../pages/registerPage"
import * as data from "../../helper/util/test-data/registerUser.json"


let registerPage: RegisterPage;
let assert: Assert;

Given('I navigate to the register page', async function () {
    registerPage = new RegisterPage(fixture.page);
    assert = new Assert(fixture.page);
    await registerPage.navigateToRegisterPage();
})

When('I create a new user', async function () {
    const username = data.userName + Math.floor(Math.random() * 1000);
    await registerPage.registerUser(data.firstName, data.lastName, username, data.password, data.confirmPassword, "m");
})


Then('I confirm user registration is successfully', async function () {
    await assert.assertURL('https://bookcart.azurewebsites.net/login')
})
