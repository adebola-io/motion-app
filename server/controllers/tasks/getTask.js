const Express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { Task } = require("../../models");

/**
 * Get all tasks belonging to a user.
 * @route GET /tasks
 * @protected true.
 * @param {Express.Request} req Incoming request.
 * @param {Express.Response} res Server Response.
 */
const getTask = async (req, res) => {
  res.status(200).json(await Task.find({ user: req.user }));
};

module.exports = expressAsyncHandler(getTask);
