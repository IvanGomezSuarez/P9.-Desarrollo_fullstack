const mongoose = require("mongoose");

const ScoreSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

// export model schore with SchoreSchema
module.exports = mongoose.model("score", ScoreSchema);