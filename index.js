// Express is already installed
const express = require("express");

const app = express();
// Array of movies
const movies = require("./movies");
// In codesandbox we need to use the default port which is 8080
const port = 8080;

app.get ("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
});

app.get ("/movies/:id", (req, res) => {
    const id = req.params.id;
    const movie = movies.find(movie => movie.id == id);
    if (movie) {
        res.send(movie);
    } else {
        res.status(404).send("Not found");
    }
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});