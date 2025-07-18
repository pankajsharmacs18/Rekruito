// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB  =require('./DataBases/DbConnection');
// Middleware (optional)
app.use(express.json());

const AuthRouter = require('./router/auth-router');

app.use("/api/auth",AuthRouter);

app.get('/', (req, res) => {
    res.send('Server is running!');
});




// Database connection and server start
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to database:', error.message);
        process.exit(1); // Exit the process with failure code
    });
