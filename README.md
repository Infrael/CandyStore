# Sweet Shop Test Suite

This project is dedicated to designing and maintaining automated test cases using **Cypress** for the following live site:

🔗 **[sweetshop.netlify.app](https://sweetshop.netlify.app/)**

The goal is to ensure full coverage of the user interface and core functionalities of the Sweet Shop web application, including page navigation, login processes, basket mechanics, and checkout flow.

---

## 🔧 Tech Stack & Tools

- **Cypress** – for writing and running end-to-end tests.
- **Node.js** – used as the runtime environment.
- **npm** – to manage dependencies and Cypress scripts.
- **Git** – version control, with `.gitignore` configured for a Node.js project.

---

## 🚀 Setup Instructions

1. **Clone the repo**  
   ```bash
   git clone "https://github.com/Infrael/CandyStore.git"

   cd .\CandyStore\
   ```

2. **Install dependencies**
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

## 1. TS_1 About Page
- **TC_1.1** Verify the page has the title 'Sweet Shop Project'.
- **TC_1.2** Verify the page has a description.
- **TC_1.3** Verify the page has a banner and it matches the year 2018.

## 2. TS_2 Header (Navigation Bar)
- **TC_2.1** Verify that "Sweets" page loads from main page correctly.
- **TC_2.2** Verify that "About" page loads from main page correctly.
- **TC_2.3** Verify that "Login" page loads from main page correctly.
- **TC_2.4** Verify that "Basket" page loads from main page correctly.
- **TC_2.5** Verify that main page loads from "Sweets" page correctly.
- **TC_2.6** Verify that "About" page loads from "Sweets" page correctly.
- **TC_2.7** Verify that "Login" page loads from "Sweets" page correctly.
- **TC_2.8** Verify that "Basket" page loads from "Sweets" page correctly.
- **TC_2.9** Verify that main page loads from "About" page correctly.
- **TC_2.10** Verify that "Sweets" page loads from "About" page correctly.
- **TC_2.11** Verify that "Login" page loads from "About" page correctly.
- **TC_2.12** Verify that "Basket" page loads from "About" page correctly.
- **TC_2.13** Verify that main page loads from "Login" page correctly.
- **TC_2.14** Verify that "Sweets" page loads from "Login" page correctly.
- **TC_2.15** Verify that "About" page loads from "Login" page correctly.
- **TC_2.16** Verify that "Basket" page loads from "Login" page correctly.
- **TC_2.17** Verify that main page loads from "Basket" page correctly.
- **TC_2.18** Verify that "Sweets" page loads from "Basket" page correctly.
- **TC_2.19** Verify that "About" page loads from "Basket" page correctly.
- **TC_2.20** Verify that "Login" page loads from "Basket" page correctly.

## 3. TS_3 Login Page
- **TC_3.1** Verify the page title is 'Login'.
- **TC_3.2** Verify the page has a description.
- **TC_3.3** Verify the page contains 'email' and 'password' input fields.
- **TC_3.4** Verify the page contains a 'Login' button.
- **TC_3.5** Verify links to Twitter, Facebook, LinkedIn.
- **TC_3.6** Positive login with valid data.
- **TC_3.7** Negative login with wrong email format.
- **TC_3.8** Negative login with empty email.
- **TC_3.9** Negative login with empty password.
- **TC_3.10** Negative login with empty email and empty password.

## 4. TS_4 Account Page
- **TC_4.1** Positive login. Verify user info is displayed.

## 5. TS_5 Sweets Page
- **TC_5.1** Verify the page title is 'Browse sweets'.
- **TC_5.2** Verify the list of available products is displayed.
- **TC_5.3** Verify each product has a name, price, image, and 'Add to Basket' button.

## 6. TS_6 Basket Page (Cart)
- **TC_6.1** Add products to basket and verify the basket count is updated.
- **TC_6.2** Add products to basket with delivery 'Collect (FREE)' (quantity, names, total).
- **TC_6.3** Add products to basket with delivery 'Standard shipping (1.99)' (quantity, names, total).
- **TC_6.4** Remove item from basket.
- **TC_6.5** Verify the basket count is updated after removal.
- **TC_6.6** Empty the basket.
- **TC_6.7** Verify the basket is empty.

## 7. TS_7 Checkout Process

### TS_7.1 Checkout Page Load
- **TC_7.1.1** Verify the checkout page is accessible.
- **TC_7.1.2** Verify the page displays all basket items.

### TS_7.2 Completing Checkout
- **TC_7.2.1** Enter valid payment and shipping details.
- **TC_7.2.2** Add shipping costs.
- **TC_7.2.3** Verify checkout was successful.
