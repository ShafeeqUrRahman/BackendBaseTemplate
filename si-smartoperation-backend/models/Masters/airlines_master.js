const mongoose = require("mongoose");

const airlineSchema = mongoose.Schema({
  airlineName: { type: String, required: true }
});

module.exports = mongoose.model("Airlines", airlineSchema);
