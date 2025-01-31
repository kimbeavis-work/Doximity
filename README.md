# Automation UI Test for Doximity Homepage - Nav Menu and Hero Section
## Test Scenarios:
1. Nav menu is visible to the user, each of Nav item leads to the correct page.
2. User is able to process to find their profile using their name. If the user is never registered, redirect them to register page
3. Auhthorised third parties login are available to the users.
4. Existing member is able to click on Sign in link to go to Sign in page
## Test Strategy:
For all elements in Nav Menu and Hero section: 
1. UI testing only to assert the elements are visible
2. Assert form fields and button are fillable/ clickable. 
## Setup
1. Before running the tests, ensure that you have the following prerequisites installed: Node.js (version 14 or higher) Cypress (You can install it using npm)
2. Clone the repository:
`bash Copy git clone https://github.com/your-username/your-repository-name.git cd your-repository-name`

3. Install Dependencies: In the project folder, install the necessary dependencies by running:
`bash Copy npm install`
This will install Cypress and other required packages.

4. Running the Tests
To run the Cypress tests, follow these steps:

- Open Cypress Test Runner:
`bash Copy npx cypress open`

This will open the Cypress Test Runner in your browser. From there, you can click on the individual test files to run them interactively.
- Run Tests Headlessly: Alternatively, you can run all the tests headlessly from the command line:
`bash Copy npx cypress run`

This will execute all the tests in the terminal without opening the UI.

### Cypress Configuration
- Cypress configuration is located in the cypress.json file. This file includes configurations such as base URL, viewport size, and other settings. 
- Example configuration:
`json Copy { "baseUrl": "https://yourwebsite.com", "viewportWidth": 1280, "viewportHeight": 720 }`

baseUrl: The base URL for your website to avoid repeating it in every test.

viewportWidth & viewportHeight: Customize the viewport size based on your testing needs.
