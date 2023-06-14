beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
  });

describe("Hello world", ()=>{
    it('this is to test by using user name and password', ()=> {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    })
})