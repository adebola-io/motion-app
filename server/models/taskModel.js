const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Please add a task name."],
  },
  body: String,
});

module.exports = mongoose.model("Task", taskSchema);
