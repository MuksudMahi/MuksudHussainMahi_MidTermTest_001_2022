const express = require("express");
const router = express.Router();

const appointmentController = require("../controllers/appointment.server.controllers");

router.post("/add", appointmentController.addAppointment);
router.get("/list", appointmentController.getAppointments);
router.post("/delete/:id", appointmentController.deleteAppointment);

module.exports = router;
