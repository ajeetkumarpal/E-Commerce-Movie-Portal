Project Overview
This project is a full-stack web application combining an e-commerce platform and a movie search portal.
E-Commerce: Users can register, log in, and manage profiles. The backend securely handles authentication with JWT and HTTP-only cookies.
Movie Portal: Users can search for movies, browse lists, and navigate through results fetched from the OMDB API.
Built with React, Node.js, Express, MongoDB, Tailwind CSS, and Cloudinary.
The app demonstrates modern full-stack development skills, secure authentication, and integration with third-party APIs.


Features
Frontend
User registration and login with validation
JWT authentication and HTTP-only cookies
Moie search and listing with OMDB API
Responsive UI using Tailwind CSS
Profile page with image upload via Cloudinary
Navigation using React Router

Backend
Secure user registration with hashed passwords
Login API with JWT token generation and verification
Protected routes for authenticated users
Profile image upload using Multer + Cloudinary
Database operations using MongoDB and Mongoose
Form validation using Zod schema

Pending / Future Features
Full movie search integration in the frontend
Editable profile pages
Pagination or sliding window for movie listings
Advanced e-commerce features: order management, admin dashboard, payment integration

Tech Stack
Layer	Technology
Frontend	React, Tailwind CSS, Axios, React Router
Backend	Node.js, Express.js, JWT, bcrypt, Multer, Cloudinary
Database	MongoDB, Mongoose
API	OMDB API
Authentication	JWT, HTTP-only Cookies

Installation
Requirements:

Node.js
MongoDB

Steps:
Clone the repository:
git clone <repo-url>


Install frontend dependencies:

cd frontend
npm install
npm run dev


Install backend dependencies:

cd backend
npm install
npm start


Create .env file in backend folder with:

PORT=5000
MONGODB_URL=<your-mongo-url>
JWT_SECRET=<your-jwt-secret>
JWT_EXPIRY=<jwt-expiry-time>
CLOUDINARY_NAME=<cloudinary-name>
CLOUDINARY_API_KEY=<cloudinary-api-key>
CLOUDINARY_API_SECRET=<cloudinary-api-secret>

Usage
Users can register and login
Browse movies by category or search term
Upload profile images
Future: Admin dashboard for managing products and users

Screenshots







Folder Structure
project-root/
├─ frontend/       # React frontend
│  ├─ components/
│  ├─ pages/
│  ├─ App.jsx
│  └─ package.json
├─ backend/        # Node.js + Express backend
│  ├─ controller/
│  ├─ routes/
│  ├─ config/
│  ├─ repository/
│  └─ package.json
└─ README.md

License
This project is for learning and demonstration purposes.
