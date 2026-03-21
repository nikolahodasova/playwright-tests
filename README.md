# 🎭 Playwright Automation Project – SauceDemo

This project is dedicated to the automated testing of OS training e-commerce store. It is built on the modern **Playwright** framework using **TypeScript** and follows the **Page Object Model (POM)** architecture. The project features advanced automation abilities like Global Setup for authentication.

## 🏗️ Project Architecture


```text
playwright-project/
├── .github/workflows/    # CI/CD pipelines (GitHub Actions)
├── fixtures/             # Custom test fixtures and environment extensions
├── pages/                # Page Object Model (POM) - Locators & Actions
├── playwright-report/    # Generated HTML test results
├── test-data/            # Static test data (e.g., users.json)
├── test-results/         # Screenshots and traces from failed tests
├── tests/                # Test specifications and setup files
├── utils/                # Helper functions and shared utilities (for future)
├── .gitignore            # Files excluded from version control
├── package.json          # Project metadata and dependency list
├── package-lock.json     # Locked versions of dependencies
├── playwright.config.ts  # Main Playwright configuration
├── README.md             # Project documentation
└── storageState.json     # Saved authentication state (cookies/local storage)
```

## 🛠️ Tech Stack & Features

*   **Language:** TypeScript
*   **Framework:** Playwright
*   **CI/CD:** GitHub Actions
*   **Architecture:** Page Object Model (POM)
*   ✅ **Global Setup & Auth**: Session state is saved to `storageState.json` to skip login steps.
*   ✅ **Multi-browser Testing**: Native support for Chromium, Firefox, and WebKit (Safari).

## 🚀 Execution & Reports

### How to Run Tests
Before the first run, install the dependencies:
```bash
npm install
```
### Report
* after run
```bash
npx playwright show-report
```
* /test-results/.last-run.json
* screenshot on failure

## Author
**Nikola Hodásová** QA Test Engineer (Junior), QA Automation Tester (Junior)