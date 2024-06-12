const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = 5000;

// Middle-ware
app.use(cors());
app.use(express.json());


// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/paynowdb');

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', () => {
  console.log("Database connection successfull")
})

// Routes
const appRouter = require('./routes/authRoutes');
app.use('/api', appRouter)


app.get('/', (req, res) => {
  res.send('Hello from the paynow backend');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});