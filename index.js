const express = require("express");
const app = express();
const connectDebug = require("debug")("app:connect");

app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
  connectDebug(`listening at port ${PORT}`);
});
