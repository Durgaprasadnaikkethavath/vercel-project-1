const express = require("express");
const app = express();
const port = 3900;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Vercel Project</h1>");
});

app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});
