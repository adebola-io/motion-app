const mongoose = require("mongoose");

module.exports = mongoose.model(
  "User",
  mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter a username"],
      },
      email: {
        type: String,
        required: [true, "Please enter a valid email address."],
        unique: true,
      },
      hash: {
        type: String,
        required: [true, "Please enter a user hash."],
      },
    },
    { timestamps: true }
  )
);
