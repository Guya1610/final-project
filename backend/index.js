const path = require("path");
const express = require("express");

const PORT = 3001;

var app = express();

app.use(express.json());

app.use(require("./routes/login"));
app.use(require("./routes/profile"));

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + server.address().port);
});
