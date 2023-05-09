import {
  Given,
  When,
  Then

} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Given("A web browser is at the aggregator login page", () => {
  cy.visit("/login");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  cy.xpath('//*[@id="username"]').type(username);
  cy.xpath('//*[@id="password"]').type(password);
  cy.xpath('//input[@name="submit" and @value="Login"]').click();
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    cy.xpath('//*[@id="username"]').type(row.username);
    cy.xpath('//*[@id="password"]').type(row.password);
    cy.xpath('//input[@name="submit" and @value="Login"]').click();
  });
});

Then("the url will contains the hub search", () => {
  cy.url().should("contains", "/search");
});
Then("The error message {string} is displayed", (errorMessage) => {
  cy.xpath('//div[@id="loginError"]//span').should("have.text", errorMessage);
});
