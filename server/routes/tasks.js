const { tasks } = require("../controllers");
const { protect } = require("../middleware/authHandler");
const router = require("express").Router();

router.get("/demo", (req, res) => {
  res.status(200).json({ message: "These are the demo tasks." });
});

router.get("/", protect, tasks.getTask);

router.post("/new", protect, tasks.createTask);

router
  .route("/:id")
  .put(protect, tasks.updateTask)
  .delete(protect, tasks.deleteTask);

module.exports = router;
