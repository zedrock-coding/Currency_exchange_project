const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/forex", async (req, res) => {
  try {
    const response = await fetch("https://www.freeforexapi.com/api/live");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching API:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(3000, () => {
  console.log("Proxy running at http://localhost:3000/forex");
});