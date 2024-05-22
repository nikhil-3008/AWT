// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String
});

const Student = mongoose.model('Student', studentSchema); // Create Student model

module.exports = { Student }; // Export Student model as the default export
