const mongoose = require("mongoose");
const { bold, green } = require("colors");
module.exports = async function connectDB() {
  try {
    const link = await mongoose.connect(process.env.MONGO_URI);
    console.clear();
    console.log(
      bold(green(`MongoDB connected: ${link.connection.host}`.underline))
    );
    console.log();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
