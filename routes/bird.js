import express from "express";
import * as path from "path";

const birdRouter = express.Router()
const __dirname = path.resolve();


birdRouter.get("/", (req, res) => {
	res.render(path.join(__dirname, "/views/pages/bird.ejs"),
		{
			title: "Birds",
			subTitle: "subtitle birds",
			image: "shoeBill",
			className: "birdBody",
			headerTitle: "HeaderTitle from header component",
			subtitle: "Subtitle from headerComponent",
			docTitle: "Birds"
		}
	);
})


export default birdRouter;