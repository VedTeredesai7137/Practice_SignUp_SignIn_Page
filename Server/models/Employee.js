const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

module.exports = EmployeeModel;


/*
mongoose.Schema defines the structure of your documents inside MongoDB.

Here you're creating a schema for Employee with name, email, and password.

mongoose.model("Employee", ...) links the schema to the "employees" collection in MongoDB (automatically pluralized).

module.exports = EmployeeModel; allows you to use this model in other files (like in index.js).*/