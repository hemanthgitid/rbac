<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size   

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 -->

# Role-Based Access Control (RBAC) - Frontend Project

This repository contains the **Role-Based Access Control (RBAC)** system, a frontend-only application demonstrating user and admin role-based access. This project highlights the usage of **React's `useState` and `useEffect` hooks** to manage state and lifecycle behaviors effectively.

---

## About the Project

The **RBAC Frontend Project** is designed to showcase role-based access functionality in React, focusing on modern development practices without using Context API or protected routes. It emphasizes a simple yet efficient approach to dynamic UI rendering based on user roles.

---

## Features

- **Admin Role**:
  - Access to admin-specific dashboard and actions.
  
- **User Role**:
  - Access to user-specific pages and actions.
  
- **General Features**:
  - Simple login functionality to simulate role-based access.
  - Dynamic UI rendering based on user roles.

---

## Tech Stack

- **Frontend**: React.js
- **State Management**: React's `useState` and `useEffect` hooks
- **Styling**: CSS3
- **Routing**: React Router DOM (basic navigation)

---

### Prerequisites
This project involves React.js for the frontend and Express.js for the backend. Ensure you have the following installed before starting:

Node.js:
Required for managing dependencies and running the development servers for both React and Express.
👉 Download Node.js here.

npm or yarn:
Package managers for installing dependencies. npm comes bundled with Node.js.

React.js:
The frontend is built using React.js. You should have a basic understanding of React components, state management, and hooks.

Express.js:
Used for creating the backend API. Familiarity with routing and middleware is recommended.

Code Editor:
Use a modern code editor like Visual Studio Code (VS Code) for better development experience.

Database:
While this project focuses on the frontend and backend, if you choose to implement data persistence, you may use MongoDB.


## Installation

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/hemanthgitid/rbac.git
   
   cd rbac

2. ### Set Up Frontend 

    ### Navigate to the client folder:
     cd Client

    ### Install the required dependencies:
     npm install

    ### Start the React development server:
     npm start
3. ### Set Up Backend 

    ### Navigate to the Server folder:
     cd Server

    ### Install the required dependencies:
     npm install

    ### Start the React development server:
     npm start
 
4. ### Test the Application

1.   Open **http://localhost:3000** to interact with the frontend.
2.   Ensure the backend is running at **http://localhost:5000** for API functionality.

### Folder Structure

rbac-frontend/
├── client/                           # Frontend code
│   ├── public/                       # Static assets
│   │   └── index.html                # Main HTML file
│   |── src/                          # Source code
│       ├── Assets/                   # Images, fonts, and other assets
│       ├── Components/               # Reusable UI components
│       ├── Pages/                    # Role-specific pages (User/Admin)
│       ├── Styles/                   # CSS or SCSS files
│       ├── App.js                    # Application entry point
│       └── index.js                  # ReactDOM render file
├── server/                           # Backend code
│   ├── Controllers/                  # Handle business logic
│   ├── Models/                       # Database schemas/models
│   ├── Routes/                       # API endpoints
│   ├── Utils/                        # Helper functions or middleware
│   ├── .env                          # Environment variables
│   ├── package.json                  # Backend dependencies
│   ├── server.js                     # Backend entry point
│   └── README.md                     # Instructions for running the server
├── README.md                         # Project overview

