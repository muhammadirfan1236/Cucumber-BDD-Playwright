# Playwright Cucumber BDD Automation Framework

A UI test automation framework built using **Playwright, JavaScript, and Cucumber BDD**.

## Technologies Used

- JavaScript
- Playwright
- Cucumber BDD
- Node.js
- Page Object Model (POM)

## Project Structure

```text
features/
├── login.feature
├── step_definitions/
│   └── login.steps.js
├── pages/
│   ├── LoginPage.js
│   └── ProductsPage.js
└── support/
    └── hooks.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/Cucumber-BDD-Playwright.git
```

Install dependencies:

```bash
npm install
```

Install Chromium:

```bash
npx playwright install chromium
```

## Run Tests

Run all tests:

```bash
npm test
```

Run smoke tests:

```bash
npm run test:smoke
```

Run regression tests:

```bash
npm run test:regression
```

## Application Under Test

[ SauceDemo ](https://www.saucedemo.com/)

## Framework Features

- Behaviour-Driven Development (BDD)
- Gherkin feature files
- Scenario Outlines and Examples
- Data-driven testing
- Page Object Model
- Cucumber hooks
- Smoke and regression test tags

## Author

QA Automation Engineer