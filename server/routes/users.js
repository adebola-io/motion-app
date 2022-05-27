const router = require("express").Router();
const { users } = require("../controllers");
const { protect } = require("../middleware/authHandler");

router.route("/new").post(users.createUserAccount);

router.post("/login", users.loginUser);

router.get("/start", protect, users.getUserData);
module.exports = router;
