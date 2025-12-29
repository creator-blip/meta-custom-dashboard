const express = require("express");
const app = express();

app.use(express.json());

let latestMetaData = [];

app.post("/api/meta", (req, res) => {
  latestMetaData = req.body;     // store latest pushed data
  res.json({ ok: true });
});

app.get("/api/meta", (req, res) => {
  res.json(latestMetaData);      // frontend fetches this
});

app.listen(process.env.PORT || 3000);