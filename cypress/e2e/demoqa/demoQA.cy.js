describe("Demo QA", () => {

    it("form", () => {
        cy.visit("https://demoqa.com/selectable");
        cy.get('#demo-tab-grid').click();
        cy.get('#row1 > :nth-child(2)').click();
        cy.get('#row2 > :nth-child(1)').click();
        cy.get('#row2 > :nth-child(3)').click();
        cy.get('#row3 > :nth-child(2)').click();

        cy.get('#row1 > :nth-child(1)').contains('One').should('not.have.class', 'active');
        cy.get('#row1 > :nth-child(3)').contains('Three').should('not.have.class', 'active');
        cy.get('#row2 > :nth-child(2)').contains('Five').should('not.have.class', 'active');
        cy.get('#row3 > :nth-child(1)').contains('Seven').should('not.have.class', 'active');
        cy.get('#row3 > :nth-child(3)').contains('Nine').should('not.have.class', 'active');
    });
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });
  });