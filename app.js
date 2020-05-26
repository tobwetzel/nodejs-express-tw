const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello from Codewind!");
});

module.exports.app = app;
