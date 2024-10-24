// models/User.js
const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  duration: { type: Number, required: true }, // Duration in minutes
  type: { type: String, required: true }, // e.g., 'binaural', 'nature sounds'
});

const alarmSchema = new mongoose.Schema({
  time: { type: String, required: true }, // Time in HH:mm format
  sound: { type: String, required: true }, // Sound to play (e.g., 'binaural beats')
  isActive: { type: Boolean, default: true }, // Active status of the alarm
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  preferences: {
    soundTherapy: { type: String, required: true }, // e.g., 'binaural beats', 'nature sounds'
    alarmSettings: [alarmSchema], // Array of alarm settings
  },
  sessionHistory: [sessionSchema], // Array of session history records
});

const User = mongoose.model("User", userSchema);
module.exports = User;
