const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const globalHint = 12345678;
app.get("/new-password", (req, res) => {
	res.status(200).send({ hint: globalHint });
});

app.post("/verify-password", async (req, res) => {
	console.log("Request Received", req.body);
	const randomPassword = Math.floor(100000000 + Math.random() * 900000000);
	const highlights = [];
	let isCorrect = false;
	const randomPicks = randomPassword.toString().split("");
	highlights.push(parseInt(randomPicks[0]));
	highlights.push(parseInt(randomPicks[8]));
	if (req.body.password === randomPassword) {
		isCorrect = true;
	}
	res.status(200).send({
		hint: globalHint,
		password: randomPassword,
		highlight: [...highlights],
		correct: isCorrect,
	});
});

app.listen(port, () => {
	console.log("Server is up for twitter at 3000");
});
