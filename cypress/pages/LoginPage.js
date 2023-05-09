class LoginPage {
  elements = {
    usernameInput: () => cy.xpath('//*[@id="username"]'),
    passwordInput: () => cy.xpath('//*[@id="password"]'),
    loginBtn: () => cy.xpath('//input[@name="submit" and @value="Login"]'),
    errorMessage: () => cy.xpath('//div[@id="loginError"]//span'),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
