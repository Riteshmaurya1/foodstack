# FoodStack - Online Food Ordering System

## Overview
FoodStack is a full-stack web application designed to streamline the food ordering process for customers, restaurants, and administrators. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), FoodStack provides an intuitive interface for browsing menus, customizing orders, and tracking order status in real-time.

## Features
- Browse and order from a menu of 100+ food items with customization options
- Secure user authentication and role-based access control for Customers, Restaurants, and Admins
- Real-time order tracking and status updates
- Responsive design for seamless use on desktop and mobile devices
- Robust backend with MongoDB for storing user data, orders, and menu items
- Notifications to keep users updated on their order progress

## Screenshots

### Home Page
![Home Page](screenshots/homepage.png)

### Menu Browsing
![Menu Browsing](screenshots/menu.png)

### Order Tracking
![Order Tracking](screenshots/order-tracking.png)

### User Dashboard
![User Dashboard](screenshots/user-dashboard.png)

## Tech Stack
- Frontend: React.js, CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Deployment: Heroku / Vercel

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud like MongoDB Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/FoodStack.git
2. Navigate to the project directory:
   ```base
   cd FoodStack
3. Install backend dependencies:
    ```base
   cd backend
   npm install
4. Install frontend dependencies:
    ```base
   cd ../frontend
   npm install
5. Setup environment variables:
    ```ini
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
6. Start the backend server:
    ```base
   npm run dev
7. Start the frontend development server (in a separate terminal):
   ```base
   npm start
### Usage
 - Visit http://localhost:3000 in your browser.
 - Register or log in as a Customer, Restaurant, or Admin.
 - Browse the menu, place orders, and track order status in real-time.
### Contributing
  Contributions are welcome! Please fork the repository and submit a pull request for review.
### Contact
  For any questions or feedback, feel free to reach out:
  - GitHub: Riteshmaurya1
  - Email: riteshkumar04294@gmail.com

## Deployment on Vercel (Frontend)

Follow these steps to deploy the FoodStack frontend on Vercel:

1. **Build your React app locally:**
   This command creates a production-ready build folder.
   ```bash
   npm run build
2. **Sign up or log in to Vercel:**
   Visit https://vercel.com/ and create an account or log in.
3. **Import your project:**
   - Click "New Project" on the Vercel dashboard.
   - Connect your GitHub account (if not connected already).
   - Select your FoodStack frontend repository or the frontend folder if it’s a monorepo.
   - Click "Import".
4. **Configure build settings:**
   - Build Command:
     ```base
        npm run build
   - Output Directory:
     ```nginx
        build
5. **Add Environment Variables (if required):**
   For example, if your frontend calls backend APIs, add your backend URL as an environment variable:
   ```ini
      REACT_APP_API_URL=https://your-backend-url.com/api
6. **Deploy:**
   - Click Deploy.
   - Vercel will build and deploy your app automatically.
   - After deployment, your app will be live at a Vercel-generated URL (e.g., https://foodstack.vercel.app).
7. **Update API URLs:**
   - Make sure your frontend uses the production backend URL via environment variables for API calls.

   
Happy Ordering! 🍔🍕🍜
```yaml
  **Notes:**

- Replace `YourUsername` and email with your actual info.
- Add your screenshots to a `screenshots` folder inside your repo.
- Make sure image filenames match exactly.

