require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const mongoose = require("mongoose");
const path = require('path')

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;