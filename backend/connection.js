const mongoose = require("mongoose");
const MONGO_URI = 
"mongodb+srv://saurabhth45:sourabh45@cluster0.z5l21.mongodb.net/myblogs?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {

    const connection = await mongoose.connect(MONGO_URI);
    if(connection) console.log("Database Connected");
    else console.log("Database connection failed");
}


module.exports = { connectDB };