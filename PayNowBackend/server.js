const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv')
const authConfig = require('./Config/AuthConfig');


// Env loader
dotenv.config({
  path: process.env.NODE_ENV == 'production' ? './production.env' : './development.env'
})

const app = express();
const PORT = 5000;

// Middle-ware
app.use(cors({
  origin: authConfig.FRONTEND_BASE_URL,
  credentials: true
}));

app.use(express.json());
app.use(session({
  secret: authConfig.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Set to true if using HTTPS
}))

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({message: 'Invalid session'});
  }
}


// Connect to mongodb
mongoose.connect(authConfig.MONGODB_URL);

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', () => {
  console.log("Database connection: successfull")
})

// Routes
const appRouter = require('./routes/authRoutes');
app.use('/api', appRouter)

const authenticatedRoutes = require('./routes/authenticatedRoutes');
app.use('/api/authenticate', isAuthenticated, authenticatedRoutes);

app.get('/api/authenticatetest', isAuthenticated, (req, res) => {
  res.send('Hello from the paynow backend');
});

app.get('/api/servercheck', (req, res) => {
  console.log('Server check endpoint hit'); // Add this for debugging
  res.status(200).json({ status: 'Backed Server is hitting:'+ process.env.NODE_ENV, authConfig: authConfig });
});

// Start the server
app.listen(PORT, () => {
  console.log('Initializing Server..')
  console.log(`Taking Environment as ${process.env.NODE_ENV}`)
  console.log(`Server is running on http://localhost:${PORT}`);
});