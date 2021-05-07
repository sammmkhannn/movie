const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  producer: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    required: true,
  },
  actoress: {
    type: String,
    required: true,
  },
  movieType: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
  actorShare: {
    type: Number,
    required: true,
  },
  actoressShare: {
    type: Number,
    rquired: true,
  },
  otherCharacters: {
    type: Object,
    required: true,
  },
});

//export the model
module.exports = mongoose.model("movie", movieSchema);
