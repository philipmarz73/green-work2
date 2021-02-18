const express = require("express");
const router = express.Router();
const Plant = require("../models/plant");

// router.get("/", (req, res) => {

router.get("/", (req, res) => {
Plant.find()
    .then((plants) => {
        res.json(plants);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });

});
router.post("/", (req, res) => {
    console.log(req.body);
    PlantAsk.create(req.body).then((newPlant) => {
        console.log(newPlant);
        res.json(newPlant);

    });

});

router.delete("/:id", (req, res) => {
    Plant.findByIdAndDelete(req.params.id).then((result) => {
      res.json(result);  
    });
});

module.exports = router;