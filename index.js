const express = require("express");
const app = express();
const connectDebug = require("debug")("app:connect");
app.use(express.json());

//database connection
require("./startup/databaseStartup")();

const PORT = 3001;
app.listen(PORT, () => {
  connectDebug(`listening at port ${PORT}`);
});
