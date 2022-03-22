const express = require("express");
const randomString = require("randomstring")
const urlencode = require('urlencode');

const app = express();

const links = {
  abcd: "https://www.google.com",
  xyz: "https://www.youtube.com",
};

app.get("/create/:url", (req, res) => {
  const {url} = req.params
  const str = randomString.generate(4)
  links[str] = url
  res.send({yourUrl: url, shortUrl: `http://localhost:5000/${str}`})
});

app.get("/:link", (req, res) => {
  const { link } = req.params;
  if (links[link]) res.redirect(`https://${links[link]}`);
  else res.status(404).send("Does not exist !! Create One")
});

app.listen(5000);