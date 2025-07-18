const mongoose = require("mongoose");
const CollectionName ="Job_Board";

// Replace `@` in password with `%40`
const uri = `mongodb+srv://pankajsharmaa199:Pan%401234@leasioc1.wciiexn.mongodb.net/${CollectionName}?retryWrites=true&w=majority&appName=LeasioC1`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Database connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;