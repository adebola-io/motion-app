const { bold, green, blue } = require("colors");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const middleware = require("./middleware");
const config = require("./config");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(middleware.ErrorHandler);

const port = process.env.PORT || 5000;

app.use("/tasks", routes.tasks);
app.use("/users", routes.users);

config.connectDatabase().then(() => {
  app.listen(port, function () {
    console.log(bold(green(`Server Connection successful.`)));
    console.log();
    console.log(blue(`Motion App Server is listening on port ${port}.`));
    console.log();
  });
});
