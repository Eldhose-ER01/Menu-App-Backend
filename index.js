require('dotenv').config()
const express = require('express');

const cors = require('cors'); // Add this line
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB, {
}).then(() => {
    console.log(" Database Connected Successfully");
}).catch((err) => {
    console.error("Database Connection Error:", err);
});

// Middleware
app.use(cors()); 
app.use(express.json()); 
// Routes
app.use('/', require('./Routes/products'));
// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server Running on http://localhost:${PORT}`);
});
