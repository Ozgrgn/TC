const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken')
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/tc", { useNewUrlParser: true });


const multer = require('multer')
app.use(express.static('public'));
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "c:/Users/ozgrg/Desktop/web/Mean/backend/public/uploads");
    },

    filename: function(req, file, cb) {
        cb(
            null,
            file.originalname
        );
    }
});
const upload = multer({ storage: storage });

/*------------PLACES-------------*/

const Place = mongoose.model(
    "places",
    new mongoose.Schema({

        name: String,
        sort_no: String,
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
        grup: String,
        perma: String,
        secim_baslik: String,
        secim_spot: String,
        description: String,
        popular: String,
        transfree: Boolean,
        meta_title: String,
        meta_description: String,
        status: Boolean,
        main_image: Array,
        images: Array
    })
);

app.post("/places", async(req, res) => {
    const { _id, name, sort_no, category, grup, perma, secim_baslik, secim_spot, description, popular, transfree, meta_title, meta_description, status, main_image, images } = req.body;




    // if (!name || !surname) {
    //     return res.json({ message: "Error" });
    // }

    const place = new Place({
        _id,
        name,
        sort_no,
        category,
        grup,
        perma,
        secim_baslik,
        secim_spot,
        description,
        popular,
        transfree,
        meta_title,
        meta_description,
        status,
        main_image,
        images
    });

    await place.save();

    return res.json({ place });
});

app.get("/places", async(req, res) => {
    const places = await Place.find().
    populate("category")
        .exec();

    return res.json(
        places
    );
});


app.get("/places/:_id", async(req, res) => {
    const place = await Place.findById(req.params._id).exec();

    return res.json(
        place
    );
});

app.delete("/place/:placeId", async(req, res) => {

    const deletedPlace = await Place.deleteOne({ _id: req.params.placeId })

    return res.json(deletedPlace)

})

app.put("/place", async(req, res) => {
    const { place } = req.body

    const updatedPlace = await Place.findByIdAndUpdate({ _id: place._id }, place).exec()

    return res.json({
        place: updatedPlace
    })

})

app.post('/upload-image', upload.array('images', 20), function(req, res, next) {

    return res.json({
        images: [
            ...req.files.map(file => file.originalname)
        ]
    })
})


app.post('/upload-image', function(req, res, next) {

    return res.json({
        main_image: [
            ...req.files.map(file => file.originalname)
        ]
    })
})




/*-----------CATEGORIES----------*/

const Category = mongoose.model(
    "categories",
    new mongoose.Schema({
        name: String
    })
);

app.post("/categories", async(req, res) => {
    const { _id, name } = req.body;

    // if (!name || !surname) {
    //     return res.json({ message: "Error" });
    // }

    const category = new Category({
        _id,
        name
    });

    await category.save();

    return res.json({ category });
});

app.get("/categories", async(req, res) => {
    const categories = await Category.find().exec();

    return res.json(
        categories
    );
});

app.get("/categories/:_id", async(req, res) => {
    const category = await await Category.findById(req.params._id).exec();
    return res.json(
        category
    );
});




app.delete("/category/:categoryId", async(req, res) => {
    const deleteCategory = await Category.deleteOne({ _id: req.params.categoryId })
    return res.json(deletedCategory)
})

app.put("/category", async(req, res) => {
    const { category } = req.body
    console.log(category)

    const updatedCategory = await (await Category.findByIdAndUpdate({ _id: category._id }, category)).exec()
    return res.json({
        category: updatedCategory
    })
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});