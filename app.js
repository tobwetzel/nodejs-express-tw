const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello from Tekton!");
});

module.exports.app = app;
