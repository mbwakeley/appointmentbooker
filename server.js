const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");

const appointmentRoutes = require("./routes/appointments");
const userRoutes = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/appointments", appointmentRoutes);
app.use("/users", userRoutes);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
