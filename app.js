const express = require("express");
const app = express();
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movies");

const PORT = process.env.PORT | 8000;

//using the bodyParser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//home route
app.get("/", (req, res) => {
  res.write("<h1>Welcome to Home</h1>");
  res.send();
});

//movie routes
app.use("/movies", movieRoutes);

//database connection
mongoose.connect("mongodb://localhost:27017/movies", { useNewUrlParser: true });

//handle the db connection errors
const db = mongoose.connection;
db.on("error", (error) => {
  console.log("cannot be connected");
});
db.once("open", () => {
  console.log("Connected to  MongoDB");
});

//start server
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
