const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

//get all movies
router.get("/all", async (req, res) => {
  const movies = await Movie.find();
  try {
    res.send(movies);
  } catch (error) {
    res.send(error);
  }
});

//post a movie
router.post("/", (req, res) => {
  let movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    producer: req.body.producer,
    actor: req.body.actor,
    actoress: req.body.actoress,
    movieType: req.body.movieType,
    budget: req.body.budget,
    profit: req.body.profit,
    actorShare: req.body.actorShare,
    actoressShare: req.body.actoressShare,
    otherCharacters: req.body.otherCharacters,
  });

  movie
    .save()

    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

//find movie by id
router.get("/movie/:id", async (req, res) => {
  let id = req.body.id;

  let movie = await Movie.find({ _id: id });

  try {
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

//update a movie
router.patch("/movie/:id", async (req, res) => {
  let id = req.params.id;

  let update = await Movie.updateOne({ _id: id }, { $set: req.body });
  try {
    res.write("<h1>Movie updated successfully</h1>");
    res.send();
  } catch (error) {
    res.send(error);
  }
});

//delete a movie
router.delete("/movie/:id", async (req, res) => {
  let id = req.params.id;

  let deleted = await Movie.deleteOne({ _id: id });

  try {
    res.write("<h1> Movie has been deleted</h1>");
    res.send();
  } catch (error) {
    res.send(error);
  }
});

//export the router object
module.exports = router;
