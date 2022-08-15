const path = require("path");
const express = require("express");

const PORT = 3001;

const app = express();

app.use(express.json());

app.use(require("./routes/login"));
app.use(require("./routes/profile"));
app.use(require("./routes/restrictions"));
app.use(require("./routes/globalInformations"));


app.use('/assets', express.static(path.join(__dirname, 'assets')));

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + server.address().port);
});
