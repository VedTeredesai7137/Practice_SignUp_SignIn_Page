# MERN Stack Registration/Login App

A simple full-stack user authentication project using the **MERN stack** (MongoDB, Express, React, Node.js) with MongoDB Atlas for cloud-based storage.

---

## 🚀 Tech Stack
- **Frontend**: React + Vite + React Router DOM + Axios + Bootstrap
- **Backend**: Node.js + Express.js + MongoDB + Mongoose + Nodemon
- **Database**: MongoDB Atlas (cloud)

To Run This Project

# In 2 separate terminals:
# Terminal 1: Backend
cd Server
npm start

# Terminal 2: Frontend
cd Client
npm run dev


For Learners Here are steps to initialise frontend ,backend and Database

# ----------------------------- #
# 🧠 FRONTEND (React with Vite)
# ----------------------------- #

# 1. Create Vite React App
npm create vite@latest Client
# Choose:
# - Package name: client
# - Framework: React
# - Variant: JavaScript

cd Client

# 2. Install dependencies
npm install

# 3. Install additional packages
npm install bootstrap axios react-router-dom

# 4. Run React development server
npm run dev

# Local server will start at http://localhost:5173/


# ----------------------------- #
# 🧠 BACKEND (Node.js + Express)
# ----------------------------- #

# 1. Create and navigate to Server folder
cd ..
mkdir Server
cd Server

# 2. Initialize project
npm init -y

# 3. Install backend dependencies
npm install express mongoose cors nodemon

# 4. Update "scripts" in package.json:
# {
#   "scripts": {
#     "start": "nodemon index.js"
#   }
# }

# 5. Create backend entry point
touch index.js   # Or manually create index.js file

# 6. Start server
npm start

# Backend runs via nodemon watching index.js


# ----------------------------- #
# 🧠 MONGODB ATLAS SETUP (CLOUD)
# ----------------------------- #

# 1. Go to https://www.mongodb.com/cloud/atlas and sign in

# 2. Create a New Project (e.g., "RegistrationApp")

# 3. Create a Cluster
# - Use the free M0 tier
# - Choose closest cloud region

# 4. Configure Network Access
# - Go to "Network Access" > Add IP Address
# - Use "Allow from Anywhere" => 0.0.0.0/0
#   OR add your personal IP

# 5. Create Database User
# - Username: vedteredesai
# - Password: r8hG3Khy6CWy6JS3
# - Role: Read and Write to any database

# 6. Connect to Cluster
# - Go to "Clusters" > Connect > "Connect your application"
# - Select Driver: Node.js (v3.0+)
# - Copy connection string:
#   mongodb+srv://vedteredesai:<password>@cluster1.npsxphx.mongodb.net/?retryWrites=true&w=majority
# - Replace <password> with your password:
#   mongodb+srv://vedteredesai:r8hG3Khy6CWy6JS3@cluster1.npsxphx.mongodb.net/?retryWrites=true&w=majority

# 7. Use this URI in your backend (mongoose.connect)

# Example:
# mongoose.connect("mongodb+srv://vedteredesai:r8hG3Khy6CWy6JS3@cluster1.npsxphx.mongodb.net/yourDBName", {
#   useNewUrlParser: true,
#   useUnifiedTopology: true
# })

# ----------------------------- #
# 🧠 RUNNING FULL STACK PROJECT
# ----------------------------- #

# In 2 separate terminals:
# Terminal 1: Backend
cd Server
npm start

# Terminal 2: Frontend
cd Client
npm run dev




