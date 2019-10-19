const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const { Model } = require("objection");
const logger = require("morgan");
const knexInstance = require("./db/knex");

const appointmentRoutes = require("./routes/appointments");
const userRoutes = require("./routes/users");

Model.knex(knexInstance);

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
