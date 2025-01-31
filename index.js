require('dotenv').config()
const express = require('express');

const cors = require('cors'); // Add this line
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MonGo_url, {
}).then(() => {
    console.log(" Database Connected Successfully");
}).catch((err) => {
    console.error("Database Connection Error:", err);
});

const corsOptions = {
    origin: 'https://menu-app-front-end.vercel.app', // Frontend url
  };
// Middleware
app.use(cors(corsOptions));
app.use(express.json()); 
// Routes
app.use('/', require('./Routes/products'));
// Start Server
app.listen(PORT, () => {
    console.log(` Server Running on http://localhost:${PORT}`);
});
