const Appointment = require("mongoose").model("Appointment");

//save an appintment
module.exports.addAppointment = (req, res, next) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ success: false, message: "Required data not provided" });
  }
  const newAppointment = new Appointment(req.body);

  newAppointment
    .save()
    .then((result) =>
      res.status(201).json({
        success: true,
        appointement: result,
        message: "Appointment created",
      })
    )
    .catch((err) =>
      res.status(400).json({
        success: false,
        message: "Appointment not created check your inputs",
      })
    );
};

//get all appointmnets
module.exports.getAppointments = (req, res, next) => {
  Appointment.find()
    .then((result) => {
      if (!result.length > 0) {
        res.status(404).json({ message: "No data found" });
      } else {
        res.status(200).json({ success: true, appointements: result });
      }
    })
    .catch((err) => res.status(400).json({ message: err }));
};

//delete an appontment
module.exports.deleteAppointment = (req, res, next) => {
  Appointment.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (!result) {
        res.status(404).json({ success: false, message: "No data found" });
      } else {
        res.status(200).json({ message: "Appointment deleted" });
      }
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};
