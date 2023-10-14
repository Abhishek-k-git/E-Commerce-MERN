## E-Commerce Website using MERN

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs
MERN stack is the idea of using Javascript Frameworks for full stack web development

<!--
[![Watch the video](https://img.youtube.com/vi/gM7jYAc93BQ/hqdefault.jpg)](https://www.youtube.com/embed/https://youtu.be/gM7jYAc93BQ)
-->

[<img src="https://img.youtube.com/vi/gM7jYAc93BQ/hqdefault.jpg" width="100%" height="100%"/>](https://www.youtube.com/embed/https://youtu.be/gM7jYAc93BQ)

### Table of content
* [Overview](#Overview)
* [Folder Structure](#Folder-Structure)
* [Clone](#Clone)
* [Client Side](#Client-side)
* [Server Side](#Server-side)
* [Deployment](#Deployment)
* [Last-But-Not-Least](#Last-But-Not-Least)

### Overview

This project is a comprehensive Ecommerce website, innovatively developed utilizing full-stack technologies like MongoDB, ExpressJs, ReactJs (Redux for state management), odeJs and tailwind for UI.

##### Fuctionalities:

- User Registration
- User Login/Admin Login
- Forgot Password
- Filters and Sorting
- Cart 
- Cash and Card Payment (Stripe Payment Integration)
- Order Summary Deliver on Mail
- Order History
- Admin Functionalities like (Add new item, View order details, Update order Status)

### Folder-Structure

```
├── backend
    ├── controller 
        └── Auth.js
        └── Brand.js
        └── Cart.js
        └── Category.js
        └── Order.js
        └── Product.js
        └── User.js
    ├── model
        └── Brand.js
        └── Cart.js
        └── Category.js
        └── Order.js
        └── Product.js
        └── User.js
    ├── routes
        └── Auth.js
        └── Brands.js
        └── Cart.js
        └── Categories.js
        └── Order.js
        └── Products.js
        └── Users.js
    ├── services
        └── common.js
    └── index.js
├── frontend
    ├── public
        └── index.html
        └── logo.png
        └── logo.svg
    └── src
        └── app
            └── constants.js
            └── store.js
        └── features
            └── admin/...
            └── auth/...
            └── cart/...
            └── common/...
            └── navbar/...
            └── order/...
            └── product/...
            └── user/...
        └── pages
            └── 404.jsx
            └── AdminHome.jsx
            └── AdminOrderspage.jsx
            └── AdminProductDetailPage.jsx
            └── AdminProductFormPage.jsx
            └── CartPage.jsx
            └── Checkout.jsx
            └── CheckoutForm.jsx
            └── ForgotPasswordPage.jsx
            └── Home.jsx
            └── LoginPage.jsx
            └── OrderSuccessPage.jsx
            └── ProductDetailPage.jsx
            └── ResetPasswordPage.jsx
            └── SignupPage.jsx
            └── StripeCheckout.jsx
            └── UserOrders.jsx
            └── UserProfilePage.jsx
        └── App.css
        └── App.js
        └── App.test.js
        └── index.css
        └── index.js
        └── Stripe.css
├── package.json
```
    


### Clone
```terminal
$ git clone https://github.com/amazingandyyy/mern.git
$ yarn # or npm i
```

### Client-side
PORT: 3000
```terminal
$ cd frontend         // go to client folder
$ npm i               // npm install packages
$ npm run dev        // run it locally

 *-------Start script--------*
"start": "react-scripts start",
*-------Start command-------*
npm start

// deployment
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

### Server-side
PORT: 8080
```terminal
$ cd server         // Go to server directory
$ npm init -y       // initializing the directory
$ npm i             // install npm dependencies


*-------Start script--------*
"start": "nodemon index.js",,
*-------Start command-------*
npm start

// deployment
"dev": "nodemon index.js",
```

| Client side Dependencies | Server side Dependencies |
|--------------------------|--------------------------|
| "@headlessui/react": "^1.7.14" | "cookie-parser": "^1.4.6" |
| "@heroicons/react": "^2.0.17" | "cors": "^2.8.5" |
| "@reduxjs/toolkit": "^1.9.5" | "dotenv": "^16.3.1" |
| "@stripe/react-stripe-js": "^2.1.0" | "express": "^4.18.2" |
| "@stripe/stripe-js": "^1.52.1" | "express-session": "^1.17.3" |
| "@tailwindcss/aspect-ratio": "^0.4.2" | "jsonwebtoken": "^9.0.0" |
| "@tailwindcss/forms": "^0.5.3" | "mongoose": "^7.6.1" |
| "@testing-library/jest-dom": "^5.16.5" | "nodemailer": "^6.9.2" |
| "@testing-library/react": "^13.4.0" | "nodemon": "^3.0.1" |
| "@testing-library/user-event": "^14.4.3" | "passport": "^0.6.0" |
| "react": "^18.2.0" | "passport-jwt": "^4.0.1" |
| "react-alert": "^7.0.3" | "passport-local": "^1.0.0" |
| "react-alert-template-basic": "^1.0.2" | "stripe": "^12.4.0" |
| "react-dom": "^18.2.0" |
| "react-hook-form": "^7.43.9" |
| "react-loader-spinner": "^5.3.4" |
| "react-redux": "^8.0.5" |
| "react-router-dom": "^6.10.0" |
| "react-scripts": "^5.0.1" |
| "tailwindcss": "^3.3.2" |
| "web-vitals": "^2.1.4" |

### Deployment
Deployed to [Render](https://ecommercemern-0xu8.onrender.com/)
> There are two ways of deplying MERN site on render, either deploy frontend and backend both separately or both at one site
for this project I have deployed both frontend and backend at one, so for that we need to add a 'package.json' file to root directory (containing both directories) inside the json file, following script is added in order to create succesfull deployment on Render.
```terminal
script {
    "build": "cd backend && npm install  && cd ../frontend && npm install && npm run build",
    "start": "node backend/index.js",
}
```

- Create and Configure the Render Account: If you don't already have an account with Render, you need to sign up. After signing up, you need to navigate to your dashboard.

- Connect Git Repository: Render allows you to connect your new and existing applications to your GitHub repositories. To connect your Mern project's repository to Render, click on "New Web Service" and select your Git provider. You'll be asked to sign in and authorize Render.

- Choose a Repository: After linking your Git provider, you'll see a list of your available repositories. Select the one containing your Mern project.

- Configure WebService: After selecting the repository, you'll be asked to configure some settings for the webservice:

   - Name: You can choose a unique name, description, and environment for the application.
   - Branch: Choose the branch you want to deploy.
   - Build Command: For a MERN project you can use `npm run build`.
   - Start Command: This could be something like `npm start`.
   **Note:** These commands are pointing to *package.json* in parent directory containing both frontend and backend.
   
- Pull Environment Variables: If there are any environment variables in .env file, it can be added under the Environment tab of your new service's settings.

- Deploy: After setting up all the configurations, click on the "Create web service" button at the bottom. Render will pull your code from Git, build your project, and deploy it to a .onrender.com subdomain for free. It will also watch for new commits to your repo and automatically deploy changes.

- After successful deployment, Render will provide a live site URL. You can click this URL to verify your application. Any new push to your chosen branch will automatically deploy your updated code.

>Please note that these steps can vary slightly depending on the specific configuration and structure of your MERN project.

### Last-But-Not-Least
- Other resorces related to this Project, You can read there documentation
    1. [Heroicons](https://heroicons.com/) for icons
    2. [tailwind](https://tailwindcss.com/docs/guides/create-react-app) for styling
    3. [Stripe](https://stripe.com/docs/development/quickstart?lang=node) for payment gateway integration
    4. [Tempmail](temp-mail.org/en/) for disposal mail addresses
