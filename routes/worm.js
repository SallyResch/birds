import express from "express";
import * as path from "path";

const wormRouter = express.Router()
const __dirname = path.resolve();


wormRouter.get("/", (req, res) => {
	res.render(path.join(__dirname, "/views/pages/worm.ejs"),
		{
			title: "Worms",
			subTitle: "subtitle Worms",
			headerTitle: "HeaderTitle from header component",
			subtitle: "Subtitle from headerComponent"
		}
	);
})

export default wormRouter;