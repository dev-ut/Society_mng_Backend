const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
  number: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  size: String,
  occupied: Boolean,
});

module.exports = mongoose.model("Flat", flatSchema);