const Express = require("express");
const { Task } = require("../../models");
const asyncHandler = require("express-async-handler");
/**
 * Creates a new task.
 * @route POST /tasks/new
 * @access Private
 * @param {Express.Request} req Incoming request.
 * @param {Express.Response} res Server response.
 */
async function createTask(req, res) {
  const { name, body } = req.body,
    { user } = req;
  if (typeof name !== "string") {
    res.status(400);
    throw new Error("Invalid Task");
  }
  const task = await Task.create({
    user,
    name,
    body,
  });
  res
    .status(201)
    .json({ message: "Created new task successfully.", task: { name, body } });
}

module.exports = asyncHandler(createTask);
