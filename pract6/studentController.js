// Import the Student model
// import { Student } from './models/student.js';
// import  { find, findByIdAndUpdate, findByIdAndDelete } from './models/student.js'; // Import Student model

import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String
});

const Student = mongoose.model('Student', studentSchema); 

// Get all students
export async function getAllStudents(req, res) {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Create a new student
export async function createStudent(req, res) {
  try {
    const { name, age, grade } = req.body;
    const newStudent = new Student({ name, age, grade });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update a student
export async function updateStudent(req, res) {
  try {
    const { id } = req.params;
    const { name, age, grade } = req.body;
    const updatedStudent = await findByIdAndUpdate(id, { name, age, grade }, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Delete a student
export async function deleteStudent(req, res) {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id); // Example usage of the findByIdAndDelete method
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully', deletedStudent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
