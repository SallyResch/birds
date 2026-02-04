import express from "express";
import * as path from "path";
//import { birdBreeds } from "../data/birdBreeds.js";
const zooRouter = express.Router()
const __dirname = path.resolve();


zooRouter.get("/", (req, res) => {
    res.render(path.join(__dirname, "/views/pages/zoo.ejs"),
        {
            title: "Birds",
            image: "shoeBill",
            className: "birdBody",
            headerTitle: "Birds",
            subtitle: "Subtitle from headerComponent",
            docTitle: "Birds"
        }
    );
})

export default zooRouter;