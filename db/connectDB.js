const { default: mongoose } = require("mongoose");
require("dotenv").config();
const MongoURI = process.env.MONGO_URI;

const connectDB = () => {
  mongoose.connect(MongoURI);
};

module.exports = connectDB