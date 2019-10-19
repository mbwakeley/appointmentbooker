const express = require("express");
const router = express.Router();
const appointmentsController = require("../controllers/appointments");

router.get("/", appointmentsController.getAllAppointments);
router.get("/:id", appointmentsController.getOneAppointment);
router.post("/", appointmentsController.addOneAppointment);
router.patch("/:id", appointmentsController.updateOneAppointment);
router.delete("/:id", appointmentsController.removeOneAppointment);

module.exports = router;
