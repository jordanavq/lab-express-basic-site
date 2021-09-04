const express = require("express");

const app = express(); //servidor express

app.use(express.static("public"));

//Home Route
app.get("/home", (request, response) =>
  response.sendFile(__dirname + "/views/home.html")
);

//About Route
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

//Works Route
app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

//Photo Gallery Route
app.get("/gallery", (request, response) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => console.log("o servidor rodando na porta 3000"));
