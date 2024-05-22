import express from 'express';
import mongoose from 'mongoose';
import { getAllStudents, createStudent ,deleteStudent} from './studentController.js';

const MONGODB_URI = "mongodb+srv://dhandenikhil30:thY28ZgezCVuYlG9@nikhil.idnxm0t.mongodb.net/?retryWrites=true&w=majority&appName=nikhil";

const app = express();

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/students', getAllStudents);
app.post('/student', createStudent);
app.delete('/student/:id', deleteStudent);
// Add other CRUD routes similarly

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
