const mongoose = require('mongoose');

const connect = async () => {
    try {
        const connectionString = "mongodb+srv://harsh:harsh@unifiedcampus.i5fit.mongodb.net/UnifiedCampus?retryWrites=true&w=majority";
        await mongoose.connect(connectionString);
        console.log("DATABASE -- connected");
    } catch (error) {
        console.error("DATABASE -- connection error:", error);
        process.exit(1);
    }
};

module.exports = connect;
