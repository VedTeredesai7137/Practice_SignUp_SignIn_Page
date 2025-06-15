const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee.js");



const app = express();
app.use(cors());
app.use(express.json());

/**
express is your server framework (routes, API).

mongoose allows you to connect and interact with MongoDB.

cors enables Cross-Origin Resource Sharing (frontend can call backend).

app.use(express.json()) parses JSON body from HTTP requests (like in login/register). */





mongoose.connect("")
.then(() => console.log("MongoDB Atlas Connected Successfully"))
.catch((err) => console.error("MongoDB Connection Error:", err));

/*
You're connecting to MongoDB Atlas using the connection URI.

The DB name is employee (mentioned after .net/ in URI).

If this database doesn’t exist yet, MongoDB Atlas will automatically create it when you insert your first document.

retryWrites=true&w=majority ensures fault-tolerant write operations.

This connect() call establishes the connection before any database actions.*/



app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email : email})
    .then((result) => {
      if (result) {
        if (result.password === password) {
          res.json({ status: "ok", result });
        } else {
          res.json({ status: "error", error: "Invalid Password" });
        }
      } else {
        res.json({ status: "error", error: "User Not Found" });
      }
    })
    .catch((err) => res.json(err));  

})

app.post("/register", (req, res) => { 
  EmployeeModel.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));

})










app.listen(3000, () => {
  console.log("server is running on port 3000");
});





/*
You're diving into a full-stack MERN (MongoDB, Express, React, Node) project, and it's awesome you're looking to understand every tool deeply. Let's break down **CORS**, and then clarify how **Axios** and **CORS** relate to each other in backend-frontend interaction.

---

### 🔶 What is CORS (Cross-Origin Resource Sharing)?

**CORS** is a **browser security feature** and **HTTP protocol** that **controls how your frontend (React) and backend (Node.js/Express) communicate when hosted on different origins**.

#### 🔸 What is an “Origin”?
An origin is defined by the **protocol + domain + port**. For example:

- React dev server: `http://localhost:5173`
- Node backend: `http://localhost:3000`

These are **two different origins**. So, when your frontend (on port 5173) makes a request to your backend (on port 3000), the browser treats it as a **cross-origin request**.

#### 🔸 The Problem:
By default, **browsers block cross-origin requests** unless the server explicitly allows it using **CORS headers**. Without CORS, your frontend will throw a **CORS error** like:

> Access to fetch at ‘http://localhost:3000/login’ from origin ‘http://localhost:5173’ has been blocked by CORS policy...

---

### ✅ How CORS Works (Under the Hood):

When your frontend makes an API call like this:
```js
axios.post("http://localhost:3000/register", { name, email, password })
```

The browser sends a **CORS preflight request** (OPTIONS method) to the server asking:

> "Hey server, is it okay for a script running on http://localhost:5173 to send data to you?"

Your Express backend replies:

```http
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type
```

This **grants permission** for the actual request to go through.

---

### 🧠 So What Does This Do in Code?

In your `index.js`:
```js
const cors = require("cors");
app.use(cors());
```

This line adds those required **CORS headers** to every response, enabling the browser to accept cross-origin calls.

You can even **customize** CORS:
```js
app.use(cors({
  origin: "http://localhost:5173",  // allow only your frontend
  methods: ["GET", "POST"],
  credentials: true
}));
```

---

## 🔷 What is Axios?

**Axios** is a **JavaScript HTTP client** used to send **asynchronous HTTP requests** from the browser (frontend) to the server (backend). It's essentially a more feature-rich, promise-based alternative to the native `fetch()` API.

Example:
```js
axios.post("http://localhost:3000/register", {
  name: "Ved", email: "ved@example.com", password: "1234"
})
.then(response => console.log(response))
.catch(error => console.error(error));
```

Behind the scenes, Axios sends a **POST** request to your backend server, and the server (Express) handles it using:

```js
app.post("/register", (req, res) => {
  // do something with req.body (name, email, password)
});
```

---

### 🔁 Are Axios and CORS Related?

**Yes, but only indirectly.** Here's the relationship:

| Axios                 | CORS                    |
|-----------------------|--------------------------|
| Sends HTTP requests   | Controls whether the browser allows those requests |
| Lives on the frontend | Lives on the backend (Express adds headers)        |
| Uses fetch/XHR under the hood | Browser checks for proper CORS headers in server’s response |

**In short:**
- Axios **triggers** the request.
- **CORS must permit it** if it’s cross-origin.

If the server does **not** allow CORS, **Axios will fail**, not because of Axios itself, but because **the browser blocks the response** due to security policy.

---

### 🛡 Summary

- ✅ **Axios** = makes requests (GET, POST, etc.) from React to Express.
- ✅ **CORS** = browser rule that decides whether the Axios request is allowed.
- ✅ You must enable CORS on your **backend** (`app.use(cors())`) if your **frontend and backend are on different ports/domains**.
- 🔁 Axios will only succeed in cross-origin environments **if CORS is properly configured**.

Let me know if you want to explore how to secure CORS for production, or how to test CORS failures intentionally to debug!*/




















