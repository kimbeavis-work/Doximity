describe('Domixity Homepage UI testing', () => {
    it('passes', () => {
      
        cy.visit('https://www.doximity.com/');
            // check that third party logins are visible to the users
        cy.get('span.auth-third-party-separator-text').should('include.text','Or continue with')
            .should('be.visible');
            // Apple block and tooltip
        cy.get('a.auth-third-party-button.auth-apple').should('be.visible').trigger('mouseover');
        cy.get('span[aria-label="Apple"]').should('be.visible');
            // Google block and tooltip
        cy.get('a.auth-third-party-button.auth-google').should('be.visible').trigger('mouseover');
        cy.get('span[aria-label="Google"]').should('be.visible');
            //Microsoft block and tooltip
        cy.get('a.auth-third-party-button.auth-microsoft').should('be.visible').trigger('mouseover');
        cy.get('span[aria-label="Microsoft"]').should('be.visible');
            //Hospital SSO
        cy.get('a.auth-third-party-button.auth-sso').should('be.visible').trigger('mouseover');
        cy.get('span[aria-label="Hospital SSO"]').should('be.visible');

         // Check that all the elements in NAV menu are available ans clickable
        cy.get('a[href="/app"]').should('be.visible');
        cy.get('nav a').eq(2).click();
        cy.get('h1.mobile-app-download-title').should('include.text', 'This app has changed my professional life')
            .should('be.visible');
        cy.get('nav a').eq(0).click(); //go back to the homeage from the app page

        cy.get('a[href="https://www.doximity.com/dialer"]').should('be.visible');
        cy.get('nav a').eq(3).click();
        cy.get('h1.dialer-marketing-hero-title').should('include.text', 'Doximity Dialer')
            .should('be.visible');
        cy.get('nav a').eq(1).click(); //go back to the homeage from the dialer page

        cy.get('a[href="/partners"]').should('be.visible');
        cy.get('nav a').eq(4).click();
        cy.get('div.partners-hero-section.center h1').contains('Partner with Doximity')
            .should('be.visible');
        cy.get('nav a').eq(0).click(); //go back to the homeage from the partners page

        cy.get('a[href="/about/company"]').should('be.visible');
        cy.get('nav a').eq(5).click();
        //cy.get('div.partners-hero-section.center h1').contains('Partner with Doximity')
            //.should('be.visible');
        cy.get('h1.company-hero-section-title').should('include.text', 'The professional medical network for physicians')
        cy.get('a.btn.blue.solid.header-nav-download-app-button').should('be.visible');
        cy.get('nav a').eq(0).click(); //go back to the homeage from the About company page

        // hero section elements are visible
        cy.get('h1.home-hero-section-title').should('include.text', 'Medicine Made Mobile').should('be.visible');
        cy.get('h3.home-hero-section-subtitle').should('include.text', 'Tech that works for doctors').should('be.visible');
            //try seraching for a never registered member, the member will be redirected to the registration page
        cy.get('input#first_name').type('Test');
        cy.get('input#last_name').type('Tester');
        cy.get('input[value="Find My Profile"]').click();
        cy.url().should('include', 'registration');
        cy.go('back'); // click on browser's back button
        
        // Check that existing member is able to go to Signin page by clicking on Signin link in Hero section
        cy.contains('p', 'Already on Doximity?');
        cy.get('p').find('a[href="/signin"]').should('be.visible').click();
        cy.url().should('include', '/sessions/login');
    })
})