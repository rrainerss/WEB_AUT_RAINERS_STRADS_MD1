//Rainers Strads IT2

describe("Grid Selection", () => {

    it("form", () => {
        //Visit site
        cy.visit("https://demoqa.com/selectable");

        //Select grid elements
        cy.get('#demo-tab-grid').click();
        cy.get('#row1 > :nth-child(2)').click();
        cy.get('#row2 > :nth-child(1)').click();
        cy.get('#row2 > :nth-child(3)').click();
        cy.get('#row3 > :nth-child(2)').click();

        //Confirm correct selection
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