const Express = require("express");
const asyncHandler = require("express-async-handler");
const { Task, User } = require("../../models");
/**
 * Delete a task.
 * @route DELETE /tasks/:id
 * @param {Express.Request} req Incoming request.
 * @param {Express.Response} res Server Response.
 */
const deleteTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  const user = await User.findById(req.user.id);
  if (!task) {
    res.status(500);
    throw new Error(`The task with the id ${id} does not exist.`);
  }
  // Block cross updating .
  if (task.user.toString() !== user.id) {
    res.status(401);
    throw new Error(`Unauthorized access.`);
  } else task.remove();
  res.json({ message: `Deleted task with id ${req.params.id} successfully.` });
};

module.exports = asyncHandler(deleteTask);
