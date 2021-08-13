
describe('Map app', () => {
    
    beforeEach(()=>{
        cy.visit('http://localhost:3000/locations');
    })

    it('frontepage can be opened', () => {
        cy.get('[data-cy=searchbox]');
    });

    it('searchbox can be written', () => {
        cy.get('[data-cy=searchbox]').click();
        cy.get('[data-cy=searchbox]').type('barcelona');
    });

    it('searchbox when is written show predictions', () => {
        cy.get('[data-cy=searchbox]').click();
        cy.get('[data-cy=searchbox]').type('barcelona');
        cy.get('[data-cy=pac-item]').its('length').should('be.gte', 4);

        
    });

    it('should add marker when click on predictions', () => {
        cy.get('[data-cy=searchbox]').click();
        cy.get('[data-cy=searchbox]').type('barcelona');
        cy.get('[data-cy=pac-item]').first().click();
        cy.get('[name=gmimap0]');
    });
});