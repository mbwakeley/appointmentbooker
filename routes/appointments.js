const express = require("express");
const router = express.Router();
const appointmentsController = require("../controllers/appointments");

router.get("/", appointmentsController.getAllAppointments);
router.get("/", appointmentsController.getOneAppointment);
router.post("/", appointmentsController.addOneAppointment);
router.patch("/", appointmentsController.updateOneAppointment);
router.delete("/", appointmentsController.removeOneAppointment);

module.exports = router;
