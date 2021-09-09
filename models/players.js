const mongoose = require("mongoose");

var PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },

  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  score: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
});

var Player = mongoose.model("Player", PlayerSchema);

module.exports = { Player };
