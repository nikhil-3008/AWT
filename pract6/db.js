// db.js
import { connect, connection } from 'mongoose';


const MONGODB_URI = "mongodb+srv://dhandenikhil30:thY28ZgezCVuYlG9@nikhil.idnxm0t.mongodb.net/?retryWrites=true&w=majority&appName=nikhil";

connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

export default connection;
