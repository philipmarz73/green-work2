const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.post("/", (req, res) => {
    User.create(req.body).then(newUser => {
        res.json(newUser);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

module.exports = router;