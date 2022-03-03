const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Appointment = new Schema(
  {
    cardNumber: {
      type: String,
      required: "Card number is required",
    },
    vaccineSite: {
      type: String,
      required: "Vaccine site is required",
    },
    priorityArea: {
      type: String,
      enum: ["80+", "healthcare", "essential"],
      required: "Priority area is required",
    },
    dateTime: {
      type: Date,
      required: "Date/Time is required",
    },
    cancelled: {
      type: Boolean,
      required: "Cancelled field is required",
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Appointment", Appointment);
