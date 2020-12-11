const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test2", { useNewUrlParser: true });

const Category = mongoose.model(
    "categories",
    new mongoose.Schema({
        name: String
    })
);

app.post("/", async(req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.json({ message: "Error" });
    }

    const category = new Category({
        name
    });

    await category.save();

    return res.json({ category });
});

app.get("/", async(req, res) => {
    const categories = await Category.find().exec();

    return res.json({ categories });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});