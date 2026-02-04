import express from "express";
import * as path from "path";
import animals from "../data/animals.js"
const zooRouter = express.Router()
const __dirname = path.resolve();


zooRouter.get("/", (req, res) => {
    res.render(path.join(__dirname, "/views/pages/zoo.ejs"),
        {
            title: "Zoo",
            image: "shoeBill",
            className: "birdBody",
            headerTitle: "Australian Zoo",
            subtitle: "Zoo Animals",
            docTitle: "Birds",
            zooData: animals
        }
    );
})

export default zooRouter;