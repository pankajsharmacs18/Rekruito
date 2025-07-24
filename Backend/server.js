const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = require('./DataBases/DbConnection');

// ✅ Enable CORS for all origins (to make API public and accept requests from frontend)
app.use(cors());

// If needed, restrict to specific origin like this:
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// ✅ Middleware to parse JSON bodies
app.use(express.json());

// ✅ Import and use auth routes
const AuthRouter = require('./router/auth-router');
app.use("/api/auth", AuthRouter);

// ✅ Basic test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// ✅ Connect to DB and start server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to database:', error.message);
        process.exit(1);
    });
