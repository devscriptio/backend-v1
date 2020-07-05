const express = require("express");
const app = express();
const connectDebug = require("debug")("app:connect");

app.use(express.json());

app.get("/", (req, res) => {
	res.send("<h1>DevScript setup</h1>");
});

const PORT = 3001;
app.listen(PORT, () => {
	connectDebug(`listening at port ${PORT}`);
});
