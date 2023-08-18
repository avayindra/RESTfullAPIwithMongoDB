const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    rquire: true,
  },
  name: {
    type: String,
    rquire: true,
  },
  age: {
    type: Number,
    rquire: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
