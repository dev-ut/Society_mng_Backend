
const Flat = require("../models/Flat");

exports.getFlats = async (req, res) => {
  const flats = await Flat.find().populate("owner", "name email");
  res.json(flats);
};

exports.addFlat = async (req, res) => {
  const flat = await Flat.create(req.body);
  res.status(201).json(flat);
};