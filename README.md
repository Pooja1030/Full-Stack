### 🍽️ Food Delivery Application
A comprehensive MERN stack (MongoDB, Express, React, Node.js) food delivery platform with a responsive user interface built using Tailwind CSS. This application offers seamless navigation, secure payment options (Stripe, Cash on Delivery), real-time notifications via Toastify, and robust authentication using JWT tokens.

## 🛠 Features

## 🚀 User Features

- **User Authentication:** : Secure user registration and login with JWT tokens.
- **Browse Menus:** View a wide variety of food items categorized by type.
- **Order Management:** Add items to the cart, update quantities, and place orders.
- Choose from Stripe payments or Cash on Delivery.
- **Live Notifications:** Get instant updates on actions via Toastify alerts.
- **Responsive Design:** The app is designed to be fully responsive and accessible on all screen sizes.

## 🧑‍💻 Admin Features

- **Manage Inventory:** Add, edit, and remove food items.
- **Order Processing:** Update order status and track user purchases.
- **Analytics Dashboard:** Access key insights into app usage and order trends.

## 🌟 Additional Highlights
- **Responsive Design:** Optimized for all devices with Tailwind CSS.
- **API Integration:** Dynamic data flow between frontend and backend using Axios.
- **Secure Payments:** Integrated Stripe API for secure online payments.

## 🌐 Live Demo
Explore the live version here:
[Food Delivery App](https://full-stack-frontend-udau.onrender.com)

## 🛠️ Tech Stack

| Technology       | Description                                   |
|------------------|-----------------------------------------------|
| **React.js**     | Frontend library for building UI components. |
| **Node.js**      | Runtime for executing JavaScript on the server. |
| **Express.js**   | Backend framework for building REST APIs.    |
| **MongoDB**      | NoSQL database for data storage.             |
| **Tailwind CSS** | Utility-first CSS framework for styling.     |
| **JWT**          | JSON Web Tokens for authentication.          |
| **Axios**        | HTTP client for making API requests.         |
| **Stripe**       | Payment gateway integration.                 |
| **Toastify**     | Library for toast notifications.             |
| **Render**       | Deployment platform for the application.     |


Frontend:

- **React.js:** JavaScript library used to build the user interface with a component-based structure.
- **Material-UI:** React component library that provides pre-built components to speed up UI development.
- **GSAP:** JavaScript library for creating high-performance animations to bring the algorithms to life.


## 🚀 Getting Started

## Prerequisties
Ensure you have the following installed:

- **Node.js:** v16 or later
- **MongoDB:** Running locally or hosted
- **npm:** Node package manager


## 1️⃣ Clone the Repository
Start by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/Pooja1030/Full-Stack.git
   ```
   ```bash
   cd Full-Stack
   ```

## 2️⃣ Install Dependencies

  🔧 Backend
  Navigate to the backend directory:
  
   ```bash
   cd backend
   npm install
   ```

  🌟 Frontend
   ```bash
   cd frontend
   npm install
   ```

   3️⃣ Configure Environment Variables
   Create a .env file in the backend folder with the following keys:
   
   Backend (/backend/.env)
   ```bash
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   STRIPE_SECRET_KEY=<Your Stripe Secret Key>
   ```

   4️⃣ Run the Application
   Backend
   ```bash
   cd backend
   nodemon index.js
   ```

   Frontend
   In another terminal:
   ```bash
   cd frontend
   npm start
   ```

  5️⃣ Access the Application
  - **Frontend:** http://localhost:3000
  - **Backend:** http://localhost:5000

    
## 📋 API Endpoints

Authentication

| HTTP Method | Endpoint          | Description                     | Authentication Required |
|-------------|-------------------|---------------------------------|-------------------------|
| `POST`      | `/api/auth/login` | Login a user                    | No                      |
| `POST`      | `/api/auth/register` | Register a new user             | No                      |
| `GET`       | `/api/auth/me`    | Get authenticated user details  | Yes                     |
| `POST`      | `/api/auth/logout` | Logout the user                 | Yes  

Food Management

| HTTP Method | Endpoint              | Description                     | Authentication Required |
|-------------|-----------------------|---------------------------------|-------------------------|
| `GET`       | `/api/foods`          | Get a list of all food items    | No                      |
| `POST`      | `/api/foods`          | Add a new food item             | Yes                     |
| `GET`       | `/api/foods/:id`      | Get details of a specific food item | No                  |
| `PUT`       | `/api/foods/:id`      | Update a food item              | Yes                     |
| `DELETE`    | `/api/foods/:id`      | Delete a food item              | Yes  


Orders Endpoints

| HTTP Method | Endpoint               | Description                       | Authentication Required |
|-------------|------------------------|-----------------------------------|-------------------------|
| `POST`      | `/api/orders`          | Create a new order                | Yes                     |
| `GET`       | `/api/orders`          | Get a list of user orders         | Yes                     |
| `GET`       | `/api/orders/:id`      | Get details of a specific order   | Yes                     |
| `PUT`       | `/api/orders/:id`      | Update the status of an order     | Yes                     |
| `DELETE`    | `/api/orders/:id`      | Cancel an order                   | Yes 




## 🧑‍💻 Deployment
The application is hosted on Render:

- **Frontend:** https://full-stack-frontend-udau.onrender.com
- **Backend:** Backend API hosted with a connection to the MongoDB database.
    
## 🤝 Contribution

Contributions are welcome! Follow these steps to contribute:
  1. Fork the repository.
  2. Create a new branch: git checkout -b feature-name.
  3. Commit changes: git commit -m 'Add feature description'.
  4. Push to your branch: git push origin feature-name.
  5. Open a pull request.
  

## Steps to Contribute:

-  Fork the repository to your GitHub account.  
-  Create a new branch for the feature or bug fix you are working on.  
-  Make the necessary changes and commit them. 
-  Push your changes to your forked repository.  
-  Open a pull request with a description of the changes you've made.
   
  
