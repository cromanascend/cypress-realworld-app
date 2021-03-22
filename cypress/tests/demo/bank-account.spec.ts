const invalidData = require('../../fixtures/notValidBankAccounts.json')
const validData = require('../../fixtures/ValidBankAccounts.json')

describe("Bank accounts", function () {
  beforeEach(function () {
    cy.loginByXstate("Katharina_Bernier")
  });
 
  invalidData.forEach((tc) => {  
    it("Test To Fail: "+ tc.testName , function () {
        cy.createBankAccount(tc.bankName, tc.routingNumber, tc.accountNumber);
        cy.contains("Save").should('be.disabled')
    });
  });

  validData.forEach((tc) => {  
    it("Test To Pass: "+ tc.testName , function () {
        cy.createBankAccount(tc.bankName, tc.routingNumber, tc.accountNumber);
        cy.contains("Save").should('be.enabled').click();
    });
  });

  after(function () {
    cy.log('Tests completed! 🥳')
  });
});
