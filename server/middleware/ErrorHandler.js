const Express = require("express");
/**
 * Error Handler.
 * @param {Error} err Thrown error.
 * @param {Express.Request} req Incoming request.
 * @param {Express.Response} res Server Response.
 * @param {Express.NextFunction} next Next Function.
 */
const ErrorHandler = (err, req, res, next) => {
  res.status(res.statusCode ?? 500).json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" && err.stack,
  });
};

module.exports = ErrorHandler;
