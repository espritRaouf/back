const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const corsOptions = {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));
  
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

const authenticationRoute = require('./routes/authenticationRoute');
app.use('/authentication', authenticationRoute);
const getOfferRoute=require('./routes/getOfferRoute')
app.use('/get', getOfferRoute)
const suppOfferRoute=require('./routes/suppOfferRoute')
app.use('/supp', suppOfferRoute)
const addOfferRoute=require('./routes/addOfferRoute')
app.use('/add', addOfferRoute)

const url = "mongodb://127.0.0.1:27017/raouf";

async function connectDB() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
}

connectDB();

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
  next();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
