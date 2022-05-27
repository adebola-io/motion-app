const Express = require("express");
const asyncHandler = require("express-async-handler");
const { Task, User } = require("../../models");
/**
 * Update an existing task.
 * @route PUT /tasks/:id
 * @param {Express.Request} req Incoming request.
 * @param {Express.Response} res Server Response.
 */
const updateTask = async (req, res) => {
  if (!(await Task.findById(req.params.id))) {
    res.status(400);
    throw new Error(`The task with id ${req.params.id} does not exist.`);
  }
  const user = await User.findById(req.user.id);
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // Block cross updating .
  if (task.user.toString() !== user.id) {
    res.status(401);
    throw new Error(`Unauthorized access.`);
  }
  console.log(`Updated task ${req.params.id}`);
  res.json({
    mesage: `Updated task with id ${req.params.id} successfully.`,
    task: { name: task.name, body: task.body },
  });
};

module.exports = asyncHandler(updateTask);
