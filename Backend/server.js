require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./DataBases/DbConnection');
const authRoutes = require('./router/auth-router');

const app = express();
const PORT = process.env.PORT || 5000;

// Global middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start server after DB connection
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    });
