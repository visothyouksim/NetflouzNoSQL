const mongoose = require("mongoose");
require("dotenv/config");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log(`[DATABASE] MongoDB is connected !`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;