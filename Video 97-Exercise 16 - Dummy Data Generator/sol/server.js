import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/Dummy_Data');


// Dummy data helpers
let names = ['Harry', 'Rohan', 'Harsh', 'Rahul'];

function random_name(names) {
  const random_no = Math.floor(Math.random() * 100);
  if (random_no < 25) return names[0];
  else if (random_no < 50) return names[1];
  else if (random_no < 75) return names[2];
  else return names[3];
}

function ismanager() {
  return Math.random() < 0.5;
}

// Mongoose model
const Data = mongoose.model('Data', {
  name: String,
  salary: Number,
  manager: Boolean, // ❗ fixed typo: was "ismaneger"
});

// Function to generate data
const generate = async () => {
  const emp = new Data({
    name: random_name(names),
    salary: Math.floor(Math.random() * 100)*100000,
    manager: ismanager(),
  });
  await emp.save(); // ✅ await to make sure it's finished before sending response
  console.log('Data saved');
};

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // ✅ fixed path
});




// Generate data route
app.post('/generate-data', async (req, res) => {
  try {
    await generate(); // ✅ await this to make sure data is saved
    res.json({ message: 'Data generated successfully.' });  //in script.js this message is passed in alert
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating data.' });
  }
});

// Delete data route
app.post('/delete-data', async (req, res) => {
  try {
    await Data.deleteMany({});
    res.json({ message: 'All data deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting data.' });
  }
});

// GET endpoint that fetches data from MongoDB
app.get('/show-data', async (req, res) => {
  try {
    const data = await Data.find(); // Fetch all documents
    res.json({ data: data });
  } catch (err) {
    console.error("MongoDB error:", err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // ✅ fixed: was printing the string "PORT"
});
