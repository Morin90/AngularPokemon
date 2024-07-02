describe('Pokemon Search', () => {
  beforeEach(() => {
    // Visiter la page de recherche de pokémon avant chaque test
    cy.visit('/pokemons');
  });

  it('should display search results when a valid search term is entered', () => {
    // Entrer un terme de recherche valide
    cy.get('input[placeholder="Rechercher un pokémon"]').type('Pikachu');

    // Vérifier que les résultats de la recherche sont affichés
    cy.get('.collection-item').should('contain', 'Pikachu');
  });

  it('should display no results for invalid search term', () => {
    // Entrer un terme de recherche invalide
    cy.get('input[placeholder="Rechercher un pokémon"]').type('xyz');

    // Vérifier que les résultats de la recherche ne sont pas affichés
    cy.get('.collection-item').should('not.exist');
  });

  it('should navigate to detail page when a pokemon is clicked', () => {
    // Entrer un terme de recherche valide
    cy.get('input[placeholder="Rechercher un pokémon"]').type('Pikachu');

    // Cliquer sur le résultat de recherche
    cy.get('.collection-item').contains('Pikachu').click();

    // Vérifier que l'URL de la page de détails est correcte
    cy.url().should('include', '/pokemons/9'); // Remplacez '/pokemons/1' par l'URL correcte de votre application
  });
});
describe('Tests d\'ajout, modification et suppression', () => {
  it('Ajouter un élément', () => {
    cy.visit('/pokemons/add'); 
    // Remplissez le formulaire d'ajout
    cy.get('input[name="name"]').clear().type('Piratest');
    cy.get('input[name="hp"]').clear().type('50');
    cy.get('input[name="cp"]').clear().type('10');
    cy.get('input[name="picture"]').clear().type('https://img.over-blog-kiwi.com/2/44/93/52/20170714/ob_39baf9_cdypyksw8aemuns.png');
    // Soumettez le formulaire
    cy.get('button[type="submit"]').click();
    // Attendre que la requête POST soit complétée
    cy.wait(2000); 
    // Vérifiez que l'élément a été ajouté correctement
    cy.contains('Piratest', { timeout: 10000 }).should('exist');
  });
});
it('Modifier un élément', () => {
  // Simulez la navigation vers la page de modification de l'élément
  cy.visit('pokemons/edit/1'); 
  // Modifiez les valeurs
  cy.get('input[name="name"]').clear().type('Bulbi');
  cy.get('input[name="hp"]').clear().type('30');
  cy.get('input[name="cp"]').clear().type('6');
  cy.get('input[name="picture"]').clear().type('https://img.over-blog-kiwi.com/2/44/93/52/20170714/ob_39baf9_cdypyksw8aemuns.png');
  // Soumettez le formulaire de modification
  cy.get('button[type="submit"]').click();
  // Vérifiez que les modifications ont été enregistrées correctement
  cy.contains('Bulbi').should('exist');
});
it('Supprimer un élément', () => {
  // Simulez la navigation vers la page où se trouve l'élément à supprimer
  cy.visit('/pokemons/1'); // Assurez-vous d'être sur la page d'accueil ou la liste des Pokémon
  // Trouvez le bouton ou le lien de suppression du premier élément par exemple
  cy.get('a.delete-button').first().click(); // Supposez que le premier bouton "Supprimer" est le bon
  // Vérifiez que l'élément a été supprimé de la liste
  cy.contains('Bulbizarre Modifié').should('not.exist');
});

//commande pour lancer mes tests :  npx cypress open --config pageLoadTimeout=30000,baseUrl=http://localhost:4200