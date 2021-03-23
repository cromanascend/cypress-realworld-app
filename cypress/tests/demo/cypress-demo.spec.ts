import { User } from "models";
const usersdemo = require('../../fixtures/usersdemo.json')
const signinPath = "/signin";

const BankAccounts = require('../../fixtures/bankacc.json')


describe("TestSuite: Cypress Studio Demo", function () {
  before(function () {
    cy.visit(signinPath);
  });
  it.skip("TC01: create new payment transaction", function () {
    usersdemo.forEach((userdemo) => {  
      cy.get("#username").type(userdemo.username);
      cy.get("#password").type(userdemo.password);
      cy.get("[data-test=signin-submit]").click();
    // Extend test with Cypress Studio
    cy.get('[data-test="nav-top-new-transaction"]').click();
    cy.get('#root ul > li:nth-child(3)').click();
    cy.get('#amount').type('500');
    cy.get('#transaction-create-description-input').type('pago de internet');
    cy.get('[data-test=transaction-create-submit-payment]').click();
    cy.screenshot('payment done');
    cy.get('[data-test="new-transaction-return-to-transactions"]').click();
    cy.get('[data-test=sidenav-signout]').click();
    });
  });
  it.skip("TC02: create new request transaction", function () {
    usersdemo.forEach((userdemo) => {  
      cy.get("#username").type(userdemo.username);
      cy.get("#password").type(userdemo.password);
      cy.get("[data-test=signin-submit]").click();
    // Extend test with Cypress Studio
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('#root ul > li:nth-child(2)').click();
    cy.get('#amount').type('500')
    cy.get('#transaction-create-description-input').type('pago de internet')
    cy.get('[data-test=transaction-create-submit-request]').click()
    cy.screenshot('request done')
    cy.get('[data-test="new-transaction-return-to-transactions"]').click()
    cy.get('[data-test=sidenav-signout]').click();
    });
  });


  it("TC03: Create new bank account", function () {
    usersdemo.forEach((userdemo) => {  
      cy.get("#username").type(userdemo.username);
      cy.get("#password").type(userdemo.password);
      cy.get("[data-test=signin-submit]").click();


    // Extend test with Cypress Studio
    BankAccounts.forEach((BankAcc) => {
         cy.get('[data-test=sidenav-bankaccounts]').click()
         cy.get('[data-test=bankaccount-new]').click()
         cy.get('#bankaccount-bankName-input').type(BankAcc.vbankName)
         cy.get('#bankaccount-routingNumber-input').type(BankAcc.vroutingNumber)
         cy.get('#bankaccount-accountNumber-input').type(BankAcc.vaccountNumber)
         cy.get('[data-test=bankaccount-submit]').click()
         cy.screenshot('bank account created')
         cy.get('[data-test=sidenav-home]').click()
    });  //bankaccounts
    cy.get('[data-test=sidenav-signout]').click();
    });  //usersdemo
  });

 

  it.skip("TC04: Delate a bank account", function () {
    // Extend test with Cypress Studio
    cy.get('[data-test=sidenav-bankaccounts]').click()
    cy.get('[data-test=bankaccount-list-item-RskoB7r4Bic] > .MuiGrid-container > :nth-child(2) > [data-test=bankaccount-delete]').click()
    cy.screenshot('bank account dalated')
    cy.get('[data-test=sidenav-home]').click()
    //add assertion...
  });
  after(function () {
    cy.log('Test completed')
  });
});
