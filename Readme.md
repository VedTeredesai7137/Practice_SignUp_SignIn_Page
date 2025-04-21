# MERN Stack Sign Up Sign In App

A simple full-stack user authentication project using the **MERN stack** (MongoDB, Express, React, Node.js) with MongoDB Atlas for cloud-based storage.

---

## 🚀 Tech Stack
- **Frontend**: React + Vite + React Router DOM + Axios + Bootstrap
- **Backend**: Node.js + Express.js + MongoDB + Mongoose + Nodemon
- **Database**: MongoDB Atlas (cloud)



## ✅ RUNNING THE FULL STACK PROJECT

Open two terminals:

Terminal 1: Backend  
cd Server  
npm start

Terminal 2: Frontend  
cd Client  
npm run dev 





For Learners Here are steps to initialise frontend ,backend and Database

# ✅ MERN Stack Registration/Login App Setup

---

## 🧠 FRONTEND (React with Vite)

1. Create Vite React App  
npm create vite@latest Client  
(Choose: package name = Client, framework = React, variant = JavaScript)

2. Navigate into frontend folder  
cd Client

3. Install core dependencies  
npm install

4. Install additional packages  
npm install bootstrap axios react-router-dom

5. Start React development server  
npm run dev  
(Localhost URL: http://localhost:5173)

---

## 🧠 BACKEND (Node.js + Express)

1. Go back to root directory  
cd ..

2. Create backend folder  
mkdir Server  
cd Server

3. Initialize backend project  
npm init -y

4. Install backend dependencies  
npm install express mongoose cors nodemon

5. Update package.json "scripts" section  
Open package.json and update scripts to:
"scripts": {
  "start": "nodemon index.js"
}

6. Create backend entry file  
touch index.js   (or manually create index.js)

7. Start backend server  
npm start  
(Server runs with nodemon and auto-reloads)

---

## 🧠 MONGODB ATLAS SETUP

1. Go to https://www.mongodb.com/cloud/atlas

2. Create a New Project (e.g., "RegistrationApp")

3. Create a Cluster  
- Select free M0 tier  
- Choose your nearest region

4. Set up Network Access  
- Add IP address: 0.0.0.0/0 (Allow from Anywhere)

5. Create a DB user  
- Username: vedteredesai  
- Password: r8hG3Khy6CWy6JS3  
- Role: Read and write to any database

6. Connect to cluster  
- Go to "Clusters" → Connect → "Connect your application"  
- Driver: Node.js  
- Copy the URI:

mongodb+srv://vedteredesai:<password>@cluster1.npsxphx.mongodb.net/?retryWrites=true&w=majority  
(Replace <password> with actual password)

7. Use URI in backend with mongoose  
mongoose.connect("mongodb+srv://vedteredesai:r8hG3Khy6CWy6JS3@cluster1.npsxphx.mongodb.net/yourDBName", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

---

## ✅ RUNNING THE FULL STACK PROJECT

Open two terminals:

Terminal 1: Backend  
cd Server  
npm start

Terminal 2: Frontend  
cd Client  
npm run dev
