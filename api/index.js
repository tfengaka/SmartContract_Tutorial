require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const helper = require("./controllers/helper");
const routes = require("./routes/api.route");

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
	req.setTimeout(1000 * 45, () => {
		res.status(200).json(helper.APIReturn(1, "Request Timeout"));
	});
	next();
});

app.use("/api", routes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
