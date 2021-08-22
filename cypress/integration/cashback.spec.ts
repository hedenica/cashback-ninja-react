describe('renders the home page', () => {
  it('renders correctly', () => {
    cy.visit('/');
    cy.get('#content-wrapper').should('exist');
  });

  it('should be able to go to register page', () => {
    cy.visit('/');
    cy.contains('Cadastrar nova compra').click();
  });
  it('should be able to register and order', () => {
    cy.visit('/register');
    cy.get('input[name="product"]').type('óculos novo');
    cy.get('input[name="price"]').type('R$ 20,00');
    cy.get('button[type="submit"]').click();
    cy.contains('óculos novo');
  });
  it('should be able to add a product', () => {
    cy.visit('/register');
    cy.get('[name="product"]').type('produto');
    cy.get('[name="price"]').type('R$ 2,00');
    cy.get('.form_addProduct__2Ve7J').click();
    cy.get('input[name="product"]').should('have.value', 'produto');
  });
  it('should be able to remove a product', () => {
    cy.visit('/register');
    cy.get('[name="product"]').type('produto');
    cy.get('[name="price"]').type('R$ 20,00');
    cy.get('.form_addProduct__2Ve7J').click();
    cy.get(':nth-child(2) > .form_button__gXq_R').click();
    cy.get('input[name="product"]').should('not.have.value', 'produto');
  });
});
