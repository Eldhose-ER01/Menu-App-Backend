const express = require('express');
const cors = require('cors'); // Add this line
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Menuapp', {
}).then(() => {
    console.log(" Database Connected Successfully");
}).catch((err) => {
    console.error("Database Connection Error:", err);
});

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json()); // Allow JSON body parsing

// Routes
app.use('/', require('./Routes/products'));

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server Running on http://localhost:${PORT}`);
});
