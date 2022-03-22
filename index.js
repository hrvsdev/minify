const express = require("express");
const connectDB = require("./db/connectDB");
const Url = require("./db/Url");
// const normalizeUrl = require("normalize-url")

const app = express();
connectDB();

app.get("/mini", async (req, res) => {
  const { real } = req.query;
  const url = await new Url({
    realUrl: real
  });
  await url.save()
  res.send({url})
});

app.listen(process.env.PORT || 5000);