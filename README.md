# Sweet Shop Test Suite

This project is dedicated to designing and maintaining automated test cases using **Cypress** for the following live site:

🔗 **[sweetshop.netlify.app](https://sweetshop.netlify.app/)**

The goal is to ensure full coverage of the user interface and core functionalities of the Sweet Shop web application, including page navigation, login processes, basket mechanics, and checkout flow.

---

## 🔧 Tech Stack & Tools

- **Cypress** – for writing and running end-to-end tests.
- **Node.js** – used as the runtime environment.
- **npm** – to manage dependencies and Cypress scripts.
- **[Git](https://github.com/Infrael/CandyStore)** – version control, with `.gitignore` configured for a Node.js project.
- **[Jira](https://qatesteris.atlassian.net/jira/software/c/projects/TEST/boards/34)** – task management and planning

---

## 🚀 Setup Instructions

1. **Clone the repo**  
   ```bash
   git clone "https://github.com/Infrael/CandyStore.git"
   ```

2. **Install dependencies**
    ```bash
    cd .\CandyStore\
    ```

    ```bash
    npm install
    ```

3. **Open Cypress Test Runner**
    ```bash
    npm run cy:open
    ```
    **OR**
    
    **Run tests headlessly**
    ```bash
    npm run cy:run
    ```

## 📁 Test Suite Structure

### 1. TS_1 General Web Pages
Includes tests for:
- Home Page
- Navigation Bar
- About Page
- Login Page
- Basket Page

### 2. TS_2 Sweets & Basket
- Sweets page rendering
- Adding/removing items from basket
- Delivery cost calculations

### 3. TS_3 Authentication
- Positive login with valid credentials
- Negative cases: invalid formats, empty fields

### 4. TS_4 Account Page
- User info display after login

### 5. TS_5 Checkout Process
- Form field validation
- Successful order submission

---

## 📌 Notes

- Tests are written in `cypress/e2e/`
- Global commands defined in `support/commands.js`
- Uses `cypress.config.js` to set base URL and settings

---