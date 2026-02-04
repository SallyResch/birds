import express from "express";
import * as path from "path";
import birdRouter from "./routes/bird.js";
import wormRouter from "./routes/worm.js";
import zooRouter from "./routes/zoo.js";
import 'dotenv/config'

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set("view engine", "ejs")

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render(path.join(__dirname, "/views/pages/index.ejs"),
		{
			title: "Welcome to my Birds page",
			headerTitle: "Home",
			subtitle: "Subtitle from headerComponent",
			underlineThis: true,
			docTitle: "Home"
		}
	);
});

app.use("/bird", birdRouter);
app.use("/worm", wormRouter);
app.use("/zoo", zooRouter);

app.listen(port, () => console.log(`flying over the vast landscape and looking down on ${port}`))


