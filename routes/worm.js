import express from "express";
import * as path from "path";

const wormRouter = express.Router()
const __dirname = path.resolve();


wormRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/worm.ejs"),
    {
      title: "Worms",
      headerTitle: "Worms",
      subtitle: "Subtitle from headerComponent",
      docTitle: "Worms"
    }
  );
})

export default wormRouter;