const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/new-password", (req, res) => {
    const randomPassword = Math.floor(10000000 + Math.random() * 90000000);
		res.status(200).send({ hint: randomPassword });
});

app.listen(port, () => {
	console.log("Server is up for twitter at 3000");
});