/*PS E:\VED\Coding\react js\practice2\react_projects\Registeration> npm create vite@latest Client 

> npx
> cva Client

│
◇  Package name:
│  client
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in E:\VED\Coding\react js\practice2\react_projects\Registeration\Client...
│
└  Done. Now run:

  cd Client
  npm run dev

PS E:\VED\Coding\react js\practice2\react_projects\Registeration> cd Client
PS E:\VED\Coding\react js\practice2\react_projects\Registeration\Client> npm install

added 150 packages, and audited 151 packages in 16s
PS E:\VED\Coding\react js\practice2\react_projects\Registeration\Client> npm install boostrap axios react-router-dom
npm warn deprecated boostrap@2.0.0: Package no longer supported. Contact support@npmjs.com for more info.

added 30 packages, and audited 181 packages in 3s

36 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS E:\VED\Coding\react jsnpm run devreact_projects\Registeration\Client>

> client@0.0.0 dev
> vite


  VITE v6.2.5  ready in 552 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


    Directory: E:\VED\Coding\react js\practice2\react_projects\Registeration


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        03-04-2025  08:40 PM                Server


PS E:\VED\Coding\react js\practice2\react_projects\Registeration> cd Server
PS E:\VED\Coding\react js\practice2\react_projects\Registeration\Server> npm init -y
Wrote to E:\VED\Coding\react js\practice2\react_projects\Registeration\Server\package.json:

{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "type": "commonjs"
}



PS E:\VED\Coding\react js\practice2\react_projects\Registeration\Server> npm install express mongoose cors nodemon

added 112 packages, and audited 113 packages in 13s

19 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PSnpm startoding\react js\practice2\react_projects\Registeration\Server>

> server@1.0.0 start
> nodemon index.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
[nodemon] clean exit - waiting for changes before restart
PS E:\VED\Coding\react js\practice2\react_projects\Registeration\Server>


"start": "nodemon index.js" in addition to the default script in package.json file.
instead of npm run dev here use npm start

for mongodb local connection go to mongodb copasss
create database name etc thats it 

To run ,run both backend (server nodemon index.js Terminal 1) frontend (client npm run dev Terminal 2)


to connect mongodb to cloud 
 STEP 1: Set Up MongoDB Atlas (MongoDB Cloud)
Create a MongoDB Atlas Account

Go to https://www.mongodb.com/cloud/atlas.

Sign up or log in with Google/GitHub/email.

Create a New Project

Click on "New Project".

Give your project a name (e.g., RegistrationApp) and click Next.

Create a Cluster

Choose free tier (M0).

Select your Cloud Provider and Region (closest to your location).

Click "Create Cluster".

Add Network Access (Whitelist Your IP)

Click on Network Access in the sidebar.

Click Add IP Address.

You can select “Allow access from anywhere” by entering 0.0.0.0/0 (only for development).

Or add your current IP (e.g., 110.226.177.38).

Click Confirm.

Create a Database User

Go to Database Access → Click Add New Database User.

Username: vedteredesai

Password: r8hG3Khy6CWy6JS3 (this will be used in connection URI).

Assign role: Atlas Admin or Read and Write to all DBs.

Click Add User.

Connect to Your Cluster

Go to Clusters → Click Connect → Choose "Connect your application".

Choose driver: Node.js, version 3.0 or later.

Copy the connection URI:

bash
Copy
Edit
mongodb+srv://vedteredesai:<password>@cluster1.npsxphx.mongodb.net/?retryWrites=true&w=majority
Replace <password> with your actual password.

for us start from create new database*/
