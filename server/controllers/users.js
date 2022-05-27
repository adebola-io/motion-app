const Express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Task } = require("../models");
const toAsync = require("express-async-handler");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "20d" });
/**
 * Create and Register a new user.
 * @route POST /users/new
 * @param {Express.Request} req Incoming request.
 * @param {Express.Response} res Server Response.
 */
const createUserAccount = async (req, res) => {
  let { name, email, password } = req.body;
  if (!email || !name || !password) {
    res.status(400);
    throw new Error(`Please complete all fields.`);
  }
  // Block if user already exists.
  if (await User.findOne({ email })) {
    res.status(400);
    throw new Error(
      `The email ${req.body.email} has already been registered under another user.`
    );
  }
  // Encrypt password.
  const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
  const user = User.create({ name, email, hash });
  if (user) {
    console.log(`New user with email ${email} created.`.green);
    res.status(201).json({
      message: "New User created successfully.",
      user: {
        ...user._doc,
        hash: undefined,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
};

/**
 * Login a user.
 * @route POST /users/login
 * @param {Express.Request} req Incoming request.
 * @param {Express.Response} res Server Response.
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.hash))) {
    console.log(`User ${user.email} logged in.`.green);
    res.status(200).json({
      message: "Login successful",
      user: { ...user._doc, hash: undefined, token: generateToken(user._id) },
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password.");
  }
};

/**
 * Returns tasks under a user.
 * @route GET /users/:id
 * @param {Express.Request} req Incoming request.
 * @param {Express.Response} res Server Response.
 */
const getUserData = async (req, res) => {
  const tasks = Task.find({ user: req.user });
  res.status(200).json(tasks);
};

module.exports = {
  createUserAccount: toAsync(createUserAccount),
  loginUser: toAsync(loginUser),
  getUserData: toAsync(getUserData),
};
