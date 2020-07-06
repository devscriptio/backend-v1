const express = require("express");
const winston = require("winston");
const app = express();
const connectDebug = require("debug")("app:connect");
app.use(express.json());


require("./startup/extraTools")(app);
require("./startup/routes")(app);
require("./startup/logging")();
require("./startup/databaseStartup")();

const PORT = 3001;
app.listen(PORT, () => {
  connectDebug(`listening at port ${PORT}`);
  winston.info(`listening at port ${PORT}`);

app.get("/", (req, res) => {
	res.send("<h1>DevScript setup</h1>");
});

const PORT = 3001;
app.listen(PORT, () => {
	connectDebug(`listening at port ${PORT}`);

});
