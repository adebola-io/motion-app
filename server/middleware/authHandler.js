const Express = require("express");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");
const { User } = require("../models");
/**
 * Handle user authentication.
 * @param {Express.Request} req Incoming request.
 * @param {Express.Response} res Server Response.
 * @param {Express.NextFunction} next Next Function.
 */
const protect = async (req, res, next) => {
  let { auth } = req.headers,
    token;
  if (auth && auth.startsWith("Bearer")) {
    try {
      token = auth.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-hash");
      next();
    } catch (e) {
      console.log(e);
      res.status(401);
      throw new Error("Unathorized access.");
    }
    if (!token) {
      res.status(401);
      throw new Error("Unathorized access.");
    }
  }
};

module.exports = { protect: expressAsyncHandler(protect) };
